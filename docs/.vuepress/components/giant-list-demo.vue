<template>
    <div>
        <giant-list>
            <giant-list-item link v-for="(item,index) in list" :key="index">
                <template slot="label" v-if="item.avatar">
                    <div>
                        <img :src="item.avatar" width="50px" height="50px">
                    </div>
                </template>
                <div>
                    <div>{{item.username}}</div>
                    <div>{{item.description | filterStringEllipsis}}</div>
                </div>
            </giant-list-item>
        </giant-list>
    </div>
</template>

<script>
    import giantList from '@/components/giant-list'
    import giantListItem from '@/components/giant-list-item'
    export default {
        name: "giant-list-demo",
        data(){
            return{
                list:[
                    {
                        username:'123',
                        description:'32112312asjdflkjefoiwjaofij12jedioj12doij21iodj1io2jdio12j314123'
                    },
                    {
                        username:'123',
                        description:'321'
                    },
                    {
                        username:'123',
                        description:'321'
                    },
                    {
                        username:'123',
                        description:'321'
                    }
                ]
            }
        },
        created(){

        },
        methods:{

        },
        filters:{
            filterStringEllipsis:function (val) {
                if(typeof val === 'string' && val.length > 35){
                    return val.substring(0,35) + '...'
                }else{
                    return val
                }
            }
        },
        components:{
            giantList,
            giantListItem
        }
    }
</script>

<style scoped lang="scss">
    .giant-list{
        overflow:hidden;
        .giant-list-row{
            padding:5px 10px;
            border-bottom:1px solid rgba(100,100,100,0.1)
        }
    }
</style>