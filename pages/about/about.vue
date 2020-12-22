<template>
	<view class="content">
		<view class="img">
			<image src="https://uptownlet.com/appendix/image.jspx?id=b8b5737dae5d49a3913fdd41e487db9d" mode="widthFix"></image>
		</view>
		<view class="word">
			<text>“纸享读书”平台是宁夏首家运用“互联网+”模式，专为读书人群打造的会员制一同城服务平台。</text>
			<text>提供全龄段图书租赁、图书购买，精品课程推荐、文创产品、线下活动等多维度的综合服务。</text>
		</view>
		<view class="erwei">
			<image src="https://uptownlet.com/appendix/image.jspx?id=a63ab02fb5544c80ac20d17b279c107d" mode="widthFix"></image>
			<text>扫描二维码添加官方微信</text>
		</view>
		<view class="lianxi">
			<text>联系方式</text>
			<text>客服电话：400-618-6798</text>
		</view>
		<button type="default" class="btn" open-type="contact"><text class="iconfont icon-kefu"></text></button>
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
	page {
		/* #ifdef MP-ALIPAY */
		background-color: #fff;
		/* #endif */
	}

	.content {
		box-sizing: border-box;
		padding: 0 35px;
		width: 100%;
		height: 100%;
		position: relative;

		.img {
			height: 180px;
			// background-color: pink;
			overflow: hidden;
			margin-top: 10px;
			border-bottom: 1px solid #EEEEEE;

			image {
				width: 110%;
				height: 110%;
				margin-left: -10px;
				margin-top: -10px;
				border: none !important;
			}
		}

		.word {
			display: flex;
			flex-direction: column;
			line-height: 24px;
			font-size: 15px;
			color: #666666;
			margin-top: 10px;
		}

		.erwei {
			width: 220px;
			display: flex;
			flex-direction: column;
			text-align: center;
			margin: 0 auto;
			box-sizing: border-box;
			padding: 10px 0;
			border-bottom: 1px solid #E5E5E5;

			image {
				width: 130px;
				align-self: center;
			}

			text {
				font-size: 15px;
				color: #666666;
			}
		}

		.lianxi {
			display: flex;
			flex-direction: column;
			font-size: 15px;

			text:nth-child(1) {
				margin-top: 10px;
				font-weight: 500;
			}

			text:nth-child(2) {
				font-size: 14px;
				margin-top: 5px;
				color: #666;
			}
		}

		.btn::after {
			border: none;
		}

		.btn {
			background-color: #999999 !important;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			display: flex;
			text-align: center;
			position: absolute;
			bottom: 5px;
			right: 10px;

			/* #ifdef MP-ALIPAY */
			padding-left: 10px;
			/* #endif */

			text {
				font-size: 28px;
				color: #fff;
				align-self: center;
			}
		}
	}
</style>
