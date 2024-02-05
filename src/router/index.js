import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUp from '@/views/SignUp.vue'
import PageCgv from '@/views/PageCgv.vue'
import AdminVue from '@/views/AdminVue'
import PagePartenaire from '@/views/PagePartenaire.vue'
import PageCgu from '@/views/PageCgu.vue'
import PolitiqueConf from '@/views/PolitiqueConf.vue'
import PageCarriere from '@/views/PageCarriere.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutview',
    name: 'about',
    component: AboutView
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
  },
  {
    path: '/pagecgv',
    name: 'cgv',
    component: PageCgv
  },
  {
  path: '/pagepartenaire',
  name: 'partenaire',
  component: PagePartenaire
},
{
  path: '/pagecgu',
  name: 'cgu',
  component: PageCgu
},
{
  path: '/politiqueconf',
  name: 'politiqueconf',
  component: PolitiqueConf
},
{
  path: '/pagecarriere',
  name: 'carriere',
  component: PageCarriere
},
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
