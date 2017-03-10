// 路由小列子1
// $(function(){
	// const Foo = {template:'<div class="box box1">Foo</div>'};
	// const Bar = {template:'<div class="box box2">Bar</div>'};
	// const Key = {template:'<div class="box box3">Key</div>'};
	// const routes = [
 //        { path: '/foo', component: Foo },
 //        { path: '/bar', component: Bar },
 //        { path: '/key', component: Key },
 //    ]
	// const router =new VueRouter({
	// 	routes
	// });
	// const app = new Vue({
 //      router
 //    }).$mount('#app')
// 路由小列子2
    // const User = {template:'<div>User {{$route.params.id}}</div>'};

    // const router = new VueRouter({
    //     routes: [
    //         { path: '/user/:id', component: User }
    //      ]
    // })
    // const app = new Vue({
    //   router
    // }).$mount('#app')
// 路由小列子3-嵌套路由
// const User = {
//   template: '<div class="user"><h2>User {{ $route.params.id }}</h2><router-view></router-view></div>'
// }
// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         { path: '', component: UserHome },
//         { path: 'profile', component: UserProfile },
//         { path: 'posts', component: UserPosts }
//       ]
//     }
//   ]
// })
// const app = new Vue({ router }).$mount('#app')




const Home = { template: '<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

new Vue({
  router
}).$mount('#app')
// })