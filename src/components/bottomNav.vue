<template>
  <div class="bottom-nav">
    <mu-bottom-nav :value.sync="shift" shift>
      <mu-bottom-nav-item :to="n.path" :replace="true" :value="n.value" :title="n.title"
                          v-for="(n,index) in $store.state.nav"
                          :key="index" :class="['iconfont',n.icon]"></mu-bottom-nav-item>
    </mu-bottom-nav>
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

<style scoped>
  .bottom-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999
  }

  .iconfont {
    font-size: 1.5rem;
    line-height: 1.2rem;
  }

  .mu-bottom-nav {
    height: auto;
  }
</style>
