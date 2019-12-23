import  VueHighlightJS  from  'vue-highlight.js';
import  'highlight.js/styles/dark.css';
import '../../../mock/index'
import api from "@/api";
export  default ({
                     Vue,
                 }) => {
    Vue.use(VueHighlightJS);
    Vue.prototype.$api = api;
}