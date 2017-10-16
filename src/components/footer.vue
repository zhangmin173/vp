<template>
  <div class="m-footer">
    © 基于vue和elementUI的后台管理系统 -- By Jaymz
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
  
  .m-footer {
    height: 100%;
    background-color: @gray-light;
    line-height: 44px;
    text-align: center;
  }

</style>