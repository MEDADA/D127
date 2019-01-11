<template>
  <div class="user" :style="{backgroundColor:$store.state.system.color}">
    <div class="user-header">
      <div class="user-img">
        <img :src="userInfo.img">
      </div>
      <div class="user-datum">
        <div class="user-datum-block" :style="{color:$store.state.system.colorValue}">
          <transition
            appear
            @before-appear="beforeEnter"
            @appear="enter"
            @after-appear="afterEnter"
          >
            <div class="user-datum-value">{{userInfo.photoNum.toFixed(0)}}</div>
          </transition>
          <div class="user-datum-label" :style="{color:$store.state.system.colorLabel}">Photos</div>
        </div>
        <div class="user-datum-block">
          <transition
            appear
            @before-appear="beforeEnter"
            @appear="enter"
            @after-appear="afterEnter"
          >
            <div class="user-datum-value" v-text="userInfo.follower"
                 :style="{color:$store.state.system.colorValue}"></div>
          </transition>
          <div class="user-datum-label" :style="{color:$store.state.system.colorLabel}">Followers</div>
        </div>
        <div class="user-datum-block">
          <transition
            appear
            @before-appear="beforeEnter"
            @appear="enter"
            @after-appear="afterEnter"
          >
            <div class="user-datum-value" v-text="userInfo.activity"
                 :style="{color:$store.state.system.colorValue}"></div>
          </transition>
          <div class="user-datum-label" :style="{color:$store.state.system.colorLabel}">Activity</div>
        </div>
      </div>
      <div class="user-info">
        <span class="user-info-name" v-text="userInfo.name" :style="{color:$store.state.system.colorValue}"></span>
        <span class="subLabel" :style="{color:$store.state.system.colorLabel}" v-text="userInfo.profession"></span>
      </div>
    </div>
    <div class="user-menu list-row">
      <div class="user-menu-title">
        <span class="subLabel" :style="{color:$store.state.system.colorLabel}">Menu Info</span>
      </div>
      <div class="user-menu-content">
        <div class="user-menu-box">
          <div class="user-menu-box-value">5.5</div>
          <div class="user-menu-box-label">Height</div>
        </div>
        <div class="user-menu-box red">
          <div class="user-menu-box-value">1.8</div>
          <div class="user-menu-box-label">Rate</div>
        </div>
        <div class="user-menu-box">
          <div class="user-menu-box-value">Blue</div>
          <div class="user-menu-box-label">Eyes</div>
        </div>
        <div class="user-menu-box blue">
          <div class="user-menu-box-value">10+</div>
          <div class="user-menu-box-label">...</div>
        </div>
      </div>
    </div>
    <div class="list-row flex">
      <span :style="{color:$store.state.system.colorLabel}">Whom to follow</span>
      <mu-button icon>
        <span class="iconfont icon-arrow-ios-forward-ou"></span>
      </mu-button>
    </div>
    <div class="list-row">
      <div class="user-card">
        <div class="user-card-header">
          <span class="user-card-name" :style="{color:$store.state.system.colorValue}">Black Stone </span><span
          class="subLabel" :style="{color:$store.state.system.colorLabel}">Rapper</span>
        </div>
        <div class="user-card-body">
          <div class="user-card-poster"><img src="../assets/img/wallhaven-712830.png"></div>
          <div class="user-card-handle">
            <div class="user-card-tag">
              <div class="up">10% ↑</div>
              <div class="subtitle" :style="{color:$store.state.system.colorLabel}">Popularity</div>
            </div>
            <div class="user-card-tag">
              <div>Regular</div>
              <div class="subtitle" :style="{color:$store.state.system.colorLabel}">Activity</div>
            </div>
            <div class="user-card-follow">
              <mu-button color="primary" full-width>Follow</mu-button>
            </div>
          </div>
        </div>
        <div class="user-card-footer">
          <div class="user-card-label">
            <div :style="{color:$store.state.system.colorValue}">1450</div>
            <div class="subtitle" :style="{color:$store.state.system.colorLabel}">Photos</div>
          </div>
          <div class="user-card-label">
            <div :style="{color:$store.state.system.colorValue}">1.3 m</div>
            <div class="subtitle" :style="{color:$store.state.system.colorLabel}">Followers</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "user",
    data() {
      return {
        number: 0,
        tweenedNumber: 123123,
        userInfo: {
          img: require('../assets/img/timg (1).jpg'),
          name: 'Orange',
          profession: 'Fashion Model',
          photoNum: 0,
          follower: '110035',
          activity: 'Daily',
          height: '1.8cm',
          area: '杭州',
          newPublish: {
            poster: '',
            title: '',
            profession: 'rapper',
            hotChange: {
              type: 'up',
              rate: '6%'
            },
            greatNum: '1564468',
            follower: '8484654'
          }

        }
      }
    },
    created() {

    },
    mounted() {
      this.numberAnimate('tweenedNumber', this.tweenedNumber)
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
      },
      enter(el) {
        el.style.transition = 'all .3s ease';
      },
      afterEnter(el) {
        el.style.opacity = 1;
      },
      leave(el, done) {

      },
      tween: function (startValue, endValue) {
        var vm = this

        function animate() {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }

        new TWEEN.Tween({tweeningValue: startValue})
          .to({tweeningValue: endValue}, 500)
          .onUpdate(function (object) {
            vm.tweeningValue = object.tweeningValue.toFixed(0)
          })
          .start()

        animate()
      },
      numberAnimate(str, newValue) {
        let obj = {};
        obj[str] = newValue;
        TweenLite.to(this.$data, 0.5, obj);
      }
    },
    computed: {
      photoNum() {

      }
    },
    watch: {
      number: function (newValue) {
        this.numberAnimate('tweenedNumber', newValue)
      },
      'userInfo.photoNum': function (newValue) {
        this.numberAnimate('userInfo.photoNum', newValue)
      }
    }
  }
</script>

<style lang="scss">
  .user {
    background-color: $bgColor;
    width: 100vw;
    min-height: 100vh;
    padding: 4rem 5vw 0 10vw;
  }

  .user-header {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid $borderColor;
  }

  .user-img {
    width: 20vw;
    height: 20vw;
    overflow: hidden;
    border-radius: 4px;
  }

  .user-img img {
    width: 100%;
    height: 100%;
  }

  .user-datum {
    display: flex;
    width: 60vw;
    padding: 10vw 0 0 5vw;
    color: #f5f5f5;
  }

  .user-datum-block {
    flex: 1;
    text-align: center;
    line-height: 5vw;
  }

  .user-datum-label {
    font-size: 0.56rem;
    color: #ccc;
  }

  .user-datum-value {
    font-size: 1rem;
  }

  .user-info {
    padding: 10px 0 5px 0;
    width: 100%;
  }

  .user-info-name {
    font-size: 1.25rem;
    color: $textColor;
    padding-right: 30px;
    font-weight: normal;
    letter-spacing: 1px;
  }

  .subLabel {
    display: inline-block;
    border-left: 2px solid $labelColor;
    padding-left: 10px;
    font-size: 0.725rem;
    line-height: 0.5rem;
    color: $subTitleColor;
  }

  .user-menu-content {
    margin-top: 0.725rem;
    display: flex;
    justify-content: space-between;
    margin-right: 5vw;
    .user-menu-box {
      width: 18vw;
      height: 18vw;
      background: linear-gradient(180deg, #fff, #f1f1f1);
      border-radius: 5px;
      padding: 0.625rem;
      .user-menu-box-value {
        font-size: 1.25rem;
        color: #333;
        line-height: 1.25rem;
        padding-bottom: 0.25rem;
      }
      .user-menu-box-label {

        line-height: 0.75rem;
        font-size: 0.75rem;
        color: #999;
      }
    }
    .red {
      background: $pinkRed;
      color: #fff;
      .user-menu-box-value {
        color: #fff;
      }
      .user-menu-box-label {
        font-size: 0.75rem;
        color: #fff;
      }
    }
    .blue {
      background: linear-gradient(0deg, #425af6, #6d7bd7);
      color: #fff;
      .user-menu-box-value {
        color: #fff;
      }
      .user-menu-box-label {
        font-size: 0.75rem;
        color: #fff;
      }
    }
  }

  .list-row {
    padding: 0.56rem 0;
    line-height: 2rem;
    border-bottom: 1px solid #333;
    color: $textColor;
  }

  .list-row.flex {
    display: flex;
    justify-content: space-between;
  }

  .list-row .mu-icon-button {
    padding: 0;
    width: 2rem;
    height: 2rem;
  }

  /*user card*/
  .user-card {

  }

  .user-card-name {
    font-size: 1rem;
    padding-right: 10px;
  }

  .user-card-body {
    display: flex;
    .user-card-poster {
      width: 45vw;
      height: 45vw;
      margin-top: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .user-card-footer {
    margin-top: 5px;
    display: flex;
    width: 50vw;
  }

  .user-card-label {
    font-size: 0.75rem;
    line-height: 1rem;
    border-left: 1px solid $labelColor;
    padding-left: 10px;
    flex: 1;
  }

  .user-card-handle {
    width: 35vw;
    margin-top: 5px;
    margin-left: 15px;
    .user-card-follow {
      margin-bottom: 0;
      margin-top: 9vw;
      .mu-raised-button {
        font-size: 0.56rem;
        line-height: 2rem;
        height: 2rem;
      }
    }
  }

  .user-card-tag {
    background-color: #fff;
    border-radius: 3px;
    text-align: center;
    margin-bottom: 3vw;
    padding: 5px 0;
    color: #333;
    font-size: 1rem;
    line-height: 1rem;
    height: 12vw;
    .up {
      color: #49ad46;
      font-size: 0.875rem;
    }
    .down {
      color: #ff2845;
    }
  }

  .subtitle {
    color: #999;
    font-size: 0.56rem;
  }
</style>
