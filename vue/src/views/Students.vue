<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            All Students
                            <RouterLink to="/students/create" class="btn btn-primary float-end">Add Student</RouterLink>
                        </h3>
                    </div>
                    <div class="card-body">
                              <div class="table-responsive">
                                  <table class="table table-bordered">
                                      <thead>
                                          <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                         </tr>
                                      </thead>
                                      <tbody v-if="this.students.length > 0">
                                        <tr v-for="(student, index) in this.students" :key="index">
                                            <td>{{ student.id }}</td>
                                            <td>{{ student.name }}</td>
                                            <td>{{ student.email }}</td>
                                            <td><RouterLink :to="{path: '/students/'+student.id +'/edit'}"  class="btn btn-primary">Edit</RouterLink></td>
                                            <td><button @click="deleteStudent(student.id)" class="btn btn-danger">Delete</button></td>
                                        </tr>                                        
                                          
                                      </tbody>
                                      <tbody v-else>
                                        <tr>Loading...</tr>

                                      </tbody>
                                  </table>
                              </div>
                              
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
import axios from "axios"
import { RouterLink } from "vue-router";
export default{
    name: "students",
    data() {
        return {
            students: []
        };
    },
    mounted() {
        this.getStudents();
    },
    methods: {
        async getStudents() {
            try {
                let url = "http://localhost:8000/api/students";
                const response = await axios.get(url);
                this.students = response.data.students;
            }
            catch (error) {
            }
        },
        async deleteStudent(e) {
            if (confirm("Are you sure")) {
                try {
                    let url = `http://localhost:8000/api/students/${e}/delete`
                    const response = await axios.delete(url);
                    alert(response.data.message)
                    this.getStudents();
                } catch (error) {
                    if (error.response) {                    
                    if (error.response.status === 404) {
                       alert(error.response.data.message);                        
                    }
                }
                }
            }            
           
            
        }
    },
  
}
</script>

<!-- Route::get("/students","index");
Route::post("/students","store");
Route::get("/students/{id}","show");
Route::get("/students/{id}/edit","edit");
Route::put("/students/{id}/edit","update");
Route::delete("/students/{id}/delete","destroy"); -->