import VueRouter from 'vue-router'
import Dash from 'router/dash.js'

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/dash',
      component: Dash
    }
  ]
})