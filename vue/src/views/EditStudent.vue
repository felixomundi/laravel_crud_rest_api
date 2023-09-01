
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
                                        <input type="text" v-model="model.students.name" name="name" class="form-control">
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label for="email">Email</label>
                                        <input type="email"  v-model="model.students.email" name="email" class="form-control">
                                    </div>
                                    <div class="col-md-6">
                                        <button class="btn btn-primary" @click="updateStudent">Submit</button>
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
import router from '../router';
export default {
    name: "updateStudent", 
    data() {
        return {
            erroList: null,            
            model: {
                students: {
                    name: "",
                    email:"",
                }
            }
        }
    },
    mounted() {    
    const id = this.$route.params.id
    this.getStudentData(id)
     },
    methods: {

        async getStudentData($id) {                         
            try {
                let url = `http://localhost:8000/api/students/${$id}/edit`;
                const response = await axios.get(url);                
                this.model.students = response.data.student;

            } catch (error) {
                console.log(error)       
                if (error.response) {
                    if (error.response.status === 404) {
                        alert(error.response.data.message);  
                        router.push({ name:"students"})                        
                    }
                }         
            }            
        },   

        async updateStudent(e) {
            e.preventDefault();           
            var $this = this;            
            try {
                let $id = this.$route.params.id;
                let url = `http://localhost:8000/api/students/${$id}/edit`;
                let data = this.model.students;                
                const response = await axios.put(url, data);
                alert(response.data.message)   
                this.model.students = response.data.student                           
                
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        $this.erroList = error.response.data.errors;
                    }
                    if (error.response.status === 404) {
                        alert(error.response.data.message); 
                       router.push({ name:"students"})                       
                    }
                }
                
            }

        }
    },

}

</script>