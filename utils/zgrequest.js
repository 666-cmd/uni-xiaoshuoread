const baseUrl = "http://uptownlet.com/portal.php?"

export function myRequestGet(url,data){
	return new Promise((resolve,reject) => {
		uni.request({	
				url:baseUrl + url,
				method:"GET",
				data:data,
				success:function(res){
					console.log("收到get请求")
					resolve(res.data.data);
				},
				fail:function(err){
					reject(err)
				}
			})
		})
}



export function myRequestPost(url,data){
	return new Promise((resolve,reject) => {
		uni.request({	
				url:baseUrl + url,
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method:"POST",
				data:data,
				success:function(res){
					console.log("受到post请求")
					resolve(res.data)
				},
				fail:function(err){
					reject(err)
				}
			})
		})
}
