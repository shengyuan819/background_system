<template>
  <div class="facility">
    <PublicHeader :data="headerData"></PublicHeader>
    <el-button type="primary" @click="skipTo('facilityAdd')" >添加设备</el-button> 
    <el-input style="width:300px;" placeholder="查询业主设备信息"></el-input> 
    <el-button>查询</el-button>
    <el-col :span="24">
      <template >
        <el-table :data="tableData"  >
          <el-table-column label="设备id"  >
            <template slot-scope="scope" >
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>        
            <el-table-column label="设备名称"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="设备电量"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="mac地址"  >
            <template slot-scope="scope" >
              <p>{{scope.row.time}}</p>
            </template>
          </el-table-column>
          <el-table-column label="操作"  >
            <template slot-scope="scope" >
              <el-button size="small" @click="skipTo('facilityLimits',33)">修改权限</el-button>
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
    name: 'facility',
    components: {PublicHeader},
    data(){
      return{       
        headerData: ['设备信息','查询设备信息'],
        tableData: [
          {
            name: '设备信息',
            time: 2015000
          }
        ],
      }
    },
    methods:{
      skipTo(url,i){
        this.$router.push({
          name: url,
          query:{
            id: i
          }
        })
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