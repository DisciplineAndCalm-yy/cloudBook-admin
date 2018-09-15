import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login: () => import('@/views/login'),
  layout: () => import('@/views/layout'),
  index: () => import('@/views/index')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: components.login
    },
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect: '/layout/index',
      children: [
        {
          path: 'index',
          component: components.index
        }
      ]
    }
  ]
})
