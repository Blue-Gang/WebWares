import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FooterPage from '../components/FooterPage.vue'
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
    path: '/',
    name: 'footer', 
    component: FooterPage
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
