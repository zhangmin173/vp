<template>
	<div>
		<div class="m-toolers">
			<el-button type="danger" icon="delete" @click="delAll">批量删除</el-button>
			<span class="upload-media">
				<v-upload-media></v-upload-media>
			</span>
		</div>
		<el-row :gutter="20">
			<template v-for="(item,index) of pictureData">
			  	<el-col :span="6">
				  	<div class="pic">
				  		<div class="pic-img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
				  		<div class="pic-name">
				  			<el-checkbox :label="index" @change="check">{{item.name}}</el-checkbox>
				  		</div>
				  		<div class="pic-ft">
				  			<i class="fr el-icon-delete" @click="del(index)"></i>
				  		</div>
				  	</div>
			  	</el-col>
			</template>
		</el-row>
		<div class="m-pagination">
	      <el-pagination
	        @size-change="onPageSizeChange"
	        @current-change="onPageIndexChange"
	        :current-page="pageIndex"
	        :page-sizes="[8]"
	        :page-size="pageSize"
	        layout="total, sizes, prev, pager, next, jumper"
	        :total="pageTotal">
	      </el-pagination>
	    </div>
	</div>
</template>

<script>
import vUploadMedia from '@/components/upload/uploadMedia.vue'
export default {
  name: 'picture',
  props: {
    value: {
      type: Object
    }
  },
  components: {
    vUploadMedia
  },
  data() {
    return {
      pictureData: [], // 表单数据
      selectData: [], // 选中的id
      pageTotal: 0,
      pageIndex: 1,
      pageSize: 8,
    }
  },
  computed: {
    aaa: {
      get() {
      	let d = []
      	for (let item of this.pictureData) {
      		d.push(false)
      	}
        return d
      },
      set(newValue) {
        console.log(newValue)
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
   		this.pictureData = [
   			{
   				id: 1,
   				name: '11111',
   				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
   			},
   			{
   				id: 2,
   				name: '222',
   				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
   			},
   			{
   				id: 3,
   				name: '333',
   				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
   			},
   			{
   				id: 4,
   				name: '14441',
   				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
   			},
   			{
   				id: 5,
   				name: '15551',
   				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508319987893&di=81d763829650ffb005ba22886e15f441&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201607%2F20160712011.jpg'
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
    delData(id) {

    },
    check(e) {
    	let index = e.target.getAttribute('value'),
    		id = this.pictureData[index].id,
    		status = e.target.checked
        if (status) {
        	this.selectData.push(id)
        } else {
        	let i = this.selectData.indexOf(id)
        	if (i !== -1) {
        		this.selectData.splice(i,1)
        	}
        }
    },
    onPageSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    onPageIndexChange(val) {
      this.pageIndex = val
      this.getData()
    },
    del(index) {
      let d = JSON.parse(JSON.stringify(this.pictureData))
      d.splice(index,1)
      this.pictureData = d
    },
    delAll() {
    	console.log(this.selectData)
    	if (this.selectData.length) {
    		let ids = this.selectData.join(',')
        	this.delData(ids)
    	} else {
    		this.$message({type: 'warning', message:'请选择要删除的项'})
    	}
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
	@import url('../../assets/less/helper/_variable.less');
	.upload-media {
		float: right;
		margin-left: 15px;
	}
	.pic {
		margin-bottom: 15px;
		.pic-img {
			width: 100%;
			padding-bottom: 100%;
			height: 0;  
			overflow: hidden;    
			background-position: center;  
			background-repeat: no-repeat;
			background-size: cover;
			cursor: pointer;  
		}

		.pic-name {
			padding: 10px 15px;
			border: 1px solid @border-dark;
			border-bottom: none;
		}

		.pic-ft {
			box-sizing: border-box;
			padding: 10px 15px;
			height: 36px;
			border: 1px solid @border-dark;

			i {
				cursor: pointer;
				&:hover {
					color: @danger;
				}
			}
		}
	}
</style>