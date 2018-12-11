<template>
    <div>
      <bottom-nav value="$route.path"></bottom-nav>
      <router-view></router-view>
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

<style scoped>

</style>
