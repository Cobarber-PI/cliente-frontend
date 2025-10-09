import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import telaRegistroView from '../views/telaRegistroView.vue'
import IntroducaoView from '../views/introducaoView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introducao',
      component: IntroducaoView,
    },
    {
      path: '/telaRegistro',
      name: 'telaRegistroView',
      component: telaRegistroView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
