<template>
	<view class="hot">
		<scroll-view scroll-y="">
			<image class="header" src="https://uptownlet.com/appendix/image.jspx?id=086ad475b01c41d0adc49bf200c574f9" mode="widthFix"></image>
			<text class="bt">{{list.bt+'【'+list._lx+'】'}}</text>
			<view class="js">{{list.js}}</view>
			<view class="main">
				<view class="ts" v-for="item in ts" :key="item.tsid" @click="godetails(item)">
					<view class="left">
						<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.fm}`" mode="widthFix"></image>
					</view>
					<view class="right">
						<text class="sm">{{item.sm}}</text>
						<text class="zz">{{item.zz}}</text>
						<text class="nrjj">{{item.nrjj}}</text>
						<text :class="item.kjsl==0?'kejie':'bukejie'">{{item.kjsl==0?'可借':'已借出'}}</text>
					</view>
				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				list: [],
				ts: [],
			}
		},
		onLoad(options) {
			// console.log(options)
			this.getSwiper(options);

		},
		methods: {
			async getSwiper(options) {

				let result = await myRequestPost("/portal.php", {
					resid: 'SysdAction.sdxq',
					sdid: options.id
				})
				// `/portal.php?resid=SysdAction.sdxq&sdid=${options.id}`)
				if (result != 0) {
					this.list = result.data
					this.ts = result.data.ts
				}
				// console.log(this.list, "99999")
				console.log(this.ts, "222222")
			},
			godetails(item) {
				uni.navigateTo({
					url: `../details/details?id=${item.tsid}&kjsl=${item.kjsl}`
				})
			}
		}
	}
</script>

<style lang="less">
	.hot {
		.header {
			width: 750rpx;
		}

		.bt {
			font-size: 14px;
			font-weight: 600;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 5px;
		}

		.js {
			color: rgb(156,156,156);
			font-size: 12px;
			width: 100%;
			margin: 0 auto;
			padding: 10px;
			border-bottom: 1px solid #C0C0C0;
			text-align: center;
			box-sizing: border-box;
		}

		.main {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 30rpx;
			width: 690rpx;
			border-bottom: 1px solid #C0C0C0;

			.ts {
				margin-bottom: 10px;
				width: 100%;
				border-bottom: 1px solid #ccc;
				display: flex;
				justify-content: space-around;
				padding-bottom:5px ;
				.left {
					display: inline-block;
					flex: 1;
					margin-right: 10px;
					width: 80px;
					padding:0 10px;
					image {
						width: 180rpx;
						// height:300rpx;
						// margin: 10px;
						height: 220rpx!important;


					}
				}

				.right {
					width: 100%;
					height: 220rpx;
					margin: 5rpx auto;
					display: inline-flex;
					flex-direction: column;
					// justify-content: flex-start;
					vertical-align: top;

					.sm {
						font-weight: 600;
						margin-bottom: 5px;
						display: block;
						font-size: 12px;
					}

					.zz {
						margin-bottom: 4px;
						display: block;
						color: rgb(105,105,105);
						font-size: 11px;
					}

					.nrjj {
						// width: 520rpx;
						color: rgb(156,156,156);
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: 11px;
						// margin-bottom: 10px;
					}

					.kejie {
						width: 80rpx;
						color: rgb(33, 203, 175);
						border: 1px solid rgb(33, 203, 175);
						border-radius: 4px;
						margin-top: 7px;
						margin-bottom: 5px;
						padding: 2px;
						text-align: center;
						font-size: 13px;
					}

					.bukejie {
						width: 100rpx;
						text-align: center;
						color: pink;
						font-size: 13px;
						border: 1px solid pink;
						border-radius: 4px;
						margin-top: 10px;
						margin-bottom: 5px;
						padding: 2px;
					}
				}
			}
		}
	}
</style>
