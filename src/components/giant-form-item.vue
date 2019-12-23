<template>
    <div class="giant-form-item">
        <span v-if="label !== ''" class="giant-form-item-label">
            <span class="giant-red-star" v-if="rule.required || rule.find(i=>i.required)"></span>
            {{label}}
        </span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "giant-form-item",
        data() {
            return {
               required:false
            }
        },
        props: {
            'rule': {
                default: () => {}
            },
            'prop': {
                type: String,
                default: ''
            },
            'label':{
                type:String,
                default:''
            }
        },
        methods: {
            fieldValidate() {  //校验字段
                let form = this.$parent.form;
                let prop = this.prop;
                if (form && prop !== '') {
                    let value = this.$parent.form[this.prop];
                    let rule = this.rule;
                    let result = false;
                    if (Array.isArray(rule)) {
                        result = rule.find(i => {
                            return this.validationError(i, value)
                        }) || false;
                    } else if (typeof rule === 'object') {
                        result = this.validationError(rule, value);
                    }
                    if(!!result) {
                        if( this.$children[0] ){
                            this.$set(this.$children[0],'errorText','请检查字段')
                        }
                        console.warn('validation error:'+prop);
                    }else{
                        if( this.$children[0] ){
                            this.$set(this.$children[0],'errorText','')
                        }
                    }
                    return result;
                }
            },
            validationError(rule, value) {  //验证错误  have error return true
                if (rule.required) {
                    switch (typeof value) {
                        case 'string':
                            if(value === '')return true;
                            break;
                        case 'object':
                            if(!value || value.length === 0) return true;
                            break;
                        default:
                            return true;
                    }
                }
                if(typeof rule.validate === 'function'){
                    return !rule.validate(value)
                }
                return false;
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../assets/css/giant-ui';
</style>