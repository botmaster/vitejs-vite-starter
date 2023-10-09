import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/ViewHome.vue';
import ViewDesignSystem from '@/views/design-system/ViewDesignSystem.vue';
import layouts from '@/layout/layouts';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: layouts.TheAppLayout,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/ViewAbout.vue'),
    meta: {
      layout: layouts.TheAppLayout,
    },
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('@/views/ViewTasks.vue'),
    meta: {
      layout: layouts.TheAppLayout,
    },
  },
  {
    path: '/design-system',
    name: 'designSystem',
    component: ViewDesignSystem,
    redirect: { name: 'designSystemHomepage' },
    meta: {
      layout: layouts.TheDesignSystemLayout,
    },
    children: [
      /* {
                path: 'colors',
                name: 'colors',
                component: () => import('@/views/design-system/ViewDesignSystemColors.vue'),
            },
            {
                path: 'typography',
                name: 'typography',
                component: () => import('@/views/design-system/ViewDesignSystemTypography.vue'),
            },
            {
                path: 'icons',
                name: 'icons',
                component: () => import('@/views/design-system/ViewDesignSystemIcons.vue'),
            }, */
      {
        path: 'homepage',
        name: 'designSystemHomepage',
        component: () => import('@/views/design-system/ViewDesignSystemHomepage.vue'),

      },
      {
        path: 'typography',
        name: 'designSystemTypography',
        component: () => import('@/views/design-system/ViewDesignSystemTypography.vue'),
      },
      {
        path: 'components',
        name: 'designSystemComponents',
        component: () => import('@/views/design-system/ViewDesignSystemComponents.vue'),
      },
      {
        path: 'icons',
        name: 'designSystemIcons',
        component: () => import('@/views/design-system/ViewDesignSystemIcons.vue'),
      },
      {
        path: 'colors',
        name: 'designSystemColors',
        component: () => import('@/views/design-system/ViewDesignSystemColors.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    else
      if (to.hash) {
        return {
          el: to.hash,
        };
      }
    return { top: 0 };
  },
});

export default router;
