import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Students from "../views/Students.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Profile from "../views/Profile.vue"
import ForgotPassword from "../views/ForgotPassword.vue"
import ResetPassword from "../views/ResetPassword.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgot-password',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: '/password-reset/:token',
      name: 'resetpassword',
      component: ResetPassword
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
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
