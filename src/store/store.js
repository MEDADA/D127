import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    system:{
      color:'#009688'
    },
    userInfo:{
      username:String,
      role:String,
      Age:Number,
      gender:String,
      tabs:Array,
      id:String
    },
  },
  mutations:{

  },
  actions:{

  }
})
