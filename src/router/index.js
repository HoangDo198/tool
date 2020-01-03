import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/Dashboard',
        name: "Dashboard",
        component: () => import('../views/Home.vue')
      },
      {
        path: '/GateWay',
        name: 'GateWay',
        component: () => import('../views/GatewayList.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
