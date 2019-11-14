<template>
    <div>
      <bottom-nav value="$route.path"></bottom-nav>
      <keep-alive :include="$store.state.cacheRoutes">
        <router-view class="scroll"></router-view>
      </keep-alive>
    </div>
</template>

<script>
  import bottomNav from '../components/bottomNav'
    export default {
        name: "home",
        components:{
          'bottom-nav':bottomNav
        }
    }
</script>

<style>

</style>
