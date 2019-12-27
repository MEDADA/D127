<template>
    <modal
            name="giant-dialog"
            :width="dialogOptions.width"
            :height="dialogOptions.height"
            :scrollable="dialogOptions.scrollable"
            :transition="dialogOptions.transition"
            @before-close="beforeClose">
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
    </modal>
</template>

<script>

    export default {
        name: "giant-dialog",
        data() {
            return {
                dialogOptions: {
                    height: 300,
                    width: '90%',
                    scrollable: true,
                    transition:'pop-out'
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
                this.$modal.show('giant-dialog')
            },
            handleHide() {
                this.$modal.hide('giant-dialog')
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
        height: 100%;
    }

    .dialog-header {
        line-height: 40px;
        height: 40px;
        font-size: 1rem;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }

    .dialog-main {
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        height: 100%;

        &::-webkit-scrollbar {
            display: none;
        }

    }

    .dialog-footer {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);

        button {
            min-width: 50px;
        }
    }
    .pop-out-enter-active,
    .pop-out-leave-active {
        transition: all 0.5s;
    }
    .pop-out-enter,
    .pop-out-leave-active {
        opacity: 0;
        transform: translateY(24px);
    }
</style>