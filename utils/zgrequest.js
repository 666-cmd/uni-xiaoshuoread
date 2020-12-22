// const baseUrl = "http://uptownlet.com"
// // /portal.php?
// export function myRequestGet(url,data){
// 	return new Promise((resolve,reject) => {
// 		uni.request({	
// 				url:baseUrl + url,
// 				method:"GET",
// 				data:data,
// 				success:function(res){
// 					console.log("收到get请求")
// 					resolve(res.data.data);
// 				},
// 				fail:function(err){
// 					reject(err)
// 				}
// 			})
// 		})
// }



// export function myRequestPost(url,data){
// 	return new Promise((resolve,reject) => {
// 		uni.request({	
// 				url:baseUrl + url,
// 				header:{
// 					'Content-Type':'application/x-www-form-urlencoded'
// 				},
// 				method:"POST",
// 				data:data,
// 				success:function(res){
// 					console.log("受到post请求")
// 					resolve(res.data)
// 				},
// 				fail:function(err){
// 					reject(err)
// 				}
// 			})
// 		})
// }

// 在服务器请求数据时,前面的网址相同
const baseUrl = "https://uptownlet.com";
// 请求时传来两个参数,url为后面要拼接的路劲,data为参数
export function myRequestGet(url, data) {
	return new Promise((resolve, reject) => {
		var requestUrl=baseUrl+url;
		// #ifdef H5
		var requestUrl=url;
		// #endif
		
		// 发请求
		uni.request({
			url:  requestUrl,
			method: "GET",
			data: data,
			// res为从服务器请求来的数据
			success: function(res) {
				console.log("收到请求成功的数据", res);
				// 请求成功时把数据回调出去
				resolve(res.data)
			},
			fail: function(err) {
				console.log("请求失败", err);
				// 请求失败时把数据回调出去
				reject(err)
			}
		})
	})
}


// post请求要传参数  {name="张三",age=18}======>转为"name=张三&age=18"
export function myRequestPost(url, data) {
	return new Promise((resolve, reject) => {
		var requestUrl=baseUrl+url;
		// #ifdef H5
		var requestUrl=url;
		// #endif
		// 发请求
		uni.request({
			url: requestUrl,
			method: "POST",
			data: data,
			// post要设置请求头,要在 fiddler中查看请求头是什么
			header: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			success: function(res) {
				console.log("收到请求成功的数据", res);
				resolve(res.data)
			},
			fail: function(err) {
				console.log("请求失败", err);
				reject(err)
			}
		})
	})
}


