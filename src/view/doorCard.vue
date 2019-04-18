<template>
  <div class="doorCard">
    <PublicHeader :data="headerData"></PublicHeader>
    <el-button type="primary" @click="skipTo('/index/doorCardAdd')" >添加门卡</el-button> 
    <!-- <el-input style="width:300px;" placeholder="查询设备门卡信息"></el-input> 
    <el-button>查询</el-button> -->
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="门卡id"  >
            <template slot-scope="scope" >
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>        
            <el-table-column label="门卡编号"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="门卡名称"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>       
          <el-table-column label="编辑"  >
            <template slot-scope="scope" >
              <el-button type="info" size="small" >修改</el-button>     
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
    name: 'doorCard',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['设备门卡','所有门卡信息'],
        tableData: [
          {
            name: '设备门卡',
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