import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// lodash
import _ from 'lodash'
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
import '../mock/index'
Vue.use(Vant);
//Giant UI
import VModal from 'vue-js-modal'
Vue.use(VModal,{
    componentName:'giant-modal',
    dynamic: true,
    dynamicDefaults: {
        title: ''
    }
});
Vue.config.productionTip = false;


Vue.use(Loading);
Vue.use(VueLazyload);
Vue.prototype.$api = api;
Vue.prototype._ = _;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
