<template>
    <div>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="头像" prop="photo">
          <upload @uploadSuccess="uploadSuccess"></upload>
        </mu-form-item>
        <mu-form-item label="用户名" prop="username">
          <mu-text-field v-model="validateForm.name" prop="name"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="手机号码" prop="phoneNumber">
          <mu-text-field v-model="validateForm.phoneNumber" prop="phoneNumber"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="sex" label="sex">
          <mu-radio v-model="validateForm.sex" value="male" label="Male"></mu-radio>
          <mu-radio v-model="validateForm.sex" value="female" label="Female"></mu-radio>
        </mu-form-item>
        <mu-form-item prop="birthday" label="Date Time">
          <mu-date-input v-model="validateForm.birthday" type="dateTime" actions></mu-date-input>
        </mu-form-item>
        <mu-form-item>
          <mu-checkbox label="同意用户协议" v-model="isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">注册</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </div>
</template>

<script>
  import upload from '../components/upload'
    export default {
        name: "register",
      data(){
          return{
            validateForm:{
              name:'',
              password:'',
              phoneNumber:''
            },
            isAgree:''
          }
      },
      methods:{
        async submit () {
          await this.$refs.form.validate().then(async (result) => {
            console.log('form valid: ', result)
            if(result){
              try{
                await this.$api.register(this.validateForm);
                this.$router.push('/login')
              }catch (e) {
                console.log(e);
              }
            }
          });
        },
        clear () {
          this.$refs.form.clear();
          this.validateForm = {
            username: '',
            password: '',
            isAgree: false
          };
        },
        uploadSuccess(file){
          this.validateForm.photo = file[0].imageUrl || '';
        }
      },
      components:{
        upload
      }
    }
</script>

<style scoped>

</style>
