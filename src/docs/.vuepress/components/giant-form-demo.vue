<template>
    <div>
        <giant-input v-model="val1"></giant-input>
        {{val1}}
        <giant-select v-model="selectVal" :options="option" label="label"></giant-select>
        select:{{selectVal}}
        <giant-select v-model="selectVal2" :options="option2" :props="{label:'label',value:'value'}" multiple></giant-select>
        select:{{selectVal2}}
    </div>
</template>

<script>
    import giantInput from '@/components/giant-input'
    import giantSelect from '@/components/giant-select'
    export default {
        name: "GiantFormDemo",
        data(){
            return {
                val1:'1',
                form:[],
                selectVal:'',
                selectVal2:'',
                option:[
                    {
                        value:'1',
                        label:'是'
                    },
                    {
                        value:'0',
                        label:'否'
                    }
                ],
                option2:[
                    {
                        value:'1',
                        label:'一'
                    },
                    {
                        value:'0',
                        label:'零'
                    },
                    {
                        value:'2',
                        label:'二'
                    },
                    {
                        value:'3',
                        label:'三'
                    }
                ]
            }
        },
        created(){
            this.getMockForm()
        },
        methods:{
            async getMockForm(){
                let res = await this.$api.getMockApiForm();
                if(res.data.code === 200){
                    this.form = res.data.data;
                    console.log(this.form);
                }
            }
        },
        components:{
            giantInput,giantSelect
        }
    }
</script>

<style scoped>

</style>