<template>
    <div>
        <multi-select
                :value="value"
                :options="options"
                @input="_input"
                :close-on-select="!multiple"
                :multiple="multiple"
                :searchable="search"
                :label="props.label"
                :track-by="props.value"
        ></multi-select>
    </div>
</template>

<script>
    import multiSelect from 'vue-multiselect'

    export default {
        name: "giant-select",
        data() {
            return {}
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
            }
        },
        methods: {
            _input(e) {
                console.log(e);
                this.$emit('input', e)
            }
        },
        components: {
            multiSelect
        }
    }
</script>

<style scoped lang="scss">
    @import '~vue-multiselect/dist/vue-multiselect.min.css';

    .giant-select {
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        margin: 0;
        transition: all .2s;

        &:focus {
            border-color: rgba(135, 206, 250, 0.5);
            box-shadow: 0 0 5px 1px rgba(135, 206, 250, 0.5)
        }
    }
</style>