import { defineStore } from 'pinia'
import axios from 'axios';
export const useProductsStore = defineStore('products', {
    state: () => ({
        $products:[],
        productsLoading: false,
        productErrors:false,
    }),
    getters: {
        products: (state) => state.$products,
    },
    actions: {
        async homeProducts() {
            this.productsLoading = true;
            try {
                const response = await axios.get("/api/products");
                this.productsLoading = false;
                this.$products = response.data.products;
            } catch (error) {
                
            }
        },
    },
});

