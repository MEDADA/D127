<template>
    <div>
      <div class="search">
        
      </div>
      <div class="blockHeader">
        <div class="blockTitle">APP</div>
        <div class="blockSubtitle">Full list of apps</div>
      </div>
      <div class="appList">
        <div class="appItem" v-for="(app,index) in appList" @click="$router.push(app.path)" :key="index">
          <div class="appItem-icon">
            <img :src="app.icon" alt="">
          </div>
          <div class="appItem-title" v-text="app.title"></div>
          <div class="appItem-intro" v-text="app.icon"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "appList",
      data(){
          return{
            appList:[
              {
                title:'Pic',
                icon:'',
                intro:'Idea factory',
                path:'/pictureFactory'
              },
              {
                title:'E chart',
                icon:'',
                intro:'chart',
                path:'/chart'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .search{
    
  }
  .blockHeader{
    background-color: #fff;
    padding:10px;
  }
  .blockTitle{
    font-weight:bold;
    text-align: center;
    font-size:1.25rem;
    line-height: 1.25rem;
    color:#333;
  }
  .blockSubtitle{
    color:#666;
    font-size:0.56rem;
    line-height: 0.56rem;
    text-align: center;
    margin-top:10px;
  }
.appList{
  background-color: #f5f5f5;
  display:flex;
}
.appItem{
  width:40vw;
  height:40vw;
  margin:5vw;
  background-color: #fff;
  text-align: center;
}
  .appItem-title{
    font-size:1rem;
    font-weight:bold;
  }
</style>
