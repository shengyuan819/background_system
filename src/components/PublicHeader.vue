<template>
		<el-col :span="24" class="header">
			<!-- <div class="header-title">{{this.data[this.data.length-1]}}</div> -->
			<div class="header-breadcrumb">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item v-for="item of data" :key="item">{{item}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</el-col>
</template>
<script>
	export default{
		data(){
			return{				
			}
		},
		props:['data'],
		mounted(){}
	}
</script>
<style>
	.header{
		padding:20px 0 20px 0;
	}
</style>

