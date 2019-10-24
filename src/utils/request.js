/**
 * @author totocat
 * @date 2019-10-23
 */

import axios from 'axios'
import config from './config'

var crossUrl = process.env.NODE_ENV === "development" ? config.prefix : config.serverUrl;

var instance = axios.create({
  withCredentials: true,
  baseURL: crossUrl,
  timeout: 50000
})
 
// 请求，拦截 
instance.interceptors.request.use(
  config => {
    //取消，上一个相同名字 没有执行完 的 请求
    var requestName = config.url + '&' + config.method;
    if (requestName) {
      if (axios[requestName] && axios[requestName].cancel) {
        axios[requestName].cancel();
      }
    }
    return config;
  },
  error => {
    console.error('request error'); 
    return;
  }
)

// 响应，拦截
instance.interceptors.response.use(
  response => {
    if (+response.status === 200) {
      return response.data;
    } else { 
      console.error(response.data.msg)
      return 
    }
  },
  error => {
    if (error && error.response) {
      var code = ''+error.response.status;
      error.msg = config.ERROR_CODE[code];
    } else {
      error.msg = '连接服务器失败';
    }
    return console.error(error.msg)
  }
)

export default instance
