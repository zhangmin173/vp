<template>
  <div>
    <div class="app-header">
      <v-header></v-header>
    </div>
    <div class="app-menu">
      <v-menu></v-menu>
    </div>
    <div class="app-body">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from '../components/header.vue'
import vMenu from '../components/menu.vue'
import vFooter from '../components/footer.vue'
export default {
  name: 'layout',
  components: {
    vHeader,
    vMenu,
    vFooter
  },
  data() {
    return {
      headerTitle: '导航标题',
      msg: 'Welcome to Your Vue.js App'
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
  .app-header {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    height: 60px;
  }
  .app-menu {
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 200px;
  }
  .app-body {
    position: absolute;
    left: 200px;
    top: 60px;
    right: 0;
    bottom: 44px;
    padding: 15px;
  }
  .app-footer {
    position: fixed;
    left: 200px;
    right: 0;
    bottom: 0;
    height: 44px;
  }
  .m-breadcrumb {
    margin-bottom: 15px;
  }
  .m-pagination {
    text-align: center;
    margin-top: 15px;
  }
</style>
