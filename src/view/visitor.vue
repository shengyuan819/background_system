<template>
  <div class="visitor">
    <PublicHeader :data="headerData"></PublicHeader>
    <el-button type="primary" @click="skipTo('/index/visitorAdd')" >添加访客</el-button> 
    <el-input style="width:300px;" placeholder="查询访客列表信息"></el-input> 
    <el-button>查询</el-button>
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="访客id"  >
            <template slot-scope="scope" >
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>        
            <el-table-column label="姓名"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="手机号"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="头像信息"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="身份证号"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>   
          <el-table-column label="拜访日期"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>  
          <el-table-column label="审核状态" style="width:20vh;" >
            <template slot-scope="scope" >
              <!-- <p>{{scope.row.time}}</p> -->
              <span>待审核</span>
              <br>
              <span>通过</span>
              <span>不通过</span>
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
    name: 'visitor',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['访客列表','查询访客列表'],
        tableData: [
          {
            name: '访客列表',
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