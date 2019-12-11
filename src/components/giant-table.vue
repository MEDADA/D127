<template>
    <table class="giant-table">
        <thead slot="header" style="display:flex;" role="group" aria-label="Basic example">
        <tr v-for="(title,index) in column" style="flex:1;" :key="index">{{title}}</tr>
        </thead>
        <graggable
                :list="list"
                tag="tbody"
                @change="_change"
                :group="group"
                class="giant-table-tbody"
                ghostClass="ghost"
                :animation="200"
        >
            <transition-group type="transition" name="flip-list">
                <tr v-for="(item,index) in list" :key="index" class="giant-table-tr">
                    <td v-for="title in column" :key="title.name" style="flex:1;">{{item[title]}}</td>
                </tr>
            </transition-group>
        </graggable>
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
            }
        },
        date(){
            return {

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
    .giant-table {
        width:100%;
        .giant-table-tbody{
            padding:0;
        }
        thead {
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            border-top: 1px solid #ccc;
            text-align: left;
            background-color: #f5f5f5;
            transform: translateY(1px);

            tr {
                border-right: 1px solid #ccc;
                padding:10px 5px;
                &:last-child {
                    border-right: 0;
                }
            }

        }

        .giant-table-tr {
            border-bottom: 1px solid #ccc;
            border-top: 1px solid #ccc;
            border-left: 1px solid #ccc;
            display: flex;
            margin-top: -1px;
        }

        td {
            border-right: 1px solid #ccc;
            flex: 1;
            text-align:left;
            display: flex;
            justify-content: start;
            padding:10px 5px;
            transition: transform 0.5s;
        }
    }

    .flip-list-move {
        transition: transform 0.5s;
    }
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
</style>