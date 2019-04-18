<template>
  <div class="doorOpen">
    <PublicHeader :data="headerData"></PublicHeader>
    <!-- <el-button type="primary" @click="skipTo('/index/familyAdd')" >添加门卡</el-button>  -->
    <!-- <el-input style="width:300px;" placeholder="查询设备门卡信息"></el-input> 
    <el-button>查询</el-button> -->
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="日志id"  >
            <template slot-scope="scope" >
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>        
            <el-table-column label="日志内容"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="姓名"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>       
          <el-table-column label="头像"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>  
          <el-table-column label="开门时间"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
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
    name: 'doorOpen',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['开门日志','所有开门日志'],
        tableData: [
          {
            name: '开门日志',
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