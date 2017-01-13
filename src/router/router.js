import VueRouter from 'vue-router'
import Dash from './dash'
import Home from './home'
import Tree from './tree'
import NotFound from './not-found'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dash,
      children: [
        {
          name: 'home',
          path: '',
          component: Home
        },
        {
          name: 'tree',
          path: 'tree',
          component: Tree
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})