import axios from 'axios';

// 消息提醒
export function message(message,type){
	this.$message({
		message: message,
		type: type
	})
}

let base = 'http://47.106.237.251/ChiefTOMerchant';
export function postRequest(url,params){
	return axios({
		method: 'post',
		url: `${base}${url}`,
		data: params,
		transformRequest:[function (data){
			let ret = '';
			for(let it in data){
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			}
			return ret
		}],
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	})
}


