<template>
	<div>
		<v-picture></v-picture>
	</div>
</template>

<script>
import vPicture from '@/components/picture/picture.vue'
export default {
  name: 'pictureList',
  components: {
    vPicture
  },
  data() {
    return {

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
      // this.$http.get('/apis/rule/index', {
      //   page: this.pageIndex,
      //   limit: this.pageSize,
      //   title: this.searchTitle
      // },(res) => {
      //   this.tableData = res.data
      //   this.pageTotal = res.total
      // })
    }
  }
}
</script>
<style lang="less" scoped>
	@import url('../../../assets/less/helper/_variable.less');

</style>