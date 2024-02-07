import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage.vue'

import SignUp from '@/views/SignUp.vue'
import PageCgv from '@/views/PageCgv.vue'
import AdminVue from '@/views/AdminVue'
import PagePartenaire from '@/views/PagePartenaire.vue'
import PageCgu from '@/views/PageCgu.vue'
import PolitiqueConf from '@/views/PolitiqueConf.vue'


import ProduitsView from '../views/ProduitsView.vue'
import PanierView from '../views/PanierView.vue'
import CommResume from '../views/CommResume.vue'

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
    path: '/produitsview',
    name: 'produits',
    component: ProduitsView
  },
  {
    path: '/panierview',
    name: 'panier',
    component: PanierView
  },
  {
    path: '/commresume',
    name: 'commresume',
    component: CommResume
   }

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
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
