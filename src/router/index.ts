import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import LoginView from '@/views/LoginView.vue'
import TwoFactorView from '@/views/TwoFactorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/2fa',
      name: '2fa',
      component: TwoFactorView,
    },
  ],
})

export default router
