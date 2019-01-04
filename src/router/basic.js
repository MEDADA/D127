//路由懒加载
const home = () => import(/* webpackChunkName: "group-home"*/'@/view/home');
const login = () => import(/* webpackChunkName: "group-login"*/'@/view/login');
const welcome = () => import(/*webpackChunkName: "welcome"*/'@/view/welcome');
const goodsList = () => import(/*webpackChunkName: "goodsList"*/'@/view/goodsList');
const error = () => import(/* webpackChunkName: "group-error"*/'@/view/error');
// split module
import pictureFactory from '@/router/pictureFactory'
import homeChild from '@/router/homeChild';
import chart from '@/router/chart'
export default [
  {
    name:'error',
    path:'*',
    component:error
  },
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
      require: false, //是否需要验证登录
      cache: true
    },
    component: home,
    children:homeChild
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录',
      require: false,
      cache: false
    },
    component: login
  },
  {
    name:'welcome',
    path:'/welcome',
    meta:{
      title:'welcome',
      require:false,
      cache:false
    },
    component:welcome
  },
  {
    name:'goodsList',
    path:'/goodsList',
    meta:{
      title:'商品列表',
      require:false,
      cache:false
    },
    component:goodsList
  },
  pictureFactory,
  chart,
]
