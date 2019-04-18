<template>
	<div class="personal">
		<PublicHeader :data="headerData"></PublicHeader>
		<div class="contentPersonal">
			<div style="padding-right:30px;">
				<div class="disFlex">
					<div style="width:80px;">ID：</div><el-input class="input" v-model="userId"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:80px;">姓名：</div><el-input class="input" v-model="name"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:80px;">性别：</div><el-input class="input" v-model="sex"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:80px;">身份证：</div><el-input class="input" v-model="identityCard"></el-input><br><br>
				</div>
				<div class="disFlex">
					<div style="width:80px;">电话：</div><el-input class="input" v-model="phoneNum"></el-input><br><br>
				</div>			
			</div>
			<div>
			<!-- <img style="width:150px;height:200px;" src="../assets/img/touxiang.png" > -->
				<el-upload
				class="avatar-uploader"
				:action="this.$store.state.Upload"
				name="info_file"
				:show-file-list="false"
				
				list-type="picture"
				:on-success="handlePreviewBreviary">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>				
			</div>
		</div>
		<el-button type="primary" style="width:100px;margin-top:20px;" @click="test">修改</el-button>
		
	</div>
</template>
<script>
	import PublicHeader from '../components/PublicHeader'
	import {Base64} from '../assets/js/base64'
	// import axios from '../../node_modules/axios'
	let base = new Base64;
	export default{
		name: 'personal',
		components: {PublicHeader},

		data(){
			return{
				userId: '业主id',
				name: '野猪',
				sex: '男',
				identityCard: '012301230123',
				phoneNum: '13666666666',				
				headerData:['个人信息','业主信息'],

				timestamp: '2019-04-18',
				secret: 'c6890a80d92548efaec8ee246cf12736',
				// stringA: '',	
				stringSignTemp: '',			
				// 前端图片的显示地址
				imageUrl: 'http://img1.imgtn.bdimg.com/it/u=2131276945,3045731326&fm=26&gp=0.jpg',				
		        // 门店Logo 数据传给后台
		        fileListBreviary: [],
			}
		},
		methods: {
			 // 门店Logo
		    handlePreviewBreviary(event,file,fileList) {
		      	// fileListBreviary 传给后台的图片数据
		        this.fileListBreviary = event.url
		        // imageUrl 只作前端显示的数据,不传给后台的
		        this.imageUrl = URL.createObjectURL(file.raw);

			},
			test(){				
				console.info('图片base64加密后:',base.encode(this.imageUrl))				
		        var stringA = ('faceImg='+this.imageUrl+'&'+'identityCard'+this.identityCard+'&'+'name='+this.name+'&'+'phoneNum='+this.phoneNum)
		        console.info('stringA:',stringA)
		        this.stringSignTemp = stringA+"&timestamp="+this.timestamp+'&secret='+this.secret
		        console.info('stringSignTemp:',this.stringSignTemp)		
		        console.info('MD5加密后：',this.$md5(this.stringSignTemp))				
			},
			
			// B-M-42查询店铺基本信息
      getStoreByStoreId(){
        this.postRequest("/storeSysUserGetInfo/getStoreByStoreId.do",{}).then(res => {
          console.info('查询店铺基本信息',res)
          
        });
      },

      	// getStore(){
      	// 	let that = this
      	// 	that.$axios({
      	// 		method: 'post',
      	// 		url: '/storeSysUserGetInfo/getStoreByStoreId.do',
      	// 		data:{},
      	// 	})
      	// 	.then(function (res){
      	// 		console.info('getStoreRes:',res)
      	// 	})      		
      	// },
      

// storeSysUserGetInfo/getStoresetotherInfo.do
		},
		mounted(){
			this.getStoreByStoreId();
			
			// console.info(this.$store.state.Upload)
			// this.$router.go(0)
			// location.reload();
		
			
		}

	}
</script>
<style>
	.input{
		width:200px;
	}
	.contentPersonal{
		width:500px;
		display:flex;
		justify-content:space-round;
	}
	.disFlex{
		display:flex;
	}
	/*图片的大小*/
	.avatar{
		width:150px;
		height:200px;
	}
	/*设置图片的外框*/
	.avatar-uploader{
		width:150px;
		height:200px;
		border:1px solid #999;
	}
	/*获取图片数据的范围*/
	.avatar-uploader-icon{
		width:150px;
		height:200px;
		text-align:center;
		line-height:200px;
	}

</style>