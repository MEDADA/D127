<template>
    <div class="login">
      {{$route.meta.title}}
      <div>
        <el-form :model="loginForm">
          <el-form-item prop="name">
            <el-input v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>

        </el-form>
        <el-button @click="LoginHandle">登录</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return {
            loginForm:{
              name:'',
              password:''
            }
          }
      },
      methods:{
        async LoginHandle(){
          let res = await this.$api.login(this.loginForm);
          console.log(res);
          if(res.data.success){
            this.$store.commit('setPermission',null);
            console.log(res.data.data);
            this.$store.commit('setUserDetail',res.data.data);
            console.log(this.$router);
            this.$router.push('home')
          }
        }
      }
    }
</script>

<style>
.login{

}
</style>
