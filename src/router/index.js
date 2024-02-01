import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUp from '@/views/SignUp.vue'
import AdminVue from '@/views/AdminVue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pagecontact',
    name: 'contact',
    component: PageContact
  },
  {
    path: '/loginpage',
    name: 'connexion',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'inscription',
    component: SignUp
  },
  {
    path: '/adminvue',
    name: 'admin',
    component: AdminVue
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
