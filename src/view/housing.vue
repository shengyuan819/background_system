<template>
	<div class="housing">
		<PublicHeader :data="headerData"></PublicHeader>
		<el-button type="primary" @click="skipTo('/index/housingAdd')" >添加小区</el-button>		
		<el-col :span="24">
			<template >
				<el-table :data="tableData"  >
					<el-table-column label="小区ID"  >
						<template slot-scope="scope" >
							<p>{{scope.row.name}}</p>
						</template>
					</el-table-column>
					<el-table-column label="所在小区名称">
				        <template slot-scope="scope">
				        <p>{{scope.row.time}}</p>
				      </template>
				    </el-table-column>
				    <el-table-column label="楼栋名称"  >
						<template slot-scope="scope" >
							<p>{{scope.row.time}}</p>
						</template>
					</el-table-column>
					<el-table-column label="门牌号"  >
						<template slot-scope="scope" >
							<p>{{scope.row.time}}</p>
						</template>
					</el-table-column>
					<el-table-column label="状态"  >
						<template slot-scope="scope" >
							<p>{{scope.row.time}}</p>
						</template>
					</el-table-column>

					<el-table-column label="编辑"  >
						<template slot-scope="scope" >
							<el-button type="info" size="small" @click="DelMessage">解绑</el-button>
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
		name: 'housing',
		components: {PublicHeader},
		data(){
			return{
				msg: '小区信息',
				headerData: ['小区信息','查询小区列表'],
				tableData: [
					{
						name: '小区',
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
				this.$confirm('此操作将解绑该数据,是否继续?','提示',{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						message: '解绑成功',
						type: 'success'
					})
				}).catch(() => {
					this.$message({
						message: '已取消解绑',
						type: 'info'
					})
				});
			},
		},
	}
</script>
<style>
	

</style>