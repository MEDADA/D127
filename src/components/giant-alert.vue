<template>
    <div>
        <v-dialog></v-dialog>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VModal from 'vue-js-modal'

    Vue.use(VModal, {
        dialog: true
    });
    export default {
        name: "giant-alert",
        props: {
            show: {
                require,
                type: Boolean
            },
            title: {
                type: String,
                default: () => {
                    return ''
                }
            }
        },
        methods: {
            handleShow() {
                this.$modal.show('dialog', {
                    title: 'Alert!',
                    text: 'You are too awesome',
                    buttons: [
                        {
                            title: 'Deal with it',
                            handler: () => {
                                alert('Woot!')
                            }
                        },
                        {
                            title: '',       // Button title
                            default: true,    // Will be triggered by default if 'Enter' pressed.
                            handler: () => {
                            } // Button click handler
                        },
                        {
                            title: 'Close'
                        }
                    ]
                })
            },
            handleHide() {
                this.$modal.hide('dialog')
            },
            beforeClose() {
                this.$emit('update:show', false);
                this.$emit('beforeClose')
            }
        }
    }
</script>

<style scoped>

</style>