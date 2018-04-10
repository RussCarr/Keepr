import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import User from '@/components/User'

// import Welcome from '@/components/Welcome'

// import Dashboard from '@/components/Dashboard'
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
      path: '/main',
      name: 'User',
      component: User
    },
    // {
    //   path: '/',
    //   name: 'Welcome',
    //   component: Welcome
    // },    // {
    //   path: '/Main/Dashboard',
    //   name: 'MyKeeps',
    //   component: Dashboard
    // },
     ]
})