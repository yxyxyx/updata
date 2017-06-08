import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from 'components/Hello'

Vue.use(Router)
Vue.use(VueResource)

import Home   from 'pages/home'
import Market from 'pages/market'
import Cart   from 'pages/cart'
import Mine   from 'pages/mine'

var routes = [
    {
		path: '/home',
		name: 'Home',
		component: Home
    },
    {
		path: '/market',
		name: 'Market',
		component: Market,
		children:[
			{
				//二级路由名称
				path:'price',//天天特价
				//配置路径
				component:require('../pages/market/price')
			},
			{
				path:'rank',//热销榜
				component:require('../pages/market/rank')
			},
			{
				path:'milk',//牛奶面包
				component:require('../pages/market/milk')
			},
			{
				path:'fruit',//水果
				component:require('../pages/market/fruit')
			}
		]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
	//如果匹配不到就跳转到home页面
	{ path: '/', redirect:'/home' },
  ]
export default new Router({ routes })
