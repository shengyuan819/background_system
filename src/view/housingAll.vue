<template>
  <div class="housingAll">
    <PublicHeader :data="headerData"></PublicHeader>
    <!-- <el-button type="primary" @click="skipTo('/index/familyAdd')" >添加成员</el-button>  -->
    <!-- <el-input style="width:300px;" placeholder="查询所有小区信息"></el-input> 
    <el-button>查询</el-button> -->
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="小区id"  >
            <template slot-scope="scope" >
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>        
            <el-table-column label="所在小区名称"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          
          <el-table-column label="编辑"  >
            <template slot-scope="scope" >
              <el-button type="info" size="small" >查询所有楼栋</el-button>
              
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
    name: 'housingAll',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['所有小区','所有小区信息'],
        tableData: [
          {
            name: '所有小区',
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
        this.$confirm('此操作将永久删除该数据,是否继续?','提示',{
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