<template>
    <div class="bottom-nav">
      <mu-bottom-nav :value.sync="shift" shift>
        <mu-bottom-nav-item :to="n.path" :value="n.value" :title="n.title" :icon="n.icon" v-for="(n,index) in nav" :key="index"></mu-bottom-nav-item>
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
                icon:'dashboard',
                path:'/'
              },{
                value:'goodsList',
                title:'GOODS',
                icon:'clear_all',
                path:'/goodsList'
              },{
                value:'friends',
                title:'FRIENDS',
                icon:'mail',
                path:'/friends'
              },{
                value:'user',
                title:'USER',
                icon:'person',
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
  position:fixed;
  bottom:0;
  left:0;
  right:0;
}
</style>
