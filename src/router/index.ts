import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Laptops from '../views/Laptops.vue';
import AddLaptop from '../views/AddLaptop.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/laptops',
    name: 'Laptops',
    component: Laptops
  },
  {
    path: '/add-laptop',
    name: 'AddLaptop',
    component: AddLaptop
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
