<template>
	<div>
		<el-upload
		  class="upload-demo"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  accept="image/jpg,image/jpeg,image/png"
		  :on-success="success"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove">
		  <el-button type="success" icon="upload">本地上传</el-button>
		</el-upload>
	</div>
</template>

<script>
export default {
  name: 'uploadMedia',
  data() {
    return {
      mediaData: {},
    }
  },
  methods: {
  	success(res) {
  		
  	},
    handleRemove(file, fileList) {
		console.log(file, fileList);
	},
	handlePreview(file) {
		console.log(file);
	}
  }
}
</script>