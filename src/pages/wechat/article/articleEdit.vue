<template>
  <div class="page">
    <div class="page-hd">
      <div class="m-breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>素材管理</el-breadcrumb-item>
          <el-breadcrumb-item>文章</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="page-left">
      <div>图文列表</div>
      <div class="articles">
        <v-article-edit v-model="articles" @move="onMove" @del="onDel" @add="onAdd" @change="onChange"></v-article-edit>
      </div>
    </div>
    <div class="page-body">
      <div class="edit">
        <el-form ref="form" v-model="editData">
          <el-form-item>
           <el-input placeholder="请在这里输入标题" v-model="editData.title"></el-input>
          </el-form-item>
          <el-form-item>
           <el-input placeholder="请输入作者" v-model="editData.author"></el-input>
          </el-form-item>
          <el-form-item>
            <quill-editor 
              v-model="editData.content"
              ref="myQuillEditor"
              class="editer"
              :options="editorOption">
            </quill-editor>
          </el-form-item>
          <el-form-item label="原文链接">
            <el-input placeholder="可不填" v-model="editData.url"></el-input>
          </el-form-item>
          <el-form-item label="封面">
            <el-input placeholder="可不填" v-model="editData.url"></el-input>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input type="textarea" :rows="4" placeholder="选填，如果不填写会默认抓取正文前54个字" v-model="editData.url"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="page-right">
      <div>多媒体</div>
      <div class="media">
        <div class="media-item" @click="choosePic"><i class="el-icon-picture"></i><span>图片</span></div>
      </div>
    </div>
    <div class="page-ft">
      <span class="btn-wrapper">
        <el-button type="success" @click="onSave">保存</el-button>
      </span>
    </div>
    <el-dialog title="图片库" :visible.sync="dialogFormVisible">
      <v-picture></v-picture>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import vArticleEdit from '@/components/article/articleEdit'
import vPicture from '@/components/picture/picture.vue'
export default {
  name: 'articleEditPage',
  components: {
    vArticleEdit,
    quillEditor,
    vPicture
  },
  data() {
    return {
      articles: {},
      articleIndex: 0,
      content: '请输入内容',
      editorOption: {
        placeholder: '从这里开始写正文',
      },
      dialogFormVisible: false,
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
    editData: {
      get() {
        return this.articles.news_item[this.articleIndex]
      },
      set(newValue) {
        let d = JSON.parse(JSON.stringify(this.articles))
        d.news_item[this.articleIndex] = newValue
        this.articles = d
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
      this.articles = {
        id: 111111,
        news_item: [
          {
            id: 1,
            title: '文章标题1111111',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
            content: ''
          },
          {
            id: 2,
            title: '文章标题222222',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
            content: ''
          },
          {
            id: 3,
            title: '文章标题333333',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg',
            content: ''
          }
        ],
        at_time: '2017-10-28'
      }
      // this.$http.get('/apis/rule/index', {
      //   page: this.pageIndex,
      //   limit: this.pageSize,
      //   title: this.searchTitle
      // },(res) => {
      //   this.tableData = res.data
      //   this.pageTotal = res.total
      // })
    },
    dialogFormToggle() {
      this.dialogFormVisible = !this.dialogFormVisible
    },
    choosePic() {
      this.dialogFormToggle()
    },
    onMove(index,direction) {
      if (direction == 'down') {
        let d = JSON.parse(JSON.stringify(this.articles)),
            news_item = d.news_item[index]
        d.news_item[index] = d.news_item[index+1]
        d.news_item[index+1] = news_item
        this.articles = d
      } else {
        let d = JSON.parse(JSON.stringify(this.articles)),
            news_item = d.news_item[index]
        d.news_item[index] = d.news_item[index-1]
        d.news_item[index-1] = news_item
        this.articles = d
      }
    },
    onDel(index) {
      let d = JSON.parse(JSON.stringify(this.articles))
      d.news_item.splice(index,1)
      this.articles = d
    },
    onAdd() {
      let d = JSON.parse(JSON.stringify(this.articles))
      d.news_item.push([])
      this.articles = d
    },
    onChange(index) {
      this.articleIndex = index
    },
    onSave() {
      alert('onSave')
    }
  }
}
</script>
<style lang="less" scoped>
  @import url('../../../assets/less/helper/_variable.less');
  .page {
    margin-bottom: 72px;
  }
  .articles {
    margin-top: 15px;
  }

  .edit {
    height: 100%;
    overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }

    .el-form-item {
      margin-bottom: 15px;
    }

  }

  .page-ft {
    box-sizing: border-box;
    padding-top: 15px;
    text-align: center;

    .btn-wrapper {

      .el-button {
        min-width: 100px;
      }
    }
  }

  .media {
    margin-top: 15px;
    

    .media-item {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding-left: 30px;
      line-height: 40px;
      color: #222;
      border: 1px solid @border-dark;
      
      cursor: pointer;

      &:not(:last-child) {
        border-bottom: none;
      }

      &:hover {
        border: 1px solid @primary;
        color: @primary;
      }

      i {
        margin-right: 15px;
      }
    }
  }
</style>