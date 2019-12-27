<template>
    <div>
        <div>基础用法</div>
        <giant-row align="center">
            <giant-col :span="8" class="giant-col-demo">
                span:8
            </giant-col>
            <giant-col :span="8" class="giant-col-demo">span:8</giant-col>
            <giant-col :span="8" class="giant-col-demo">span:8</giant-col>
        </giant-row>

        <giant-row align="center">
            <giant-col :span="4" class="giant-col-demo">span:8</giant-col>
            <giant-col :span="10" :offset="4" class="giant-col-demo">span:10,offset:4</giant-col>
            <giant-col :span="12" :offset="12" class="giant-col-demo">span:12,offset:12</giant-col>
        </giant-row>
    </div>
</template>

<script>
    export default {
        name:'giant-layout-demo',
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>

<style scoped>
.giant-col-demo{
    background-color: skyblue;
    color:#fff;
}
</style>