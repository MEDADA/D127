const user = () => import(/* webpackChunkName: "group-user"*/'@/views/user');
const goodsList = () => import(/* webpackChinkName: "group-goodsList"*/'@/views/goodsList')
const appList = () => import(/* webpackChinkName: "group-appList"*/'@/views/appList')
const friends = () => import(/* webpackChinkName: "group-friends"*/'@/views/friends')
export default [
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'home',
      require: true,
      keepalive: true
    },
    component: appList
  },
  {
    name: 'user',
    path: '/user',
    meta: {
      title: '用户中心',
      require: true,
      keepalive: true
    },
    component: user
  },
  {
    name: 'goodsList',
    path: '/goodsList',
    meta: {
      title: '商品列表',
      require: false,
      keepalive: true
    },
    component: goodsList
  },
  {
    name: 'friends',
    path: '/friends',
    meta: {
      include:'chatRoom',
      title: '好友',
      require: true,
      keepalive: true
    },
    component: friends
  }
]

