import { defineStore } from 'pinia'
import axios from 'axios';
import router from "../router";
export const useProductsStore = defineStore('products', {
    state: () => ({
        $products:[],
        productsLoading: false,
        productErrors: false,
        $product:{},
    }),
    getters: {
        products: (state) => state.$products,
        product:(state)=>state.$product,
    },
    actions: {
        async homeProducts() {
            this.productsLoading = true;
            try {
                const response = await axios.get("/api/products");
                this.productsLoading = false;
                this.$products = response.data.products;
            } catch (error) {
                this.productsLoading = false;
                if (error.response) {
                    if (error.response.status === 404) {
                        this.$products = [];
                        this.productErrors = "No products Found";
                    }                    
                }
            }
        },
        async fetchProduct($slug) {
            this.productsLoading = true;
            try {
                let url = `/api/products/${$slug}`;
                const response = await axios.get(url);
                this.productsLoading = false;
                this.$product = response.data.product;
            } catch (error) {
                this.productsLoading = false;
                this.$product = null;
                if (error.response) {
                    if (error.response.status === 404) {
                        router.push({ name: "home" });                        
                    }
                }
                
            }
            
        },
    },
});

