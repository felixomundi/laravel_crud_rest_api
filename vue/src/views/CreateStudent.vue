
<template>
     <div class="container py-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            All Students
                            <RouterLink to="/students" class="btn btn-primary float-end">All Students</RouterLink>
                        </h3>
                    </div>


                    <div class="card-body">

                        <div>
                            <ul class="alert alert-warning" @v-if="Object.keys(this.erroList).length >0">
                                <li class="mb-0 ms-3" v-for="(error, index) in this.erroList" :key="index">
                                {{ error[0] }}
                                </li>
                            </ul>

                        </div>
                              <form>
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label for="name">Name</label>
                                        <input type="text" v-model="model.student.name" name="name" class="form-control">
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label for="email">Email</label>
                                        <input type="email"  v-model="model.student.email" name="email" class="form-control">
                                    </div>
                                    <div class="col-md-6">
                                        <button class="btn btn-primary" @click="saveStudent">Submit</button>
                                    </div>
                                </div>
                              </form>
                              
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "createStudent", 
    data() {
        return {
            erroList:null,
            model: {
                student: {
                    name: "",
                    email:"",
                }
            }
        }
    },
    methods: {
        async saveStudent(e) {
            e.preventDefault();           
            var $this = this;
            try {
                let url = "http://localhost:8000/api/students"; 
                let data; 
                data = $this.model.student             
                const response = await axios.post(url, data);
                alert(response.data.message)
                this.model.student = {
                    name: "",
                    email:"",
                }
                this.erroList = ""
                
                
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        $this.erroList = error.response.data.errors;

                    }
                }
                
            }

        }
    },

}

</script>