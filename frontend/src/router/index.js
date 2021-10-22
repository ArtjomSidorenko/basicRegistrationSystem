import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import startPage from "../views/startPage.vue"
import loginSuccess from "../views/loginSuccess.vue"
import adminData from "../views/adminData.vue"
import pageLoader from "../components/PageLoader.vue"
import loginFailed from "../views/loginFailed.vue"
import registerSuccess from "../views/registrationSuccess.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/startPage',
    name: 'startPage',
    component: startPage
  },
  {
    path: '/registration',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: "/loginSuccess",
    name: "loginSuccess",
    component: loginSuccess
  },
  {
    path: "/registerSuccess",
    name: "registerSuccess",
    component: registerSuccess
  },
  {
    path: "/adminData",
    name: "adminData",
    component: adminData
  },
  {
    path: "/pageLoader",
    name: "pageLoader",
    component: pageLoader
  },
  {
    path: "/loginFailed",
    name: "loginFailed",
    component: loginFailed
  },
  {
    path: '/about',
    name: 'About',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router