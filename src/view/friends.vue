<template>
    <div>
      <div class="list-media">
        <div class="list-media-item" v-for="(f,index) in friends" :key="index">
          <div class="list-media-img">
            <img :src="f.img">
          </div>
          <div class="list-media-info">
            <div class="list-media-title" v-text="f.name"></div>
            <div class="list-media-msg">您有一个条信息...</div>
          </div>
          <div class="list-media-handle">
            <mu-button icon><span class="iconfont icon-xiaoxi"></span></mu-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "friends",
        data(){
          return{
            friends:[
              {
                img:require('../assets/img/timg (2).jpg'),
                name:'DADA'
              },
              {
                img:require('../assets/img/timg.jpg'),
                name:'小米666'
              },
              {
                img:require('../assets/img/timg (1).jpg'),
                name:'安其拉很强大'
              },
              {
                img:require('../assets/img/timg (1).jpg'),
                name:'安其拉很强大'
              },
              {
                img:require('../assets/img/timg (1).jpg'),
                name:'安其拉很强大'
              },
              {
                img:require('../assets/img/timg (1).jpg'),
                name:'安其拉很强大'
              },
              {
                img:require('../assets/img/timg (1).jpg'),
                name:'安其拉很强大'
              }
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
.list-media{
  background-color: $bgColor;
  color:$textColor;
  height:100%;
}
.list-media-item{
  display:flex;
  border-bottom:1px solid $borderColor;
  justify-content: space-between;
  padding:10px 0;
}
.list-media-img{
  display:block;
  border-radius:100%;
  width:3rem;
  height:3rem;
  margin:0 15px;
  img{
    width:100%;
    height:100%;
  }
  overflow:hidden;
}
.list-media-msg{
  font-size:0.625rem;
  color:$subTitleColor;
}
.list-media-info{
  flex:1;
}
.list-media-handle{
  width:3rem;
  height:3rem;
  line-height: 3rem;
  margin:0 15px;
  text-align: right;
  .iconfont{
    font-size:1.25rem;
  }
}
</style>
