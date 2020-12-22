import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		baglist:uni.getStorageSync("baglist") ||[]
	},
	mutations:{
		addBag(state,currentBook){
			state.baglist.push(currentBook);
			console.log("vuex中的book",state.baglist);
			uni.setStorageSync("baglist",state.baglist);
		},
			
		deletebook(state,currentBook){
			for(var i = 0;i<state.baglist.length;i++){
				if(state.baglist[i].id == currentBook.id){
					state.baglist.splice(i, 1);
					console.log("删除了",i);
				}
			}
			uni.setStorageSync("baglist",state.baglist);
			
			
		},
		deleteb(state,index){
			state.baglist.splice(index, 1);
			console.log("删除了");
			console.log(state.baglist);
			uni.setStorageSync("baglist",state.baglist);
			// return state.baglist.id;
		},
				
			// 	uni.getStorageSync('baglist',state.baglist)
			
				// var currentBook = state.baglist.find(item => {
				// 	if(item.id = it.id){
				// 		return item
				// 	}
				// })
				// this.baglist.splice(item, 1);			

	},
	actions:{
		
	},
	getters:{
		
	}
})

export default store