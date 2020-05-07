import request from '@/assets/js/request'

/**
 * 警情分析-实时警情列表
 * @param {*} params startTime 查询的开始时间
 * @param {*} params endTime 查询的结束时间
 */
export const faycSsjqListGetList = function (params) {
  return request({
    url: '/api/faycSsjqList/getList',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-今年警情数据分析
 * @param {*} params 暂无
 */
export const tSjdGetNowJq = function (params) {
  return request({
    url: '/api/tSjd/getNowJq',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-历史警情数据分析
 * @param {*} params 暂无
 */
export const tSjdGetYearJq = function (params) {
  return request({
    url: '/api/tSjd/getYearJq',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-各机构发案分布
 * @param {*} params 暂无
 */
export const tSjdGetDwCaseSum = function (params) {
  return request({
    url: '/api/tSjd/getDwCaseSum',
    method: 'post',
    data: params
  })
}

/**
 * 热力图数据获取
 * @param {*} params 暂无
 */
export const getMapData = function (params) {
  return request({
    url: 'api/hp110Sadian/getList',
    method: 'post',
    data: params
  })
}
/**
 * 警情分析-今日警情数
 * @param {*} params 暂无
 */
export const hpfj110Get110Jq = function (params) {
  return request({
    url: '/api/hpfj110/get110Jq',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-今日天气
 * @param {*} params 暂无
 */
export const hpWeatherGetWeather = function (params) {
  return request({
    url: '/api/hpWeather/getWeather',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-今日，昨日，明日警情数
 * @param {*} params 暂无
 */
export const faycJqfxJqsGetList = function (params) {
  return request({
    url: '/api/faycJqfxJqs/getList',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-24小时发案分布
 * @param {*} params 暂无
 */
export const faycJqfx24hourjqGetList = function (params) {
  return request({
    url: '/api/faycJqfx24hourjq/getList',
    method: 'post',
    data: params
  })
}

/**
 * 警情分析-警情趋势
 * @param {*} params.classType: 筛选类型，1（当天），2（本周），3（当月），4（本年）
 */
export const hpfj110GetAllPillar = function (params) {
  return request({
    url: '/api/hpfj110/getAllPillar',
    method: 'post',
    data: params
  })
}

/**
 * 警情类别下拉菜单
 * @param {*} params 暂无
 */
export const hp110SadianGetJqClass = function (params) {
  return request({
    url: '/api/hp110Sadian/getJqClass',
    method: 'post',
    data: params
  })
}