import giantButton from '../components/giant-button'
import giantRipple from '../components/giant-ripple'
import giantTable from '../components/giant-table'
import giantSwitch from '../components/giant-switch'
import giantInput from '../components/giant-input'
import giantForm from '../components/giant-form'
import giantFormItem from '../components/giant-form-item'
import giantRow from '../components/giant-row'
import giantCol from '../components/giant-col'
import giantDialog from '../components/giant-dialog'
import giantDynamicForm from '../components/giant-dynamic-form'
import VModal from 'vue-js-modal'
let giantUI = {};

giantUI.install = function (Vue, options) {
    Vue.component(giantButton.name,giantButton);
    Vue.component(giantRipple.name,giantRipple);
    Vue.component(giantTable.name,giantTable);
    Vue.component(giantInput.name,giantInput);
    Vue.component(giantSwitch.name,giantSwitch);
    Vue.component(giantForm.name,giantForm);
    Vue.component(giantFormItem.name,giantFormItem);
    Vue.component(giantRow.name,giantRow);
    Vue.component(giantCol.name,giantCol);
    Vue.component(giantDialog.name,giantDialog);
    Vue.component(giantDynamicForm.name,giantDynamicForm);


    Vue.use(VModal, {
        dialog:true
    });

};

export default giantUI