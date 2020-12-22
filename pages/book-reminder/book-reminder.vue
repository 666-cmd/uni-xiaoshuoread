<template>
	<view>
		<image class="tu" :src="`https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2680786358,1010619428&fm=26&gp=0.jpg`"></image>
		<view class="text-top">空空滴，还没有记录</view>
		<view class="text-bottom">~快去选本书吧~</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* #ifdef MP-ALIPAY */
	page{
		background-color: #FFFFFF;
	}
	/* #endif */
	
    .tu{
		position: relative;
		margin: 100rpx auto;
		width: 93%;
		height: 480rpx;
	}
	.text-top{
		position: relative;
		width: 300rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 30rpx;
		color: #C0C0C0;
		margin: 0 auto;
	}
	.text-bottom{
		position: relative;
		width: 300rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 30rpx;
		color: #C0C0C0;
		margin: 10rpx auto;
	}
</style>
