<template>
    <div>
        <giant-button type="primary" @click="show">Popup Open</giant-button>
        <giant-dialog :show.sync="dialogShow">
            <template #header>title</template>
            <giant-list>
                <giant-list-item v-for="(item,index) in list" :label="item.username" :value="item.date" :key="index">
                </giant-list-item>
            </giant-list>
            <template #footer>
                <giant-button>确定</giant-button>
                <giant-button @click="dialogShow = false">取消</giant-button>
            </template>
        </giant-dialog>
        <giant-button @click="alertOpen">open alert</giant-button>
        <v-dialog></v-dialog>
    </div>
</template>

<script>
    import GiantButton from '@/components/giant-button'
    import GiantDialog from '@/components/giant-dialog'
    import GiantList from '@/components/giant-list'
    import GiantListItem from '@/components/giant-list-item'
    export default {
        name: "giant-dialog-demo",
        data(){
            return {
                dialogShow:false,
                list:[{
                    username:'123',
                    date:'2019年12月27日10:03:01',
                },{
                    username:'123',
                    date:'2019年12月27日10:03:01',
                },{
                    username:'123',
                    date:'2019年12月27日10:03:01',
                }]
            }
        },
        created(){
        },
        methods:{
            show(){
                this.dialogShow = true;
            },
            alertOpen(){
                this.$modal.show('dialog',{
                    title: 'Alert!',
                        text: 'You are too awesome',
                        buttons: [
                        {
                            title: 'Deal with it',
                            handler: () => { alert('Woot!') }
                        },
                        {
                            title: '',       // Button title
                            default: true,    // Will be triggered by default if 'Enter' pressed.
                            handler: () => {} // Button click handler
                        },
                        {
                            title: 'Close'
                        }
                    ]
                })
            }
        },
        components:{
            GiantButton,GiantDialog,GiantListItem,GiantList
        }
    }
</script>

<style scoped>

</style>