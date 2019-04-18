<template>
  <div class="password">
    <PublicHeader :data="headerData"></PublicHeader>
    <el-button type="primary" @click="skipTo('/index/passwordAdd')" >添加密码</el-button> 
    <el-input style="width:300px;" placeholder="查询密码信息信息"></el-input> 
    <el-button>查询</el-button>
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="密码id"  >
            <template slot-scope="scope" >
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>        
            <el-table-column label="业主名"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="手机号"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="密码"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="开始时间"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="结束时间"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="报警密码"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="类型"  >
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
    name: 'password',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['密码信息','查询密码信息'],
        tableData: [
          {
            name: '密码信息',
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