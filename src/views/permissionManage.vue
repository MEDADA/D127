<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="title"
        align="center"
        label="title">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作"
        width="200">
<!--        <template slot-scope="scope">-->
<!--          <el-checkbox v-model="scope.row.permission.edit">编辑</el-checkbox>-->
<!--          <el-checkbox v-model="scope.row.permission.visible">查看</el-checkbox>-->
<!--        </template>-->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "permissionManage",
    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.getPermissionList()
    },
    methods: {
      async getPermissionList(){
        let req =await this.$api.getPermissionList();
        console.log(req);
        if(req.status === 200){
          this.tableData = req.data.data
        }
      },
      handleClick() {

      }
    }
  }
</script>

<style scoped>

</style>
