import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/home'

import RulePage from '@/pages/system/rule'
import MenuPage from '@/pages/system/menu'

import ArticlePage from '@/pages/wechat/article/article'
import ArticleDetailPage from '@/pages/wechat/article/articleDetail'
import ArticleEditPage from '@/pages/wechat/article/articleEdit'
import PicturePage from '@/pages/wechat/picture'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
		  path: '/',
		  name: 'HomePage',
		  component: HomePage
		},
		{
		  path: '/system',
		  component: MenuPage,
		  children: [
		  	{
			  path: '/system/menu',
			  name: 'MenuPage',
			  component: MenuPage
			},
			{
			  path: '/system/rule',
			  name: 'RulePage',
			  component: RulePage
			}
		  ]
		},
		{
		  path: '/wechat',
		  component: ArticlePage,
		  children: [
		  	{
			  path: '/wechat/media',
			  component: ArticlePage
			},
			{
			  path: '/wechat/article',
			  name: 'ArticlePage',
			  component: ArticlePage,
			  children: [
			  	{
				  path: '/wechat/article/detail',
				  name: 'ArticleDetailPage',
				  component: ArticleDetailPage
				},
				{
				  path: '/wechat/article/edit',
				  name: 'ArticleEditPage',
				  component: ArticleEditPage
				}
			  ]
			},
			{
			  path: '/wechat/picture',
			  name: 'PicturePage',
			  component: PicturePage
			}
		  ]
		}
	]
})
