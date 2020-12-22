<template>
	<view class="tuijian">
		<view class="tui-top">商品推荐</view>
		<view class="tui-bottom">
			<!-- 点击商品推荐 去商品详情 -->
			<view class="item" v-for="item in goods" :key="item.id" @click="goodsDetali(item.id)">
				<!-- 注意 src 要使用 v-bind -->
				<image :src="item.img_url" mode="widthFix"></image>
				<view class="price">
					<text>{{item.sell_price}}</text>
					<text>{{item.market_price}}</text>
				</view>
				<view class="tui-name">{{item.title}}</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props:["goods"],
		data() {
			return {

			}
		},
		methods:{
			goodsDetali(id){
				uni.navigateTo({
					url:`/pages/goodsDetail/goodsDetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="less">
	.tuijian {
		background: #eee;

		.tui-top {
			border-top: 2px solid #eee;
			border-bottom: 2px solid #eee;
			margin-top: 20rpx;
			margin-bottom: 3px;
			color: blue;
			height: 50px;
			line-height: 50px;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
		}

		.tui-bottom {

			// width: 100%;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0 15rpx;

			.item {
				background-color: #FFFFFF;
				width: 355rpx;
				padding: 10px;
				margin-bottom: 15rpx;
				box-sizing: border-box;

				image {
					height: 150rpx;
					width: 100%;
					mix-width: 160px;
					margin: 10px auto;
				}

				.price {
					font-size: 18px;
					color: red;
					padding: 8px 0;

					text:nth-child(2) {
						color: #ccc;
						text-decoration: line-through;
						margin-left: 10px;
						font-size: 13px;
					}
				}

				.name {
					font-size: 14px;
				}

			}

		}
	}
	

	.tishi {
		text-align: center;
	}
</style>
