<template>
  <div :style="{display:'inline-block'}">
    <!--    show file list-->
    <div class="file-list">
      <div v-for="(file,index) in fileList" class="file-list-item" :style="{width:size,height:size}">
        <img class="upload-file-img" :src="file.base64">
        <mu-button class="upload-file-delete" icon color="primary" @click="fileListDeleteHandle(index)">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <div class="upload-file-success" v-if="file.loaded">
          <mu-icon value="check_circle"></mu-icon>
        </div>
        <div class="upload-file-process" v-if="!file.loaded">
          <mu-linear-progress mode="determinate" :value="file.loading"></mu-linear-progress>
        </div>
      </div>
      <!--    upload-->
      <div class="upload-content" :style="{width:size,height:size}" v-if="limit !== fileList.length">
        <input class="upload-input" type="file" :accept="accept" @change="selectFileHandle">
      </div>
    </div>
    <div v-if="!$props.autoUpload">
      <mu-button class="upload-button" @click="uploadClickHandle">上传</mu-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "upload",
    data() {
      return {
        fileBase64: "",
        imageBase64: "",
        fileList: [],
      }
    },
    methods: {
      selectFileHandle(e) {
        let files = e.target.files;
        if (files) {
          this.resultFileList(files).then((result) => {
            this.fileList = this.fileList.concat(result);
            if (this.$props.autoUpload) {
              this.uploadingHandle(this.fileList)
            }
          })
        }
      },
      resultFileList(files) {
        return new Promise((resolve, reject) => {
          if (files.length > 0) {
            let resultList = [];
            let len = files.length;
            for (let i = 0; i < len; i++) {
              let val = files[i];
              this.fileReaderhandle(val).then((result) => {
                let obj = {};
                obj.file = val;
                obj.name = val.name;
                obj.base64 = result;
                resultList.push(obj);
                if (resultList.length === len) {
                  console.log(resultList);
                  resolve(resultList)
                }
              })
            }
          }
        })
      },
      fileReaderhandle(file) {
        //实例化FileReader API
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (e) {
            resolve(e.target.result);
          };
        })
      },
      uploadClickHandle() {
        this.uploadingHandle();
      },
      async uploadingHandle() {
        let resultList = [];
        let _files = this.fileList;
        for (let i = 0; i < _files.length; i++) {
          let item = _files[i];
          if (!item._id && !item.loaded) {
            let result = await this.uploading(item.file,i);
            resultList.push(result)
          }
        }
        // 外部事件钩子 uploadSuccess
        this.$emit('uploadSuccess', resultList);
      },
      async uploading(file,index) {
        let params = new FormData();
        let bindList = this.fileList;
        params.append("file", file);
        this.$set(bindList[index],'loading',0);
        let config = {
          headers: {"Content-Type": "multipart/form-data"}, //添加请求头
          onUploadProgress: (progressEvent) => {
            let complete = (progressEvent.loaded / progressEvent.total * 100 | 0);
            this.$set(bindList[index],'loading',complete);
          },
          timeout: 60000 //上传超时时间 60s
        };
        let res = await this.$api.uploadImg(params, config);
        if (res.status === 200) {
          setTimeout(()=>{
            this.$set(bindList[index],'loaded',true);
          },300);
          return res.data
        }
      },
      progressEvent(progressEvent, index) {

      },
      fileListDeleteHandle(index) {
        this.fileList.splice(index, 1)
      }
    },
    props: {
      //上传格式
      'accept': {
        type: String,
        default: "image/*"
      },
      //单选/多选
      'multiple': {
        type: Boolean,
        default: () => {
          return false
        }
      },
      'size': {
        type: String,
        default: '150px'
      },
      'limit': {
        type: Number,
        default: () => {
          return 1
        }
      },
      'autoUpload': {  //选择即上传
        type: Boolean,
        default: () => {
          return true
        }
      }
    },
    watch:{
      multiple:function(val){
        if(this.limit) return false;
        if(val){
          this.limit = 5
        }else{
          this.limit = 1
        }
      }
    }
  }
</script>

<style scoped>
  .upload-input {
    opacity: 0;
    font-size: 1000%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
  }

  .upload-content {
    display: inline-block;
    overflow: hidden;
    background-image: url(../assets/img/uploadImage.png);
    background-size: 100% 100%;
    background-position: center center;
    position: relative;
  }

  .upload-result-img {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }

  .upload-button {
    margin: 5px 0;
  }

  .file-list {
    width: 100%;
  }

  .file-list-item {
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  .upload-file-process {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .upload-file-success{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    font-size:15px;
    text-align: center;
    color:#4caf50;
    opacity: 50%;
  }
  .upload-file-success i{
    font-size:20px;
  }
  .upload-file-img {
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .upload-file-delete {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    z-index: 10;
    cursor: pointer;
  }
</style>
