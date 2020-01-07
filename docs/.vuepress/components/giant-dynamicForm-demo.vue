<template>
    <div>
        <giant-dynamic-form :form="form" :label-width="80"></giant-dynamic-form>
    </div>
</template>

<script>
    import giantDynamicForm from '@/components/giant-dynamic-form'


    export default {
        name: "GiantFormDemo",
        data() {
            return {
                form:[
                    {
                        dom:'input',//dom
                        label:'输入框：',
                        rule:[],//规则
                        required:true, //必填
                        span:12,
                        value:'321',
                        disabled:false
                    },
                    {
                        dom:'textarea',//dom
                        label:'文本域：',
                        rule:[],//规则
                        required:true, //必填
                        span:12,
                        value:'312321',
                        disabled:false
                    },
                    {
                        dom:'select',//dom
                        label:'选择框：',
                        options:[
                            {
                                value:'1',
                                label:'男'
                            },
                            {
                                value:'2',
                                label:'女'
                            }
                        ],
                        prop:'label',
                        rule:[],//规则
                        required:true, //必填
                        span:12,
                        value:null,
                        disabled:false
                    },
                    {
                        dom:'selectMultiple',//dom
                        label:'多选框：',
                        options:[
                            {
                                value:'1',
                                label:'男'
                            },
                            {
                                value:'2',
                                label:'女'
                            }
                        ],
                        prop:'label',
                        rule:[],//规则
                        required:true, //必填
                        span:12,
                        value:[],
                        disabled:false
                    },
                    {
                        dom:'switch',
                        label:'开关',
                        value:true,
                        rule:[],//规则
                    },
                    {
                        dom:'radio',
                        label:'性别',
                        options:['男','女'],
                        value:'男',
                        rule:[],//规则
                    }
                ]
            }
        },
        created() {

        },
        methods: {

        },
        components: {
            giantDynamicForm
        }
    }
</script>

<style scoped>

</style>