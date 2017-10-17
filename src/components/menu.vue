<template>
  <div class="m-menu">
    <el-menu theme="dark" :router="true" class="m-menu-body">
      <el-submenu v-for="item of menus" :index="item.name">
        <template slot="title">{{item.name}}</template>
        <el-menu-item v-for="d of item.child" :index="d.url">{{d.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      menus: [],
      isGet: false,
    }
  },
  created () {
    this.init()
    this.getData()
  },
  methods: {
    init() {
      let menus = JSON.parse(sessionStorage.getItem("menus"));
      if (menus) this.isGet = true
      this.menus = menus
    },
    getData() {
      if (this.isGet) return
      this.$http.get('/apis/menu/index', {

      },(res) => {
        sessionStorage.setItem("menus", JSON.stringify(res.data));
        this.menus = res.data
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import url('../assets/less/helper/_variable.less');
  
  .m-menu {
    height: 100%;
    background-color: @black-light;

    a {
      text-decoration: none;
      color: @sliver-lighter;
    }
  }

</style>