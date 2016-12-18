import VueRouter from 'vue-router'
import Dash from 'router/dash'
import Home from 'router/home'
import Tree from 'router/tree'
import NotFound from 'router/not-found/not-found'

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