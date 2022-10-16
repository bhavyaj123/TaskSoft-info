import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'LandingPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingPage.vue'),
    children: [
      {
        path: '/tablePage',
        name: 'tablePage',
        component: () => import(/* webpackChunkName: "about" */ '../views/tablePage.vue')
      },
      {
        path: '/cardPage',
        name: 'cardPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/cardPage.vue')
      },
      {
        path: '/settingsPage',
        name: 'settingsPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/settingsPage.vue')
      }
    ],

  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
