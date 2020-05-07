import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test'
import About from './views/About'
import Main from './views/Main.vue'
import D3 from './views/D3test.vue'
import Deck from './views/deck.gl.vue'
import Table from './views/table.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Table
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
