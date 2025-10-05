import LandingPage from '@/layouts/LandingPage.vue'
import Login from '@/views/auth/Login.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
      children: [
        {
          path: '/',
          component: Home,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
