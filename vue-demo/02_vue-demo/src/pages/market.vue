<template lang="html">
	<div id="app">
		<ul>
	    	<li><router-link to="/market/price">天天特价</router-link></li>
	    	<li><router-link to="/market/rank">热销榜</router-link></li>
	    	<li><router-link to="/market/milk">牛奶面包</router-link></li>
	    	<li><router-link to="/market/fruit">优选水果</router-link></li>
	    </ul>
	    <router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		},
		computed : {},
		mounted() {},
		methods : {},
		components : {}
	}
</script>

<style lang="css">

</style>