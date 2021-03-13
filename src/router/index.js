import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/all_pwd',
    name: 'Passwords',
    component: () => import('../views/AllPasswords.vue')
  },
  {
    path: '/new_pwd',
    name: 'NewPassword',
    component: () => import('../views/NewPassword.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
