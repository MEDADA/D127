<template>
  <div>
    <div class="fixed-header">
<!--      分类菜单-->
      <div class="swiper-container" style="height:50px;">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="clickHandle(category._id)" v-for="(category,index) in this.categoryList"
               :key="index"
               v-text="category.name"
               :class="['swiper-item',{'categoryActive':category._id === currentCategory}]"
          ></div>
        </div>
        <div class="swiper-floatR-btn">
          <mu-button icon color="primary" @click="add">
            <mu-icon value="add"></mu-icon>
          </mu-button>
        </div>
      </div>
      <!--    筛选菜单-->
      <div class="filter-menu-container">
        <div class="filter-menu-item">
          时间
        </div>
        <div class="filter-menu-item">
          浏览数
        </div>
      </div>
    </div>
    <div class="goodsList">
      <div class="processLine">
        <mu-linear-progress v-show="listLoading"></mu-linear-progress>
      </div>
      <div v-if="goodsList.length === 0" class="goods-list-null">暂无数据哦</div>
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="loadMore"
                    :loaded-all="loadedAll" v-if="goodsList.length > 0">
        <delay-show>
          <div class="goodsItem" v-for="(goods,index) in goodsList" :key="index" :data-index="index"
               @click="$router.push('/goodsDetail?id='+goods._id)">
            <div class="goods-img" v-if="goods.poster">
              <img :src="goods.poster.thumbnail">
            </div>
            <div class="goods-info">
              <div class="goods-title" v-text="goods.title"></div>
              <div class="goods-subtitle" v-text="goods.context"></div>
            </div>
            <div class="goods-right" v-text="">
              <span class="goods-time">{{goods.createDate | formatTime}}</span>
              <div class="goods-pageview">
                {{goods.pageview + ' View'}}
              </div>
            </div>
          </div>
        </delay-show>
      </mu-load-more>
      <div v-if="loadedAll" class="loaded-all">我是底部</div>
    </div>
    <!--    add dialog-->
    <div>
      <mu-dialog title="Add Blog" width="90%" :esc-press-close="false" :overlay-close="false"
                 :open.sync="openAddDialog">
        <div>
          <mu-form :model="form">
            <mu-form-item prop="title" label="标题" label-float>
              <mu-text-field v-model="form.title"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="context" label="描述" label-float>
              <mu-text-field v-model="form.context" multi-line :rows="3" :rows-max="6"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="categoryName" label="类别" label-float>
              <mu-auto-complete :data="categoryList.map(category=>category.name)" :max-search-results="5"
                                v-model="form.categoryName"
                                open-on-focus avatar>
              </mu-auto-complete>
            </mu-form-item>
            <mu-form-item prop="imageId" label="上传图片">
              <upload @uploadSuccess="uploadSuccess" size="100px" auto-upload></upload>
            </mu-form-item>
          </mu-form>
        </div>
        <mu-button slot="actions" flat color="primary" @click="addBlog">yes</mu-button>
        <mu-button slot="actions" flat color="dark" @click="openAddDialog = false">cancel</mu-button>
      </mu-dialog>
    </div>
  </div>
</template>

<script>
  import delayShow from '../components/delayShow'
  import Swiper from 'swiper'
  import upload from '../components/upload'
  import Utlis from '../utlis/utlis'

  export default {
    name: "goodsList",
    data: function () {
      return {
        loadedAll: false,
        limit: 8,
        pagination: 1,
        category: '',
        refreshing: false,
        loading: false,
        openAddDialog: false,
        listLoading: false,
        tabActive: 0,
        form: {},
        categoryList: [],
        domList: [
          {
            title: '',
            updateTime: '',
            createTime: '',
            img: '',
          }
        ],
        tabList: [
          {
            title: '最热'
          },
          {
            title: '最新'
          },
        ],
        proxy: {
          'title': 'title',
          'updateTime': 'updateTime',
          'createTime': 'createTime',
          'img': 'img'
        },
        currentCategory: null,
        goodsList: [],
        selectedId: 0,
        items: [],
        options: {
          activeColor: '#1d98bd'
        }
      }
    },
    created() {

    },
    activated() {
      this.initData();
    },
    filters: {
      formatTime: (value) => {
        if (!value) return '';
        return Utlis.formatTime(value, '{y}/{m}/{d} {h}:{i}')
      }
    },
    methods: {
      init() {
        return new Promise(function (resolve, reject) {
          console.log('initStart');
          setTimeout(function () {
            console.log('initEnd');
            resolve()
          }, 3000)
        })
      },
      initData() {
        this.getCategory().then(() => {
          this._initSwiper();  //顶部滑动初始化
          this.getDataList(); //获取列表
        }); //获取分类
      },
      async getCategory() {
        let res = await this.$api.getBlogCategory();
        return new Promise((resolve, reject) => {
          if (res.status === 200) {
            this.categoryList = res.data;
            resolve()
          } else {
            reject()
          }
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
      add() {
        this.openAddDialog = true;
      },
      async getDataList(type) {
        this.listLoading = true;
        let limit = this.limit;
        let pagination = this.pagination;
        let category = this.currentCategory !== '' ? this.currentCategory : null;
        let res = await this.$api.getBlogList({category, pagination, limit});
        let list = res.data.list;
        if (res.status === 200) {
          if (type === 'nextPage') {
            if (list.length > 0) {
              this.goodsList = this.goodsList.concat(list)
            } else {
              this.pagination--
            }
          } else {
            this.goodsList = list
          }
          this.totalPage = res.data.totalPage;
          if (this.pagination >= this.totalPage && this.pagination !== 1) {
            this.loadedAll = true
          }
          this.$nextTick(() => {
            setTimeout(() => {
              this.loading = false;
              this.listLoading = false;
            }, 500);
          })
        }
      },
      async addBlog() {
        let form = this.form;
        let res = await this.$api.createBlog(form);
        if (res.status === 200) {
          this.openAddDialog = false;
          this.getDataList();
          this.getCategory();
        }
      },
      _initSwiper() {
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          freeMode: true,  //抵抗反弹
          slidesPerView: 5
        });
      },
      clickHandle(category) {
        this.currentCategory = category;
        this.pagination = 1;
        this.loadedAll = false;
        this.getDataList()
      },
      loadMore() {
        this.loading = true;
        this.pagination++;
        this.getDataList('nextPage')
      },
      refresh() {
        this.pagination = 1;
        this.loadedAll = false;
        this.getDataList();
        this.getCategory();
      },
      uploadSuccess(e) {
        console.log(e);
        this.form.posterId = e[0]._id;
      }
    },
    mounted() {
      this.init().then(() => {
        return this.getData()
      }).then(() => {
        return this.dataInit()
      }).then(() => {
        return this.domJsonInit()
      });
    },
    directives: {},
    components: {
      'delay-show': delayShow,
      'upload': upload
    }
  }
</script>

<style scoped lang="scss">
  @import "../../node_modules/swiper/swiper";
  @import "../assets/css/var";
  .filter-menu-container{
    display:flex;
    border-top:1px solid #ccc;
  }
  .filter-menu-item {
    flex:1;
    text-align: center;
    background-color:#fff;
    line-height: 30px;
  }
  .fixed-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 11;
  }

  .swiper-floatR-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    z-index: 9;
    background: linear-gradient(to right, rgba(250, 250, 250, 0), rgba(230, 230, 230, 1));
  }

  .loaded-all {
    text-align: center;
    line-height: 30px;
    color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .goodsList {
    position: relative;
    padding-top: 80px;
    background-color: $bgColor;
    min-height: 100%;
    padding-bottom: 30px;
    margin-bottom: 56px;
  }

  .goods-title {
    font-size: 1rem;
  }

  .goods-subtitle {
    font-size: 0.875rem;
    opacity: 0.6;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .processLine {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 20px;
  }

  .goodsItem {
    background-color: #fff;
    width: 94vw;
    margin-left: 3vw;
    margin-right: 3vw;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 80px;
  }

  .goods-img {
    overflow: hidden;
    width: 80px;
    height: 100%;
    position: relative;;
  }

  .goods-img img {
    width: 100%;
    margin-top: 50%;
    transform: translateY(-50%);
  }

  .goods-info {
    overflow: hidden;
    flex: 1;
    padding: 0 10px;
  }

  .goods-right {
    overflow: hidden;
    width: 80px;
    text-align: right;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .goods-time {
    font-size: 0.75rem;
    opacity: 0.8;
  }

  .goods-pageview {
    font-size: 0.75rem;
  }

  .listMoveUp-enter {
    margin-top: 30px;
    opacity: 0;
  }

  .listMoveUp-enter-active {
    transition: all .5s ease
  }

  .listMoveUp-enter-to {
    margin-top: 20px;
    opacity: 1;
  }

  .listMoveUp-leave {
    margin-top: 40px;
  }

  .listMoveUp-leave-active {
    transition: all .5s ease-in
  }

  .listMoveUp-leave-to {
    margin-top: 20px;
  }

  .categoryActive {
    border-bottom: 7px solid #333;
    box-sizing: border-box;
    transform:scale(1.2,1.2);
  }
  .swiper-container{
    padding-right: 50px;
  }
  .swiper-item {
    line-height: 50px;
    text-align: center;
    transition:all .2s ease;
  }

  .goods-list-null {
    color: #fff;
    text-align: center;
  }
</style>
