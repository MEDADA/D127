<template>
    <div class="giant-col" :style="{
    width:(span / totalSpan) * 100 + '%',
    'marginLeft':(offset / totalSpan) * 100+'%'
    }">
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: "giant-col",
        data() {
            return {
                totalSpan: 24
            }
        },
        props: {
            span: {
                type: Number,
                default:2,
                validator: (value) => {
                    if (value > 0 && value < 24) {
                        return true
                    } else {
                        return false
                    }
                }
            },
            offset: {
                type: Number,
                default: 0,
                validator: (value) => {
                    if(value){
                        if (value > 0 && value < 24) {
                            return true
                        } else {
                            return false
                        }
                    }else{
                        return true
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .giant-col {
        width: 100%;
    }
</style>