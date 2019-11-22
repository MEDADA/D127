<template>
    <div>
        <giant-modal name="FooModal" width="90%" height="300" @before-close="beforeClose">
            Hello,worldgiant-modalgiant-modalgiant-modalgiant-modal
        </giant-modal>
    </div>
</template>

<script>
    import VModal from 'vue-js-modal'
    export default {
        name: "giant-dialog",
        props:{
            show:{
                require,
                type:Boolean
            }
        },
        watch:{
            show:function(value){
                value ? this.handleShow() : this.handleHide()
            }
        },
        methods:{
            handleShow(){
                this.$modal.show('FooModal')
            },
            handleHide(){
                this.$modal.hide('FooModal')
            },
            beforeClose(){
                console.log("close");
                this.$emit('beforeClose')
            }
        },
        components:{
            'foo-modal':VModal
        }
    }
</script>

<style scoped>

</style>