import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
import home from '../components/home'

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      name: 'home'
    },
    {
      path: '/about/:id',
      component: () => import('../components/about'),
      name: '详情'
    },
    {
      path: '/login',
      component: () => import('../components/login'),
      name: 'login',
      meta: {
        title: '登录'
      }
    },
    {
      path: '/main',
      component: () => import('../views/layout'),
      redirect: '/main/home',
      children: [
        {
          path: 'home',
          component: home,
          name: 'home1'
        },
        {
          path: 'about',
          component: () => import('../components/about'),
          name: '详情1'
        },
        {
          path: 'login',
          component: () => import('../components/login'),
          name: 'login1',
          meta: {
            title: '登录'
          }
        }
      ]
    }
  ]
})

export default router
