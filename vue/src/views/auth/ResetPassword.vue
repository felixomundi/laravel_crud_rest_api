<script setup>
import { onMounted } from 'vue';
import { useauthStore } from '../../stores/auth';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
const auth = useauthStore();
const route = useRoute();

let $email = route.query.email;
let $token = route.params.token;
let userdata = {
    password: "",
    password_confirmation: "",
    email: $email,
    token: $token,    
    
}
const { loading } = storeToRefs(auth);
const handleResetPassword = async () => {
    await auth.resetpassword(userdata);   
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
                        <p class="text-success">Reset Password</p>
                        <div v-if="auth.message">
                            <p class="text-success"> <strong>{{ auth.message }}</strong> </p>
                        </div>

                        <div v-if="auth.errors.email">
                            <p class="text-danger"> <strong>{{ auth.errors.email[0] }}</strong> </p>
                        </div>
                    </div>
                        <form @submit.prevent="handleResetPassword">
                            <div class="row">                                
                                <div class="col-md-12">
                                    <label for="password">New Password</label>
                                    <input type="password" name="password" v-model="userdata.password" class="form-control">
                                    <div v-if="auth.errors.password">
                                        <span class="text-danger"> <strong>{{ auth.errors.password[0] }}</strong></span>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <label for="password_confirmation">Confirm Password</label>
                                    <input type="password" name="password_confirmation" v-model="userdata.password_confirmation" class="form-control">
                                    <div v-if="auth.errors.password_confirmation">
                                        <span class="text-danger"> <strong>{{ auth.errors.password_confirmation[0] }}</strong></span>
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