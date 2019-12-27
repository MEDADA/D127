<template>
    <div>
        <toggle-button :value="value" @change="_change"></toggle-button>
    </div>
</template>

<script>
    import { ToggleButton } from 'vue-js-toggle-button'
    export default {
        name: "giant-radio",
        data(){
            return{
                rad:true
            }
        },
        props:{
            'value':{
                required:true
            }
        },
        methods:{
            _change(e){
                console.log(e);
                this.$emit('input',e.value)
            }
        },
        components:{
            ToggleButton
        }
    }
</script>

<style scoped>

</style>