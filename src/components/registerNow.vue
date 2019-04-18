<template>
	<div class="registerNow">
		<div class="content_re">
			<div class="top">
				注册账号
				<span style="font-size:12px;">(第三方注册)</span>
			</div>
			<div class="centre">
				<el-row>
					<div style="display:flex;justify-content:space-around">
						<div style="padding-left:20px;">
							手机： <el-input style="width:300px;" v-model="account"></el-input><br><br>
							验证码： <el-input style="width:300px;margin-left:-12px;" v-model="account"></el-input><br><br>	
							账号： <el-input style="width:300px;" v-model="password" ></el-input><br><br>
							类型： <el-input style="width:300px;" v-model="account" placeholder="微信/QQ/微博"></el-input><br><br>			
								
						</div>
						<div>
							<el-button type="primary" size="small">获取验证码</el-button>
						</div>
					</div>
					<el-button class="btn_login" type="primary" plain @click="skipTo('/login')">返回</el-button>
					<el-button class="btn_login" type="primary" plain @click="skipTo('/index/personal')">提交</el-button>
				</el-row>
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{
		name: 'registerNow',
		data(){
			return {
				account: '',
				password: '',
				
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
	.content_re{
		position:absolute;
		top:50%;
		left:50%;
		margin-left: -250px;
		margin-top: -250px;
		width:500px;
		height:500px;
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
	.btn_login{
		margin-top:30px;		
		width:100px;
	}

</style>
