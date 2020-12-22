<template>
	<view class="content">
		<view class="top">
			<image class="img" src="https://uptownlet.com/appendix/image.jspx?id=c71b92161a3c4955aaa0bc9414c79486"></image>
			<button class="tx" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">
				<image :src="impath" mode="widthFix"></image>
			</button>
			<view class="huiyuan">
				<text class="iconfont icon-hp-6vip-on"></text>
				<text>去购买</text>
			</view>
			<view class="buy">还未购买会员，请先购买会员~~~</view>
		</view>
		<view class="kong">
			<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2680786358,1010619428&fm=26&gp=0.jpg" mode="widthFix"
			 class="bgc"></image>
			<text>空空滴，还没有记录</text>
			<text>~快去选本书~</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				impath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608131717221&di=cc8d0630ba174039736c3d0a4400ef29&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180122%2F12%2F1516596449-YnxgpMBcQK.jpg",
				yonghu: []
			}
		},
		onLoad() {
			uni.showToast({
				title: '没有更多数据了', //提示文字
				icon: 'success', //只支持success，loading，none
				mask: true //遮盖，点击后不能再点击按钮了
			})
			// -----------------------进入直接获取------------------------
			// let that = this;
			// uni.login({
			// 	provider: 'weixin',
			// 	success: function(loginRes) {
			// 		// 获取用户信息				
			// 		uni.getUserInfo({
			// 			provider: 'weixin',
			// 			success: function(infoRes) {
			// 				that.yonghuwx = infoRes.userInfo
			// 				console.log(that.yonghuwx)
			// 				that.impath=that.yonghuwx.avatarUrl
			// 			}
			// 		});
			// 	}
			// });
		},
		
		methods: {
			// // -----------------------点击button自己获取------------------------
			getuserinfo() {
				// let that=this
				uni.login({
					provider: 'weixin',
					success:(loginRes)=> {
						// 获取用户信息				
						uni.getUserInfo({
							provider: 'weixin',
							success: (infoRes)=>{
								this.yonghu = infoRes.userInfo
								console.log(infoRes.userInfo)
								this.impath=this.yonghu.avatarUrl
							}
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		/* #ifdef MP-ALIPAY */
		background-color: #fff;
		/* #endif */
	}

	.content {
		width: 100%;

		.top {
			position: relative;

			.img {
				width: 100%;
				height: 120px;
			}

			.tx {
				width: 80px !important;
				height: 80px !important;
				background-color: #eee;
				border-radius: 50%;
				border: 8px solid #19CAAD;
				position: absolute;
				bottom: -10px;
				left: 10px;
				margin: 0px !important;
				padding: 0px !important;

				image {
					width: 65px !important;
					height: 65px !important;

				}
			}

			.huiyuan {
				// background-color: pink;
				position: absolute;
				left: 110px;
				bottom: 30px;

				text:nth-child(1) {
					font-size: 17px;
					color: yellow;
				}

				text:nth-child(2) {
					font-size: 11px;
					color: #fff;
					padding: 2px 5px;
					border-radius: 10px;
					margin-left: 5px;
					background-color: rgba(0, 0, 0, 0.2);

				}
			}

			.buy {
				margin-left: 100px;
				margin-top: 5px;
				font-size: 14px;
				color: #999;
			}
		}

		.kong {
			display: flex;
			flex-direction: column;

			.bgc {
				margin-top: 65px;
				margin-bottom: 10px;
				margin-left: 10px;
			}

			text {
				text-align: center;
				font-size: 14px;
				color: #999;
				line-height: 25px;
			}

			text:nth-child(2) {
				font-size: 12px;
			}
		}
	}
</style>
