<template>
    <div class="giant-row" :style="{'text-align':align,justify}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "giant-row",
        data() {
            return {
                user:'user'
            }
        },
        props:{
            gutter:{  //列间距
                default:0,
                type:Number
            },
            align:{
                default:'left',
                type:String
            },
            justify:{
                default:'start',
                type:String
            }
        }
    }
</script>

<style scoped>
.giant-row{
    display:flex;
    flex-wrap:wrap;
}
</style>