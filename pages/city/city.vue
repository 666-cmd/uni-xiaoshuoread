<template>
	<view>
		<view class="warn">*请谨慎切换城市，切换后下单将下至切换的城市</view>
		<view class="nowcity">
			<text class="left">当前城市：</text>
			<text class="right">临汾市</text>
		</view>
		<view class="linfen">
			<icon class="iconfont icon-dingwei"></icon>
			<text>临汾市</text>
		</view>
		<view class="checkbox">
			<radio-group>
				<radio class="one" value="cb" checked="true"></radio>
				<radio class="two"></radio>
			</radio-group>
		</view>
		
		<view class="yinchuan">
			<icon class="iconfont icon-dingwei"></icon>
			<text>银川市</text>
		</view>
		<button class="bottom" @click="show">提交</button>
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
					title:'提示',
					content:'信息确认无误？',
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
    .warn{
		position: relative;
		font-size: 30rpx;
		left: 30rpx;
		color: #FF0000;
		margin-top: 10rpx;
	}
	.nowcity{
		width: 93%;
		height: 100rpx;
		position: relative;
		margin: 10rpx auto;
		border-bottom: 1rpx solid #cccccc;
		.left{
			position: absolute;
			left: 0;
			line-height: 100rpx;
			font-size: 30rpx;
		}
		.right{
			position: absolute;
			right: 0;
			line-height: 100rpx;
			font-size: 30rpx;
		}
	}
	.linfen{
		width: 93%;
		height: 100rpx;
		position: relative;
		margin: 10rpx auto;
		border-bottom: 1rpx solid #cccccc;
		.icon-dingwei{
			position: absolute;
			left: 0;
			font-size: 35rpx;
			line-height: 100rpx;
			color: #7DBDA8;
		}
		text{
			position: absolute;
			left: 50rpx;
			line-height: 100rpx;
			font-size: 30rpx;
		}
	}
	.checkbox{
		position: absolute;
		width: 100rpx;
		height: 300rpx;
		top: 280rpx;
		right: 0;
		
		.one{
			position: absolute;
			right: 30rpx;
			margin-top: -85rpx;
			
		}
		.two{
			position: absolute;
			right: 30rpx;
			margin-top: 20rpx;
		}
	}
	
	.yinchuan{
		width: 93%;
		height: 100rpx;
		position: relative;
		margin: 10rpx auto;
		border-bottom: 1rpx solid #cccccc;
		.icon-dingwei{
			position: absolute;
			left: 0;
			font-size: 35rpx;
			line-height: 100rpx;
			color: #7DBDA8;
		}
		text{
			position: absolute;
			left: 50rpx;
			line-height: 100rpx;
			font-size: 30rpx;
		}
	}
	.bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 30rpx;
		background-color: #19CAAD;
		color: white;
	}
</style>
