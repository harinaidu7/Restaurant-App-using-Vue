import Home from '../components/home.vue'
import signUp from '../components/login.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      name : 'Home',
      component:Home,
      path:'/'
    },
    {
      name : 'signUp',
      component:signUp,
      path:'/sign-up'
    }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
