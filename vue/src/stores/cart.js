import { defineStore } from "pinia";
import axios from "axios";
export const useCartStore = defineStore("cart", {
    state:()=> ({
        cartItems: [],
        cartLoading: false,
        cartErrors: false,
        message:null,
    }),
    getters: {
        cart: (state) => state.cartItems,
    },
    actions: {
        async fetchCartItems() {
          this.cartLoading = true;
          try {
              const response = await axios.get("/api/cart");
              if (response) {
                  this.cartLoading = false;
                  this.cartItems = response.data.cartItems;
                }
          } catch (error) {
              this.cartLoading = false;
              if (error.response) {
                  if (error.response.status === 404) {                     
                    
                }
            }
          }  
        },
        async addToCart(data) {
            this.cartLoading = true;
            try {               
                const response = await axios.post("/api/add-to-cart", data);
                this.cartLoading = false;
                this.message = response.data.message;  
            } catch (error) {
              this.cartLoading = false;             
              if (error.response) {
                if (error.response.status === 401) {
                  this.message = "Please Login to Continue";
                  alert(this.message);
                  router.push({ name: "login" });
                }
              }
          }  
        },
    },    
});