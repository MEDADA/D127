<template>
    <div>
        <touch-ripple :speed="1.5" :opacity="0.3" color="#f5f5f5" transtion="ease-out" v-if="!disabled">
            <slot></slot>
        </touch-ripple>
        <slot v-else></slot>
    </div>
</template>

<script>
    // vue-touch-ripple
    import {touchRipple} from 'vue-touch-ripple'
    import 'vue-touch-ripple/dist/vue-touch-ripple.css'

    export default {
        name: "giant-ripple",
        props: {
            'disabled': {
                type: Boolean,
                default: () => false
            }
        },
        components: {
            touchRipple
        }
    }
</script>

<style scoped>
.v-touch-ripple{
    width:100%;
    height:100%;
}
</style>