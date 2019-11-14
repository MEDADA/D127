<template>
    <div>
      <header-nav style="z-index:999;"></header-nav>
      <div class="scroll">
        
      </div>
      <div class="bottom-handle">
        <div class="bottom-input">
          <input type="text" class="bottom-target-input">
        </div>
        <mu-button icon><span class="iconfont icon-xiaoxi"></span></mu-button>
      </div>
    </div>
</template>

<script>
  import headerNav from '@/components/headerNav'
    export default {
        name: "chatRoom",
      data(){
          return{

          }
      },
      components:{
        'header-nav':headerNav
      }
    }
</script>

<style scoped lang="scss">
  @import "../assets/css/var";
  .bottom-handle{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:2.5rem;
    background-color: $bgColor;
    display:flex;
    padding:0 15px;
    justify-content: space-between;
    align-items:center;
    color:$textColor;
  }
  .bottom-input{
    height:1.5rem;
    border:1px solid $borderColor;
    background: $bgColor;
    flex:1;
  }
  .bottom-target-input{
    height:1.5rem;
    line-height: 1.5rem;
    font-size:0.75rem;
    border:0;
    background: transparent;
    outline: none;
    width:100%;
    border-radius:2px;
    color:$textColor;
  }
</style>
