<template>
    <div>
        <giant-form ref="ruleForm" :form="ruleForm">
            <giant-form-item label="文本框" prop="val1" :rule="[{required:true},{validate:(val)=>/[0-9]$/.test(val),trigger:'change'}]">
                <giant-input
                        v-model="ruleForm.val1"></giant-input>
            </giant-form-item>
            <giant-form-item label="switch"
                             :rule="[{required:true}]">
                <giant-switch
                    v-model="ruleForm.switch1"></giant-switch>
                {{ruleForm.switch1}}
            </giant-form-item>
            <giant-form-item label="radio1"
                             :rule="[{required:true}]">
                <giant-radio
                    v-model="ruleForm.radio1" label="男"></giant-radio>
                <giant-radio
                    v-model="ruleForm.radio1" label="女"></giant-radio>
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
                        label="label">
                </giant-select>
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
        <pre>
            <code>
                {{ruleForm}}
            </code>
        </pre>
    </div>
</template>

<script>
    import giantInput from '@/components/giant-input'
    import giantButton from '@/components/giant-button'
    import giantSelect from '@/components/giant-select'
    import giantSwitch from '@/components/giant-switch'
    import giantRadio from '@/components/giant-radio'
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
                    radio1:'女',
                    switch1:true
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

        },
        methods: {
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
            giantInput, giantSelect, giantForm, giantFormItem,giantButton,giantSwitch,giantRadio
        }
    }
</script>

<style scoped>

</style>