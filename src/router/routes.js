//路由懒加载
const home = () => import(/* webpackChunkName: "group-home"*/'@/views/home');
const login = () => import(/* webpackChunkName: "group-login"*/'@/views/login');
const register = () => import(/* webpackChunkName: "group-register"*/'@/views/register');
const welcome = () => import(/*webpackChunkName: "welcome"*/'@/views/welcome');
const goodsList = () => import(/*webpackChunkName: "goodsList"*/'@/views/goodsList');
const goodsDetail = () => import(/*webpackChunkName: "goodsDetail"*/'@/views/goodsDetail');
const error = () => import(/* webpackChunkName: "group-error"*/'@/views/error');
const chatRoom = () => import(/* webpackChunkName: "group-chatRoom"*/'@/views/chatRoom');
const imageLazyLoad = () => import(/* webpackChunkName: "group-imageLazyLoad"*/'@/views/imageLazyLoad');
const renderDomList = () => import(/* webpackChunkName: "group-renderDomList"*/'@/views/renderDomList');
const uploadDemo = () => import(/* webpackChunkName: "group-uploadDemo"*/'@/views/uploadDemo');
const collection = ()=>import(/* webpackChunkName: "group-uploadDemo"*/'@/views/collectionList');
const faceApiDemo= ()=>import(/* webpackChunkName: "group-faceApiDemo"*/'@/views/faceApiDemo');

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
    {
        name:'faceApiDemo',
        path:'/faceApiDemo',
        meta:{
            title:'faceApiDemo',
            require:false,
            keepalive:true
        },
        component:faceApiDemo
    },
    pictureFactory,
    chart,
]


