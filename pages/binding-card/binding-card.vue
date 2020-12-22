<template>
	<view>
		<input class="one" type="number" placeholder="请输入阅读卡背面绑定码" />
		<input class="two" type="number" placeholder="请自行设置借书密码 (4位数字)" />
		<input class="three" type="number" placeholder="请再次输入借书密码 (4位数字)" />
		<button class="btn" @click="show">绑定</button>
		<view class="last">没有实体会员卡？点我申请吧！</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			show(){
				uni.showModal({
					content:'请输入IC卡后五位绑定码~~~',
					success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }

				})
			}
		}
	}
</script>

<style lang="scss">
    .one{
		position: relative;
		display: block;
		width: 87%;
		height: 100rpx;
		margin: 10rpx auto;
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}
	/* #ifdef MP-ALIPAY */
	.one{
		position: relative;
		display: block;
		width: 87%;
		height: 100rpx;
		margin: 10rpx auto;
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #CCCCCC;
		background-color: #F8F8F8;
	}
	/* #endif */
	.two{
		position: relative;
		display: block;
		width: 87%;
		height: 100rpx;
		margin: 10rpx auto;
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}
	/* #ifdef MP-ALIPAY */
	.two{
		position: relative;
		display: block;
		width: 87%;
		height: 100rpx;
		margin: 10rpx auto;
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #CCCCCC;
		background-color: #F8F8F8;
	}
	/* #endif */
	.three{
		position: relative;
		display: block;
		width: 87%;
		height: 100rpx;
		margin: 10rpx auto;
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #CCCCCC;
	}
	/* #ifdef MP-ALIPAY */
	.three{
		position: relative;
		display: block;
		width: 87%;
		height: 100rpx;
		margin: 10rpx auto;
		line-height: 100rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid #CCCCCC;
		background-color: #F8F8F8;
	}
	/* #endif */
	.btn{
		position: relative;
		margin: 50rpx auto;
		width: 300rpx;
		height: 100rpx;
		color: white;
		font-size: 35rpx;
		text-align: center;
		line-height: 100rpx;
		border-radius: 30px;
		background-color: #19CAAD;
	}
	.last{
		position: relative;
		width: 93%;
		height: 80rpx;
		margin: 10rpx auto;
		text-align: center;
		line-height: 80rpx;
		font-size: 30rpx;
		color: #19caad;
		border-top: 1rpx solid #cccccc;
		border-bottom: 1rpx solid #cccccc;
	}
</style>
