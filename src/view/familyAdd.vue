<template>
	<div class="familyAdd">
		<PublicHeader :data="headerData"></PublicHeader>
		<div class="contentPersonal">
			<div style="padding-right:30px;">
				<div class="disFlex">
					<div style="width:120px;">姓名：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">手机号：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">成员人脸头像：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:120px;">角色关系：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>					
			</div>
			
		</div>
		<el-button type="primary" style="width:100px;margin-top:20px;">修改</el-button>
	
	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'
	export default{		
		name: 'familyAdd',
		components: {PublicHeader},

		data(){
			return{
				name: '',
				sex: '',
				
				headerData:['家庭成员','家庭成员信息','添加成员'],
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