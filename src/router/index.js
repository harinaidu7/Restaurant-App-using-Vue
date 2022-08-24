import Home from '../components/home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '@/components/login.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      name : 'Home',
      component:Home,
      path:'/'
    },
    {
      name : 'SignUp',
      component:SignUp,
      path:'/sign-up'
    },
    {
      name :'Login',
      component:Login,
      path:'/login'
    } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
