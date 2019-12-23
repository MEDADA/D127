import giantButton from '../components/giant-button'
import giantRipple from '../components/giant-ripple'
import giantTable from '../components/giant-table'
import giantTableColumn from '../components/giant-table-column'
import giantInput from '../components/giant-input'
import giantForm from '../components/giant-form'
import giantFormItem from '../components/giant-form-item'

let giantUI = {};

giantUI.install = function (Vue, options) {
    Vue.component(giantButton.name,giantButton);
    Vue.component(giantRipple.name,giantRipple);
    Vue.component(giantTable.name,giantTable);
    Vue.component(giantTableColumn.name,giantTableColumn);
    Vue.component(giantInput.name,giantInput);
    Vue.component(giantForm.name,giantForm);
    Vue.component(giantFormItem.name,giantFormItem);

};

export default giantUI