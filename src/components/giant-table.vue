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
                    <giant-table-column :render="tr.render" :row="{row,index}" :value="row[tr.prop]"></giant-table-column>
                </td>
            </tr>
            <div slot="footer">
                <div class="giant-table-nodata" v-if="!list || list && list.length === 0">
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
                tableColumns: [],
                columnLength: 0,
                fixedRender: {
                    render: function (createElement) {
                        return createElement('div', '你好！！！')
                    }
                }
            }
        },
        mounted() {
            if (this.$slots.default) {
                let slots = this.$slots.default;
                console.log(slots);
                this.tableColumns = slots.map((i) => {
                    if (i.tag === 'giant-table-column') {
                        let row = {};
                        if (i.data.attrs) {
                            row = i.data.attrs
                        }
                        if (i.data.scopedSlots && i.data.scopedSlots.scope) {
                            row.render = i.data.scopedSlots.scope;
                        }
                        return row
                    }
                }).filter(i => typeof i !== 'undefined');
                console.log(this.tableColumns);
            }
        },
        methods: {
            _change(e) {
                this.$emit('change', e)
            }
        },
        components: {
            graggable,
            giantTableColumn: {
                functional: true,
                props: {
                    'prop': {
                        type: String,
                        default: ''
                    },
                    'label': {
                        type: String,
                        default: ''
                    },
                    'width': {
                        type: String,
                        default: ''
                    },
                    'align': {
                        type: String,
                        default: 'left'
                    },
                    'fixed': {
                        type: String,
                        default: ''
                    },
                    'render': {},
                    'row': {},
                    'value': {}
                },
                render: (h, ctx) => {//判断内部是否有slot 如果有则用slot 否则用默认值显示
                    if (ctx.props.render) {
                        return ctx.props.render(ctx.props.row);
                    } else if (ctx.props.value) {
                        return h('span', ctx.props.value)
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/giant-ui';
</style>