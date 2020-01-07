<template>
    <giant-form>
        <giant-form-item v-for="(item,index) in form" :key="index" :label="item.label" :labelWidth="labelWidth">
            <dynamic-component
                    :params="item"
            ></dynamic-component>
        </giant-form-item>
    </giant-form>
</template>

<script>
    import giantInput from './giant-input'
    import giantSelect from './giant-select'
    import giantSwitch from './giant-switch'
    import giantRadio from './giant-radio'
    import giantForm from './giant-form'
    import giantFormItem from './giant-form-item'

    export default {
        name: "giant-dynamic-form",
        props: {
            'form': {
                type: Array,
                default: () => []
            },
            'labelWidth':{
                type:Number,
                default:()=>null
            }
        },
        methods: {},
        components: {
            giantInput, giantSelect, giantForm, giantFormItem, giantSwitch, giantRadio,
            'dynamic-component':
                {
                    functional: true,
                    props: {
                        params: {
                            type: Object,
                            default:
                                () => {
                                }
                        }
                    },
                    render(createElement, context) {
                        let params = context.props.params;
                        switch (params.dom) {
                            case "input":
                                return createElement('giant-input', {
                                    attrs: {
                                        value: params.value
                                    },
                                    on: {
                                        input: (e) => {
                                            params.value = e;
                                            console.log('giant-input : input', e);
                                        }
                                    }
                                });
                                case "textarea":
                                return createElement('giant-input', {
                                    attrs: {
                                        value: params.value
                                    },
                                    props:{
                                        type:'textarea'
                                    },
                                    on: {
                                        input: (e) => {
                                            params.value = e;
                                            console.log('giant-input : input', e);
                                        }
                                    }
                                });
                            case "select":
                                return createElement('giant-select', {
                                    attrs: {
                                        value: params.value
                                    },
                                    props: {
                                        options: params.options,
                                        label: 'label'
                                    },
                                    on: {
                                        input: (e) => {
                                            params.value = e;
                                            console.log('giant-input : input', e);
                                        }
                                    }
                                });
                                case "selectMultiple":
                                return createElement('giant-select', {
                                    attrs: {
                                        value: params.value
                                    },
                                    props: {
                                        options: params.options,
                                        label: 'label',
                                        multiple:true
                                    },
                                    on: {
                                        input: (e) => {
                                            params.value = e;
                                            console.log('giant-input : input', e);
                                        }
                                    }
                                });
                            case "switch":
                                return createElement('giant-switch', {
                                    attrs: {
                                        value: params.value
                                    },
                                    props: {},
                                    on: {
                                        input: (e) => {
                                            params.value = e;
                                            console.log('giant-input : input', e);
                                        }
                                    }
                                });
                            case "radio":
                                let radioGroup = [];
                                if(params.options){
                                    radioGroup = params.options.map((i)=>{
                                        return createElement('giant-radio',{
                                            props:{
                                                label:i
                                            },
                                            attrs: {
                                                value: params.value
                                            },
                                            on: {
                                                input: (e) => {
                                                    params.value = e;
                                                    console.log('giant-input : input', e);
                                                }
                                            }
                                        })
                                    })
                                }
                                return createElement('div', {
                                    class:{
                                        'giant-input-wrap':true
                                    }
                                },radioGroup)
                        }
                    }
                }
        }
    }
</script>

<style scoped>

</style>