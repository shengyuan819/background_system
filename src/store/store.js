import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
  	// Upload: 'http://www.baidu.com',
  	Upload: 'http://47.106.237.251/ChiefTOConsole/webCompressionImgUpload.do',
    count:0
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
  }
})