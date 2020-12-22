<template>
	<view class="container">
		<view class="top">
			<view class="price">
				<view class="pri1">365元</view>
				<view class="pri2">总共消费</view>
			</view>
			<view class="his">
				<view class="his-title">消费明细：</view>
				<view class="his-body">
					<text class="his-body-A">会员费</text> 
					<text class="his-body-B">元</text>
				</view>
			</view>
		</view>
		<view class="middle">
			<text class="middle-A">使用红包</text>
			<text class="middle-B">
				<text>0个可用</text>
				
			</text>
		</view>
		<view class="buy">购买</view>
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

<style>
	page{
			 background: #F8F9FA;
			/* background:url("") ; */
			 }
</style>
<style lang="less">
	.container{
		position: relative;
		margin: auto;
		.top{
			background-color: white;
			width: 95%;
			margin-left: 2.5%;
			text-align: center;
			height: 350rpx;
			margin-bottom: 20rpx;
			.price{
				padding-top: 40rpx;
				margin-bottom:20rpx;
				border-bottom: 1px solid #F5F2F0;
				.pri1{
					font-size:35px;
					color: #19CAAD;
				}
				.pri2{
					margin-bottom: 20rpx;
					color: #999999;
				}
			}
			.his{
				position: relative;
				.his-title{
					margin-left: -520rpx;
					left: 0;
					font-weight: bold;
				}
				.his-body{
					
					margin-top: 20rpx;
					position: relative;
					
					.his-body-A{
						color: #999999;
						float: left;
						margin-left: 20rpx;
					}
					
					.his-body-B{
						color: #19CAAD;					
						margin-left: 500rpx;
						
					}
				}
			}
		}
		.middle{
			margin-left: 2.5%;
			background-color: white;
			height: 120rpx;
			width: 95%;
			line-height: 120rpx;
			position: relative;
			.middle-A{
				margin-left: 20rpx;
				float: left;
			}
			.middle-B{
				margin-right: 20rpx;
				color: white;
	
				text{
					padding: 4rpx 6rpx;
					background-color: #ECAD9E;
					border-radius: 10rpx;
				}
				
				float:right;
			}
		}
		.buy{
			position: fixed;
			font-size: 16px;
			bottom: 0;
			width: 100%;
			line-height: 90rpx;
			text-align: center;
			height: 90rpx;
			color: white;
			background-color: #19CAAD;
		}
	}
	
</style>