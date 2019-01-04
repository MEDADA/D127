<template>
  <div id="app">
    <keep-alive v-if="!$route.meta.cache">
      <router-view />
    </keep-alive>
    <router-view v-if="$route.meta.cache"/>
  </div>
</template>

<script>
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

