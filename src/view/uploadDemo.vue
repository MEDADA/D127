<template>
  <div style="text-align: center;">
    <div>单张图片上传</div>
    <upload size="100px"></upload>
    <div>多张图片上传</div>
    <upload multiple></upload>

    <div>单张图片自动上传</div>
    <upload auto-upload></upload>
    <div>多张图片自动上传</div>
    <upload multiple auto-upload></upload>
  </div>
</template>

<script>
  import upload from '../components/upload'

  export default {
    name: "uploadDemo",
    data() {
      return {}
    },
    components: {
      'upload': upload
    }
  }
</script>

<style scoped>

</style>
