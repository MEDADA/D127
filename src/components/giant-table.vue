<template>
    <table class="giant-table">
        <thead style="display:flex;">
            <tr style="flex:1;" v-for="tr in tableColumns">{{tr.label}}</tr>
        </thead>
        <graggable
                :list="list"
                tag="div"
                @change="_change"
                :group="group"
                class="giant-table-tbody"
                ghostClass="ghost"
                :animation="200"
                >
            <tr v-for="(row,index) in list" :key="index" class="giant-table-tr">
                <td v-for="(tr,tdInd) in tableColumns" :key="tdInd" style="flex:1;">
                    <span>{{row[tr.prop]}}</span>
                </td>
                <slot :row="row" v-if="$slots"></slot>
            </tr>
            <div
                    slot="footer"
            >
                <div class="giant-table-nodata"
                     v-if="!list || list && list.length === 0"
                >
                    暂无数据
                </div>
            </div>
        </graggable>
        <slot name="footer"></slot>
    </table>
</template>

<script>
    import graggable from 'vuedraggable'

    export default {
        name: "giant-table",
        props: {
            'list': {
                type: Array,
                default: () => []
            },
            'group': {
                type: String,
                default: ''
            },
            'column': {
                type: Array,
                default: () => []
            },
            'control': {
                type: String,
                default: () => ''
            }
        },
        data() {
            return {
                tableColumns:[],
                columnLength:0
            }
        },
        mounted(){
            if(this.$slots.default){
                let slots = this.$slots.default;
                console.log(slots);
                this.tableColumns = slots.map((i)=>{
                    if(i.componentOptions && i.componentOptions.tag === 'giant-table-column'){
                        if(i.componentOptions.propsData){
                            return i.componentOptions.propsData
                        }else{
                            return ''
                        }
                    }
                }).filter(i=>typeof i !== 'undefined');
                console.log(this.tableColumns);
            }
        },
        methods: {
            _change(e) {
                this.$emit('change', e)
            }
        },
        components: {
            graggable
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/giant-ui';
</style>