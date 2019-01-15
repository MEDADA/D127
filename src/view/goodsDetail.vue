<template>
  <div>
    <div class="top-nav">
      <mu-button icon @click="$router.go(-1);"><span class="iconfont icon-fanhui"></span></mu-button>
      <mu-button icon><span class="iconfont icon-gengduo"></span></mu-button>
    </div>
    <div class="container scroll">
      <div class="goods-slide">
        <div class="slide-swipe" :style="{width:initSwipeContent()}"
             v-swipe="{slideIndex:setSlideIndex,len:slideImg.length,slideChange:slideChange}" ref="slideSwipe">
          <div class="slide-swipe-item" v-for="(img,index) in slideImg" :key="index">
            <img :src="img.url">
          </div>
        </div>
        <div class="goods-slide-index">
          <div v-for="(img,index) in slideImg" class="goods-slide-index-item" :class={active:isActive(index)} :style="{backgroundColor:imageMainColor}"></div>
        </div>
      </div>
      <div class="goods-info">
        <div class="goods-name">
          <span>Goods one</span>
          <div>
            <transition name="fadeIn" v-for="(rgb,index) in imageMainArray" :key="index">
              <span class="show-color-box" :style="{backgroundColor:'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')'}"></span>
            </transition>
          </div>
        </div>
        <div class="list-row">
          <span>Scale</span>
          <span>1:1</span>
        </div>
        <div class="list-row">
          <span>Color</span>
          <span>blue</span>
        </div>
        <div class="list-row">
          <span>size</span>
          <span>123 cm</span>
        </div>
        <div class="list-row">
          <span>size</span>
          <span>123 cm</span>
        </div>
        <div class="list-row">
          <span>size</span>
          <span>123 cm</span>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <mu-button flat>Store</mu-button>
      <mu-button flat>Collect</mu-button>
      <mu-button flat class="bottom-nav-buy">Buy</mu-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "goodsDetail",
    data() {
      return {
        slideIndex: 0,
        imageMainColor:'rgba(255,255,255,1)',
        imageMainArray:[],
        slideImg: [
          {url: require('../assets/img/wallhaven-305198.jpg')},
          {url: require('../assets/img/wallhaven-683165.jpg')},
          {url: require('../assets/img/wallhaven-683931.jpg')},
          {url: require('../assets/img/wallhaven-683989.jpg')},
        ]
      }
    },
    created() {

    },
    mounted(){
      this.getSwipeMainColors(0)
    },
    methods: {
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
      setImageMainArray(array){
        this.imageMainArray = array
      },
      slideChange(index){
        let img = this.$refs.slideSwipe.childNodes[index].firstChild;
        this.getMainColors(img);
      },
      getSwipeMainColors(index){
        let img = this.$refs.slideSwipe.childNodes[index].firstChild;
        let self = this;
        img.onload = function(){
          self.getMainColors(img);
          img.onload = function(){};
        };
      },
      getMainColors(img){
        let colorThief = new ColorThief();
        let rgb = colorThief.getPalette(img,5);
        this.setImageMainArray(rgb);
      }
    },
    directives: {
      swipe: {
        inserted: function (el, bind) {
          let startX = 0;
          let moveX = 0;
          let x = 0;
          let index = 0;
          let winX = window.innerWidth;
          let len = bind.value.len - 1 || 0;
          let transition = 'all .3s ease-out';

          function next() {
            index++;
            if (index > len) index = len;
            el.style.transition = transition;
            el.style.transform = 'translateX(' + (x = -(index * winX)) + 'px)';
            bind.value.slideChange(index);
          }

          function previous() {
            index--;
            if (index < 0) index = 0;
            el.style.transition = transition;
            el.style.transform = 'translateX(' + (x = -(index * winX)) + 'px)';
            bind.value.slideChange(index);
          }

          function goBack() {
            el.style.transition = transition;
            el.style.transform = 'translateX(' + (x = -(index * winX)) + 'px)';
          }

          el.ontouchstart = function (e) {
            e.preventDefault();
            startX = e.targetTouches[0].pageX
            moveX = 0;
          };
          el.ontouchmove = function (e) {
            e.preventDefault();
            el.style.transition = 'none';
            moveX = e.targetTouches[0].pageX - startX;
            el.style.transform = 'translateX(' + (moveX + x) + 'px)'
          };
          el.ontouchend = function (e) {
            e.preventDefault();
            x += moveX;
            if (moveX < -100) {
              next();
            } else if (moveX > 100) {
              previous();
            } else {
              goBack()
            }
            bind.value.slideIndex(index);
          };
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
    .goods-name {
      display:flex;
      justify-content:space-between;
      padding: 0.56rem 15px;
      font-size: 1rem;
    }
  }
  .show-color-box{
    display:inline-block;
    width:1rem;
    height:1rem;
    margin:0 10px;
    transition:all .3s ease;
  }
  .list-row {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    border: 1px solid $borderColor;
    padding: 0 15px;
  }
</style>
