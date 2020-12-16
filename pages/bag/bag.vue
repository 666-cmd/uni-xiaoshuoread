<template>
	<view>
		<view>{{date11}}</view>
		
		<view class="posi">
			<text class="state">暂不可借阅</text>
			<text class="borrow">借书</text>
		</view>
	</view>
	
	
	
</template>

<script>
	export default{
		data(){
			return {
				date11:[],
			}
		},
		created(){
			uni.$on("sendbook", (data) => {console.log("收到来自found的数据",date11 = data)})
		}
	}
</script>

<style lang="less">
	.posi{

		position: fixed;
		

		bottom: 20rpx;
		line-height: 80rpx;
		text-align: center;
		margin-left: 65.2rpx;
		.state{
			border-radius: 40rpx 0rpx 0rpx 40rpx;
			border: 1px solid #C8C7CC;
			width: 300rpx;
			height: 80rpx;
			color: #4CD964;
			border-right: none;
			display: inline-block;
		}
		.borrow{
			border: 1px solid #C8C7CC;
			border-right: none;
			border-radius: 0px 40rpx 40rpx 0rpx;
			display: inline-block;
			width:300rpx;
			height: 80rpx;
			background-color: #4CD964;
			color: white;
		}
	}
</style>
