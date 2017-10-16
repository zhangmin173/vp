<template>
  <div class="m-header">
    <div class="m-logo">后台管理中心</div>
    <el-menu theme="dark" class="m-nav" mode="horizontal">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-menu theme="dark" class="m-user" mode="horizontal">
      <el-submenu index="1">
        <template slot="title">admin</template>
        <el-menu-item index="1-1">基本资料</el-menu-item>
        <el-menu-item index="1-2">安全设置</el-menu-item>
      </el-submenu>
      <el-menu-item index="2"><a href="https://www.ele.me">退出</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    title: {
      type: String
    },
    leftUrl: {
      type: String
    },
    rightUrl: {
      type: String
    }
  },
  components: {
    
  },
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import url('../assets/less/helper/_variable.less');
  .m-header {
    display: flex;
    background-color: @black-light;
    
    .m-logo {
      width: 200px;
      line-height: 60px;
      text-align: center;
      color: @primary;
    }
    .m-nav {
      flex: 1;
    }
    .m-user {
      width: 200px;
    }

    a {
      text-decoration: none;
    }
  }
</style>