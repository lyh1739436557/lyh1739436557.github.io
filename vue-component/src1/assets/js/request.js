import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

const ENV_BASE_API = process.env.BASE_API || ''
const REQUEST_TIMEOUT = process.env.REQUEST_TIMEOUT || 60000
let timeoutTMessageShow = true

// create an axios instance
const service = axios.create({
  baseURL: ENV_BASE_API,
  timeout: REQUEST_TIMEOUT,
  withCredentials: !process.env.MOCK,
  // 对 post put patch 进行转换
  transformRequest: [function (data, headers) {
    return qs.stringify(data)
  }]
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 增加 sid，用于设置当前选择的店铺
    // config.headers['X-Sid'] = getCurrentSellerId()
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 请求全局拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    switch (res.code) {
      case 200:
        // 200 请求正常，直接返回
        break
      default:
        Message({
          message: `系统繁忙[${res.code}]，请稍后刷新重试`,
          type: 'error',
          duration: 5 * 1000
        })
        break
    }

    return res
  },
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // 服务器正常返回 http code，但是不是 2xx 区段
      Message({
        dangerouslyUseHTMLString: true,
        message: '系统繁忙，请稍后重试&nbsp;<span class="fz-12">[' + error.message + ']</span>',
        type: 'error',
        duration: 5 * 1000
      })
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // 服务区未响应
      if (timeoutTMessageShow) {
        timeoutTMessageShow = false
        Message({
          dangerouslyUseHTMLString: true,
          message: '请求超时，请刷新后重试&nbsp;<span class="fz-12">[' + error.message + ']</span>',
          type: 'error',
          duration: 5 * 1000
        })
        window.setTimeout(() => {
          timeoutTMessageShow = true
        }, 5 * 1000)
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      // 一些由于其他原因（比如配置）导致的错误
      Message({
        dangerouslyUseHTMLString: true,
        message: '系统繁忙，请稍后重试&nbsp;<span class="fz-12">[' + error.message + ']</span>',
        type: 'error',
        duration: 5 * 1000
      })
    }

    return Promise.reject(error)
  }
)

export default service
