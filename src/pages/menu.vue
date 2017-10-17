<template>
  <div>
    <div class="m-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>菜单设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tree
      :data="tableData"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
    <el-dialog title="编辑中..." :visible.sync="dialogFormVisible">
      <el-form :model="formData" :label-position="'right'" label-width="100px">
        <el-form-item label="主键" hidden>
          <el-input v-model="formData.id"></el-input>
        </el-form-item>
        <el-form-item label="主键" hidden>
          <el-input v-model="formData.parent_id"></el-input>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="菜单路由">
          <el-input v-model="formData.url"></el-input>
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
  name: 'menu',
  components: {

  },
  data() {
    return {
      tableData: [], // 表单数据
      defaultProps: {
        children: 'child',
        label: 'name'
      },
      dialogFormVisible: false,
      formData: {
        id: '',
        parent_id: '',
        name: '',
        url: '',
        status: 0
      }
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
      this.$http.get('/apis/menu/index', {
        
      },(res) => {
        this.tableData = res.data
      })
    },
    delData(id) {
      this.$http.post('/apis/rule/del', {
        id
      },(res) => {
        this.getData()
      })
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
    renderContent(createElement, { node, data, store }) {
      var self = this;
      return createElement('span', [
          createElement('span', node.label),
          createElement('span', {attrs:{
              style:"float: right; margin-right: 20px"
          }},[
              createElement('el-button',{attrs:{
                  size:"mini"
              },on:{
                  click:function() {
                    self.onAdd()
                    store.append({ id: self.baseId++, name: 'testtest', child: [] }, data);
                  }
              }},"添加"),
              createElement('el-button',{attrs:{
                  size:"mini"
              },on:{
                  click:function() {
                    store.remove(data);
                  }
              }},"删除"),
          ]),
      ]);
    },
    onEdit(data,node,e) {
      this.formData = data;
      this.dialogFormToggle()
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
      this.dialogFormToggle()
    },
    onUpload() {

    }
  }
}
</script>
<style lang="less" scoped>

</style>