<template>
    <div class="floatHome">
      <div class="header">

      </div>

      <div class="bottom-nav">

      </div>
    </div>
</template>

<script>
    export default {
        name: "floatHome"
    }
</script>

<style scoped>
  .floatHome{
    background-color: #f1f1f1;
  }
.header{
  position:absolute;
  left:0;
  top:0;
  right:0;
  width:100%;

  background-color: #fff;
  border-bottom:1px solid #f1f1f1;
}
  .bottom-nav{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    background-color: #fff;
    height:60px;

  }
</style>
