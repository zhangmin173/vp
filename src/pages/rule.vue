<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="规则标识"
        width="120">
      </el-table-column>
      <el-table-column
        prop="title"
        label="规则名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="condition"
        label="规则表达式">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="80">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import http from '../utils/http'
import api from '../utils/api'
export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      url: 'http://192.168.31.235/tp5/api/rule/index',
      tableData: []
    }
  },
  created () {
    http.get('http://zhangmin.com/tp5/api/rule/index?page=1&limit=10', {},(res) => {
      console.log(res)
    })
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
<style lang="less" scoped>

</style>