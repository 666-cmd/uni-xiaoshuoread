<template>
	<view>
		<view class="head_bg">
			<image class="back" src="https://uptownlet.com/appendix/image.jspx?id=0e992f01442f4730af813d5bb97a3015"></image>
			<image class="ground" src="https://uptownlet.com/appendix/image.jspx?id=3b185a9113b147ffa606e413a4085907"></image>
			
			<button class="btn" style="border:none;" open-type="share"><text class="iconfont icon-fenxiang" ></text></button>
			<view class="title">
				<text>{{title}}</text>
				<text>纸享读书</text>
			</view>
			<view class="people">
				{{px}}人收听
			</view>
		</view>
		<view class="footer">
			<view class="footer_top">
				<text>已更新{{length}}期</text>
				<text @click="sort"><text class="iconfont icon-paixu"></text>排序</text>
			</view>
			<view class="footer_bottom" v-for="(item,index) in detail" :key="item.id">
				<view class="number" v-if="!isSort">
					{{length-index}}
				</view>
				<view class="number" v-if="isSort">
					{{index+1}}
				</view>
				<view class="detail">
					<view class="name">{{item.dgmc}}</view>
					<view class="kan">
						<text><text class="iconfont icon-kejian1"></text>{{item.tzsl}}</text>
						<text><text class="iconfont icon-pinglun"></text>{{item.pjs}}</text>
						<text><text class="iconfont icon-shijian"></text>{{item.sc}}</text>
						<text class="time">{{item.cdate}}更新</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 发请求，拿数据
	import {
		myRequestPost
	} from "@/utils/zgrequest.js"
	export default {
		data() {
			return {
				id:'',
				detail:[],
				px:0,
				length:0,
				isSort:false,
				title:''
			}
		},
		onLoad(options){
			this.id=options.id
			console.log(this.id,"000000000000000000");
			this.title=options.bt
			this.getLan()
		},
		// onShareAppMessage(res) {
		//     if (res.from === 'button') {// 来自页面内分享按钮
		//       console.log(res.target)
		//     }
		//     return {
		//       title: '分享',
		//       path: '/pages/index/index'
		//     }
		//   },
		methods: {
			async getLan(){
				let result = await myRequestPost("/portal.php",{
					resid:"ZsfxAction.lmxq",
					city: '临汾市',
					adcode: 1410,
					lmid:this.id,
					openid:'ouJlZ5AcVcrPaHKQx4xlf3w1yYWw'
				})
				this.detail=result.data.reverse()
				
				console.log(this.detail);
				for(var i=0;i<this.detail.length;i++){
					this.px+=this.detail[i].px
				}
				this.length=this.detail.length;
				console.log(this.px,"pxpxpxpx");
			},
			sort(){
				this.isSort=!this.isSort
				console.log("sort");
				this.detail=this.detail.reverse()
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.head_bg {
		width: 100%;
		height: 400rpx;
		position: relative;
		font-size: 14px;
		.btn::after{
			border: none!important;
		}
		.btn>button{
			border: none!important;
		}
		.btn{
			background-color:rgba(255,255,255,0)!important;
			width: 80rpx;
			position: absolute;
			top: 10rpx;
			right: 10rpx;
		}
		
        .icon-fenxiang{
			color: #fff;
			font-size: large;
		}
		.back {
			width: 100%;
			height: 400rpx;
		}

		.ground {
			width: 80px;
			height: 80px;
			position: absolute;
			left: 20px;
			bottom: 0;
		}

		.title {
			width: 170px;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			position: absolute;
			left: 110px;
			bottom: 40px;

			text:nth-child(1) {
				font-weight: bold;
			}

			text:nth-child(2) {
				color: #666666;
				margin-top: 3px;
			}
		}

		.people {
			background-color: #19CAAD;
			padding: 5px;
			position: absolute;
			right: 18px;
			bottom: 0px;
			border-radius: 15px;
			color: #fff;
			font-size: 13px;
		}
	}

	.footer {
		
		padding: 0 10px;
		margin-bottom: 50px;
		.footer_top {
			display: flex;
			justify-content: space-between;
			// background-color: pink;
			border-bottom: 1px solid #eee;
			margin-top: 30px;
			font-size: 14px;
			padding-bottom: 10px;
			color: #666666;

			.icon-paixu {
				font-size: 14px;
				margin-right: 2px;
				font-weight: 600;
			}
		}

		.footer_bottom {
			display: flex;
			border-bottom: 1px solid #eee;
			padding: 8px 0 15px;
            .number{
				width: 50px;
				// height: 50px;
				text-align: center;
				// line-height: 50px;
				font-size: 20px;
				color: #555555;
				align-self: center;
			}
			.detail {
				width: 300px;
				.name{
					font-size: 15px;
				}
				.kan{
					font-size: 12px;
					color: #666;
					margin-top:7px;
					display: flex;
					justify-content: space-between;
					.time{
						margin-left: 20px;
					}
					.iconfont{
						margin-right: 3px;
					}
					.icon-kejian1{
						font-size: 11px;
					}
				}
			}
		}
	}
</style>
