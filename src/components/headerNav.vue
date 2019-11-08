<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="$router.go('-1')" v-if="back">
        <span class="iconfont icon-fanhui"></span>
      </mu-button>
      <span v-if="title">
        {{title}}
      </span>
      <slot></slot>
      <mu-button icon slot="right" v-if="menu" @click="menuHandle">
        <span class="iconfont icon-gengduo"></span>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
  export default {
    name: "headerNav",
    props: {
      'title': {
        default: '',
        type: String
      },
      back: {
        default: () => {
          return false
        },
        type: Boolean
      },
      menu: {
        default: () => {
          return false
        },
        type: Boolean
      }
    },
    methods:{
      menuHandle(){
        this.$emit('menuClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  .mu-appbar {
    height: 3rem;
    line-height: 3rem;
  }

  .mu-appbar-title {
    line-height: 3rem;
    font-size: 1rem;
  }
</style>
