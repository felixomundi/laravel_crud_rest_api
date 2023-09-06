<script setup>
import { onMounted } from 'vue';
import { useauthStore } from '../stores/auth';
const auth = useauthStore();
onMounted(async() => {
    
});
</script>
<template>
    <div class="container-fluid py-5">
        <div class="container" >
           <div class="row justify-content-center align-items-center">
              <div class="col-md-7 pb-3">
                    <div class="form">
                        <div class="text-start">
                        <p class="text-success">Update Profile Data</p>
                    </div>
                        <form action="">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" class="form-control">
                                </div>
                                <div class="col-md-12">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <button class="update-profile-button">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
              </div>
              <div class="col-md-5">
                <div class="form">
                        <div class="text-start">
                        <p class="text-success">Update Password</p>
                    </div>
                        <form action="">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" class="form-control">
                                </div>
                                <div class="col-md-12">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <button class="update-profile-button">Update Password</button>
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
}
.update-profile-button:hover{
    color: #ffff;
    background-color: #088178;
}
</style>