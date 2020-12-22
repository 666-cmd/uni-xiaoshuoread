<template>
	<view class="content">
		<view class="title">
			<text @click="isChoose(1)" :class="{isActive:isChecked==1}">新借</text>
			<text @click="isChoose(-1)" :class="{isActive:isChecked==-1}">已还</text>
		</view>
		<view class="kong">
			<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2680786358,1010619428&fm=26&gp=0.jpg" mode="widthFix"
			 class="bgc"></image>
			<text>空空滴，还没有记录</text>
			<text>~快去选本书~</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isChecked: 1
			}
		},
		onLoad() {
			uni.showToast({
				title: '没有更多数据了', //提示文字
				icon: 'success', //只支持success，loading，none
				mask: true //遮盖，点击后不能再点击按钮了
			})
		},
		methods: {
			isChoose(index) {
				if (index == 1) {
					if (this.isChecked == 1) {
						//改变原来的状态，就是为选中的状态，当点击的时候就取消掉选中的状态
						this.isChecked = 0;
					} else {
						this.isChecked = 1;
					}
				} else {
					if (this.isChecked == -1) {
						this.isChecked = 0;
					} else {
						this.isChecked = -1;
					}
				}
				uni.showToast({
					title: '没有更多数据了', //提示文字
					icon: 'success', //只支持success，loading，none
					mask: true //遮盖，点击后不能再点击按钮了
				})
			}
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

		.isActive {
			color: #3CB371;
			border-bottom: 1px solid #3CB371;

		}

		.title {
			display: flex;
			justify-content: space-around;
			border-top: 1px solid #E5E5E5;
			border-bottom: 2px solid #E5E5E5;
			font-size: 14px;

			text {
				padding: 10px 0;
			}
		}

		.kong {
			display: flex;
			flex-direction: column;

			.bgc {
				margin-top: 65px;
				margin-bottom: 10px;
				margin-left: 10px;
			}

			text {
				text-align: center;
				font-size: 14px;
				color: #999;
				line-height: 25px;
			}

			text:nth-child(2) {
				font-size: 12px;
			}
		}
	}
</style>
