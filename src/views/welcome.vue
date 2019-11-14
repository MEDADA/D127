<template>
    <div>
      <transition name="blowUp">
        <div class="welcome-bg" v-if="show" @click="$router.push('/')"></div>
      </transition>

      <div class="button" @click="show = !show">Start</div>
    </div>
</template>

<script>
    export default {
        name: "welcome",
      data(){
          return {
            show:true
          }
      }
    }
</script>

<style scoped>
.welcome-bg{
  width:100vw;
  height:100vh;
  left:0;
  top:0;
  bottom:0;
  right:0;
  background: url('../assets/ui/welcome/wallhaven-717496.png') center center  no-repeat;
  -webkit-background-size:auto 100%;
  background-size:auto 100%;
  overflow:hidden;
}
  .button{
    position:absolute;
    left:0;
    bottom:10vh;
    width:60vw;
    margin-left:20vw;
    height:40px;
    display:block;
    line-height: 40px;
    text-align: center;
    color:orange;
    border:1px solid orange;
    font-size:1rem;
    font-weight:bold;
    cursor:pointer;
  }

.blowUp-enter-active, .blowUp-leave-active {
  transition: all 2s;
}
.blowUp-enter, .blowUp-leave-to {
  transition: all 2s;
  background-size:auto 300%;
}
</style>
