<template>
    <div class="giant-input-wrap">
        <div class="giant-select">
            <multi-select
                    :value="value"
                    :options="options"
                    @input="_input"
                    :close-on-select="!multiple"
                    :multiple="multiple"
                    :searchable="search"
                    :label="props.label"
                    :track-by="props.value"
                    :placeholder="placeholder"
            ></multi-select>
        </div>
        <transition name="fade">
            <div class="giant-input-error" v-if="errorText !== ''">
                {{errorText}}
            </div>
        </transition>
    </div>
</template>

<script>
    import multiSelect from 'vue-multiselect'

    export default {
        name: "giant-select",
        data() {
            return {
                errorText: ''
            }
        },
        props: {
            'value': {
                default: ''
            },
            'label': {
                type: String,
                default: ''
            },
            props: {
                type: Object,
                default: () => {
                    return {
                        label: 'label', value: 'value'
                    }
                }
            },
            options: {
                type: Array,
                default: () => []
            },
            multiple: {
                type: Boolean,
                default: () => false
            },
            search: {
                type: Boolean,
                default: () => false
            },
            placeholder: {
                type: String,
                default: '请选择'
            }
        },
        methods: {
            _input(e) {
                console.log(e);
                this.$emit('input', e);
                if (this.$parent.fieldValidate) {
                    this.fieldValidate()
                }
            },
            fieldValidate: _.debounce(function () {
                this.$parent.fieldValidate()
            }, 500, {leading: true}),
        },
        components: {
            multiSelect
        }
    }
</script>

<style scoped lang="scss">
    @import '~vue-multiselect/dist/vue-multiselect.min.css';
    @import "../assets/css/giant-ui.scss";

</style>