import incidencePredictive from '@/pages/IncidencePredictive'

export default {
  path: '/incidence',
  redirect: {
    name: 'incidencePredictive'
  },
  meta: {
    moduleName: [ '发案预测' ]
  },
  component: () => import('@/components/layout/layoutHome'),
  children: [
    {
      path: '/incidencePredictive',
      name: 'incidencePredictive',
      meta: {
        moduleName: [ '发案预测' ]
      },
      component: incidencePredictive
    }
  ]
}
