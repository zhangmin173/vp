<template>
	<div>
		<el-form :inline="true">
          <el-form-item label="">
            <el-input
              placeholder="标题"
              icon="search"
              v-model="searchTitle"
              :on-icon-click="onSearch">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" icon="plus" @click="onAdd"></el-button>
          </el-form-item>
        </el-form>
        <div class="m-article">
          <div class="m-article-item" v-for="item of tableData">
            <v-article :value="item" @del="onDel"></v-article>
          </div>
        </div>
        <div class="m-pagination">
          <el-pagination
            @size-change="onPageSizeChange"
            @current-change="onPageIndexChange"
            :current-page="pageIndex"
            :page-sizes="[10, 50, 100, 200]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageTotal">
          </el-pagination>
        </div>
	</div>
</template>
<script>
import vArticle from '@/components/article/article.vue'
export default {
  name: 'articleList',
  components: {
    vArticle
  },
  data() {
    return {
      tableData: [], // 表单数据
      dialogFormVisible: false,
      pageTotal: 0,
      pageIndex: 1,
      pageSize: 10,
      searchTitle: ''
    }
  },
  computed: {
    formDataStatus: {
      get: function () {
        return this.formData.status?true:false
      },
      set: function (newValue) {
        this.formData.status = newValue?1:0
      }
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
      this.tableData = [
        {
          id: 111111,
          news_item: [
            {
              id: 1,
              title: '文章标题文章标题文章标题文章标章标题文章标题文章标题',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
            },
            {
              id: 2,
              title: '文章标题文章标题文章标题文章标章标题文章标题文章标题',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
            },
            {
              id: 3,
              title: '文章标题文章标题文章标题文章标章标题文章标题文章标题',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
            }
          ],
          at_time: '2017-10-28'
        },
        {
          id: 222222,
          news_item: [
            {
              id: 4,
              title: '文章标题文章标题文章标题文章标章标题文章标题文章标题',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
            },
            {
              id: 5,
              title: '文章标题文章标题文章标题文章标章标题文章标题文章标题',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
            }
          ],
          at_time: '2017-10-28'
        },
        {
          id: 3333333,
          news_item: [
            {
              id: 6,
              title: '文章标题文章标题文章标题文章标章标题文章标题文章标题',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
            }
          ],
          at_time: '2017-10-28'
        }
      ]

      // this.$http.get('/apis/rule/index', {
      //   page: this.pageIndex,
      //   limit: this.pageSize,
      //   title: this.searchTitle
      // },(res) => {
      //   this.tableData = res.data
      //   this.pageTotal = res.total
      // })
    },
    onPageSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    onPageIndexChange(val) {
      this.pageIndex = val
      this.getData()
    },
    onSearch() {
      this.getData()
    },
    onSearchCancel() {
      this.searchData = {}
      this.getData()
    },
    onDel(data,call) {
      call()
    },
    onAdd() {
      this.$router.push({
        name: 'ArticleEditPage'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .m-article {
    column-count: 5;

    .m-article-item {
      display: inline-block;
    }
  }
</style>