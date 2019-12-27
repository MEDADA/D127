<template>
    <span class="giant-radio" @click="_click">
        <span :class="['giant-radio-inner',{
        'giant-radio-focus':label === value}]">
            <i v-if="label === value"
               style="color:#fff;"
               class="giant-icon giant-icon-duihao"></i>
        </span>
        <span v-if="$slots" style="margin-left:5px;">
            <slot></slot>
        </span>
        <input type="radio" class="giant-radio-original" :value="label">
    </span>
</template>

<script>
    export default {
        name: "giant-radio",
        data(){
            return {
                innerValue:false
            }
        },
        props: {
            'label': {
                type: String,
                default: ''
            },
            'value':{
                type:String,
                default:''
            }
        },
        methods:{
            _click(e){
                this.$emit('input',this.label);
            }
        }
    }
</script>

<style scoped lang="scss">
    .giant-radio {
        position:relative;
        cursor:pointer;
        user-select:none;
        display:flex;
        align-items: center;
        .giant-radio-inner {
            display:inline-block;
            border:1px solid skyblue;
            width:15px;
            height:15px;
            line-height: 15px;
            border-radius:50%;
            text-align: center;
            transition:all .3s ease;
        }
        .giant-radio-focus{
            background-color: skyblue;
        }
        .giant-radio-original{
            outline:none;
            position:absolute;
            opacity:0;
            width:0;
            height:0;
            z-index:-1;
            margin:0;
        }
    }
</style>