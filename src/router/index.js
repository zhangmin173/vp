import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home'
import RulePage from '@/pages/rule'
import MenuPage from '@/pages/menu'

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
		  path: '/menu',
		  name: 'MenuPage',
		  component: MenuPage
		},
		{
		  path: '/rule',
		  name: 'RulePage',
		  component: RulePage
		}
	]
})
