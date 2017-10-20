<template>
  <div>
    <div class="app-header">
      <v-header></v-header>
    </div>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
export default {
  name: 'indexLayout',
  components: {
    vHeader
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less">
  @import url('../assets/less/helper/_variable.less');
  
  body {
    padding-top: 60px;
    background-color: @body-color;
  }
  .app-header {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    height: 60px;
  }
  .app-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }

  .page {
    position: relative;
    background-color: #fff;
    border: 1px solid @border-dark;

    .page-hd {
      box-sizing: border-box;
      padding: 0 15px;
      height: 50px;
      border-bottom: 1px solid @border-dark;

      .m-breadcrumb {
        padding-top: 20px;
      }
    }

    .page-left {
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 50px;
      width: 250px;
      height: 800px;
      padding: 15px;
      border-right: 1px solid @border-dark;
      background-color: @body-color-lighter;
    }
    .page-body {
      box-sizing: border-box;
      position: relative;
      margin: 0 210px 0 250px;
      padding: 15px;
      height: 800px;
      background-color: #fff;
    }
    .page-right {
      box-sizing: border-box;
      position: absolute;
      right: 0;
      top: 50px;
      width: 210px;
      height: 800px;
      padding: 15px;
      border-left: 1px solid @border-dark;
      background-color: #fff;
    }
    .page-ft {
      position: fixed;
      left: 0;
      width: 100%;
      bottom: 0;
      height: 72px;
      background-color: #fff;
      border-top: 1px solid @border-dark;
    }
  }
  
  .ql-container {
    height: 300px;
  }
</style>
