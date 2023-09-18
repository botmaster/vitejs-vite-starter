import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/ViewHome.vue';
import ViewDesignSystem from "@/views/design-system/ViewDesignSystem.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            layout: 'default',
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/ViewAbout.vue'),
        meta: {
            layout: 'default',
        }
    },
    {
        path: '/design-system',
        name: 'designSystem',
        component: ViewDesignSystem,
        redirect: {name: 'designSystemHomepage'},
        meta: {
            layout: 'ds',
        },
        children: [
            /*{
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
            },*/
            {
                path: 'homepage',
                name: 'designSystemHomepage',
                component: () => import('@/views/design-system/ViewDesignSystemHomepage.vue'),

            },
            {
                path: 'components',
                name: 'designSystemComponents',
                component: () => import('@/views/design-system/ViewDesignSystemComponents.vue'),
            }

        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
