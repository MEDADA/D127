<template>
    <div :class="['giant-input-wrap',{'giant-input-fullWidth':fullWidth}]">
        <input
                v-if="type === 'text'"
                type="text"
                :value="value"
                :class="['giant-input',{'giant-input-disabled':disabled}]"
                :disabled="disabled"
                @input="_input($event)"
                @change="_change"
        />
        <textarea
                v-if="type === 'textarea'" cols="10" rows="3"
                :value="value"
                :class="['giant-input',{'giant-input-disabled':disabled}]"
                :disabled="disabled"
                @input="_input($event)"
                @change="_change"
        ></textarea>
        <transition name="fade">
            <div class="giant-input-error" v-if="errorText !== ''">
                {{errorText}}
            </div>
        </transition>
    </div>
</template>

<script>
    import lodash from 'lodash'
    export default {
        name: "giant-input",
        data() {
            return {
                val: '',
                componentName:'input',
                errorText:''
            }
        },
        props: {
            'value': {
                require: true,
                default: '',
                type: String
            },
            'disabled': {
                default: false,
                type: Boolean
            },
            'fullWidth': {
                default: false,
                type: Boolean
            },
            'type':{
                default:'text',
                type:String,
            }
        },
        methods: {
            _input(e) {
                this.$emit('input', e.target.value);
                console.log('giant-input : input',e.target.value);
                if (this.$parent.fieldValidate) {
                    this.fieldValidate()
                }
            },
            fieldValidate: lodash.debounce(function () {
                this.$parent.fieldValidate()
            }, 500,{leading:true}),
            _change(e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/giant-ui.scss";
</style>