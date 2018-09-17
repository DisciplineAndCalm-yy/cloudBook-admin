import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login: () => import('@/views/login'),
  layout: () => import('@/views/layout'),
  index: () => import('@/views/index'),
  users: () => import('@/views/users'),
  addAdmin: () => import('@/views/addAdmin'),
  details: () => import('@/views/details'),
  test: () => import('@/test-form/test')
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/login',
      component: components.login
    },
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect: '/layout/index',
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'index',
          component: components.index
        },
        {
          path: 'users',
          meta: {
            title: '用户管理'
          },
          component: components.users
        },
        {
          path: 'details',
          component: components.details
        },
        {
          path: 'addAdmin',
          component: components.addAdmin
        },
        {
          path: 'test',
          component: components.test
        }
      ]
    },

  ]
})
