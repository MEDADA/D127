<template>
    <div>
      <bottom-nav value="$route.path"></bottom-nav>
      <router-view class="scroll"></router-view>
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
