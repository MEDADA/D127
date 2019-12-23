<template>
    <div>
        <giant-form ref="ruleForm" :form="ruleForm">
            <giant-form-item label="文本框" prop="val1" :rule="[{required:true},{validate:(val)=>/[0-9]$/.test(val),trigger:'change'}]">
                <giant-input
                        v-model="ruleForm.val1"></giant-input>
            </giant-form-item>
            <giant-form-item
                    prop="textarea"
                    label="文本域"
                    :rule="[
                        {required:true}
                    ]">
                <giant-input
                        type="textarea"
                        v-model="ruleForm.textarea"></giant-input>
            </giant-form-item>
            <giant-form-item label="选择框" prop="selectVal" :rule="{required:true}">
                <giant-select
                        v-model="ruleForm.selectVal"
                        :options="option"
                        label="label"></giant-select>
            </giant-form-item>
            <giant-form-item label="多选框" prop="selectVal2" :rule="{required:true}">
                <giant-select
                        v-model="ruleForm.selectVal2"
                        :options="option2"
                        :props="{label:'label',value:'value'}"
                        multiple></giant-select>
            </giant-form-item>
        </giant-form>
        <giant-button @click="formValidate">校验</giant-button>
    </div>
</template>

<script>
    import giantInput from '@/components/giant-input'
    import giantButton from '@/components/giant-button'
    import giantSelect from '@/components/giant-select'
    import giantForm from '@/components/giant-form'
    import giantFormItem from '@/components/giant-form-item'

    export default {
        name: "GiantFormDemo",
        data() {
            return {

                form: [],
                ruleForm:{
                    textarea:'',
                    val1: '1',
                    selectVal: '',
                    selectVal2: '',
                },
                option: [
                    {
                        value: '1',
                        label: '是'
                    },
                    {
                        value: '0',
                        label: '否'
                    }
                ],
                option2: [
                    {
                        value: '1',
                        label: '一'
                    },
                    {
                        value: '0',
                        label: '零'
                    },
                    {
                        value: '2',
                        label: '二'
                    },
                    {
                        value: '3',
                        label: '三'
                    }
                ]
            }
        },
        created() {
            this.getMockForm()
        },
        methods: {
            async getMockForm() {
                let res = await this.$api.getMockApiForm();
                if (res.data.code === 200) {
                    this.form = res.data.data;
                    console.log(this.form);
                }
            },
            formValidate(){
                this.$refs.ruleForm.validate().
                then(()=>{
                    console.log('success')
                }).
                catch(()=>{
                    console.log('error')
                })
            }
        },
        components: {
            giantInput, giantSelect, giantForm, giantFormItem,giantButton
        }
    }
</script>

<style scoped>

</style>