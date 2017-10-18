<template>
  <div>
    <div class="m-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>微信管理</el-breadcrumb-item>
        <el-breadcrumb-item>素材设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="tabActiveName" @tab-click="tabClick">
      <el-tab-pane label="文章" name="article">
        
      </el-tab-pane>
      <el-tab-pane label="图片" name="picture">
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
      </el-tab-pane>
      <el-tab-pane label="语音" name="voice">
        
      </el-tab-pane>
      <el-tab-pane label="视频" name="movie">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'article',
  components: {

  },
  data() {
    return {
      tableData: [], // 表单数据
      tabActiveName: 'picture',
      dialogFormVisible: false,
      pageTotal: 0,
      pageIndex: 1,
      pageSize: 10,
      searchTitle: ''
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
      this.$http.get('/apis/rule/index', {
        page: this.pageIndex,
        limit: this.pageSize,
        title: this.searchTitle
      },(res) => {
        this.tableData = res.data
        this.pageTotal = res.total
      })
    },
    tabClick(node) {
      this.$router.push({path: '/wechat/' + node.name})
    },
    onPageSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    onPageIndexChange(val) {
      this.pageIndex = val
      this.getData()
    }
  }
}
</script>
<style lang="less" scoped>

</style>