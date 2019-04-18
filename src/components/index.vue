<template>
  <div class="home" >
    <el-row>
      <el-col :span="24"><div class="blue-top size-top">智慧社区</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"class="el-menu">
        <el-menu :default-active="activeIndex">
          <el-menu-item index="1" class="menu-item" @click="skipTo('/index/personal')">          
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="2" class="menu-item" @click="skipTo('/index/housing')">           
            <span>业主小区</span>
          </el-menu-item>
          <el-menu-item index="3" class="menu-item" @click="skipTo('/index/privatecar')">
            <span>车辆信息</span>
          </el-menu-item>
          <el-menu-item index="4" class="menu-item" @click="skipTo('/index/family')">
            <span>家庭成员</span>
          </el-menu-item>
          <el-menu-item index="5" class="menu-item" @click="skipTo('/index/message')">
            <span>消息列表</span>
          </el-menu-item>
          <el-menu-item index="6" class="menu-item" @click="skipTo('/index/ownerInquire')">
            <span>业主查询</span>
          </el-menu-item>
          <el-menu-item index="7" class="menu-item" @click="skipTo('/index/visitor')">
            <span>访客列表</span>
          </el-menu-item>
          <el-menu-item index="8" class="menu-item" @click="skipTo('/index/facility')">
            <span>设备信息</span>
          </el-menu-item>
          <el-menu-item index="9" class="menu-item" @click="skipTo('/index/password')">
            <span>密码信息</span>
          </el-menu-item>
          <el-menu-item index="10" class="menu-item" @click="skipTo('/index/member')">
            <span>成员信息</span>
          </el-menu-item>
          <el-menu-item index="11" class="menu-item" @click="skipTo('/index/fingerprint')">
            <span>指纹信息</span>
          </el-menu-item>
          <el-menu-item index="12" class="menu-item" @click="skipTo('/index/doorCard')">
            <span>门卡信息</span>
          </el-menu-item>
          <el-menu-item index="13" class="menu-item" @click="skipTo('/index/doorOpen')">
            <span>开门日志</span>
          </el-menu-item>
          <el-menu-item index="14" class="menu-item" @click="skipTo('/index/housingAll')">
            <span>所有小区</span>
          </el-menu-item>
          <el-menu-item index="15" class="menu-item" @click="skipTo('/index/buildingAll')">
            <span>小区楼栋</span>
          </el-menu-item>
          <!-- <el-menu-item index="2" class="menu-item" @click="skipTo('/index/privatecar')">
            <span>测试点击</span>
          </el-menu-item>  -->       
        </el-menu>        
      </el-col>     
      <el-col :span="8">
        <router-view style="padding-left:20px;width:100vh"></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      activeIndex: '1',
      msg: 'Home页面-  index',
    }
  },
  methods:{
    // 路由切换
    skipTo(url){      
      this.$router.push(url)
    },
  },
  mounted(){}
}
</script>

<style scoped>
@import "../assets/css/index.css"
</style>
