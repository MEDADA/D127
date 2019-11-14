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
  import * as faceapi from 'face-api.js';
  export default {
    name: "goodsDetail",
    data() {
      return {
        slideIndex: 0,
        imageMainColor: 'rgba(255,255,255,1)',
        imageMainArray: [],
        slideImg: [],
        faceCheckLoading: false,
        collected: false,
        goodsDetail: {
          poster: {}
        },
        faceList: [],
        menuHandleOpen: false,
        matchFace:'-0.07390335947275162,0.10254062712192535,0.08264325559139252,-0.11748264729976654,-0.16437353193759918,-0.002058777492493391,-0.07598579674959183,-0.03418370336294174,0.1797877848148346,-0.11903972178697586,0.1919567584991455,-0.12360686808824539,-0.22807948291301727,0.07765127718448639,-0.1357208490371704,0.2298220545053482,-0.12389828264713287,-0.11533720791339874,-0.058441728353500366,0.02529301866889,0.05569884181022644,0.06850467622280121,-0.01590254157781601,0.07334230840206146,-0.06911537051200867,-0.35371091961860657,-0.08405572921037674,-0.025234589353203773,-0.049215082079172134,-0.14132797718048096,0.0264894999563694,0.055240146815776825,-0.16860784590244293,0.02910621464252472,-0.006857401691377163,0.10762698203325272,-0.0606905035674572,-0.12376969307661057,0.06578212231397629,0.07097402960062027,-0.3274553418159485,-0.02876368537545204,0.061360426247119904,0.3155544102191925,0.18306849896907806,0.017263073474168777,0.005643100943416357,-0.1422649472951889,0.018000643700361252,-0.18848809599876404,-0.01818426139652729,0.10884048044681549,0.04520339518785477,0.07657866925001144,0.01142891775816679,-0.12011369317770004,0.0554317943751812,0.1253329962491989,-0.17444618046283722,-0.015910383313894272,0.13566572964191437,-0.01641318015754223,0.011653341352939606,-0.1493673324584961,0.26652392745018005,0.10780630260705948,-0.1667187362909317,-0.17117565870285034,0.164334237575531,-0.18138240277767181,-0.07591423392295837,0.10480448603630066,-0.12937265634536743,-0.2088041454553604,-0.276093453168869,-0.04073743522167206,0.3804623484611511,0.1621546447277069,-0.13727691769599915,-0.010618417523801327,-0.04308570921421051,0.04732498154044151,0.06188668683171272,0.21041902899742126,0.01971873827278614,0.06193775683641434,-0.05341673642396927,0.016064155846834183,0.20560018718242645,-0.07679882645606995,-0.02235019952058792,0.20728394389152527,-0.01007421687245369,-0.039946548640728,-0.05364466831088066,0.04007008671760559,-0.1005512997508049,0.07680834829807281,-0.14709733426570892,-0.02494359202682972,-0.08506589382886887,-0.0070017799735069275,-0.01734592765569687,0.1240980476140976,-0.14283280074596405,0.18907605111598969,0.04407396540045738,-0.006079709157347679,-0.00508135324344039,0.045339491218328476,-0.056070685386657715,-0.06607016175985336,0.1686873733997345,-0.24250490963459015,0.1415943056344986,0.17835235595703125,0.12079530954360962,0.10133422166109085,0.09813732653856277,0.12883248925209045,-0.0021973811089992523,-0.07356354594230652,-0.19366046786308289,0.011718867346644402,0.015783630311489105,-0.07911611348390579,0.04969489201903343,0.0118078188970685'
      }
    },
    created() {
      this.getDataDetail();
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
        await faceapi.nets.ssdMobilenetv1.loadFromUri('http://192.168.18.29:3000/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('http://192.168.18.29:3000/models');
        await faceapi.nets.faceLandmark68TinyNet.loadFromUri('http://192.168.18.29:3000/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('http://192.168.18.29:3000/models');
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
  @import "../assets/css/var";
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
