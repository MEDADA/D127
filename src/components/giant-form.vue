<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "giant-form",
        props: {
            'form': {
                type: Object,
                default: () => {

                }
            }
        },
        methods: {
            validate() {
                console.log(this);
                let children = this.$children,
                    validateError = false;
                if (children && children.length > 0) {
                    children.forEach(value => {
                        if (value.fieldValidate) {
                            let validateField = value.fieldValidate();
                            if (validateField) validateError = true;
                        }
                    })
                }
                return new Promise((resolve, reject) => {
                    !validateError ? resolve() : reject();
                })
            }
        }
    }
</script>

<style scoped>
</style>