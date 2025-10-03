import LandingPage from '@/layouts/LandingPage.vue'
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
  ],
})

export default router
