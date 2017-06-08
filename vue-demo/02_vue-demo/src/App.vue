<template>
  <div id="app">
  	<ul class="footer">
    	<li><router-link to="/home">首页</router-link></li>
    	<li><router-link to="/market">超市</router-link></li>
    	<li><router-link to="/cart">购物车</router-link></li>
    	<li><router-link to="/mine">我的</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
	margin: 0;
	padding: 0;
}
.footer{
	position: fixed;
	height: 46px;
	line-height: 46px;
	background: #dfdfdf;
	list-style: none;
	text-align: center;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
}
.footer li{
	width: 25%;
}
.footer a{
	text-decoration: none;
}
</style>
