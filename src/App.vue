<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<style>

</style>
<script>
  import permission from './router/permission'
  export default {
    name: "app",
    data(){
      return {}
    }
  }
</script>