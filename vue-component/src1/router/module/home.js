import AlertSituationAnalysis from '@/pages/AlertSituationAnalysis'

export default {
  path: '/home',
  redirect: {
    name: 'alertSituationAnalysis'
  },
  meta: {
    moduleName: [ '警情分析' ]
  },
  component: () => import('@/components/layout/layoutHome'),
  children: [
    {
      path: '/alertSituationAnalysis',
      name: 'alertSituationAnalysis',
      meta: {
        moduleName: [ '警情分析' ]
      },
      component: AlertSituationAnalysis
    }
  ]
}
