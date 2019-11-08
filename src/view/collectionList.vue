<template>
  <div>
    <div>
      <header-nav :title="'收藏'" back></header-nav>
    </div>
    <div>
      <div class="collection-list">
        <delay-show>
          <div v-for="(item,index) in collectionList" class="collection-item" :key="index" :data-index="index">
            <div class="collection-list-body" @click="$router.push({path:'/goodsDetail',query:{id:item._id}})">
              <div class="collection-list-poster">
                <img :src="item.poster.thumbnail" alt="" v-if="item.poster" class="image-poster">
                <img :src="imageUrlNull" alt="" v-else class="image-null">
              </div>
              <div class="collection-list-info">
                {{item.title}}
              </div>
            </div>
            <div class="collection-list-right">
              <mu-button icon @click="deleteCollection(item._id)">
                <span class="iconfont el-icon-close"></span>
              </mu-button>
            </div>
          </div>
        </delay-show>
      </div>
    </div>
  </div>
</template>

<script>
  import headerNav from '../components/headerNav'
  import imageUrlNull from '../assets/img/img-error.png'
  import delayShow from '../components/delayShow'
  export default {
    name: "collectionList",
    data() {
      return {
        collectionList: [],
        imageUrlNull
      }
    },
    activated() {
      this.getUserCollection()
    },
    methods: {
      async getUserCollection() {
        let res = await this.$api.getUserCollection();
        if (res.status === 200) {
          console.log(res.data);
          this.collectionList = res.data
        }
      },
      async deleteCollection(id) {
        let res = await this.$api.removeCollection({
          id
        });
        if (res.status === 200) {
          this.getUserCollection()
        }
      }
    },
    components: {
      'header-nav': headerNav,
      'delay-show':delayShow
    }
  }
</script>

<style scoped>
  .collection-list {
    padding: 0;
    margin: 10px 0;
  }

  .collection-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #f5f5f5;
  }

  .collection-list-info {
    flex: 1;
    padding: 0 10px;
  }

  .collection-list-body {
    display: flex;
    flex: 1;
  }

  .collection-list-right {
    width: 50px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .collection-list-poster {
    width: 5rem;
    height: 5rem;
    overflow: hidden;
  }

  .collection-list-poster .image-poster {
    width: 100%;
    margin-top: 50%;
    transform: translateY(-50%);
  }

  .collection-list-poster .image-null {
    width: 30px;
    margin-left: 50%;
    margin-top: 50%;
    transform: translateX(-15px) translateY(-15px);
  }
</style>
