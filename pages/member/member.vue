<template>
	<view class="content">

		<image class="float" src="https://uptownlet.com/appendix/image.jspx?id=c71b92161a3c4955aaa0bc9414c79486" mode="widthFix" >
			<image src="https://uptownlet.com/appendix/image.jspx?id=83c704861935406b9655b9c3802bf273" mode="widthFix">
				<view  style="font-weight: bold;color: #D1BC9E;margin-top: -110rpx;margin-left: -280rpx;">悦读会员</view>
			</image>
		</image>

		<view class="mem-card">
			<view class="mem-title">
				<view>悦读会员</view>
				
			</view>
			<view class="mem-ser">
				<view class="ser-title">
					<view class="iconfont icon-fanxiegang" style="font-size: 13px;display: inline-block;"></view>
					悦读会员可享以下特权
					<view class="iconfont icon-fanxiegang" style="font-size: 13px;display: inline-block;"></view>
				</view>
				<view>
					<view class="ser-eve">
						<view class="iconfont icon-gouwuche_on" style="font-size: 25px; color: #A78945;"></view>
						<view>五本</view>
						<view style="color: #9C9C9C;">借阅本数</view>
					</view>
					<view class="ser-eve">
						<view class="iconfont icon-shizhong-copy-copy" style="font-size: 25px; color: #A78945;"></view>
						<view>365天</view>
						<view style="color: #9C9C9C;">借阅天数</view>
					</view>
					<view class="ser-eve">
						<view class="iconfont icon-peisong" style="font-size: 25px; color: #A78945;"></view>
						<view>24次</view>
						<view style="color: #9C9C9C;">配送到家</view>
					</view>
					<view class="ser-eve">
						<view class="iconfont icon-huiyuan" style="font-size: 25px; color: #A78945;"></view>
						<view>八折</view>
						<view style="color: #9C9C9C;">全场图书</view>
					</view>
				</view>
			</view>
			<view class="mem-detail">
				<view class="mem-word">百万图书，每周上新，选你所想</view>
				<view class="mem-word">领读解析，陪伴阅读</view>
				<view class="mem-word">专享活动，脑力游局、城市探索、职人分享</view>
				<view class="mem-word">会员社群，优质人脉，知己共读</view>
				<view class="mem-word">优选好礼，专属积分兑换</view>
				<view class="mem-word">分享有赏，打造个人影响力</view>
			</view>
			<view class="buy" @click="gobuy('/pages/pay/pay')">365元</view>
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
			gobuy(path){
				uni.navigateTo({
					url:path
				})
		
				}
		}
	}
</script>

<style>
	@import '../../static/icon/iconfont.css';
	 page{
		 background: #F8F9FA;
		/* background:url("") ; */
		 }
</style>

<style lang="less">
	
	.content{
		margin-top: 40rpx;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		// background-color: #19CAAD;
		text-align: center;
		margin-left: 50%;
		left: -320rpx;
		
		.float{
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: #19CAAD;
			z-index: -1;
			image{
				margin-top: 60rpx;
				
			}
		}
		.mem-card{
			margin-top: 100rpx;
			border-radius: 10px;
			width: 600rpx;
			height: 720rpx;
			background-color: white;
			padding: 20rpx;
			text-align: center;
			.mem-title{
				color: #AD874D;
				font-weight: bold;
				margin-top: 20rpx;
			}
			.mem-ser{
				margin-top: 20rpx;
				font-size: 13px;
				border-bottom: 0.5px solid #EEEEEE;
				.ser-eve{
					margin: 20rpx;
					display: inline-block;
					
				}
			}
			.mem-detail{
				
				.mem-word{
					margin: 20rpx;
					text-align: left;
					color: #B5B5B5;
					font-size: 13px;
				}
			}
			.buy{
				margin-top: 10rpx;
				width: 100%;
				height: 80rpx;
				background-color: #19CAAD;
				color: white;
				line-height: 80rpx;
				border-radius: 20px;
				
			}
		} 
	}
</style>
