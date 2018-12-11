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
  name: 'App'
}
</script>

<style>
#app {
  font-family:'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic'
}
</style>
