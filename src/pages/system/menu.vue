<template>
  <div>
    <div class="m-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>菜单设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="m-toolers">
      <el-button-group>
        <el-button type="primary" icon="plus" @click="onAdd">添加菜单</el-button>
      </el-button-group>
    </div>
    <el-tree
      :data="tableData"
      :props="defaultProps"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="treeRender">
    </el-tree>
    <el-dialog title="编辑中..." :visible.sync="dialogFormVisible">
      <el-form :model="formData" :label-position="'right'" label-width="100px">
        <el-form-item label="主键" hidden>
          <el-input v-model="formData.id"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-select v-model="formData.parent_id" placeholder="请选择上级菜单">
            <el-option label="一级菜单" :value="'0'|number"></el-option>
            <el-option :label="'-- ' + item.name" :value="item.id|number" v-for="item of tableData"></el-option>
          </el-select>
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
          <el-switch v-model="formDataStatus" on-text="显示" off-text="隐藏"></el-switch>
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
        parent_id: 0,
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
  },
  methods: {
    init() {
      this.getData()
    },
    getData() {
      this.$http.get('/apis/menu/index', {
        
      },(res) => {
        this.tableData = res.data
      })
    },
    delData(id) {
      this.$http.post('/apis/menu/del', {
        id
      },(res) => {
        this.getData()
      })
    },
    dialogFormToggle() {
      this.dialogFormVisible = !this.dialogFormVisible
    },
    dialogFormConfirm() {
      this.$http.post('/apis/menu/save', this.formData,(res) => {
        this.dialogFormToggle()
        this.getData()
      })
    },
    treeRender(createElement, { node, data, store }) {
      let self = this,
        showText = '显示';
      if (data.status == 0) showText = '隐藏'

      return createElement('span', [
        createElement('span', node.label),
        createElement('span', {attrs:{
          style:"float: right; margin-right: 20px"
        }},[
          createElement('el-button',{attrs:{
            size:"mini",
            type: 'info'
          },on:{
            click:function() {
              self.treeEdit(node, data, store)
            }
          }},"编辑"),
          createElement('el-button',{attrs:{
            size:"mini",
            type: 'danger'
          },on:{
            click:function() {
              self.treeDel(node, data, store)
            }
          }},"删除"),
          createElement('el-button',{attrs:{
            size:"mini",
            type: data.status?'success':''
          },on:{
            click:function() {
              self.treeToggle(node, data, store)
              //store.remove(data);
            }
          }},showText)
        ])
      ]);
    },
    treeEdit(node, data, store) {
      this.formData = JSON.parse(JSON.stringify(data))
      this.dialogFormToggle()
    },
    treeDel(node, data, store) {
      if (data.child && data.child.length) {
        this.$message({type: 'warning', message:'存在子菜单不能删除'})
        return
      }
      let id = data.id
      this.$http.post('/apis/menu/del', {
        id
      },(res) => {
        store.remove(data)
      })
    },
    treeToggle(node, data, store) {
      let id = data.id,
        status = 1 - data.status
      this.$http.post('/apis/menu/save', {
        id,
        status
      },(res) => {
        this.getData()
      })
    },
    onAdd() {
      this.dialogFormToggle()
    }
  }
}
</script>
<style lang="less" scoped>

</style>