import { defineStore } from "pinia";
import axios from "axios";
export const useCartStore = defineStore("cart", {
    state:()=> ({
        cartItems: [],
        cartLoading: false,
        cartErrors:false,        
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
              console.log(response)
            } catch (error) {
                this.cartLoading = false;
              console.log(error)
          }  
        },
    },    
});