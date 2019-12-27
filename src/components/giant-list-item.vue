<template>
    <div>
        <div class="giant-list-row">
            <div class="giant-list-row-item" v-if="label">
                <slot name="label">
                    {{label}}
                </slot>
            </div>
            <div class="giant-list-row-item giant-list-row-item-main">
                <slot></slot>
            </div>
            <div class="giant-list-row-item giant-list-row-item-right">
                <slot name="value">
                    {{value}}
                </slot>
                <giant-button icon v-if="link">
                    <i class="giant-icon giant-icon-arrow-right"></i>
                </giant-button>
            </div>

        </div>
    </div>
</template>

<script>
    import giantButton from './giant-button'
    export default {
        name: "giant-list-item",
        data(){
            return {
                list:[]
            }
        },
        props:{
            'label':{
                default:'',
                type:String
            },
            'value':{
                default:'',
                type:String
            },
            'link':{
                default:false,
                type:Boolean
            }
        },

        methods:{

        },
        components:{
            giantButton
        }
    }
</script>

<style scoped lang="scss">
    .giant-list-row {
        padding: 10px 15px;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
        display:flex;
        justify-content: space-between;
        .giant-list-row-item{
            display:flex;
            padding-right:5px;
            &:last-child{
                padding-right:0;
            }
        }
        .giant-list-row-item-main{
            flex:1;
        }
        .giant-icon{
            font-size:1.25rem;
        }
    }
    .giant-list-row-item-right{
        text-align: right;
        display:flex;
        align-items:center;
    }
</style>