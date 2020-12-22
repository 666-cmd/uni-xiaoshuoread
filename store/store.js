import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		carts:uni.getStorageSync("carts") || [],
		bao:uni.getStorageSync("bao") || [],
		len: 0
	},
	mutations:{
		addCarts(state,good){
			var currentGood=state.carts.find((item)=>{
				if(item.id==good.id){
					return item
				}
			})	
			if(!currentGood){
				state.carts.push(good)
			}
			console.log(state.carts,"收藏加入");
			// vuex中数据的缓存问题 手动存储 
			// 每一次state变化时 把数据存入 storage的缓存区,但只是这样 在使用vuex的carts页面每次刷新还是没有数据
			uni.setStorageSync("carts",state.carts)
			
		},
		clearCarts(state,good){
			var ca=state.carts.find((item)=>{
				if(item.id==good.id){
					var index=state.carts.indexOf(item);
					return state.carts.splice(index,1)
				}
			})	
			console.log(ca,"cacacacac");
			console.log(state.carts,"收藏删除");
			uni.setStorageSync("carts",state.carts)
		},
		addBao(state,good){
			var currentGood=state.bao.find((item)=>{
				if(item.id==good.id){
					return item
				}
			})	
			if(!currentGood){
				state.bao.push(good)
			}
			console.log(state.bao,"书包加入");
			// vuex中数据的缓存问题 手动存储 
			// 每一次state变化时 把数据存入 storage的缓存区,但只是这样 在使用vuex的carts页面每次刷新还是没有数据
			uni.setStorageSync("bao",state.bao)
			this.len=state.bao.length
			
		},
		clearBao(state,good){
			var ca=state.bao.find((item)=>{
				if(item.id==good.id){
					var index=state.bao.indexOf(item);
					return state.bao.splice(index,1)
				}
			})	
			console.log(ca,"cacacacac");
			console.log(state.bao,"书包删除");
			uni.setStorageSync("bao",state.bao)
			this.len=state.bao.length
		}
	}
})
// 导出
export default store



