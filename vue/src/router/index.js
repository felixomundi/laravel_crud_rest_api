import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Students from "../views/Students.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/students/create',
      name: 'createStudent',
      component: ()=>import("../views/CreateStudent.vue")
    },

    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/students/:id/edit',
      name: 'updateStudent',      
      component: () => import('../views/EditStudent.vue')
    }
  ]
})

export default router