import login from '@/pages/UserLogin'

export default {
  path: '/sign',
  redirect: {
    name: 'login'
  },
  meta: {
    moduleName: [ '登录', '用户登录' ]
  },
  component: () => import('@/components/layout/layoutSign'),
  children: [
    {
      path: '/login',
      name: 'login',
      meta: {
        moduleName: [ '登录', '用户登录' ]
      },
      component: login
    }
  ]
}
