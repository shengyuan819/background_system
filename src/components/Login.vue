<template>
	<div class="login">
		<div class="content">
			<div class="top">
				智慧社区
				<span style="font-size:12px;">(业主登录)</span>
			</div>
			<div class="centre">
				<el-row>
					<div style="display:flex;justify-content:space-around">						
						<div style="padding-left:20px;">
							手机号: <el-input style="width:300px;" v-model="account"></el-input><br><br>
							验证码: <el-input style="width:300px;" v-model="account"></el-input>
						</div>
						<div style="padding-top:4px;">
							<el-button type="primary" size="small">获取验证码</el-button>
						</div>
					</div>	
					<div style="display:flex;justify-content:space-around">			
						<div class="bottom" @click="skipTo('/registerNow')">第三方注册</div>
						<div class="bottom" @click="skipTo('/loginByOther')">第三方登录</div>
					</div>		
					<el-button class="btn_login" type="primary" plain @click="skipTo('/index/personal')">登陆</el-button>
				</el-row>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{
		name: 'login',
		data(){
			return {
				account: '',
				password: '',
				msg: 'login',
				remember: true,
			}
		},
		methods:{
			skipTo(url){
				this.$router.push(url);
			},
		},
	}
</script>
<style>
	.login{
		width:100%;
		height:100vh;
		
	}
	.content{
		position:absolute;
		top:50%;
		left:50%;
		margin-left: -250px;
		margin-top: -200px;
		width:500px;
		height:400px;
		border: 1px solid #999;
		
	}
	.top{
		width:100%;
		height:100px;
		line-height:100px;
		text-align:center;
		font-size:30px;
		color:white;
		background:#00aeae;
	}
	.centre{
		padding-top:20px;
		text-align:center;
	}
	.remember{
		display:flex;
		justify-content:space-around;
		font-size:14px;
		padding-top:20px;
		
	}
	.btn_login{
		margin-top:30px;
		width:200px;
	}
	.bottom{
		font-size:14px;
		
		padding-top:20px;
		
	}
</style>
