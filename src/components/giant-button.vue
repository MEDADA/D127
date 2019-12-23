<template>
    <button
            @click="handleClick"
            :class="[
                {'giant-button-disabled':disabled},
                _btnClass,
                'giant-button',
                {'giant-button-loading':loading},
                {'giant-button-icon':icon}
                ]">
        <giant-ripple :class="['giant-button-ripple']" :disabled="disabled || loading"></giant-ripple>
        <i class="giant-button-loading-icon giant-icon giant-icon-loading" v-if="loading"></i>
        <slot></slot>
    </button>
</template>

<script>
    import giantRipple from './giant-ripple'
    export default {
        name: "giantButton",
        data() {
            return {
                _type: '',
                btnClass: ''
            }
        },
        methods: {
            handleClick() {
                this.$emit('click')
            }
        },
        props: {
            type: {
                type: String,
                default: () => 'default'
            },
            disabled: {
                type: Boolean,
                default: () => false
            },
            'size': {
                type: String,
                default: 'normal'
            },
            'loading': {
                type: Boolean,
                default: () => false
            },
            'icon':{
                type:Boolean,
                default:()=> false
            }
        },
        computed: {
            _btnClass: function () {
                let type = this.type;
                if (!type || type === '') return '';
                let btnClass = '';
                switch (this.type) {
                    case 'primary':
                        btnClass = 'giant-button-primary';
                        break;
                    case 'info':
                        btnClass = 'giant-button-info';
                        break;
                    case 'warning':
                        btnClass = 'giant-button-warning';
                        break;
                    case 'danger':
                        btnClass = 'giant-button-danger';
                        break;
                }
                return btnClass
            }
        },
        components: {
            giantRipple
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/var.scss';

    .giant-button {
        position:relative;
        background-color: #fff;
        box-shadow: none;
        border: 1px solid #cccccc;
        color: #333;
        height: 36px;
        line-height: 34px;
        border-radius: 4px;
        padding: 0 10px;
        -webkit-user-select: none;
        transition: all .2s ease;
        margin:0;
        outline:none;
    }

    .giant-button-primary {
        background-color: $btnPrimary;
        border-color: transparent;
        color: #fff;
    }

    .giant-button-info {
        background-color: $btnInfo;
        border-color: transparent;
        color: #fff;
    }

    .giant-button-warning {
        background-color: $btnWarning;
        border-color: transparent;
        color: #fff;
    }

    .giant-button-danger {
        background-color: $btnDanger;
        border-color: transparent;
        color: #fff;
    }
    .giant-button-icon{
        border-color: transparent;
        color:#333;
    }
    .giant-button-disabled {
        opacity: 0.5;
    }

    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(360deg)
        }
    }

    @-moz-keyframes rotate {
        from {
            -moz-transform: rotate(0deg)
        }
        to {
            -moz-transform: rotate(359deg)
        }
    }

    @-o-keyframes rotate {
        from {
            -o-transform: rotate(0deg)
        }
        to {
            -o-transform: rotate(359deg)
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(359deg)
        }
    }

    .giant-button-loading {

    }

    .giant-button-loading-icon {
        display: inline-block;
        margin-right: 3px;
        margin-left: 3px;
        font-size: 14px;
        -webkit-animation: rotate 1s linear infinite;
        -moz-animation: rotate 1s linear infinite;
        -o-animation: rotate 1s linear infinite;
        animation: rotate 1s linear infinite;
    }

    .giant-button-ripple{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
    }
</style>