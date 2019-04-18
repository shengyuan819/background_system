<template>
  <div class="ownerInquire">
    <PublicHeader :data="headerData"></PublicHeader>    
    <el-input style="width:300px;" placeholder="根据业主ID获取个人信息"></el-input> 
    <el-button>查询</el-button>
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="业主id"  >
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
          <el-table-column label="业主地址"  >
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
    name: 'ownerInquire',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['业主查询','查询业主信息'],
        tableData: [
          {
            name: '业主查询',
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