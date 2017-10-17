<template>
  <div>
    <div class="m-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>权限设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :inline="true" :model="searchData" class="demo-form-inline">
      <el-form-item label="规则名称">
        <el-input v-model="searchData.title" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button type="primary" icon="search" @click="onSearch"></el-button>
          <el-button type="info" icon="close" @click="onSearchCancel"></el-button>
        </el-button-group>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" icon="delete" @click="onDel">批量删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button type="success" icon="plus" @click="onAdd"></el-button>
          <el-button type="success" icon="upload" @click="onUpload"></el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      :height="tableHeight"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="tableSelectionChange">
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
        width="200">
      </el-table-column>
      <el-table-column
        prop="condition"
        label="规则表达式">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="80"
        align="center">
        <template scope="scope">
          <div v-if="scope.row.status == 1">
            <el-tag type="success">有效</el-tag>
          </div>
          <div v-else>
            <el-tag type="gray">禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150"
        align="center">
        <template scope="scope">
          <el-button-group>
            <el-button type="primary" size="small" icon="view" @click="tableDetail(scope.row)"></el-button>
            <el-button type="primary" size="small" icon="edit" @click="tableEdit(scope.row)"></el-button>
            <el-button type="primary" size="small" icon="delete" @click="tableDel(scope.row)"></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="m-pagination">
      <el-pagination
        @size-change="onPageSizeChange"
        @current-change="onPageIndexChange"
        :current-page="pageIndex"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal">
      </el-pagination>
    </div>
    <el-dialog title="编辑中..." :visible.sync="dialogFormVisible">
      <el-form :model="formData" :label-position="'right'" label-width="100px">
        <el-form-item label="主键" hidden>
          <el-input v-model="formData.id"></el-input>
        </el-form-item>
        <el-form-item label="规则标识">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="规则名称">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="规则表达式">
          <el-input v-model="formData.condition"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="formDataStatus"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      tableData: [], // 表单数据
      tableSelectData: [], // 表单选中数据
      tableHeight: 441,
      dialogFormVisible: false,
      formData: {
        id: '',
        name: '',
        title: '',
        condition: '',
        status: 0,
      },
      pageTotal: 0,
      pageIndex: 1,
      pageSize: 10,
      searchData: {
        title: ''
      },
    }
  },
  computed: {
    formDataStatus: {
      get: function () {
        return this.formData.status?true:false
      },
      set: function (newValue) {
        this.formData.status = newValue?1:0
      }
    }
  },
  created () {
    this.init()
    this.getData()
  },
  methods: {
    init() {

    },
    getData() {
      this.$http.get('/apis/rule/index', {
        page: this.pageIndex,
        limit: this.pageSize,
        title: this.searchData.title
      },(res) => {
        this.tableData = res.data
        this.pageTotal = res.total
      })
    },
    delData(id) {
      this.$http.post('/apis/rule/del', {
        id
      },(res) => {
        this.getData()
      })
    },
    tableDetail(row) {

    },
    tableEdit(row) {
      this.formData = JSON.parse(JSON.stringify(row))
      this.dialogFormToggle()
    },
    tableDel(row) {
      this.delData(row.id)
    },
    tableSelectionChange(val) {
      this.tableSelectData = [];
      for (let value of val) {
        this.tableSelectData.push(value.id)
      }
    },
    dialogFormConfirm() {
      this.$http.post('/apis/rule/save', this.formData,(res) => {
        this.dialogFormToggle()
        this.getData()
      })
    },
    dialogFormToggle() {
      this.dialogFormVisible = !this.dialogFormVisible
    },
    onPageSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    onPageIndexChange(val) {
      this.pageIndex = val
      this.getData()
    },
    onSearch() {
      this.getData()
    },
    onSearchCancel() {
      this.searchData = {}
      this.getData()
    },
    onDel() {
      if (this.tableSelectData.length) {
        let ids = this.tableSelectData.join(',')
        this.delData(ids)
      } else {
        this.$message({type: 'warning', message:'请选择要删除的项'})
      }
    },
    onAdd() {
      this.formData = {
        id: '',
        name: '',
        title: '',
        condition: '',
        status: 0,
      }
      this.dialogFormToggle()
    },
    onUpload() {

    }
  }
}
</script>
<style lang="less" scoped>

</style>