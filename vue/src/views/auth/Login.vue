<script setup>
import { onMounted } from 'vue';
import { useauthStore } from '../../stores/auth';
import { storeToRefs } from 'pinia';

let userdata = {
    email: "",
    password: "",

};
const auth = useauthStore();
let { loading, authUser } = storeToRefs(auth);
onMounted(async () => {       
    await auth.getUser();

});

 const  handleLogin = async () => {   
        await auth.login(userdata);
    };

</script>
<template>   
<div class="container-fluid py-5">
  <div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-md-8">
               <div class="text-center"> 
                <p class="login-text">Login to access your account</p>
               </div>
            <form @submit.prevent="handleLogin">
                    
                <div class="form-row">                 
                    <div class="col-md-12 form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" v-model="userdata.email"  class="form-control">
                        <div v-if="auth.errors.email">
                            <span class="text-danger" role="alert"> <strong>
                                {{ auth.errors.email[0] }}
                            </strong></span>
                        </div>                      

                    </div>
                    <div class="col-md-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" v-model="userdata.password" class="form-control">
                        <div v-if="auth.errors.password">
                            <span class="text-danger" role="alert"> <strong>
                                {{ auth.errors.password[0] }}
                            </strong></span>
                        </div>
                        
                    </div>
                    <div class="mt-3">                     
                    <button class="btn-login"  :disabled="loading">
                        {{loading ? "Loading" : "Login" }}
                        </button>
                    </div>
                   <div class="mt-3">
                   <p>
                    <RouterLink to="/forgot-password" class="forgot flex-start" >Forgot Password?</RouterLink>
                    <RouterLink to="/register" class="register">Create New Account</RouterLink>
                   </p>
                   </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container .row .col-md-8{
width: 700px;
border: 2px solid greenyellow;
padding: 30px;
}
.login-text{
    font-size: 30px;
    margin-bottom: 15px;
}

.container .row .col-md-8 .form-row button.btn-login{   
    cursor: pointer;
    border: 1px solid blue;
    padding: 10px;
    width: 100%;
    outline: none;
    color: black;
    background-color: transparent;
    border-radius: 4px;
    font-size: 20px;
    margin-top: 10px;
}
.container .row .col-md-8 .form-row button.btn-login:hover{
    background-color: blue;
    color: azure;
}
.forgot{
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
}

.register{
    text-decoration: none;
    cursor: pointer;
    margin-left: 10px;
}
.register:hover{
    background-color: green;
    padding: 10px;
    border-radius: 4px;
    color: white;
}
</style>