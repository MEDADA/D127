// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import instance from './http/http.js';
import store from './store/store'
import MuseUI from 'muse-ui';


import 'muse-ui/dist/muse-ui.css';
import './assets/css/animation.css';
Vue.use(MuseUI);

Vue.config.productionTip = false
Vue.prototype.$axios =instance;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
