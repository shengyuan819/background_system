<template>
	<div class="passwordAdd">
		<PublicHeader :data="headerData"></PublicHeader>
		<div class="contentPersonal">
			<div style="padding-right:30px;">
				<div class="disFlex">
					<div style="width:120px;">设备id：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">业主名：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">手机号：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">密码：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">开始时间：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">结束时间：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">报警密码：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">类型：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>	
			</div>
			
		</div>
		<el-button type="primary" style="width:100px;margin-top:20px;">修改</el-button>
	
	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'
	export default{		
		name: 'passwordAdd',
		components: {PublicHeader},

		data(){
			return{
				name: '',
				sex: '',
				
				headerData:['密码信息','查询密码信息','添加密码'],
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