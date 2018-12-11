<template>
    <div class="user">
      <div class="user-header">
        <div class="user-img">
          <img :src="userInfo.img">
        </div>
        <div class="user-datum">
          <div class="user-datum-block">
            <transition
                        appear
                        @before-appear="beforeEnter"
                        @appear="enter"
                        @after-appear="afterEnter"
                        >
              <div class="user-datum-value">{{userInfo.photoNum.toFixed(0)}}</div>
            </transition>
            <div class="user-datum-label">Photos</div>
          </div>
          <div class="user-datum-block">
            <div class="user-datum-value" v-text="userInfo.follower"></div>
            <div class="user-datum-label">Followers</div>
          </div>
          <div class="user-datum-block">
            <div class="user-datum-value" v-text="userInfo.activity"></div>
            <div class="user-datum-label">Activity</div>
          </div>
        </div>
        <div class="user-info">
          <span class="user-info-name" v-text="userInfo.name"></span>
          <span class="subLabel" v-text="userInfo.profession"></span>
        </div>
      </div>
      <div class="user-menu">
        <div>
          <span class="subLabel">Menu Info</span>
        </div>
      </div>
      <div>
        Whom to follow
      </div>
      <div class="user-newPublish">
        <input v-model.number="number" />
      </div>
      <div id="animated-number-demo">
        <input v-model.number="number" type="number" step="20">
        <p>{{ tweenedNumber.toFixed(0) }}</p>
      </div>
    </div>
</template>

<script>

    export default {
        name: "user",
      data(){
          return {
            number: 0,
            tweenedNumber: 123123,
            userInfo:{
              img:require('../assets/img/timg (1).jpg'),
              name:'Orange',
              profession:'Fashion Model',
              photoNum:0,
              follower:'110035',
              activity:'Daily',
              height:'1.8cm',
              area:'杭州',
              newPublish:{
                poster:'',
                title:'',
                profession:'rapper',
                hotChange:{
                  type:'up',
                  rate:'6%'
                },
                greatNum:'1564468',
                follower:'8484654'
              }

            }
          }
      },
      created(){

      },
      mounted(){
        this.numberAnimate('tweenedNumber',this.tweenedNumber)
      },
      methods:{
        beforeEnter(el){
          el.style.opacity = 0;
        },
        enter(el){
          el.style.transition = 'all .3s ease';
        },
        afterEnter(el){
          el.style.opacity = 1;
        },
        leave(el, done) {

        },
        tween: function (startValue, endValue) {
          var vm = this
          function animate () {
            if (TWEEN.update()) {
              requestAnimationFrame(animate)
            }
          }

          new TWEEN.Tween({ tweeningValue: startValue })
            .to({ tweeningValue: endValue }, 500)
            .onUpdate(function (object) {
              vm.tweeningValue = object.tweeningValue.toFixed(0)
            })
            .start()

          animate()
        },
        numberAnimate(str,newValue){
          let obj = {};
          obj[str] = newValue;
          TweenLite.to(this.$data, 0.5, obj);
        }
      },
      computed:{
        photoNum(){

        }
      },
      watch:{
        number: function(newValue) {
          this.numberAnimate('tweenedNumber',newValue)
        },
        'userInfo.photoNum':function (newValue) {
          this.numberAnimate('userInfo.photoNum',newValue)
        }
      }
    }
</script>

<style>
.user{
  background-color: #272733;
  width:100vw;
  min-height:100vh;
  padding:3vh 10vw 0 10vw;
}
.user-header{
  display:flex;
  flex-wrap:wrap;
  border-bottom:1px solid #333;
}
  .user-img{
    width:20vw;
    height:20vw;
    overflow:hidden;
    border-radius:4px;
  }
  .user-img img{
    width:100%;
    height:100%;
  }
  .user-datum{
    display:flex;
    width:60vw;
    padding:10vw 0 0 5vw;
    color:#f5f5f5;
  }
  .user-datum-block{
    flex:1;
    text-align: center;
    line-height: 5vw;
  }
  .user-datum-label{
    font-size:0.56rem;
    color:#ccc;
  }
  .user-datum-value{
    font-size:1rem;
  }
  .user-info{
    padding:10px 0;

    width:100%;
  }
  .user-info-name{
    font-size:1.25rem;
    color:#fff;
    padding-right:30px;
    font-weight:normal;
    letter-spacing: 1px;
    font-family: 'Arial';
  }
  .subLabel{
    display:inline-block;
    border-left:1px solid #6160FF;
    padding-left:10px;
    font-size:0.725rem;
    line-height: 0.725rem;
    color:#f1f1f1;
  }
  .user-datum-animate{
    transition:all .5s ease;
  }
</style>
