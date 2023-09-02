import { defineStore } from "pinia";
import axios from "axios"
export const useStudentsStore = defineStore('students', {
    state: () => ({
        students: [],        
        loading: false
    }),
    getters: {
      
    },
    actions: {
    async loadStudents() {
            try {
                this.loading = true;
            let url = "http://localhost:8000/api/students";
                const response = await axios.get(url);
                this.students = response.data.students;
                this.loading =false
        } catch (error) {
            
        }
        },
        async getSingleStudent($id) {
            try {
                let url = `http://localhost:8000/api/students/${$id}/edit`;
                const response = await axios.get(url);                
                
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
    },
  })