<template>
  <div>
    <div class="list-media">
      <div class="list-media-item" v-for="(f,index) in friends" :key="f._id">
        <div class="list-media-img">
          <img :src="f.img">
        </div>
        <div class="list-media-info">
          <div class="list-media-title" v-text="f.name"></div>
          <div class="list-media-msg">您有一个条信息...</div>
        </div>
        <div class="list-media-handle" @click="$router.push({path:'chatRoom',query:{id:f._id}})">
          <mu-button flat color="primary">Edit</mu-button>
        </div>
        <div class="list-media-handle" @click="removeUser(f._id)">
          <mu-button flat color="secondary">Delete</mu-button>
        </div>
      </div>
    </div>
    <div class="floatTool">
      <div>
        <mu-button fab small color="red" @click="openSimple = true">
          +
        </mu-button>
      </div>
    </div>
    <div>
      <mu-dialog title="Add User" width="360" :open.sync="openSimple">
        <mu-form :model="form" class="mu-demo-form" :label-position="'left'" label-width="100">
          <mu-form-item prop="userName" label="name">
            <mu-text-field v-model="form.userName" max-length="20"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="birthday" label="birthday">
            <mu-date-input v-model="form.birthday" label-float full-width no-display></mu-date-input>
          </mu-form-item>
          <mu-form-item prop="sex" label="sex">
            <mu-radio v-model="form.sex" value="男" label="Male"></mu-radio>
            <mu-radio v-model="form.sex" value="女" label="Female"></mu-radio>
          </mu-form-item>
          <mu-form-item prop="phone" label="phone">
            <mu-text-field v-model="form.phone" type="number" max-length="11"></mu-text-field>
          </mu-form-item>
        </mu-form>
        <mu-button slot="actions" flat color="primary" @click="addUser">Ok</mu-button>
        <mu-button slot="actions" flat color="primary" @click="openSimple = false">Close</mu-button>
      </mu-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: "friends",
    data() {
      return {
        friends: [],
        openSimple: false,
        form: {
          userName: '',
          birthday: '',
          sex: '',
          phone: ''
        },
        num:null
      }
    },
    created() {
      this.getUserList();
      // let obj = new Proxy({},{
      //   get:function(target, p, receiver){
      //     console.log('get')
      //     return Reflect.get(target, p, receiver)
      //   },
      //   set:(target, p, receiver)=>{
      //     console.log('set')
      //     return Reflect.set(target, p, receiver)
      //   }
      // })
      // obj.name = 3;
      // console.log(obj.name);
    },
    methods: {
      async getUserList() {
        let res = await this.$api.getUserList();
        if (res.status === 200) {
          this.friends = res.data
        }
      },
      async addUser() {
        let form = this.form;
        let res = await this.$api.addUser({
          name: form.userName,
          birthday: form.birthday,
          sex: form.sex,
          phone: form.phone
        });
        if (res.status === 200) {
          this.openSimple = false;
          this.getUserList()
        }
      },
      async removeUser(id) {
        let res = await this.$api.deleteUser({id});
        if (res.status === 200) {
          this.getUserList()
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-media {
    background-color: $bgColor;
    color: $textColor;
    height: 100%;
  }

  .list-media-item {
    display: flex;
    border-bottom: 1px solid $borderColor;
    justify-content: space-between;
    padding: 10px 0;
  }

  .list-media-img {
    display: block;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    margin: 0 15px;

    img {
      width: 100%;
      height: 100%;
    }

    overflow: hidden;
  }

  .list-media-msg {
    font-size: 0.625rem;
    color: $subTitleColor;
  }

  .list-media-info {
    flex: 1;
  }

  .list-media-handle {
    height: 3rem;
    line-height: 3rem;
    margin: 0 5px;
    text-align: center;
    .iconfont {
      font-size: 1.25rem;
    }
    .mu-flat-button{
      min-width:1rem;
    }
  }

  .floatTool {
    position: absolute;
    right: 10px;
    bottom: 70px;
    height: 50px;
    width: 50px;
  }
</style>
