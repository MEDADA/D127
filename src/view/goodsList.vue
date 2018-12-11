<template>
  <div>


    <button @click="add()">ADD</button>
    <div class="goodsList">
      <delay-show>
        <div class="goodsItem" v-for="(goods,index) in goodsList" :key="index" :data-index="index">
          <div class="goods-img">
            <img :src="goods.image" alt="">
          </div>
          <div class="goods-info">
            <div class="goods-title" v-text="goods.title"></div>
            <div class="goods-title" v-text="goods.subTitle"></div>
          </div>
          <div class="goods-right" v-text="goods.updateTime"></div>
        </div>

      </delay-show>
    </div>
  </div>
</template>

<script>
  import delayShow from '../components/delayShow'
  export default {
    name: "goodsList",
    data: function () {
      return {
        tabActive:0,
        domList: [
          {
            title: '',
            updateTime: '',
            createTime: '',
            img: '',
          }
        ],
        tabList:[
          {
            title:'最热'
          },
          {
            title:'最新'
          },
        ],
        proxy: {
          'title':'title',
          'updateTime':'updateTime',
          'createTime':'createTime',
          'img':'img'
        },
        goodsList: [
          {
            title: '这是标题一一一',
            updateTime: '2018/12/4',
            createTime: '2018/12/4',
            image: require('../assets/img/wallhaven-305198.jpg'),
          },
          {
            title: '这是标题一一一',
            updateTime: '2018/12/4',
            createTime: '2018/12/4',
            image: require('../assets/img/wallhaven-305198.jpg'),
          },
          {
            title: '这是标题一一一',
            updateTime: '2018/12/4',
            createTime: '2018/12/4',
            image: require('../assets/img/wallhaven-305198.jpg'),
          },
          {
            title: '这是标题一一一',
            updateTime: '2018/12/4',
            createTime: '2018/12/4',
            image: require('../assets/img/wallhaven-305198.jpg'),
          },
        ]
      }
    },
    methods: {
      init() {
        return new Promise(function (resolve, reject) {
          console.log('initStart')
          setTimeout(function () {
            console.log('initEnd')
            resolve()
          }, 3000)
        })
      },
      getData() {
        return new Promise(function (resolve, reject) {
          console.log('getDataStart')
          setTimeout(function () {
            console.log('getDataEnd')
            resolve()
          }, 1000)
        })
      },
      dataInit() {
        return new Promise(function (resolve, reject) {
          console.log('dataInitStart')
          setTimeout(function () {
            console.log('dataInitEnd')
            resolve()
          }, 1000)
        })
      },
      domJsonInit() {
        setTimeout(function () {
          console.log('OVER')
        }, 2000)
      },
      add(){
        let obj = {
          title: '这是标题一一一',
          updateTime: '2018/12/4',
          createTime: '2018/12/4',
          image: require('../assets/img/wallhaven-305198.jpg'),
        };
        this.goodsList.push(obj)
      }
    },
    created() {

    },
    mounted() {
      this.init().then(() => {
        return this.getData()
      }).then(() => {
        return this.dataInit()
      }).then(() => {
        return this.domJsonInit()
      })
    },
    directives:{
      tabchange:{
        update(el){
          console.log(el.offsetLeft)
        }
      }
    },
    components:{
      'delay-show':delayShow
    }
  }
</script>

<style scoped>
.goodsList{
  background-color: #f1f1f1;
}
  .goodsItem{
    background-color: #fff;
    width:94vw;
    margin-left:3vw;
    margin-right:3vw;
    display:flex;
    justify-content: space-between;
    margin-top:20px;
    height:80px;
  }
  .goods-img{
    overflow:hidden;
    flex:1;
  }
  .goods-img img{
    width:100%;
  }
  .goods-info{
    overflow:hidden;
    flex:3;
  }
  .goods-right{
    overflow:hidden;
    flex:1;
  }

.listMoveUp-enter{
  margin-top:30px;
  opacity:0;
}
.listMoveUp-enter-active{
  transition:all .5s ease
}
.listMoveUp-enter-to{
  margin-top:20px;
  opacity:1;
}
.listMoveUp-leave{
  margin-top:40px;
}
.listMoveUp-leave-active{
  transition:all .5s ease-in
}
.listMoveUp-leave-to{
  margin-top:20px;
}

</style>
