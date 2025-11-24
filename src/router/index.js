import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Version1LandingPage from '@/views/version1/LandingShowcasePage.vue'
import Version1MusicApp from '@/views/version1/MusicAppPage.vue'
import Version1Shop from '@/views/version1/ShopPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/version1/shop',
      name: 'Version1Shop',
      component: Version1Shop,
    },
    {
      path: '/version1/musicApp',
      name: 'Version1MusicApp',
      component: Version1MusicApp,
    },
    {
      path: '/version1/landingPage',
      name: 'Version1LandingPage',
      component: Version1LandingPage,
    },
    {
      path: '/page/landing-page',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/',
      redirect: '/version1/shop',
    },
  ],
})

export default router
