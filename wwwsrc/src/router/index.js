import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Backend/Welcome'
import Home from '@/components/Backend/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/backend',
      name: 'Home',
      component: Home
    },
     ]
})