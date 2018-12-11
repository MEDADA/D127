import axios from 'axios';
import qs from 'qs';
import router from '../router/index.js'
const instance = axios.create({
  timeout: 10000,
});

instance.defaults.withCredentials=true;//让ajax携带cookie

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.headers['Content-Type'] != 'multipart/form-data'){
    config.data = qs.stringify(config.data,{arrayFormat: 'brackets'}); // 解决预检测请求
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error );
});

// 添加响应拦截器
instance.interceptors.response.use(function (res) {
  // 在发送请求之前做些什么
  return res;
}, function (error) {
  switch (error.response.status) {
    case 302:
      error.message = '错误请求：找不到url请求（后台过滤）';
      break;
    case 400:
      error.message = '错误请求：字段名称、类型前后台不一致';
      break;
    case 401:
      error.message = '未授权，请重新登录';
      router.replace({path: '/login'});//路由跳转 不会向 history 添加新记录，替换掉当前的 history 记录
      break;
    case 403:
      error.message = '拒绝访问';
      // router.replace({path: '/erroror/401'});
      break;
    case 404:
      error.message = '请求错误,未找到该资源';
      // router.replace({path: '/erroror/404'});
      break;
    case 405:
      error.message = '请求方法未允许,可能是请求类型(get post)不一致';
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器端出错';
      break;
    case 501:
      error.message = '网络未实现';
      break;
    case 502:
      error.message = '网络错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网络超时';
      // router.replace({path: '/error/404'});
      break;
    case 505:
      error.message = 'http版本不支持该请求';
      break;
    default:
      error.message = `连接错误${error.response.status}`;
  }
  // 对请求错误做些什么
  return Promise.reject(error);
});
export default instance;
