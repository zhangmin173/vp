import Vue from 'vue'
import Router from 'vue-router'

import HomeLayout from '@/pages/homeLayout'
import IndexLayout from '@/pages/indexLayout'

import RulePage from '@/pages/system/rule'
import MenuPage from '@/pages/system/menu'

import MediaLayout from '@/pages/wechat/media'

import ArticleListPage from '@/pages/wechat/article/articleList'
import ArticleDetailPage from '@/pages/wechat/article/articleDetail'
import ArticleEditPage from '@/pages/wechat/article/articleEdit'
import PictureListPage from '@/pages/wechat/picture/pictureList'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
		  path: '/',
		  name: 'HomeLayout',
		  component: HomeLayout,
		  children: [
		  	{
			  path: 'system',
			  component: MenuPage
			},
			{
			  path: 'system/menu',
			  name: 'MenuPage',
			  component: MenuPage
			},
			{
			  path: 'system/rule',
			  name: 'RulePage',
			  component: RulePage
			},
			{
			  path: 'wechat',
			  component: MediaLayout,
			  children: [
			  	{
				  path: '/wechat/article',
				  name: 'article',
				  component: ArticleListPage
				},
				{
				  path: '/wechat/picture',
				  name: 'picture',
				  component: PictureListPage
				}
			  ]
			}
		  ]
		},
		{
		  path: '/index',
		  name: 'IndexLayout',
		  component: IndexLayout,
		  children: [
		  	{
			  path: '/article/detail/:id',
			  name: 'ArticleDetailPage',
			  component: ArticleDetailPage
			},
			{
			  path: '/article/Edit/:id',
			  name: 'ArticleEditPage',
			  component: ArticleEditPage
			},
		  ]
		}
	]
})
