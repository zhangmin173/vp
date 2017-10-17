module.exports = {
	proxy: {
		'/apis': {  //将www.exaple.com印射为/apis
			target: 'http://zhangmin.com/mytp5/api', // 接口域名
			changeOrigin: true, //是否跨域
			pathRewrite: {
				'^/apis': '/'  //需要rewrite的,
			}       
		}
	}
}