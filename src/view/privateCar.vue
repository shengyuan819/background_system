<template>
	<div class="privateCar">
		<PublicHeader :data="headerData"></PublicHeader>
		<el-button type="primary" @click="skipTo('/index/privateCarAdd')" >添加车辆</el-button>		
		<el-col :span="24">
			<template >
				<el-table :data="tableData"  >
					<el-table-column label="车辆ID"  >
						<template slot-scope="scope" >
							<p>{{scope.row.name}}</p>
						</template>
					</el-table-column>					
				    <el-table-column label="汽车牌照"  >
						<template slot-scope="scope" >
							<p>{{scope.row.time}}</p>
						</template>
					</el-table-column>
					<el-table-column label="审核状态"  >
						<template slot-scope="scope" >
							<p>{{scope.row.time}}</p>
						</template>
					</el-table-column>					
					<el-table-column label="编辑"  >
						<template slot-scope="scope" >
							<el-button type="info" size="small" @click="DelMessage">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>

		</el-col>
	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'
	export default{
		name: 'privateCar',
		components: {PublicHeader},
		data(){
			return{				
				headerData: ['车辆信息','业主车辆列表'],
				tableData: [
					{
						name: '车辆',
						time: 2015000
					}
				],
			}
		},
		methods:{
			skipTo(url){
				this.$router.push(url)
			},
			//删除按钮
			DelMessage(){
				this.$confirm('此操作将删除该车辆信息,是否继续?','提示',{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						message: '删除成功',
						type: 'success'
					})
				}).catch(() => {
					this.$message({
						message: '已取消删除',
						type: 'info'
					})
				});
			},
		},
	}
</script>
<style>
	

</style>