<template>
	<view style="width: 680rpx;margin: 0 auto;">
		<view style="display: flex;border-bottom: 1px solid #ccc;margin-top: 10px;">
			<view class="item first">输入兑换码</view>
			<view class="item">确认开卡信息</view>
			<view class="item">开卡成功</view>
		</view>
		<view style="width: 100%;height: 60px;background-color: #eee;
		margin-top: 10px;margin-bottom: 10px;">
			<view style="padding-left: 10px;font-size: 600;font-size: 16px;margin-bottom: 5px;">
				兑换码
			</view>
			<input style="display: block;width: 100%;height: 25px; border-bottom: 1px solid #ccc; margin-bottom: 5px;" type="text"
			 placeholder="请输入卡密" />
		</view>
		<button @click="tips" style="border-radius: 0px;background-color:rgb(25,202,173);" type="primary">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			tips() {
				wx.showModal({
					title: "提示",
					content:"输入错误，请检查兑换码",
					showCancel:false
				})
			}
		}
	}
</script>

<style lang="scss">
	.item {
		padding-bottom: 5px;
		flex: 1;
		text-align: center;
	}

	.first {
		color: rgb(25, 202, 173);
		border-bottom: 2px solid rgb(25, 202, 173);
	}
</style>
