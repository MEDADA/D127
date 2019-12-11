import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/index'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    system:{
      color:'#272733',
      colorValue:'#ccc',
      colorLabel:'#999'
    },
    cacheRoutes:'',
    nav: [
      {
        value: 'app',
        title: 'home',
        icon: 'icon-app',
        path: '/home'
      }, {
        value: 'goodsList',
        title: 'goodsList',
        icon: 'icon-list',
        path: '/goodsList'
      }, {
        value: 'friends',
        title: 'friends',
        icon: 'icon-shouciliuchenghaoyouicon',
        path: '/friends'
      }, {
        value: 'user',
        title: 'user',
        icon: 'icon-user',
        path: '/user'
      }
    ],
    permissionRoute:null,
    userInfo:{

    },
  },
  mutations:{
    getNav(state,value){
      state.nav = value;
    },
    setPermission(state,value){
      state.permissionRoute = value;
    },
    setUserDetail(state,value){  //用户登录缓存信息
      state.userInfo = value;
      window.localStorage.setItem('127UserInfo',JSON.stringify(value));
    },
    getUserDetail(state){
      if(!state.userInfo.id){
        let LSUserInfo = JSON.parse(window.localStorage.getItem('127UserInfo'));
        if(LSUserInfo){
          this.commit('setUserDetail',LSUserInfo);
        }
      }
    },
    setCache(state,value){
      state.cacheRoutes = value;
    }
  },
  actions:{
    async getPermission(){
      let res = await Api.getPermission();
      return new Promise((resolve, reject)=>{
        resolve(res.data.permissionKeys)
      })
    }
  }
})
