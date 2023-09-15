import { defineStore } from "pinia";
import axios from "axios";
import router from "../router"
export const useCartStore = defineStore("cart", {
    state:()=> ({
        cartItems: [],
        cartLoading: false,
        cartErrors: false,
        message: null,
        $cartTotal:0,
        
    }),
    getters: {
      cart: (state) => state.cartItems,
      total:(state)=>state.$cartTotal,
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
                    
                }            }
          }  
        },
        async addToCart(data) {
            this.cartLoading = true;
            try {               
                const response = await axios.post("/api/add-to-cart", data);
                this.cartLoading = false;
                this.message = response.data.message;  
              this.fetchCartItems();
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
      async cartTotal() {
        this.cartLoading = true;
        try {
          const response = await axios.get("/api/cart-total");
          this.cartLoading = false;
          console.log(response)
          this.$cartTotal = response.data.total;          
        } catch (error) {
          this.cartLoading = false;
          if (error.response) {
            if (error.response.status === 401) {
            
            }
          }
        }
          
      },
        
    },    
});