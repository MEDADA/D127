<template>
    <div>
        <div class="swiper-container giant-demo-nav">
            <div class="swiper-wrapper">
                <div v-for="item,index in demoList"
                     :key="index"
                     :class="['swiper-slide',' giant-demo-slide',{'giant-demo-slide-active':$route.path === item.componentPath}]"
                     @click="$route.path !== item.componentPath ? $router.push(item.componentPath) : false"
                >
                    <span>{{item.title}}</span>
                </div>
            </div>
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepalive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepalive"/>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "giantUI",
        data() {
            return {
                demoList: [
                    {
                        title: '按钮',
                        componentPath: '/buttonDemo'
                    },
                    {
                        title: '布局',
                        componentPath: '/layoutDemo'
                    },
                    {
                        title: '弹出层',
                        componentPath: '/popupDemo'
                    },
                    {
                        title: '表单',
                        componentPath: '/GiantFormDemo'
                    },
                    {
                        title: '列表',
                        componentPath: '/GiantListDemo'
                    },
                    {
                        title: '表格',
                        componentPath: '/GiantTableDemo'
                    }
                ]
            }
        },
        created() {

        },
        mounted(){
            this._initSwiper()
        },
        methods:{
            _initSwiper(){
                new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    freeMode: true,  //抵抗反弹
                    slidesPerView: 5
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../node_modules/swiper/swiper.scss";
    .giant-demo-nav {
        height: 3rem;
        border-bottom:1px solid #ccc;
    }

    .giant-demo-slide{
        text-align: center;
        line-height: 3rem;

    }
    .giant-demo-slide-active{
        background-color: #333;
        color:#fff;
    }
</style>