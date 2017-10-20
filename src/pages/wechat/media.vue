<template>
  <div class="container">
    <div class="m-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>微信管理</el-breadcrumb-item>
        <el-breadcrumb-item>素材设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="tabActiveName" @tab-click="tabClick">
      <el-tab-pane label="文章" name="article">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="图片" name="picture">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'media',
  components: {
    
  },
  data() {
    return {
      tabActiveName: '',
    }
  },
  created () {
    this.init()
  },
  methods: {
    init() {
      this.tabActiveName = this.$route.name
    },
    tabClick(node) {
      this.$router.push({path: '/wechat/' + node.name})
    },
  }
}
</script>
<style lang="less" scoped>
  .container {
    padding-bottom: 60px;
  }
</style>