import Vue from 'vue'
import Router from 'vue-router'

// Navigation components
import ViewLink from './components/ViewLink'
import ModalLink from './components/ModalLink'
Vue.component( 'ViewLink', ViewLink );
Vue.component( 'ModalLink', ModalLink );


import Home from './views/Home.vue'
import Settings from './views/Settings.vue'

import Modal from './views/Modal'
Vue.component( 'Modal', Modal );


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
