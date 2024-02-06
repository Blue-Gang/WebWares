import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUp from '@/views/SignUp.vue'
import AdminVue from '@/views/AdminVue'
import ProduitsView from '../views/ProduitsView.vue'
import TapisView from '../views/TapisView.vue'
import LampeView from '../views/LampeView.vue'
import ChaiseView from '../views/ChaiseView.vue'
import VaseVue from '../views/VaseVue.vue'
import TableView from '../views/TableView.vue'

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
  },
  {
    path: '/produitsview',
    name: 'produits',
    component: ProduitsView
  },
  {
    path: '/tapisview',
    name: 'tapis',
    component: TapisView
  },
  {
    path:'/lampeview',
    name:'lampe',
    component: LampeView,
  },
  {
    path:'/chaiseview',
    name:'chaise',
    component: ChaiseView,
  },
  {
    path:'/vasevue',
    name:'vase',
    component: VaseVue,
  },
  {
    path: '/tableview',
    name: 'table',
    component: TableView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
