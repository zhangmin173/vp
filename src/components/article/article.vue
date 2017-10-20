<template>
  <div class="container" v-if="visibility">
    <div class="m-article">
      <div class="m-article-hd">
        更新时间：{{value.at_time}}
      </div>
      <div class="m-article-content">
        <template v-for="(item,index) of value.news_item">
          <div class="m-article-main" v-if="index == 0">
            <div class="m-article-img" >
              <img :src="item.img">
            </div>
            <div class="m-article-title">
              <router-link :to="{ name: 'ArticleDetailPage', params: { id: item.id }}" target="_blank">{{item.title}}</router-link>
            </div>
          </div>
          <div class="m-article-child" v-else>
            <div class="m-article-title">
              <router-link :to="{ name: 'ArticleDetailPage', params: { id: item.id }}" target="_blank">{{item.title}}</router-link>
            </div>
            <div class="m-article-img" >
              <img :src="item.img">
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="m-article-ft">
      <div class="m-article-btn">
        <router-link :to="{ name: 'ArticleEditPage', params: { id: value.id }}" target="_blank">编辑</router-link>
      </div>
      <div class="m-article-btn" @click="del">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleItem',
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      visibility: true  
    }
  },
  methods: {
    del: function() {
      this.$emit('del',this.value, () => {
        this.visibility = false
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import url('../../assets/less/helper/_variable.less');
  
  .container {
    box-sizing: border-box;
    margin-bottom: 30px;
    background-color: #fff;
  }
  .m-article {
    box-sizing: border-box;
    width: 100%;
    padding: 15px 15px 0;
    border: 1px solid #eee;

    .m-article-hd {
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;
      font-size: 13px;
      color: #999;
    }

    .m-article-content {
      padding-top: 15px;
      
    }

    .m-article-main {
      position: relative;
      padding-bottom: 15px;

      .m-article-img {
        height: 135px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .m-article-title {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 15px;
        height: 28px;
        padding: 0 8px;
        line-height: 28px;
        background-color: rgba(0,0,0,.6);
        color: #fff;
        font-size: 14px;
        overflow: hidden;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }

    .m-article-child {
      display: flex;
      padding: 0 0 15px;

      .m-article-img {
        width: 78px;
        height: 78px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .m-article-title {
        flex: 1;
        padding: 15px 15px 0 0;
        height: 48px;
        line-height: 24px;
        color: #222;
        font-size: 14px;
        overflow: hidden;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #222;
        }
      }
    }
  }

  .m-article-ft {
    display: flex;
    width: 100%;
    height: 44px;
    border-top: 1px solid #e7e7eb;
    background-color: #f4f4f4;

    .m-article-btn {
      flex: 1;
      text-align: center;
      line-height: 44px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #222;
      }

      &:nth-child(1) {
        border-right: 1px solid #e7e7eb;
      }
    }
  }

</style>