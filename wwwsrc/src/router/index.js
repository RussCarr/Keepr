import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import User from '@/components/User'

// import Welcome from '@/components/Welcome'

// import MyKeepsMenu from '@/components/MyKeepsMenu'
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
    //   path: '/Main/MyKeepsMenu',
    //   name: 'MyKeeps',
    //   component: MyKeepsMenu
    // },
     ]
})