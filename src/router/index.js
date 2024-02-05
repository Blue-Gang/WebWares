import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage'

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
    path: '/aboutview',
    name: 'apropos',
    component: AboutView
  },
  {
    path: '/loginpage',
    name: 'connexion',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
