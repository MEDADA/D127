<template>
    <div>
        <giant-modal name="FooModal" :width="dialogOptions.width" :height="dialogOptions.height" @before-close="beforeClose">
            <div class="dialog-wrap">
                <div class="dialog-header">
                    <slot name="header"></slot>
                </div>
                <div class="dialog-main">
                    <slot></slot>
                </div>
                <div class="dialog-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </giant-modal>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VModal from 'vue-js-modal'
    Vue.use(VModal,{
        componentName:'giant-modal',
        dynamic: true,
        dynamicDefaults: {
            title: ''
        }
    });
    export default {
        name: "giant-dialog",
        data() {
            return {
                dialogOptions:{
                    height:300,
                    width:'90%'
                }
            }
        },
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
        watch: {
            show: function (value) {
                value ? this.handleShow() : this.handleHide()
            }
        },
        methods: {
            handleShow() {
                this.$modal.show('FooModal')
            },
            handleHide() {
                this.$modal.hide('FooModal')
            },
            beforeClose() {
                this.$emit('update:show', false);
                this.$emit('beforeClose')
            }
        }
    }
</script>

<style scoped lang="scss">
    .dialog-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height:100%;
    }

    .dialog-header {
        line-height: 40px;
        height: 40px;
        font-size: 1rem;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }

    .dialog-main {
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }

    .dialog-footer {
        display:flex;
        justify-content: space-between;
        padding:10px 15px;
        border-top:1px solid rgba(0,0,0,0.1);
        button{
            min-width:50px;
        }
    }
</style>