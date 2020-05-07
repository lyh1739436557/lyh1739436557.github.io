import logAudit from '@/pages/LogAudit'
import alarmTransfer from '@/pages/LogAudit/AlarmTransfer'
import operating from '@/pages/LogAudit/Operating'

export default {
  path: '/log',
  redirect: {
    name: 'alarmTransfer'
  },
  meta: {
    moduleName: '警情传输日志'
  },
  component: () => import('@/components/layout/layoutLog'),
  children: [
    {
      path: '/logAudit',
      redirect: {
        name: 'alarmTransfer'
      },
      meta: {
        moduleName: [ '日志审计', '警情传输日志' ]
      },
      component: logAudit,
      children: [
        {
          path: '/logAudit/alarmTransfer',
          name: 'alarmTransfer',
          meta: {
            moduleName: [ '日志审计', '警情传输日志' ]
          },
          component: alarmTransfer
        }, {
          path: '/logAudit/operating',
          name: 'operating',
          meta: {
            moduleName: [ '日志审计', '操作日志' ]
          },
          component: operating
        }
      ]
    }
  ]
}
