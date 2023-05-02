import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import SubPage from './pages/subpage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app-1',
      name: 'home',
      component: Index,
    },
    {
      path: '/app-1/subpage',
      name: 'subpage',
      component: SubPage,
    },
  ],
})

export default router
