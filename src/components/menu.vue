<template>
  <div class="m-menu">
    <el-menu theme="dark" class="m-menu-body" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>账户管理</template>
        <el-menu-item index="1-1">账户设置</el-menu-item>
        <el-menu-item index="1-2">其他设置</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>系统管理</template>
        <el-menu-item index="2-1">权限设置</el-menu-item>
        <el-menu-item index="2-2">角色设置</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menu',
  props: {
    btns: {
      type: Array,
      default: function() {
        return [
          {
            name: '首页',
            url: '/'
          },
          {
            name: '我的',
            url: '/my'
          }
        ]
      }
    }
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import url('../assets/less/helper/_variable.less');
  
  .m-menu {
    height: 100%;
    background-color: @black-light;
  }

</style>