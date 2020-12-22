<template>
	<view class="information">
		<!-- #ifdef MP-ALIPAY|MP-WEIXIN|H5 -->
		<view class="kong">
			<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2680786358,1010619428&fm=26&gp=0.jpg" mode="widthFix"
			 class="bgc" :style="{'display':carts==0?'block':'none'}"></image>
			<text :style="{'display':carts==0?'block':'none'}">空空滴，还没有记录</text>
			<text :style="{'display':carts==0?'block':'none'}">~快去选本书~</text>
		</view>
		<!-- #endif -->
		<view class="cont" v-for="item in carts" :key="item.id">
			<view class="img">
				<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.tp}`" v-show="item.tp"></image>
				<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.data.tp}`" v-show="item.data.tp"></image>
			</view>
			<view class="jianjie">
				<text class="tit">{{item.bt}}</text>
				<text class="name"><text class="red zuozhe">作者:</text>{{item.zz?item.zz:item.data.ly}}</text>
				<view class="hot">
					<text class="text"><text class="iconfont icon-huo"></text>{{item.zxrd?item.zxrd:item.rd}}</text>
				</view>
			</view>
			<view class="jiaru">
				<!-- -->
				<view class="s-top" @click="shoucang(item.id,item)">
					<text class="iconfont icon-shoucang red"></text>
					<text class="red">已收藏</text>
				</view>
				<view class="s-bottom" @click="bao(item.id,item)">
					<text class="iconfont icon-shubao" :class="item.sb?'red':''"></text>
					<text :class="item.sb?'red':''">{{item.sb?"已加入":"加入"}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState({
				carts: 'carts'
			})
		},
		onLoad() {

		},
		methods: {
			...mapMutations({
				clearCarts: "clearCarts"
			}),
			...mapMutations({
				clearBao: "clearBao"
			}),
			...mapMutations({
				addBao: "addBao"
			}),
			shoucang(id, item) {
				this.clearCarts(item)
			},
			bao(id, item) {
				if(item.sb==true){
					this.clearBao(item)
					item.sb=false
				}else{
					this.addBao(item)
					item.sb=true
				}
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

	.information {
		.kong {
			display: flex;
			flex-direction: column;

			.bgc {
				margin-top: 65px;
				margin-bottom: 10px;
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

		.red {
			color: red;
		}

		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;

		.cont {
			display: flex;
			justify-content: space-between;
			padding: 10rpx 0;
			border-bottom: 1px solid #eee;

			.img {
				image {
					width: 110rpx;
					height: 140rpx;
				}
			}

			.jianjie {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				width: 220px;
				box-sizing: border-box;
				padding: 13rpx 0;

				.tit {
					font-size: 14px;
					color: #333333;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.name {
					font-size: 12px;
					color: #666666;

					.zuozhe {
						margin-right: 4rpx;
					}
				}

				.hot {
					font-size: 11px;
					color: #666666;
					margin-left: 20rpx;

					.icon-huo {
						color: #ef7302;
						font-size: 10px;
						margin-right: 3px;
					}
				}
			}

			.jiaru {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 90rpx; // background-color: pink;
				text-align: center;
				font-size: 11px;
				border-left: 1px dashed #eee;
				padding-left: 10px;
				color: #808080;

				.s-top,
				.s-bottom {
					display: flex;
					flex-direction: column;
				}
			}


		}

	}
</style>
