import request from '@/assets/js/request'

/**
 * 发案预测-未来24小时警情预测
 * @param {*} params 暂无
 */
export const hpfj110GetBy24Future = function (params) {
  return request({
    url: '/api/hpfj110/getBy24Future',
    method: 'post',
    data: params
  })
}

/**
 * 发案预测-天气
 * @param {*} params 暂无
 */
export const hpWeatherGetWeatherDaily = function (params) {
  return request({
    url: '/api/hpWeather/getWeatherDaily',
    method: 'post',
    data: params
  })
}

/**
 * 发案预测-当月警情与警情预测
 * @param {*} params 暂无
 */
export const hpfj110GetByMonth = function (params) {
  return request({
    url: '/api/hpfj110/getByMonth',
    method: 'post',
    data: params
  })
}

/**
 * 发案预测-三维立体视图
 * @param {*} params 暂无
 */
export const hpfj110GetStereo = function (params) {
  return request({
    url: '/api/hpfj110/getStereo',
    method: 'post',
    data: params
  })
}

/**
 * 发案预测-警情预测数
 * @param {*} params 暂无
 */
export const cntTypeFullPredGet3dFuture = function (params) {
  return request({
    url: '/api/cntTypeFullPred/get3dFuture',
    method: 'post',
    data: params
  })
}

/**
 * 发案预测-组织机构案由数量预测
 * @param {*} parasm 暂无
 */
export const cntTypeFullPredGetOffice = function (params) {
  return request({
    url: '/api/cntTypeFullPred/getOffice',
    method: 'post',
    data: params
  })
}

/**
 * 发案预测-组织机构案由数量预测
 * @param {*} parasm 暂无
 */
export const ProlygonLayerData = function (params) {
  return request({
    url: '/api/hp110Sadian/getGridList',
    method: 'post',
    data: params
  })
}
