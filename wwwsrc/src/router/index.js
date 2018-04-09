import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '@/components/Home'
// @ts-ignore
import User from '@/components/User'
// @ts-ignore
import Welcome from '@/components/Welcome'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/MyDash',
      name: 'User',
      component: User
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
     ]
})