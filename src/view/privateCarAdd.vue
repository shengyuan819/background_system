<template>
	<div class="privateCarAdd">
		<PublicHeader :data="headerData"></PublicHeader>				
			<div style="padding-right:30px;">
				汽车牌照：<el-input class="input" v-model="name"></el-input><br><br>				
			</div>
		
		<el-button type="primary" style="width:100px;margin-left:50px;">提交</el-button>

	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'	
	export default{
		name: 'privateCarAdd',
		components: {PublicHeader},
		data(){
			return{
				name: '',
				headerData: ['车辆信息','业主车辆列表','添加车辆'],
			}
		},
	}
</script>
<style>
	.input{
		width:200px;
	}
</style>