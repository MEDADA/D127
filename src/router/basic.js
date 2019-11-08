//路由懒加载
const home = () => import(/* webpackChunkName: "group-home"*/'@/view/home');
const login = () => import(/* webpackChunkName: "group-login"*/'@/view/login');
const register = () => import(/* webpackChunkName: "group-register"*/'@/view/register');
const welcome = () => import(/*webpackChunkName: "welcome"*/'@/view/welcome');
const goodsList = () => import(/*webpackChunkName: "goodsList"*/'@/view/goodsList');
const goodsDetail = () => import(/*webpackChunkName: "goodsDetail"*/'@/view/goodsDetail');
const error = () => import(/* webpackChunkName: "group-error"*/'@/view/error');
const chatRoom = () => import(/* webpackChunkName: "group-chatRoom"*/'@/view/chatRoom');
const imageLazyLoad = () => import(/* webpackChunkName: "group-imageLazyLoad"*/'@/view/imageLazyLoad');
const renderDomList = () => import(/* webpackChunkName: "group-renderDomList"*/'@/view/renderDomList');
const uploadDemo = () => import(/* webpackChunkName: "group-uploadDemo"*/'@/view/uploadDemo');
const collection = ()=>import(/* webpackChunkName: "group-uploadDemo"*/'@/view/collectionList');
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
      keepalive: true
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
      keepalive: false
    },
    component: login
  },
  {
    name: 'register',
    path: '/register',
    meta: {
      title: '注册',
      require: false,
      keepalive: false
    },
    component: register
  },
  {
    name:'welcome',
    path:'/welcome',
    meta:{
      title:'welcome',
      require:false,
      keepalive:false
    },
    component:welcome
  },
  {
    name:'goodsDetail',
    path:'/goodsDetail',
    meta:{
      title:'商品详细',
      require:false,
      keepalive:false
    },
    component:goodsDetail
  },
  {
    name:'chatRoom',
    path:'/chatRoom',
    meta:{
      title:'聊天室',
      require:true,
      keepalive:false
    },
    component:chatRoom
  },
  {
    name:'lazyLoad',
    path:'/imageLazyLoad',
    meta:{
      title:'延迟加载',
      require:false,
      keepalive:true
    },
    component:imageLazyLoad
  },
  {
    name:'renderDomList',
    path:'/renderDomList',
    meta:{
      title:'renderJs返回dom',
      require:false,
      keepalive:true
    },
    component:renderDomList
  },
  {
    name:'uploadDemo',
    path:'/uploadDemo',
    meta:{
      title:'uploadDemo',
      require:false,
      keepalive:true
    },
    component:uploadDemo
  },
  {
    name:'collection',
    path:'/collection',
    meta:{
      require:true,
      keepalive:true
    },
    component:collection
  },
  pictureFactory,
  chart,
]


