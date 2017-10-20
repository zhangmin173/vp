<template>
  <div>
    <div class="article">
      <template v-for="(item,index) of articles">
        <div class="article-main article-item" :class="[index == activeIndex ? activeClass : '']" v-if="index == 0" @click="change(index)">
          <div class="article-img">
            <img :src="item.img">
          </div>
          <div class="article-title">{{item.title}}</div>
          <div class="article-item-ft">
            <span @click.stop="move(index,'down')"><i class="el-icon-caret-bottom"></i></span>
          </div>
        </div>
        <div class="article-item" :class="[index == activeIndex ? activeClass : '']" v-else @click="change(index)">
          <div class="article-child">
            <div class="article-title">{{item.title?item.title:'标题'}}</div>
            <div class="article-img">
              <img :src="item.img">
            </div>
          </div>
          <div class="article-item-ft">
            <span @click.stop="move(index,'up')"><i class="el-icon-caret-top"></i></span>
            <span class="fr" @click.stop="del(index)"><i class="el-icon-delete"></i></span>
          </div>
        </div>
      </template>
    </div>
    <div class="article-ft" @click="add">
      <i class="el-icon-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleEdit',
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      visibility: true,
      activeClass: 'active',
      activeIndex: 0
    }
  },
  computed: {
    articles: {
      get: function () {
        return this.value.news_item
      },
      set: function (newValue) {
        this.value.news_item = newValue
      }
    }
  },
  methods: {
    move(index,direction) {
      this.$emit('move',index,direction)
    },
    del(index) {
      this.$emit('del',index)
    },
    add() {
      this.$emit('add')
    },
    change(index) {
      this.activeIndex = index
      this.$emit('change',index)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import url('../../assets/less/helper/_variable.less');
  
  .article {
    box-sizing: border-box;
    width: 100%;
    padding: 15px 15px 0;
    border: 1px solid @border-dark;
    background-color: #fff;

    .article-main {
      position: relative;
      padding-bottom: 10px;
      margin-bottom: 10px;

      .article-img {
        height: 135px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .article-title {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        height: 28px;
        padding: 0 8px;
        line-height: 28px;
        background-color: rgba(0,0,0,.6);
        color: #fff;
        font-size: 14px;
        overflow: hidden;

        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }

    .article-child {
      display: flex;
      margin-top: 10px;
      padding-bottom: 10px;

      .article-img {
        width: 78px;
        height: 78px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .article-title {
        flex: 1;
        padding: 15px 15px 0 0;
        height: 48px;
        line-height: 24px;
        color: #222;
        font-size: 14px;
        overflow: hidden;

        a {
          text-decoration: none;
          color: #222;
        }
      }
    }
  }

  .article-ft {
    height: 93px;
    text-align: center;
    line-height: 93px;
    border: 2px dotted @border-dark;
    border-top: none;
    font-size: 36px;
    cursor: pointer;
    color: #999;
  }

  .article-item {
    position: relative;
    cursor: pointer;

    &.active:before {
      position: absolute;
      left: -15px;
      top: -10px;
      right: -15px;
      bottom: 0;
      content: '';
      display: block;
      border: 1px solid @primary;
    }

    .article-item-ft {
      opacity: 0;
      position: absolute;
      left: -15px;
      right: -15px;
      bottom: 0;
      height: 30px;
      padding: 0 10px;
      line-height: 30px;
      background-color: rgba(0,0,0,.6);
      color: #fff;
    }

    &:hover .article-item-ft {
      opacity: 1;
    }
  }
</style>