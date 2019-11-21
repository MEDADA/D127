<template>
    <div class="login">
        {{$route.meta.title}}
        <div>
            <van-field v-model="loginForm.name"></van-field>
            <van-field type="password" v-model="loginForm.password"></van-field>
            <van-button @click="LoginHandle">登录</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            async LoginHandle() {
                let res = await this.$api.login(this.loginForm);
                console.log(res);
                if (res.data.success) {
                    this.$store.commit('setPermission', null);
                    console.log(res.data.data);
                    this.$store.commit('setUserDetail', res.data.data);
                    console.log(this.$router);
                    this.$router.push('home')
                }
            }
        }
    }
</script>

<style>
    .login {

    }
</style>
