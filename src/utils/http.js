'use strict'

import axios from 'axios'
import qs from 'qs'

// http request 拦截器
axios.interceptors.request.use(config => {
  config => {
    baseURL: 'https://some-domain.com/api/'
  }
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}

export default {
  post (url, data, call) {
    axios.post(url, data)
    .then(
      (res) => {
        call(res)
      }
    ).catch(
      (res) => {
        console.log(res)
      }
    );
  },
  get (url, params,call) {
    axios.get(url)
    .then(
      (res) => {
        call(res)
      }
    ).catch(
      (res) => {
        console.log(res)
      }
    );
    // axios({
    //   method: 'get',
    //   baseURL: '',
    //   url: url,
    //   data: qs.stringify(params), // get 请求时带的参数
    //   timeout: 10000,
    //   headers: {
    //     'X-Requested-With': 'XMLHttpRequest'
    //   }
    // }).then(
    //   (res) => {
    //     call(res)
    //   }
    // ).catch(
    //   (res) => {
    //     console.log(res)
    //   }
    // )
  }
}