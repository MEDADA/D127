<template>
    <td style="flex:1;">
        <slot name="scope" :row="row"></slot>
    </td>
</template>

<script>
    export default {
        name: "giant-table-column",
        data(){
            return {
                row:{}
            }
        },
        props:{
            'prop':{
                type:String,
                default:''
            },
            'label':{
                type:String,
                default:''
            },
            'width':{
                type:String,
                default:''
            },
            'align':{
                type:String,
                default:'left'
            },
            'fixed':{
                type:String,
                default:''
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>