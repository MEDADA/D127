const user = () => import(/* webpackChunkName: "group-user"*/'@/view/user');
const goodsList = () => import(/* webpackChinkName: "group-goodsList"*/'@/view/goodsList')
const appList = () => import(/* webpackChinkName: "group-appList"*/'@/view/appList')
const friends = () => import(/* webpackChinkName: "group-friends"*/'@/view/friends')
export default [
    {
      name: 'home',
      path: '/',
      meta: {
        title: 'home',
        require: true,
        cache: true
      },
      component: appList
    },
    {
      name: 'user',
      path: '/user',
      meta: {
        title: '用户中心',
        require: true,
        cache: true
      },
      component: user
    },
    {
    name: 'goodsList',
    path: '/goodsList',
    meta: {
      title: '商品列表',
      require: false,
      cache: true
    },
    component: goodsList
    },
    {
      name: 'friends',
      path: '/friends',
      meta: {
        title: '好友',
        require: true,
        cache: true
      },
      component: friends
    }
]

