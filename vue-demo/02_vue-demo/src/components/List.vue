<template lang="html">
	<ul class="mod-home">
		<li v-for="x in list">
			<div>
				<img :src="x.img" height="200px" width="300px" />
			</div>
			<h3>
				{{ x.name }}
				{{ x.price }}
				{{ x.pm_info }}
			</h3>
		</li>
	</ul>
</template>

<script>
	export default {
		//接收下面传输过来的data数据并返回
		data(){
			return {
				list:[]
			}
		},
		props:['type'],
		computed : {},
		mounted() {
			var type = this.type ||'天天特价'
			//$http请求数据接口
			this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category='+type)
			
			.then(
				//成功的时候
				response => {
					//成功的时候将请求下的数据data传输给上面的data对象
					this.list = response.body.data;
				},
				//失败的时候
				response => {
			
				}
			);
		},
		methods : {},
		components : {}
	}
</script>

<style lang="css">

</style>