import VueHighlightJS from 'vue-highlight.js';
// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import 'highlight.js/styles/dark.css';
import Giant from '../../src/plugin/giant'
import '../../src/assets/css/giant-ui.scss'
import '../../public/font/iconfont.css'

export default ({
                    Vue,
                }) => {

    Vue.use(Giant);
    console.log(Giant);
    Vue.use(VueHighlightJS,{
        languages:{
            css,javascript,vue
        }
    });
}