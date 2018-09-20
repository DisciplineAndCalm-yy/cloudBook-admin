import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login: () => import('@/views/login'),
  layout: () => import('@/views/layout'),
  index: () => import('@/views/index'),
  users: () => import('@/views/user/users'),
  addAdmin: () => import('@/views/user/addAdmin'),
  userEdit: () => import('@/views/user/userEdit'),
  test: () => import('@/test-form/test'),
  showClass: () => import('@/views/categoty/showClass'),
  addClass: () => import('@/views/categoty/addClass'),
  changeClass: () => import('@/views/categoty/changeClass'),
  bookCatelog: () => import('@/views/book/bookCatelog'),
  addBook: () => import('@/views/book/addBook'),
  showswiper: () => import('@/views/swiper/showswiper'),
  addswiper: () => import('@/views/swiper/addswiper')
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
          path: 'userEdit',
          meta: {
            title: '修改个人信息'
          },
          component: components.userEdit
        },
        {
          path: 'addAdmin',
          component: components.addAdmin
        },
        {
          path: 'test',
          component: components.test
        },
        {
          path: 'showClass',
          component: components.showClass
        },
        {
          path: 'addClass',
          component: components.addClass
        },
        {
          path: 'changeClass',
          component: components.changeClass
        },
        {
          path: 'bookCatelog',
          component: components.bookCatelog
        },
        {
          path: 'addBook',
          component: components.addBook
        },
        {
          path: 'showswiper',
          component: components.showswiper
        },
        {
          path: 'addswiper',
          component: components.addswiper,
          meta: {
            title: '添加轮播图'
          }
        }
      ]
    },

  ]
})
