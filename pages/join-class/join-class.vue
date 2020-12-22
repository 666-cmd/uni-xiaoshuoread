<template>
	<view>
		<view class="top">
			<text class="title">加入班级</text>
		</view>
		<view class="card">
			<view class="one">
				<text>学生姓名</text>
				<input placeholder="请输入学生姓名" />
			</view>
			<view class="two">
				<text>班级号</text>
				<input placeholder="请输入老师通知的班级号" />
			</view>
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
	page{
		background-color: #F8F9FA;
	}
    .top{
		position: relative;
		width: 100%;
		height: 200rpx;
		background-color: #19CAAD;
		.title{
			position: absolute;
			left: 80rpx;
			top: 0;
			font-size: 40rpx;
			color: white;
			font-weight: bold;
		}
	}
	.card{
		position: relative;
		width: 90%;
		height: 200rpx;
		margin: -130rpx auto;
		background-color: white;
		.one{
			position: relative;
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			border-bottom: 1rpx solid #cccccc;
			text{
				position: absolute;
				left: 0;
				line-height: 100rpx;
				font-size: 30rpx;
			}
			input{
				position: absolute;
				top: 0;
				width: 300rpx;
				height: 100rpx;
				right: 150rpx;
                line-height: 100rpx;
			}
			/* #ifdef MP-ALIPAY */
			input{
				position: absolute;
				top: 0;
				width: 300rpx;
				height: 90rpx;
				right: 150rpx;
			    line-height: 90rpx;
			}
			/* #endif */
		}
		.two{
			position: relative;
			width: 90%;
			height: 100rpx;
			margin: 0 auto;
			
			text{
				position: absolute;
				left: 0;
				line-height: 100rpx;
				font-size: 30rpx;
			}
			input{
				position: absolute;
				top: 0;
				width: 350rpx;
				height: 100rpx;
				right: 100rpx;
		        line-height: 100rpx;
			}
			/* #ifdef MP-ALIPAY */
			input{
				position: absolute;
				top: 0;
				width: 350rpx;
				height: 90rpx;
				right: 100rpx;
			    line-height: 90rpx;
			}
			/* #endif */
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
