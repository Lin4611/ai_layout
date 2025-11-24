import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page/landing-page',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/',
      redirect: '/page/landing-page',
    },
  ],
})

export default router
