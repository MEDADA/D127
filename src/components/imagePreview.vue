<template>
  <div>
    <transition name="fade">
      <div class="wrap" v-if="show">
          <img :src="src" width="100%" v-drag.stop="close" class="preview-content">
        <div class="preview-mask" @click="close" v-disable-touch-move></div>
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
        drag:{
          inserted:function (el,binding) {
            let startX = 0;
            let startY = 0;
            let moveX = 0;
            let moveY = 0;
            let startTime = 0;
            let endTime = 0;
            let scale = 1;
            let x = 0;
            let y = 0;

            let innerW = window.innerWidth;
            let innerH = window.innerHeight;
            let imgInitW = el.naturalWidth;
            let imgInitH = el.naturalHeight;

            let imgH = innerW/imgInitW * imgInitH;
            let imgW = innerW;
            el.height = imgH;
            el.width = imgW;
            el.style.marginTop = (innerH - imgH) / 2 + 'px';

            function transformHandle(x,y,scale){
              let _x = x || 0;
              let _y = y || 0;
              let _scale = scale || 1;
              el.style.transform = 'translate('+_x+'px,'+_y+'px) scale('+_scale+','+_scale+')';
            }

            el.ontouchstart = function (e) {
              binding.modifiers.stop ? e.preventDefault() : function(){};
              startX = e.targetTouches[0].pageX;
              startY = e.targetTouches[0].pageY;
            //在touch事件中，如果没move则不执行move所以需要对move数值初始化  用于执行双击判断
              moveX = 0;
              moveY = 0;
            };
            el.ontouchmove = function (e) {
              binding.modifiers.stop ? e.preventDefault() : function(){};
              moveX = e.targetTouches[0].pageX - startX;
              moveY = e.targetTouches[0].pageY - startY;
              el.style.transition = 'none';
              transformHandle(x+moveX,y+moveY,scale);
            };
            el.ontouchend = function (e) {
              //是否禁用事件冒泡
              binding.modifiers.stop ? e.preventDefault() : function(){};
              //判断双击点击间隔
              let time = new Date();
              startTime = endTime;
              endTime = time.getTime();
              //图片内部移动
              x += moveX;
              y += moveY;
              //是否双击
              if(moveY < 20 && moveY > -20 && moveX < 20 && moveX > -20 && endTime - startTime < 300){
                endTime = 0;
                if(scale > 1.9){
                  scale = 1;
                }else{
                  scale += 0.3;
                }
                el.style.transition = 'all .3s ease-out';
                transformHandle(x,y,scale);
              }else if(moveY > 300 || moveY < -300){
                let close = binding.value;
                close();
                el.style.transition = 'all .3s ease-out';
                transformHandle(0,window.innerHeight,scale);
              }
            };
          }
        },
        'disable-touch-move':{
          inserted:function (el) {
            el.ontouchmove = function (e) {
              e.preventDefault();
            }
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
