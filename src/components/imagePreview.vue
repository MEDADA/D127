<template>
  <div>
    <transition name="fade">
      <div class="wrap" v-if="show">
        <img :src="src" width="100%" v-init="close" class="preview-content">
        <div class="preview-mask" @click="close"></div>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "imagePreview",
      data(){
          return{
              width:0,
              height:0,
              imageList:[

              ]
          }
      },
      created(){

      },
      methods:{
        close(){
          this.$emit('close');
        },
        imageInit(){
          console.log('init')
        }
      },
      props:['src','show','data'],
      directives:{
        init:{
          inserted:function (el,binding) {
            console.log(el)
            let innerW = window.innerWidth;
            let innerH = window.innerHeight;
            let imgInitW = el.naturalWidth;
            let imgInitH = el.naturalHeight;

            let imgH = innerW/imgInitW * imgInitH;
            let imgW = innerW;
            el.height = imgH;
            el.width = imgW;
            el.style.marginTop = (innerH - imgH) / 2 + 'px';
            let startX = 0;
            let startY = 0;
            let moveX = 0;
            let moveY = 0;
            el.ontouchstart = function (e) {
              e.preventDefault()
              startX = e.targetTouches[0].pageX;
              startY = e.targetTouches[0].pageY;
              el.style.transform = 'translate(0px,0px)';
            };
            el.ontouchmove = function (e) {
              e.preventDefault()
              el.style.transition = 'none';
              moveX = e.targetTouches[0].pageX - startX;
              moveY = e.targetTouches[0].pageY - startY;
              el.style.transform = 'translate('+moveX+'px,'+moveY+'px)';
            };
            el.ontouchend = function (e) {
              e.preventDefault()
              el.style.transition = 'all .3s ease-out';
              if(moveY > 200 || moveY < -200){
                el.style.transform = 'translate('+0+'px,'+window.innerHeight+'px)';
                let close = binding.value;
                close()
              }else{
                el.style.transform = 'translate(0px,0px)';
              }
            };
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .wrap{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
  }
  .img-view{

  }
.preview-mask{
  position:absolute;
  z-index:998;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color: #333333;
  opacity:0.8;
}
  .preview-content{
    position:absolute;
    z-index:999;
    left:0;
    top:0;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
