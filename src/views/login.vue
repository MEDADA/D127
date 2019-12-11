<template>
    <div class="login">
        <div class="login-form">
            <div class="login-form-title">{{$route.meta.title}}</div>
            <div>
                姓名：<van-field v-model="loginForm.name"></van-field>
                密码：<van-field type="password" v-model="loginForm.password"></van-field>
            </div>
            <div class="login-form-footer">
                <van-button @click="LoginHandle">登录</van-button>
            </div>
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

<style scoped lang="scss">
    .login {
        background-color: #272733;
        position:absolute;
        width:100%;
        height:100%;
    }
    .login-form{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width:45%;
        min-width:300px;
        min-height:300px;
        border:1px solid rgba(0,0,0,0.5);
        padding:0 15px;
        border-radius:8px;
        color:#fff;
        .login-form-title{
            text-align: center;
            padding:15px 0;
        }
        .login-form-footer{
            display:flex;
            justify-content: center;
            padding:15px 0;
        }
    }
</style>
