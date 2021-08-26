import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/root/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'HomeView',
        component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue'),
      },
      {
        path: '/category',
        name: 'CategoryView',
        component: () => import(/* webpackChunkName: "CategoryView" */ '../views/category/CategoryView.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutWeb/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
