'use strict'

import axios from 'axios'
import qs from 'qs'
import { Loading, Message } from 'element-ui'

// 超时时间
axios.defaults.timeout = 5000
// http request 拦截器
let loadinginstace
axios.interceptors.request.use(
  config => {
    loadinginstace = Loading.service({ fullscreen: true, text: '拼命加载中' })
    return config
  }, error => {
      loadinginstace.close()
      Message.error({
        message: '加载超时'
      })
    return Promise.reject(error)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    loadinginstace.close()
    return response
  }, error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('401')
        default:
          console.log(error.response.status)
      }
    }
    loadinginstace.close()
    Message.error({
      message: '加载失败'
    })
    return Promise.reject(error)
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
        console.log('------ ' + url + ' ------')
        console.log(res.data)
        console.log('------ ' + url + ' ------')
        if (res.data.code == 0) {
          call(res.data)
        } else {
          Message.error({
            message: res.data.msg
          })
        }
      }
    ).catch(
      (res) => {
        console.log(res)
      }
    );
  },
  get (url, params,call) {
    axios.get(url,{
    　　params
    }).then(
      (res) => {
        console.log('------ ' + url + ' ------')
        console.log(res.data)
        console.log('------ ' + url + ' ------')
        if (res.data.code == 0) {
          call(res.data)
        } else {
          Message.error({
            message: res.data.msg
          })
        }
      }
    ).catch(
      (res) => {
        console.log(res)
      }
    );
  }
}