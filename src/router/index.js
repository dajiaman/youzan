import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from '@/layouts/BasicLayout.vue'

import PageLayout from '@/layouts/PageLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
    meta: {
      title: '概况',
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/goods',
        name: 'goods',
        meta: {
          title: '商品',
        },
        component: PageLayout,
        children: [
          {
            path: '/goods/manage/list',
            component: () => import('@/views/goods/manage/list.vue'),
            meta: {
              title: '商品管理',
            },
          },{
            path: '/goods/edit',
            component: () => import('@/views/goods/edit/index.vue'),
            meta: {

            }
          },
          {
            path: '/goods/tag/index',
            component: () => import('@/views/goods/tag/index.vue'),
            meta: {
              title: '商品分组',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
