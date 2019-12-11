<template>
    <div class="giant-input-wrap">
        <input type="text" :value="value" @input="_input($event)"
               :class="['giant-input',{'giant-input-disabled':disabled}]" :disabled="disabled">
    </div>
</template>

<script>
    export default {
        name: "giant-input",
        data() {
            return {
                val: ''
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
            }
        },
        methods: {
            _input(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style scoped lang="scss">
    .giant-input {
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        height: 100%;
        margin: 0;
        transition:all .2s;
        &:focus {
            border-color: rgba(135,206,250,0.5);
            box-shadow:0 0 5px 1px rgba(135,206,250,0.5)
        }
    }

    .giant-input-disabled {

    }

    .giant-input-focus {
        border-color: #1989fa;
    }
</style>