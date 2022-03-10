import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/profile/Profile.vue')
const Sort = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/detail/:iid',
    component: Detail
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
