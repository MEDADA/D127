<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      <img v-lazy="item.imageUrl" />
    </div>

  </div>
</template>

<script>

  export default {
    name: "imageLazyLoad",
    data() {
      return {
        lazySrc: require('../assets/img/front.png'),
        list: [],
      }
    },
    created(){
      this.getImageList();
    },
    mounted() {

    },
    methods: {
      async getImageList(){
        let res =await this.$api.getImageList();
        console.log(res);
        if(res.status === 200){
          this.list = res.data;
          this.lazyLoadInit();
        }
      },
      scrollWinLazyLoad() {
        let timer;
        let self = this;
        window.onscroll = function (e) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            self.lazyLoadImage()
          }, 300);
        };
      },
      lazyLoadInit(){
        let img = new Image();
        let self = this;
        img.src = this.lazySrc;
        img.onload = function(){


          // self.lazyLoadImage();
          // self.scrollWinLazyLoad();
          img.onload = null;
        }
      },
      lazyLoadImage(){
        let images = this.$refs.imgLazyLoad;
        for (let i = 0; i < images.length; i++) {
          let offsetTop = images[i].offsetTop;
          if (window.innerHeight + window.pageYOffset > offsetTop) {
            let imgSrc = images[i].dataset.src;
            let img = new Image();
            img.src = imgSrc;
            img.onload = function () {
              images[i].src = imgSrc;
              img.onload = null
            };
          }
        }
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
