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
import ModifUtilisateur from '@/views/ModifUtilisateur.vue'
import ListeClients from '@/views/ListeClients.vue'


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
  path: '/modifutilisateur',
  name: 'modifutilisateur',
  component: ModifUtilisateur
},
{
  path: '/listeclients',
  name: 'listeclients',
  component: ListeClients
},
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
