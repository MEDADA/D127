<template>
  <div>
    <div class="top-nav">
      <mu-button icon @click="$router.go(-1);"><span class="iconfont icon-fanhui"></span></mu-button>
      <mu-button icon @click="menuHandle"><span class="iconfont icon-more"></span></mu-button>
    </div>
    <div class="container scroll">
      <div class="goods-slide" v-if="goodsDetail.poster">
        <div class="slide-swipe" :style="{width:'100%'}"
             ref="slideSwipe">
          <!--          <div class="slide-swipe-item" v-for="(img,index) in slideImg" :key="index">-->
          <div class="slide-swipe-item">
            <div class="image-container">
              <canvas class="face-show-canvas" id="overlay" width="0" height="0"></canvas>
              <img :src="goodsDetail.poster.imageUrl" ref="posterImage" crossorigin="http://localhost:3000/">
              <div class="face-show-box" v-for="item in faceList" :style="[
              {'left':item.left+'px'},
              {'top':item.top+'px'},
              {'width':item.width+'px'},
              {'height':item.height+'px'}
              ]">
              </div>
            </div>
          </div>
          <!--          </div>-->
        </div>
        <!--        <div class="goods-slide-index">-->
        <!--          <div v-for="(img,index) in slideImg" class="goods-slide-index-item" :class={active:isActive(index)} :style="{backgroundColor:imageMainColor}"></div>-->
        <!--        </div>-->
      </div>
      <div class="goods-info">
        <div class="goods-name">
          <span class="goods-title">{{goodsDetail.title}}</span>
          <div class="goods-hue-list">

            <transition name="fadeIn" v-for="(rgb,index) in imageMainArray" :key="index">
              <span :class="['show-color-box']"
                    :style="{width:1+index*0.2+'rem',height:1+index*0.2+'rem',backgroundColor:'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')'}"></span>
            </transition>
          </div>
        </div>
        <div class="list-row">
          <span>View</span>
          <span>{{goodsDetail.pageview}}</span>
        </div>
      </div>
    </div>
    <!--    <img src="../assets/img/wallhaven-2e2p7g.jpg" alt="" id="poster">-->
    <div class="bottom-nav">
      <mu-button icon @click="collectionHandle">
        <i class="iconfont icon-heart" :style="[{'color':collected ? 'red' : 'fff'}]"></i>
      </mu-button>
      <mu-button flat class="bottom-nav-buy" @click="faceCheckHandle" v-loading="faceCheckLoading">Check Face
      </mu-button>
    </div>
    <!--    bottom sheet-->
    <mu-bottom-sheet :open.sync="menuHandleOpen">
      <mu-list>
        <mu-sub-header>Select Handle</mu-sub-header>
        <mu-list-item button @click="collectionHandle">
          <mu-list-item-action>
            <mu-icon value="grade" color="orange"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Collection</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="deleteHandle">
          <mu-list-item-action>
            <mu-icon value="close" color="red"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Delete</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>
<script>
  // import ColorThief from 'colorthief'
  import * as faceapi from 'face-api.js';

  export default {
    name: "goodsDetail",
    data() {
      return {
        slideIndex: 0,
        imageMainColor: 'rgba(255,255,255,1)',
        imageMainArray: [],
        slideImg: [
          {url: require('../assets/img/wallhaven-305198.jpg')},
          {url: require('../assets/img/wallhaven-683165.jpg')},
          {url: require('../assets/img/wallhaven-683931.jpg')},
          {url: require('../assets/img/wallhaven-683989.jpg')},
        ],
        faceCheckLoading: false,
        collected: false,
        goodsDetail: {
          poster: {}
        },
        faceList: [],
        menuHandleOpen: false,
        matchFace:'-0.08887049555778503,0.08405263721942902,0.027199551463127136,-0.03453585132956505,-0.1783648282289505,-0.0131898894906044,-0.09533897042274475,-0.08815503120422363,0.10384286940097809,-0.1115608811378479,0.22865502536296844,-0.0754048302769661,-0.22284336388111115,-0.00618734210729599,-0.053762804716825485,0.196059450507164,-0.12061123549938202,-0.1860577017068863,-0.05448898673057556,0.022449376061558723,0.047569725662469864,0.04708420857787132,0.02913103997707367,0.0646829679608345,-0.11490661650896072,-0.31269481778144836,-0.11316394805908203,-0.0827508270740509,0.02081265114247799,-0.04458875209093094,-0.08308213204145432,-0.013197803869843483,-0.1507236659526825,-0.008572336286306381,0.08960971236228943,0.05839237570762634,-0.0013466760283336043,-0.10076077282428741,0.2439749538898468,0.013846047222614288,-0.2992277145385742,0.06066865473985672,0.05476139858365059,0.21571840345859528,0.150210440158844,0.05200039967894554,0.007765170652419329,-0.1728535294532776,0.09115304052829742,-0.11411184817552567,0.044458940625190735,0.1906154453754425,0.07928738743066788,0.039753835648298264,-0.0294269360601902,-0.1344033032655716,0.03672361746430397,0.15725287795066833,-0.16405519843101501,-0.04045179486274719,0.061386022716760635,-0.028875134885311127,0.00834627728909254,-0.13323746621608734,0.21783310174942017,0.05408270284533501,-0.13572722673416138,-0.1894478052854538,0.11043526232242584,-0.1608438342809677,-0.11548716574907303,0.0924450233578682,-0.1837005466222763,-0.19296690821647644,-0.3231702744960785,-0.0004124316619709134,0.39934343099594116,0.11767016351222992,-0.18510647118091583,0.059127841144800186,0.023089338093996048,-0.019488947466015816,0.07966596633195877,0.15377582609653473,-0.058223094791173935,0.011950748041272163,-0.07014217972755432,-0.02876870147883892,0.2668936550617218,-0.06577792018651962,-0.018506772816181183,0.1730968952178955,0.003653160063549876,0.08868151903152466,0.034933995455503464,0.06486097723245621,-0.040533993393182755,-0.02279128134250641,-0.11280516535043716,0.01672990806400776,-0.039925023913383484,-0.03000253438949585,-0.02408246509730816,0.11281038820743561,-0.1830616593360901,0.07533586025238037,-0.0061696358025074005,-0.045017749071121216,-0.06796762347221375,0.03317758068442345,-0.09662827849388123,-0.0595012828707695,0.145176500082016,-0.22870603203773499,0.19880829751491547,0.18729619681835175,0.09647832810878754,0.10703328996896744,0.1673716902732849,0.05869769677519798,-0.0413256473839283,-0.011697711423039436,-0.2089463174343109,-0.06835198402404785,0.12432500720024109,-0.05267331376671791,0.14393869042396545,0.021662160754203796'
      }
    },
    created() {
      this.getDataDetail()
      console.log(faceapi.nets);
    },
    mounted() {

    },
    methods: {
      faceCheckHandle() {
        this.faceapiInit()
      },
      async faceapiInit() {

        // using fetch
        this.faceCheckLoading = true;
        let input = this.$refs.posterImage;
        await faceapi.nets.ssdMobilenetv1.load('http://192.168.18.29:3000/models');
        await faceapi.nets.faceLandmark68Net.load('http://192.168.18.29:3000/models');
        await faceapi.nets.faceLandmark68TinyNet.load('http://192.168.18.29:3000/models');
        await faceapi.nets.faceRecognitionNet.load('http://192.168.18.29:3000/models');
        const fullFaceDescriptions1 = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();
        console.log(fullFaceDescriptions1);
        if(fullFaceDescriptions1.length > 0){

          let domW = input.width;
          let domH = input.height;
          const faceMatcher = new faceapi.FaceMatcher([
            new faceapi.LabeledFaceDescriptors(
              'Hani',[new Float32Array(this.matchFace.split(','))]
            )
          ]);
          console.log(faceMatcher);
          console.log(fullFaceDescriptions1[0].descriptor.toString());
          const bestMatch = faceMatcher.findBestMatch(fullFaceDescriptions1[0].descriptor);
          let distance = bestMatch.distance;
          console.log(bestMatch);
          if(distance < 0.25){
            console.log(bestMatch.distance);
          }else{
            alert('未匹配到对应人脸')
          }
          this.drawFace(fullFaceDescriptions1, domW, domH);
        }else{
          alert('未检测到人脸')
        }
        this.faceCheckLoading = false;
      },
      drawFace(landmarks, w, h) {
        let canvas = document.getElementById('overlay');
        const displaySize = { width: w, height: h };
        faceapi.matchDimensions(canvas, displaySize);

        const resizedDetections = faceapi.resizeResults(landmarks, displaySize);
        // draw detections into the canvas
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)

      },
      onTap() {
        console.log('tap')
      },
      initSwipeContent() {
        return (this.slideImg.length * window.innerWidth) + 'px'
      },
      isActive(ind) {
        if (ind === this.slideIndex) return true;
      },
      setSlideIndex(ind) {
        this.slideIndex = ind
      },
      setImageMainArray(array) {
        this.imageMainArray = array
      },
      slideChange(index) {
        // let img = this.$refs.slideSwipe.childNodes[index].firstChild;
        // this.getMainColors(img);
      },
      getSwipeMainColors() {
        let img = this.$refs.posterImage;
        let self = this;
        img.onload = function () {
          // self.getMainColors(img);
        };
      },
      getMainColors(img) {
        let colorThief = new ColorThief();
        let rgb = colorThief.getPalette(img, 5);
        this.setImageMainArray(rgb);
      },
      menuHandle() {
        this.menuHandleOpen = true;
      },
      async getDataDetail() {
        const id = this.$route.query.id;
        let res = await this.$api.getBlogDetail({
          id
        });
        this.goodsDetail = res.data.data;
        if (res.data.collected) this.collected = true;
        this.getSwipeMainColors()
      },
      async collectionHandle() {
        const blogId = this.$route.query.id;
        let res = await this.$api.collectionBlog({
          blogId
        });
        if (res.status === 200) {
          this.collected = true;
          console.log('收藏成功！！')
        }
        this.menuHandleOpen = false;
      },
      async deleteHandle() {
        const id = this.$route.query.id;
        this.menuHandleOpen = false;
        try {
          let res = await this.$api.removeBlog({
            id
          });
          this.$router.replace('/goodsList');
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  body {
    background-color: $bgColor;
    color: $textColor;
    min-height: 100vh;
  }


  .goods-slide {
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
    background-color: $bgColor;
  }

  .slide-swipe {
    display: flex;
    height: 100%;
  }

  .slide-swipe-item {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }

  .goods-slide-index {
    position: absolute;
    width: 100%;
    bottom: 20px;
    display: flex;
    left: 0;
    justify-content: center;
  }

  .goods-slide-index-item {
    border-radius: 50%;
    width: 0.56rem;
    height: 0.56rem;
    background-color: rgba(0, 0, 0, 0.3);
    line-height: 1rem;
    font-size: 0.48rem;
    text-align: center;
    margin: 0 3px;
  }

  .active {
    background-color: rgba(50, 50, 50, 0.8);
  }

  .top-nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background-color: $bgColor;
    color: $textColor;
    z-index: 999;
    display: flex;
    justify-content: space-between;

    .mu-icon-button {
      height: 3rem;
      width: 3rem;
      color: $textColor;
    }
  }

  .bottom-nav {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3rem;
    background-color: $bgColor;
    color: $textColor;
    width: 100%;
    z-index: 999;
    display: flex;

    .iconfont {
      font-size: 1.25rem;
    }

    .mu-flat-button {
      height: auto;
      flex: 2;
      color: $textColor;
    }

    .bottom-nav-buy {
      flex: 3;
      color: $textColor;
      background: $pinkRed;
    }
  }

  .container {
    padding: 3rem 0;
    background-color: $bgColor;
    color: $textColor;
  }

  .goods-info {
    margin-top: 0.625rem;

    .goods-title {
      flex: 1;
    }

    .goods-name {
      display: flex;
      justify-content: space-between;
      padding: 0.56rem 15px;
      font-size: 1rem;
    }

    .goods-hue-list {
      width: 8rem;
      display: flex;
      align-items: center;
    }
  }

  .show-color-box {
    width: 1rem;
    height: 1rem;
    transition: all .3s ease;
    margin-right: 5px;
  }

  .list-row {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    border: 1px solid $borderColor;
    padding: 0 15px;
  }

  .image-container {
    position: relative;
    height: 70vh;
  }

  .face-show-box {
    position: absolute;
    border: 1px solid skyblue;
  }

  .face-show-canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index:9;
  }
</style>
