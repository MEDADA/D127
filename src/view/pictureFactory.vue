<template>
    <div>
      <div class="home-header"></div>
      <div class="home-title">Picture Factory</div>
      <div class="list-mode">
        <div class="list-mode-item" v-for="mode in modeList" @click="imgModeChange(mode.value)" :class="{active:imgListMode === mode.value}">
          <!--<mu-icon :value="mode.icon"></mu-icon>-->
          <span v-text="mode.value"></span>
        </div>
      </div>
      <div class="list-img">
        <div class="list-img-mode-waterfall" v-if="imgListMode === 'waterfall'">
          <div class="list-img-left">
            <delay-show>
              <div class="list-img-item" v-for="(img,index) in imgLeftList" :key="img.url" :data-index="index">
                <div class="list-img-item-poster">
                  <img :src="img.url" @click="imgPreview">
                </div>
                <div class="list-img-item-info">
                  <div class="list-img-item-info-left">
                    <div>
                      <span :class="['list-img-item-great','iconfont','icon-heart-outline']"></span>
                    </div>
                    <div>
                      <span v-text="img.greatNum" class="list-img-item-num"></span>
                    </div>
                  </div>
                  <div class="list-img-item-user">
                    <img :src="img.userImg">
                  </div>
                </div>
              </div>
            </delay-show>
          </div>
          <div class="list-img-right">
            <delay-show>
              <div class="list-img-item" v-for="(img,index) in imgRightList" :key="img.url" :data-index="index">
                <div class="list-img-item-poster">
                  <img :src="img.url" @click="imgPreview">
                </div>
                <div class="list-img-item-info">
                  <div class="list-img-item-info-left">
                    <div>
                      <span :class="['list-img-item-great','iconfont','icon-heart-outline']"></span>
                    </div>
                    <div>
                      <span v-text="img.greatNum" class="list-img-item-num"></span>
                    </div>
                  </div>
                  <div class="list-img-item-user">
                    <img :src="img.userImg">
                  </div>
                </div>
              </div>
            </delay-show>
          </div>
        </div>
        <div class="list-img-mode-wide" v-if="imgListMode === 'wide'">
          <delay-show>
            <div class="list-img-item" v-for="(img,index) in imgList" :key="img.url" :data-index="index">
              <div class="list-img-item-poster">
                <img :src="img.url" @click="imgPreview">
              </div>
              <div class="list-img-item-info">
                <div class="list-img-item-info-left">
                  <div>
                    <span :class="['list-img-item-great','iconfont','icon-heart-outline']"></span>
                  </div>
                  <div>
                    <span v-text="img.greatNum" class="list-img-item-num"></span>
                  </div>
                </div>
                <div class="list-img-item-user">
                  <img :src="img.userImg">
                </div>
              </div>
            </div>
          </delay-show>
        </div>
      </div>
      <image-preview :src="previewSrc" :data="previewData" :show="previewShow" @close="closePreview"></image-preview>
    </div>
</template>

<script>
  import delayShow from '@/components/delayShow'
  import imagePreview from '@/components/imagePreview'
    export default {
        name: "pictureFactory",
      data(){
          return{
            previewSrc:'',
            previewData:[],
            previewShow:false,
            imgListMode:'waterfall',
            modeList:[
              {
                icon:'dashboard',
                value:'waterfall'
              },
              {
                icon:'view_agenda',
                value:'wide'
              }
            ],
            imgData:[
              {
                url:require('../assets/img/wallhaven-714985.png'),
                userImg:require('../assets/img/wallhaven-683931.jpg'),
                greatNum:'42'
              },
              {
                url:require('../assets/img/wallhaven-305198.jpg'),
                userImg:require('../assets/img/wallhaven-683989.jpg'),
                greatNum:'42'
              },
              {
                url:require('../assets/img/wallhaven-683931.jpg'),
                userImg:require('../assets/img/wallhaven-712830.png'),
                greatNum:'42'
              },
              {
                url:require('../assets/img/wallhaven-683989.jpg'),
                userImg:require('../assets/img/wallhaven-714985.png'),
                greatNum:'42'
              },
              {
                url:require('../assets/img/wallhaven-712830.png'),
                userImg:require('../assets/img/wallhaven-683165.jpg'),
                greatNum:'42'
              },
              {
                url:require('../assets/img/wallhaven-731803.png'),
                userImg:require('../assets/img/wallhaven-683165.jpg'),
                greatNum:'150002212'
              },
              {
                url:require('../assets/img/wallhaven-731847.png'),
                userImg:require('../assets/img/wallhaven-683165.jpg'),
                greatNum:'150002212'
              },
              {
                url:require('../assets/img/wallhaven-732222.png'),
                userImg:require('../assets/img/wallhaven-683165.jpg'),
                greatNum:'150002212'
              },
              {
                url:require('../assets/img/wallhaven-732226.png'),
                userImg:require('../assets/img/wallhaven-683165.jpg'),
                greatNum:'150002212'
              }

            ],
            imgList:[],
            imgLeftList:[],
            imgRightList:[]
          }
      },
      created(){
        this.imageInit();
      },
      methods:{
          imageInit(){
            this.imgListWaterfall();
            this.imgListWide();
          },
          imgListWaterfall(){
            let imgData = this.imgData;
            let leftH = 0;
            let rightH = 0;
            for(let i = 0; i < imgData.length ; i++){
              let url = imgData[i].url;
              let img = new Image();
              img.src = url;
              let self = this;
              img.onload = function(){
                let height = img.height;
                let width = img.width;
                let scale = height / width;
                if(leftH <= rightH){
                  self.imgLeftList.push(imgData[i]);
                  leftH += scale;
                }else{
                  self.imgRightList.push(imgData[i]);
                  rightH += scale;
                }
                img.onload = function () {
                  return false
                };
              }
            }
          },
          imgListWide(){
            this.imgList = this.imgData;
          },
          imgModeChange(mode){
            this.imgListMode = mode || '';
          },
          imgPreview($event){
            this.previewSrc = $event.target.src;
            this.previewShow = true;
          },
          closePreview(){
            this.previewShow = false;
          }
      },
      components:{
        'delay-show':delayShow,
        'image-preview':imagePreview
      },
      directives:{

      },
      mixins:[]
    }
</script>

<style scoped>
  .home-header{

  }
  .home-title{
    font-size:1.25rem;
    text-align: center;
    padding:20px;
    font-weight:bold;
  }
  .list-img-left{
    width:50%;
    float:left;
  }
  .list-img-right{
    width:50%;
    float:right;
  }
  .list-img{
    padding:0 3%;
  }
  .list-img-item{
    border-radius:2px;
    overflow:hidden;
    width:94%;
    margin:3%;
    float:left;
  }
  .list-img-item-poster{
    width:100%;
  }
  .list-img-item-poster img{
    width:100%;
    border-radius:2px;
  }
  .list-img-item-info{
    display:flex;
    height:26px;
    line-height: 26px;
    justify-content: space-between;
  }
  .list-img-item-great{
    font-size:1rem;
    display:inline-block;
    color:#FF2967;
    line-height: 26px;

  }
  .list-img-item-info-left{
    display:flex;
  }
  .list-img-item-num{
    font-size:0.45rem;
    display:inline-block;
    margin-left:2px;
    color:#666;
  }
  .list-img-item-user{
    border-radius:50%;
    width:22px;
    height:22px;
    overflow:hidden;
    text-align:center;
  }
  .list-img-item-user img{
    width:100%;
    height:100%;
  }
  .list-mode{
    display:flex;
    justify-content:center;
  }
  .list-mode-item{
    padding:0 5px;
    color:#ccc;
    transition:all .5s ease;
  }
  .list-mode-item.active{
    color:#333;
  }
  .list-mode-item i {
    font-size:1.25rem;
  }
</style>
