<template>
	<div class="facilityLimits">
		<PublicHeader :data="headerData"></PublicHeader>
		<div class="contentPersonal">
			<div style="padding-right:30px;">
				<div class="disFlex">
					<div style="width:120px;">开门密钥：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">随机码：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>						
			</div>
			
		</div>
		<el-button type="primary" style="width:100px;margin-top:20px;">修改</el-button>
	
	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'
	export default{		
		name: 'facilityLimits',
		components: {PublicHeader},

		data(){
			return{
				name: '',
				sex: '',
				
				headerData:['设备信息','查询设备信息','修改设备权限'],
				isRouterAlive: true,
			}
		},
		methods: {

		},
		mounted(){
			console.info(this.$route.query.id)
			
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