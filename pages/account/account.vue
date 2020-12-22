<template>
	<view>
		<view class="top">
			<image class="top-bg" :src="`https://uptownlet.com/appendix/image.jspx?id=c71b92161a3c4955aaa0bc9414c79486`"></image>
			<view class="touxiang">
				<image class="tx-img" :src="yonghuwx.avatarUrl || '/static/头像%20女孩.png'" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo"></image>	
			</view>
			<view class="book-code">取书码</view>
			<view class="username">{{yonghuwx.nickName || '登录'}}</view>
			<view class="huangguan" @click="go('/pages/member/member')">
				<icon class="iconfont icon-V"></icon>
				<text class="outsider">非会员</text>
				<view class="buy">购买</view>
			</view>
			<image @click="xunzhang" class="right-img" :src="`https://uptownlet.com/appendix/image.jspx?id=f22093ed57e84122a52035fe6304bd52`"></image>
			<view class="badge-wall">
				<icon class="iconfont icon-huizhang-copy"></icon>
				<view class="badgeWall">徽章墙</view>
				<icon class="iconfont icon-xiangyoujiantou"></icon>
			</view>
			<view class="read-left">
				<view class="left-div"></view>
				<text class="yueduliang">阅读量</text>
			</view>
			<view class="read-right">
				<view class="right-div"></view>
				<text class="yuedutime">阅读时长</text>
			</view>
			<view class="sum-one">
				<text class="top-num">0</text>
				<view class="linear"></view>
				<text class="bottom-text">总/本</text>
			</view>
			<view class="sum-two">
				<text class="top-num">0</text>
				<view class="linear"></view>
				<text class="bottom-text">当月/本</text>
			</view>
			<view class="sum-three">
				<text class="top-num">0</text>
				<view class="linear"></view>
				<text class="bottom-text">总/天</text>
			</view>
			<view class="sum-four">
				<text class="top-num">0</text>
				<text class="bottom-text">当月/天</text>
			</view>

		</view>
		<view class="card" @click="jump">
			<view class="left-line"></view>
			<text class="text-top">阅读评测</text>
			<text class="text-center">已有1546人参加</text>
			<view class="divider"></view>
			<text class="text-bottom">检验阅读成果，增加知识储备</text>
			<view class="circle">
				<view class="inner-circle">
					<view class="inner-center">
						<view class="linear"></view>
					</view>
				</view>
			</view>
			<view class="history">综合评分</view>
			<text class="iconfont icon-xiangyoujiantou1"></text>
		</view>
		<view class="order-form" @click="jieshu">
			<icon class="iconfont icon-file-text"></icon>
			<text class="name">我的借书订单</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="alert" @click="book()">
			<icon class="iconfont icon-tixing"></icon>
			<text class="name">我的可借提醒</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="reading-card" @click="bindcard()">
			<icon class="iconfont icon-deng"></icon>
			<text class="name">我的阅读卡</text>
			<text class="binding">去绑定</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="book" @click="shou">
			<icon class="iconfont icon-xin"></icon>
			<text class="name">我收藏的书</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="join" @click="joinclass">
			<icon class="iconfont icon-shuxie"></icon>
			<text class="name">加入班级</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="record" @click="xiaofei">
			<icon class="iconfont icon-qian"></icon>
			<text class="name">我的消费记录</text>
			<text class="deposit">交押金</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="recommend" @click="choose">
			<icon class="iconfont icon-AI"></icon>
			<text class="name">AI智能推荐设置</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="our" @click="about">
			<icon class="iconfont icon-women"></icon>
			<text class="name">关于我们</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="exchange-code" @click="vip">
			<icon class="iconfont icon-duihuanma"></icon>
			<text class="name">兑换码</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="city" @click="city">
			<icon class="iconfont icon-qiehuan"></icon>
			<text class="name">切换城市</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
		<view class="leading-readers" @click="leader">
			<icon class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></icon>
			<text class="name">领读者</text>
			<icon class="iconfont icon-xiangyoujiantou1"></icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yonghuwx: [],
				
			}
		},
		onLoad() {
			this.changeLogin();
			let that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							that.yonghuwx = infoRes.userInfo
							console.log(that.yonghuwx)
						}
					})
				}
			})
		},
		methods: {
			xunzhang(){
				uni.navigateTo({
					url:'/pages/xunzhang/xunzhang'
				})
			},
			jump() {
				uni.navigateTo({
					url: '/pages/read/read'
				})
			},
			jieshu(){
				uni.navigateTo({
					url:'/pages/jieshu/jieshu'
				})
			},
			book() {
				uni.navigateTo({
					url: '/pages/book-reminder/book-reminder'
				})
			},
			bindcard() {
				uni.navigateTo({
					url: '/pages/binding-card/binding-card'
				})
			},
			shou(){
				uni.navigateTo({
					url:'/pages/shou/shou'
				})
			},
			joinclass() {
				uni.navigateTo({
					url: '/pages/join-class/join-class'
				})
			},
			xiaofei(){
				uni.navigateTo({
					url:'/pages/xiaofei/xiaofei'
				})
			},
			choose(){
				uni.navigateTo({
					url:'/pages/choose/choose'
				})
			},
			about(){
				uni.navigateTo({
					url:'/pages/about/about'
				})
			},
			city() {
				uni.navigateTo({
					url: '/pages/city/city'
				})
			},
			vip(){
				uni.navigateTo({
					url:'/pages/vip/vip'
				})
			},
			leader(){
				uni.navigateTo({
					url:'/pages/leader/leader'
				})
			},
			changeLogin() {
				// 授权
				// 获取用户详细信息, 可以获取到说明已经授权过, 直接拿到用户信息
				uni.getUserInfo({
					provider: 'weixin',
					//授权成功的回调
					success(res) {
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						})
						// console.info(res.data)
						//that.login(res.data);//授权成功调用自己的登录方法就可以了
					},
					//第一次进入小程序
					fail() {
						uni.showToast({
							title: '请点击头像进行登录',
							icon: 'none'
						});
					}
				});
			}


		},
		// onGotUserInfo(e) {
		//     console.info(e.detail)
		//     console.info(e.detail.userInfo);
		// }
	}
</script>

<style lang="scss">
	.top {
		position: relative;
		width: 100%;
		height: 360rpx;

		.top-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 420rpx;

		}

		.touxiang {
			position: absolute;
			width: 130rpx;
			height: 130rpx;
			border-radius: 50%;
			left: 30rpx;
			top: 10rpx;
			// background-color: #E5E5E5;
            
				.tx-img{
					position: absolute;
					width: 130rpx;
					height: 130rpx;
					border-radius: 50%;
					left: 0rpx;
					top: 0rpx;
				}
				
				
				
			
			
		}

		.book-code {
			position: absolute;
			width: 110rpx;
			height: 35rpx;
			line-height: 35rpx;
			color: white;
			font-size: 25rpx;
			text-align: center;
			left: 40rpx;
			top: 135rpx;
			background-color: #76E4D2;
			border-radius: 20px;
		}

		.username {
			position: absolute;
			left: 180rpx;
			top: 15rpx;
			width: 230rpx;
			height: 60rpx;
			color: white;
			font-size: 40rpx;
			line-height: 60rpx;
			// text-align: center;
			// background-color: pink;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;

		}

		.huangguan {
			position: absolute;
			width: 300rpx;
			height: 60rpx;
			left: 180rpx;
			top: 85rpx;

			// background-color: pink;
			.icon-V {
				position: absolute;
				left: 0;
				top: 0;
				font-size: 60rpx;
				color: white;
			}

			.outsider {
				position: absolute;
				left: 70rpx;
				top: 0;
				width: 110rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				color: white;
				font-size: 35rpx;
			}

			.buy {
				position: absolute;
				left: 190rpx;
				top: 5rpx;
				width: 110rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				color: black;
				font-size: 35rpx;
				border-radius: 20px;
				background-color: #FEDE00;
			}
		}

		.right-img {
			position: absolute;
			right: 40rpx;
			top: 10rpx;
			width: 130rpx;
			height: 130rpx;
		}

		.badge-wall {
			position: absolute;
			width: 150rpx;
			height: 35rpx;
			top: 135rpx;
			right: 30rpx;
			border-radius: 20px;
			background-color: #76E4D2;

			.icon-huizhang-copy {
				position: absolute;
				left: 10rpx;
				top: -17rpx;
				font-size: 20rpx;
				color: #008B8B;
			}

			/* #ifdef H5 */
			.icon-huizhang-copy {
				position: absolute;
				left: 10rpx;
				top: 4rpx;
				font-size: 20rpx;
				color: #008B8B;
			}

			/* #endif */
			/* #ifdef MP-ALIPAY */
			.icon-huizhang-copy {
				position: absolute;
				left: 10rpx;
				top: -18rpx;
				font-size: 20rpx;
				color: #008B8B;
			}

			/* #endif */
			.badgeWall {
				position: absolute;
				left: 39rpx;
				top: 3rpx;
				font-size: 25rpx;
				line-height: 35rpx;
				color: white;
			}

			.icon-xiangyoujiantou {
				position: absolute;
				right: 15rpx;
				font-size: 25rpx;
				color: white;
				top: -17rpx;
			}

			/* #ifdef H5 */
			.icon-xiangyoujiantou {
				position: absolute;
				right: 15rpx;
				font-size: 25rpx;
				color: white;
				top: 6rpx;
			}

			/* #endif */
			/* #ifdef MP-ALIPAY */
			.icon-xiangyoujiantou {
				position: absolute;
				left: 1.15rem !important;
				font-size: 25rpx;
				color: white;
				top: 0.04rem !important;
			}

			/* #endif */
		}

		.read-left {
			position: absolute;
			width: 375rpx;
			height: 50rpx;
			left: 0;
			top: 190rpx;

			// background-color: salmon;
			.left-div {
				position: absolute;
				width: 17rpx;
				height: 17rpx;
				background-color: pink;
				top: 16.5rpx;
				left: 60rpx;

			}

			.yueduliang {
				position: absolute;
				font-size: 35rpx;
				line-height: 50rpx;
				left: 100rpx;
				color: white;

			}
		}

		.read-right {
			position: absolute;
			width: 375rpx;
			height: 50rpx;
			right: 0;
			top: 190rpx;

			// background-color: salmon;
			.right-div {
				position: absolute;
				width: 17rpx;
				height: 17rpx;
				background-color: pink;
				top: 16.5rpx;
				left: 60rpx;

			}

			.yuedutime {
				position: absolute;
				font-size: 35rpx;
				line-height: 50rpx;
				left: 100rpx;
				color: white;

			}
		}

		.sum-one {
			position: absolute;
			left: 0;
			bottom: 0rpx;
			// background-color: pink;
			width: 187.5rpx;
			height: 100rpx;

			.top-num {
				position: absolute;
				top: 5rpx;
				right: 70rpx;
				font-size: 40rpx;
				color: white;
			}

			.bottom-text {
				position: absolute;
				bottom: 10rpx;
				font-size: 27rpx;
				right: 50rpx;
				color: #DFF5F0;

			}

			.linear {
				position: absolute;
				right: 0;
				top: 33.33rpx;
				height: 33.33rpx;
				width: 2rpx;
				border-right: 1px solid #C2C2C2;
			}
		}

		.sum-two {
			position: absolute;
			left: 187.5rpx;
			bottom: 0rpx;
			// background-color: pink;
			width: 187.5rpx;
			height: 100rpx;

			.top-num {
				position: absolute;
				top: 5rpx;
				right: 80rpx;
				font-size: 40rpx;
				color: white;
			}

			.bottom-text {
				position: absolute;
				bottom: 10rpx;
				font-size: 27rpx;
				right: 50rpx;
				color: #DFF5F0;

			}

			.linear {
				position: absolute;
				right: 0;
				top: 33.33rpx;
				height: 33.33rpx;
				width: 2rpx;
				border-right: 1px solid #C2C2C2;
			}
		}

		.sum-three {
			position: absolute;
			left: 375rpx;
			bottom: 0rpx;
			// background-color: pink;
			width: 187.5rpx;
			height: 100rpx;

			.top-num {
				position: absolute;
				top: 5rpx;
				right: 80rpx;
				font-size: 40rpx;
				color: white;
			}

			.bottom-text {
				position: absolute;
				bottom: 10rpx;
				font-size: 27rpx;
				right: 60rpx;
				color: #DFF5F0;

			}

			.linear {
				position: absolute;
				right: 0;
				top: 33.33rpx;
				height: 33.33rpx;
				width: 2rpx;
				border-right: 1px solid #C2C2C2;
			}
		}

		.sum-four {
			position: absolute;
			right: 0;
			bottom: 0rpx;
			// background-color: pink;
			width: 187.5rpx;
			height: 100rpx;

			.top-num {
				position: absolute;
				top: 5rpx;
				right: 80rpx;
				font-size: 40rpx;
				color: white;
			}

			.bottom-text {
				position: absolute;
				bottom: 10rpx;
				font-size: 27rpx;
				right: 50rpx;
				color: #DFF5F0;

			}

		}
	}

	.card {
		width: 93%;
		height: 180rpx;
		background-color: #F7F7F7;
		margin: 0px auto;

		border-radius: 12px;
		box-shadow: 1px 1px 5px #CCCCCC;
		position: relative;

		.left-line {
			position: absolute;
			width: 6px;
			height: 70rpx;
			left: -3px;
			top: 55rpx;
			background-color: salmon;
			border-radius: 10px;
		}

		.text-top {
			position: absolute;
			top: 30rpx;
			left: 30rpx;
			font-size: 20rpx;
			font-family: arial;
			letter-spacing: 3rpx;
		}

		.text-center {
			position: absolute;
			top: 75rpx;
			left: 30rpx;
			font-size: 18rpx;
			font-family: arial;
			letter-spacing: 3rpx;
			color: #555555;
		}

		.divider {
			position: absolute;
			width: 400rpx;
			height: 1rpx;
			border-top: 1px dashed #cccccc;
			top: 110rpx;
			left: 30rpx;

		}

		.text-bottom {
			position: absolute;
			bottom: 30rpx;
			left: 30rpx;
			font-size: 20rpx;
			font-family: arial;
			letter-spacing: 3rpx;
			color: #555555;
		}

		.circle {
			position: absolute;
			top: 20rpx;
			right: 50rpx;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			background: -webkit-linear-gradient(left, limegreen, lime, springgreen);

			.inner-circle {
				position: absolute;
				width: 72rpx;
				height: 72rpx;
				left: 14rpx;
				top: 14rpx;
				background-color: #F7F7F7;
				border-radius: 50%;

				.inner-center {
					position: absolute;
					width: 14rpx;
					height: 18rpx;
					left: 29rpx;
					top: 27rpx;
					border-radius: 30px;
					background: -webkit-linear-gradient(left, limegreen, lime, springgreen);

					.linear {
						position: absolute;
						width: 6rpx;
						height: 10rpx;
						top: 4rpx;
						left: 4rpx;
						background-color: #F7F7F7;
						border-radius: 10px;
					}
				}
			}
		}

		.history {
			position: absolute;
			right: 80rpx;
			bottom: 28rpx;
			font-size: 20rpx;
			font-family: arial;
			letter-spacing: 3rpx;
		}

		.icon-xiangyoujiantou {
			position: absolute;
			right: 50rpx;
			bottom: 28rpx;
			font-size: 20rpx;
			color: #777777;
		}
	}

	.order-form {
		position: relative;
		margin: 10rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		/* #ifdef MP-WEIXIN */
		.icon-file-text {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef H5 */
		.icon-file-text {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-file-text {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.alert {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-tixing {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-tixing {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-tixing {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.reading-card {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-deng {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-deng {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-deng {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.binding {
			position: absolute;
			line-height: 100rpx;
			right: 80rpx;
			color: #ECAEA0;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 22rpx;
			color: #ECAEA0;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #ECAEA0;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.book {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-xin {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 30rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-xin {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 30rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xin {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 30rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.join {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-shuxie {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-shuxie {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-shuxie {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.record {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-qian {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-qian {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-qian {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.deposit {
			position: absolute;
			line-height: 100rpx;
			right: 80rpx;
			color: #ECAEA0;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 22rpx;
			color: #ECAEA0;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #ECAEA0;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.recommend {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-AI {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-AI {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-AI {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.our {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-women {
			position: absolute;
			left: 45rpx;
			top: 23rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-women {
			position: absolute;
			left: 45rpx;
			top: 30rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-women {
			position: absolute;
			left: 45rpx;
			top: 20rpx;
			font-size: 35rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.exchange-code {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-duihuanma {
			position: absolute;
			left: 40rpx;
			top: 23rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-duihuanma {
			position: absolute;
			left: 40rpx;
			top: 30rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-duihuanma {
			position: absolute;
			left: 40rpx;
			top: 20rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.city {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-qiehuan {
			position: absolute;
			left: 40rpx;
			top: 23rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-qiehuan {
			position: absolute;
			left: 40rpx;
			top: 30rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-qiehuan {
			position: absolute;
			left: 40rpx;
			top: 20rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}

	.leading-readers {
		position: relative;
		margin: 0rpx auto;
		width: 96%;
		height: 100rpx;
		border-bottom: 1px solid #EEEEEE;

		// background-color: pink;
		.icon-fenxiangzhuanfafasongzhijiantouyuanxingshar {
			position: absolute;
			left: 40rpx;
			top: 23rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #ifdef H5 */
		.icon-fenxiangzhuanfafasongzhijiantouyuanxingshar {
			position: absolute;
			left: 40rpx;
			top: 30rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-fenxiangzhuanfafasongzhijiantouyuanxingshar {
			position: absolute;
			left: 40rpx;
			top: 20rpx;
			font-size: 40rpx;
			color: #19CAAD;
		}

		/* #endif */
		.name {
			position: absolute;
			line-height: 100rpx;
			left: 100rpx;
			color: #565656;
		}

		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #ifdef H5 */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 40rpx;
			font-size: 40rpx;
			top: 30rpx;
			color: #9F9F9F;
		}

		/* #endif */
		/* #ifdef MP-ALIPAY */
		.icon-xiangyoujiantou1 {
			position: absolute;
			right: 0rpx;
			font-size: 40rpx;
			top: 20rpx;
			color: #9F9F9F;
		}

		/* #endif */
	}
</style>
