<!-- <script setup>
import { RouterLink } from 'vue-router';
import { useStudentsStore } from '../stores/students';
import { onMounted } from 'vue';
const studentStore = useStudentsStore();
onMounted(() => {
    studentStore.loadStudents();
});
</script> -->

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
                                  <tbody v-if="studentStore.loading">
                                    <div >
                                       Loading...
                                        
                                    </div>
                                  </tbody>
                                  <tbody v-else-if="this.studentStore.students.length < 0">
                                   <div>
                                    <p class="text-danger">No student Found</p>
                                   </div>
                                  </tbody>
                                  <tbody v-else>
                                    <tr v-for="(student, index) in this.studentStore.students" :key="index">
                                            <td>{{ student.id }}</td>
                                            <td>{{ student.name }}</td>
                                            <td>{{ student.email }}</td>
                                            <td><RouterLink :to="{path: '/students/'+student.id +'/edit'}"  class="btn btn-primary">Edit</RouterLink></td>
                                            <td><button  class="btn btn-danger">Delete</button></td>
                                        </tr>       
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
import { RouterLink } from 'vue-router';
import { useStudentsStore } from '../stores/students';
export default {
    name: "students",   
    data() {
        return {
            students: [],
            studentStore:useStudentsStore(),
        }
    },
    mounted() {
        this.studentStore.loadStudents()
        this.students =  this.studentStore.loadStudents()
    },
}
</script>