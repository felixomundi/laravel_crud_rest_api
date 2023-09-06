<script setup>
import { onMounted } from 'vue';
import { useauthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
const auth = useauthStore();

let userdata = {
    email: ""
}
const { loading } = storeToRefs(auth);
const handleForgotPassword = async () => {
    await auth.forgotpassword(userdata);
   
}
onMounted(async () => {
    await auth.getUser();
      
});
</script>
<template>
    <div class="container-fluid py-5">
        <div class="container" >
           <div class="row justify-content-center align-items-center">
              <div class="col-md-7 pb-3">
                    <div class="form">
                        <div class="text-start pt-0">
                        <p class="text-success">Forgot Password</p>
                        <div v-if="auth.message">
                            <p class="text-success"> <strong>{{ auth.message }}</strong> </p>
                        </div>
                    </div>
                        <form @submit.prevent="handleForgotPassword">
                            <div class="row">                                
                                <div class="col-md-12">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" v-model="userdata.email" class="form-control">
                                    <div v-if="auth.errors.email">
                                        <span class="text-danger"> <strong>{{ auth.errors.email[0] }}</strong></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="update-profile-button" :disabled="loading">
                                        {{ loading ? "Submitting" :"Submit" }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
              </div>
                         
            
           </div>
        </div>
    </div>
</template>
<style scoped>
.form{
padding: 30px;
background-color: whitesmoke;
border-radius: 2px;
}
label{
    margin-bottom: 10px;
}
.text-success{
    font-size: 30px;
    font-weight: 500;
    
}
.update-profile-button{
    margin-top: 20px;
    background-color: transparent;
    border-radius: 2px;
    padding: 5px;
    border: 1px solid #088178;
    width: 50%;
    cursor: pointer;
}
.update-profile-button:hover{
    color: #ffff;
    background-color: #088178;
}


</style>