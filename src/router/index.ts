import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/ViewHome.vue';
import Components from '@/views/ViewComponents.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/components',
    name: 'components',
    component: Components,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
