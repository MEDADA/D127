<template>
    <div class="bottom-nav">
      <mu-bottom-nav :value.sync="shift" shift>
        <mu-bottom-nav-item :to="n.path" :replace="true" :value="n.value" :title="n.title" v-for="(n,index) in nav" :key="index" :class="['iconfont',n.icon]"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
</template>

<script>
    export default {
        name: "bottomNav",
        data () {
          return {
            shift: '',
            nav:[
              {
                value:'app',
                title:'APP',
                icon:'icon-grid-outline',
                path:'/'
              },{
                value:'goodsList',
                title:'GOODS',
                icon:'icon-list-outline',
                path:'/goodsList'
              },{
                value:'friends',
                title:'FRIENDS',
                icon:'icon-people-outline',
                path:'/friends'
              },{
                value:'user',
                title:'USER',
                icon:'icon-person-outline',
                path:'/user'
              }
            ]
          }
        },
        props:['value'],
        created(){
          let currentPath = this.$route.path;
          for(let i = 0 ; i < this.nav.length; i++){
            if(this.nav[i].path.indexOf(currentPath) > -1){
              this.shift = this.nav[i].value;
              break;
            }
          }

        }
    }
</script>

<style scoped>
.bottom-nav{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  z-index:999
}
  .iconfont{
    font-size:1.5rem;
    line-height: 1.2rem;
  }
  .mu-bottom-nav{
    height:auto;
  }
</style>
