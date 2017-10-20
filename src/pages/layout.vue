<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout',
  components: {
    
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less">
  body {
    position: relative;
    padding: 0;
    margin: 0;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  // 工具栏
  .m-toolers {
    text-align: right;
    margin-bottom: 15px;
  }
  // 面包屑
  .m-breadcrumb {
    margin-bottom: 15px;
  }
  // 分页
  .m-pagination {
    text-align: center;
    margin-top: 15px;
  }
</style>
