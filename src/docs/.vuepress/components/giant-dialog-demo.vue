<template>
    <div>
        <giant-button type="primary" @click="show">Popup Open</giant-button>
        <giant-dialog :show.sync="dialogShow">
            <template v-slot:header>title</template>
            <giant-list>
                <giant-list-item v-for="(item,index) in list" :label="item.username" :value="item.date" :key="index">
                </giant-list-item>
            </giant-list>
            <template v-slot:footer>
                <giant-button>确定</giant-button>
                <giant-button>取消</giant-button>
            </template>
        </giant-dialog>
    </div>
</template>

<script>
    //Giant UI
    import Vue from 'vue'

    import VModal from 'vue-js-modal'
    Vue.use(VModal,{
        componentName:'giant-modal',
        dynamic: true,
        dynamicDefaults: {
            title: ''
        }
    });
    import GiantButton from '@/components/giant-button'
    import GiantDialog from '@/components/giant-dialog'
    import GiantList from '@/components/giant-list'
    import GiantListItem from '@/components/giant-list-item'
    export default {
        name: "PopupDemo",
        data(){
            return {
                dialogShow:false,
                list:[]
            }
        },
        created(){
            // this.testMockApi()
        },
        methods:{
            show(){
                this.dialogShow = true;
            },
            async testMockApi() {
                let res = await this.$api.testMockApi({
                    id:1
                });
                this.list = res.data.data;
                console.log(res.data);
            }
        },
        components:{
            GiantButton,GiantDialog,GiantListItem,GiantList
        }
    }
</script>

<style scoped>

</style>