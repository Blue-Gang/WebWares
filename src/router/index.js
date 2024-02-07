import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUp from '@/views/SignUp.vue'
import PagePartenaire from '@/views/PagePartenaire.vue'
                        // Footer
import PageCgv from '@/views/PageCgv.vue'
import PageCgu from '@/views/PageCgu.vue'
import PolitiqueConf from '@/views/PolitiqueConf.vue'
import PageCarriere from '@/views/PageCarriere.vue'
                        // DashBoard User & Admin
import AdminPage from '@/views/DashBoard/AdminPage.vue'
import AdminParametre from '@/views/DashBoard/AdminParametre.vue'
import AdminProfile from '@/views/DashBoard/AdminProfile.vue'
import UserPage from '@/views/DashBoard/UserPage.vue'
import UserProfile from '@/views/DashBoard/UserProfile.vue'
import UserParametre from '@/views/DashBoard/UserParametre.vue'
import ParametreUser from '@/views/DashBoard/ParametreUser.vue'
import ParametreProduit from '@/views/DashBoard/ParametreProduit.vue'
import ParametreCat from '@/views/DashBoard/ParametreCat.vue'
import AdminMsg from '@/views/DashBoard/AdminMsg.vue'
import AdminCommande from '@/views/DashBoard/AdminCommande.vue'


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
  component: PolitiqueConf,
},
{
  path: '/pagecarriere',
  name: 'carriere',
  component: PageCarriere,
},
// DASHBOARD ADMIN
{
  path: '/adminpage',
  name: 'DashBoard',
  component: AdminPage,
  children: [
    {
      path: '/adminparametre',
      name: 'parametreadmin',
      component: AdminParametre,
    },
    {
      path: '/adminprofile',
      name: 'tableaudebord',
      component: AdminProfile,
    },
    {
      path: '/parametreuser',
      name: 'gestionuser',
      component: ParametreUser,
    },
    {
      path: '/parametreproduit',
      name: 'gestionproduit',
      component: ParametreProduit,
    },
    {
      path: '/parametrecat',
      name: 'gestioncategorie',
      component: ParametreCat,
    },
    {
      path: '/adminmsg',
      name: 'adminmessagerie',
      component: AdminMsg,
    },
    {
      path: '/admincommande',
      name: 'admincommande',
      component: AdminCommande,
    },
  ],
},
// DASHBOARD USER
{
  path: '/userpage',
  name: 'userboard',
  component: UserPage,
  children: [
    {
      path: '/userprofile',
      name: 'profile',
      component: UserProfile,
    },
    {
      path: '/userparametre',
      name: 'parametre',
      component: UserParametre,
    },
  ],
},

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
