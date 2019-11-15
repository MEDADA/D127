import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// api
import api from './api/index'
//muse UI
import MuseUI from 'muse-ui'
import Loading from 'muse-ui-loading';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
Vue.use(MuseUI);

//VueLazyload
import VueLazyload from 'vue-lazyload'

//vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;


Vue.use(Loading);
Vue.use(VueLazyload);
Vue.prototype.$api = api;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
