<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<script>
  import permission from './router/permission'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){

  }
}
</script>
<style lang="scss" scoped>
  #app {
    font-family:'Visby CF'
  }
</style>

