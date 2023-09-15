import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { useCartStore } from "./cart";
export const useauthStore = defineStore('auth',  {
    state: () => ({
        authUser:null,        
        loading: false,
        errors: [],
        message: null,
    }),
    getters: {
        user: (state) => state.authUser    
    },
    actions: { 
        async getToken() {
            try {
                await axios.get("/sanctum/csrf-cookie");
            } catch (error) {
                if (error.response) {
                    console.log(error.response)
                }
                
            }
            
        },
        async login(data) {   
            const cart = useCartStore();
            this.errors = [];            
            try {
                
                await this.getToken();     
                this.loading = true;
                await axios.post("/api/login", data);              
                this.loading = false;
                this.errors = [];    
                await cart.fetchCartItems();
                await cart.cartTotal();
                router.push({ name: "home" });
                
            } catch (error) {                
                this.loading = false;                  
                if (error.response) {
                    if (error.response.status === 404) {
                        router.push({ name:"home"})   
                    }
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                }               
            }
        },
        async getUser() {          
            this.loading = true;
            try {
                const response = await axios.get("/api/user");               
                if (response.status === 200) {                
                    this.authUser = response.data;    
                    this.loading = false;  
                    // this.router.push({ name: "home" });
                    return new Promise((resolve) => {
                        resolve(response.data);
                    });
                }
                 
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        this.loading = false;
                        this.router.push({ name: "home" });
                    }
                    if (error.response.status === 401) {
                        this.loading = false;
                        this.authUser = null;                        
                        // this.router.push({ name: "login",  });
                        return new Promise((reject) => {
                            reject(error.response.data.errors);
                        })
                    }       
                }
                
            }  
        },
        async logout() {
            try {
                const response = await axios.post("/api/logout");
                if (response.status === 204) {
                    this.authUser = null;                   
                    alert("Logout Successful")
              }                
            } catch (error) {
                if (error.response) {
                    
                }                
            }
            
        },
        async register(data) {
            this.errors = [];
            this.loading = true;
            try {
                await this.getToken();
                await axios.post("/api/register", data);
                this.loading = false;
                this.errors = [];                                
                router.push({ name: "home" });
            } catch (error) {
                this.loading = false;
                if (error.response) {
                    if (error.response.status === 404) {
                        router.push({ name: "home" });   
                    }
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                }
                
            }
        },
        async forgotpassword(data) {
            this.errors = [];
            try {
                await this.getToken();
                this.loading = true;
                const response = await axios.post("/api/forgot-password", data);
                this.message = response.data.status;
                this.loading = false;
                this.errors = [];
                
            } catch (error) {
                this.loading = false;
                if (error.response) {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                }
            }
            
        },
        async resetpassword(data) {
            this.errors = [];
            try {
                this.loading = true;
                const response = await axios.post("/api/reset-password", data);
                this.message = response.data.status;
                alert(this.message);
                this.loading = false;
                this.errors = [];
                this.router.push({ name: "login" });                
            } catch (error) {
                this.loading = false;
                if (error.response) {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                }
                
            }
            
        },
        async update_Profile(data) {
            this.errors = [];
            this.loading = true;
            try {                
                const response = await axios.put("/api/profile", data);               
                if (response.status === 200) {
                    this.loading = false;
                }
                
            } catch (error) {
                this.loading = false;
                if (error.response) {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                   }
                }
            }
            
        },
    },
        
}) 