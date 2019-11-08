// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import instance from './http/http.js';
import store from './store/store';
import MuseUI from 'muse-ui';
import EventBus from './EventBus'
import 'muse-ui/dist/muse-ui.css';
import './assets/css/animation.css';
import api from './http/api'
import Utlis from './utlis'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.use(MuseUI);
Vue.use(EventBus);
Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.config.productionTip = false;
Vue.prototype.$axios = instance;
Vue.prototype.$api = api;
Vue.prototype.$utlis = Utlis;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
