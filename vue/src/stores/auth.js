import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";

export const useauthStore = defineStore('auth',  {
    state: () => ({
        authUser:null,        
        loading: false,
        errors:[],
    }),
    getters: {
       user:(state)=> state.authUser
      
    },
    actions: { 
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async login(data) {
           
            this.errors = [];
            try {
                // this.getToken();
                this.loading = true;
                await axios.post("/login", data);              
                this.loading = false;
                this.errors = [];                                
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
            
            try {
                const response = await axios.get("/user");
                this.loading = true;
                if (response.status === 200) {                
                    this.authUser = response.data;    
                    this.loading = false;  
                    this.router.push({ name: "home" });
                }
                 
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        this.loading = false;
                        this.router.push({ name: "home" });
                    }
                    if (error.response.status === 401) {
                        this.loading = false;
                        // this.router.push({ name: "login" });
                    }       
                }
                
            }  
        },
        async logout() {
            try {
                const response = await axios.post("/logout");
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
                await axios.post("/register", data);
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
        }


    },
        
}) 