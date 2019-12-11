<template>
    <div class="bottom-nav">
        <div
                class="bottom-nav-item"
                :value="n.value"
                v-text="n.title"
                v-for="(n,index) in $store.state.nav"
                @click="$router.push(n.path)"
                :key="index"></div>
    </div>
</template>

<script>
    export default {
        name: "bottomNav",
        data() {
            return {
                shift: ''
            }
        },
        props: ['value'],
        created() {
            let currentPath = this.$route.path;
            let navList = this.$store.state.nav;
            for (let i = 0; i < navList.length; i++) {
                if (navList[i].path.indexOf(currentPath) > -1) {
                    this.shift = navList[i].value;
                    break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .bottom-nav {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        height: 50px;
        display: flex;
        .bottom-nav-item{
            text-align: center;
            flex:1;
        }
    }

    .iconfont {
        font-size: 1.5rem;
        line-height: 1.2rem;
    }
</style>
