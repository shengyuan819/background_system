<template>
	<div class="housingAdd">
		<PublicHeader :data="headerData"></PublicHeader>
		<div class="contentPersonal">
			<div style="padding-right:30px;">
				<div class="disFlex">
					<div style="width:120px;">所在小区名称：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">楼栋名称：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">门牌号：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
					
			</div>
			
		</div>
		<el-button type="primary" style="width:100px;margin-top:20px;">修改</el-button>
	
	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'
	export default{
		
		name: 'housingAdd',
		components: {PublicHeader},

		data(){
			return{
				name: '',
				sex: '',
				
				headerData:['小区信息','查询小区列表','添加小区'],
				isRouterAlive: true,
			}
		},
		methods: {

		},
		mounted(){
			// this.$router.go(0)
			// location.reload();
			
		}

	}
</script>
<style>
	.input{
		width:200px;
	}
	.contentPersonal{
		width:500px;
		display:flex;
		justify-content:space-round;
	}
	.disFlex{
		display:flex;
	}

</style>