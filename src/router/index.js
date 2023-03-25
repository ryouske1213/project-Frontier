import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../views/index.vue'
import collect from '../views/collect.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
]
})

export default router