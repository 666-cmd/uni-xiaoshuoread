<template>
	<view class="container">
		<view class="word">-请选择您的身份-</view>
		<view class="cho">
			<image src="https://uptownlet.com/appendix/image.jspx?id=9ad754ab95574144aee9404016d74478" mode="widthFix"></image>
			<view class="word">为孩子选书</view>
		</view>
		<view class="cho">
			<image src="https://uptownlet.com/appendix/image.jspx?id=8e94e08a86b848ff8974fbf2d9a4e911" mode="widthFix"></image>
			<view class="word">为自己选书</view>
		</view>
		<view class="bottom">
			<image src="https://uptownlet.com/appendix/image.jspx?id=6285279b48a4447886fce2b76f4a661f" mode="widthFix"></image>
		</view>
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

<style lang="less">
	.container{
		margin-top: 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		.cho{
			margin-top: 60rpx;
			image{
				width:40%;
				
			}
			
		}
		
		.word{
			flex: 1;
			font-size: 14px;
			color: #8F8F94;
			margin-top: 20rpx;
			
		}
		.bottom{
			bottom: 0;
			image{
				width: 100%;
			}
		}
	}
</style>
