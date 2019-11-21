import Router from './index';
import utlis from '../utlis/utlis';

const user = () => import(/* webpackChunkName: "group-user"*/'@/views/user');
const permissionManage = () => import(/* webpackChunkName: "group-permissionManage"*/'@/views/permissionManage');
import store from '../store/index'

console.log("cons");
export const asyncRouterMap = [
  {
    name: 'permissionManage',
    path: '/permissionManage',
    meta: {
      title: '权限管理',
      require: true,
      keepalive: true
    },
    component: permissionManage
  },
];
let setInclude = (name = '', include = '',keepalive) => {
  if(name !== ''){
    if(keepalive && include === ''){
      store.commit('setCache', /^[^\s]+$/);
    }else if(keepalive && include !== ''){
      store.commit('setCache', name+','+include);
    }else{
      store.commit('setCache', /\s/);
    }
  }
};
Router.beforeEach((to, from, next) => {
  setInclude(to.name, from.meta.include,to.meta.keepalive);
  let token = utlis.getToken();
  console.log(token);
  if (token) {
    //权限验证
    if (!store.state.permissionRoute) {
      store.dispatch('getPermission').then((res) => {
        let permissionList = res.split(',');
        let routeGroup = [];
        for (let i = 0; i < permissionList.length; i++) {
          let item = permissionList[i];
          let route = asyncRouterMap.find((val) => {
            return item === val.name
          });
          if (route) routeGroup.push(route);
        }
        console.log(routeGroup);
        Router.addRoutes(routeGroup);
        store.commit('setPermission', routeGroup);
        next(to)
      }).catch(() => {
        next()
      })
    } else {
      next()
    }
  } else {
    if (to.meta.require) {
      Router.push('/login')
    } else {
      next()
    }
  }
});
export default Router
