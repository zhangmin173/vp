<template>
  <div>
    详细页
  </div>
</template>

<script>
export default {
  name: 'articleDetail',
  components: {
    
  },
  data() {
    return {
      tableData: [], // 表单数据
      tabActiveName: 'article',
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
      console.log('页面浏览')
      console.log(this.$route)
      // this.$http.get('/apis/rule/index', {
      //   page: this.pageIndex,
      //   limit: this.pageSize,
      //   title: this.searchTitle
      // },(res) => {
      //   this.tableData = res.data
      //   this.pageTotal = res.total
      // })
    },
  }
}
</script>
<style lang="less" scoped>
  .container {
    padding-bottom: 60px;
  }
  .m-article {
    column-count: 5;

    .m-article-item {
      display: inline-block;
    }
  }
</style>