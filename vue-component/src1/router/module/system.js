import systemManagement from '@/pages/SystemManagement'
import userManagement from '@/pages/SystemManagement/UserManagement'
import authorityManagement from '@/pages/SystemManagement/AuthorityManagement'

export default {
  path: '/system',
  redirect: {
    name: 'userManagement',
    params: {
      policeId: 1
    }
  },
  component: () => import('@/components/layout/layoutSystem'),
  children: [
    {
      path: '/system',
      redirect: {
        name: 'userManagement',
        params: {
          policeId: 1
        }
      },
      meta: {
        moduleName: [ '系统管理', '用户管理' ]
      },
      component: systemManagement,
      children: [
        {
          path: '/system/userManagement/:policeId',
          name: 'userManagement',
          meta: {
            moduleName: [ '系统管理', '用户管理' ]
          },
          component: userManagement
        }, {
          path: '/system/authorityManagement',
          name: 'authorityManagement',
          meta: {
            moduleName: [ '系统管理', '权限管理' ]
          },
          component: authorityManagement
        }
      ]
    }
  ]
}
