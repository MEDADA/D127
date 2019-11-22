<template>
    <div>
<!--        <giant-modal name="giantModal">-->
<!--            giant modalgiant modalgiant modalgiant modal-->
<!--        </giant-modal>-->
        <giant-button type="primary" @click="show">Popup Open</giant-button>
        <giant-dialog :show="dialogShow"></giant-dialog>
    </div>
</template>

<script>
    import GiantButton from '../components/giant-button'
    import GiantDialog from '../components/giant-dialog'
    export default {
        name: "PopupDemo",
        data(){
            return {
                dialogShow:false
            }
        },
        created(){

        },
        methods:{
            show(){
                this.dialogShow = true;
            }
        },
        components:{
            GiantButton,GiantDialog
        }
    }
</script>

<style scoped>

</style>