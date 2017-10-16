<template>
  <div>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      title: '系统提示',
      msg: '确定要删除吗?',
      btns: ['确定', '算了'],
      isShowPop: false,
      isShowKeyboard: false,
      nums: [1, 2],
      isShowSelect: false
    }
  },
  methods: {
    ok: function() {
      this.isShowPop = false
      console.log('ok')
    },
    no: function() {
      this.isShowPop = false
      console.log('no')
    },
    sok: function() {
      this.isShowSelect = false
      console.log('ok')
    },
    sno: function() {
      this.isShowSelect = false
      console.log('no')
    },
    pop: function() {
      this.isShowPop = true
    },
    keyboard: function() {
      this.isShowKeyboard = true
    },
    keychange: function(d) {
      this.nums = d
    },
    showSelect: function() {
      this.isShowSelect = true
    }
  }
}
</script>
<style lang="less" scoped>

</style>
