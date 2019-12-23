import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/dark.css';
import Giant from '../../src/plugin/giant'
import '../../src/assets/css/giant-ui.scss'
export default ({
                    Vue,
                }) => {
    Vue.use(Giant)
    Vue.use(VueHighlightJS)
}