<template>
	<view class="content">
		<view class="nav">
			<view class="lo" v-for="(item,i) in arr" :key="i">{{item.name}}</view>
		</view>

		<view class="search">
			<uni-search-bar @confirm="search" @input="input"></uni-search-bar>
		</view>

		<swiper indicator-dots :autoplay="true" :interval="5000" circular>
			<swiper-item>
				<image src="https://uptownlet.com/appendix/image.jspx?id=9153d2a7ffd64ac3b7761eebfca0ff60" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://uptownlet.com/appendix/image.jspx?id=11be2f79dcd8419394faa7bb0b38e3bd" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://uptownlet.com/appendix/image.jspx?id=84e8deabc3dc46199460279ba36f7e44" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 推荐 -->
		<view class="recom">
			<view class="recom-nav">
				<text class="bold">智能推荐</text>
				<text> | </text>
				<text style="margin-left: 10px;" @click="define">自定义</text>
				<view class="iconfont icon-zidingyi" style="display: inline-block;font-size: 10px;"></view>
				<view class="iconfont icon-huanyipi" style="display: inline-block;float: right;"></view>
				<text style="float: right;" @click="nextRecom">换一批</text>

			</view>

			<view class="recom-body">
				<scroll-view scroll-x style=" white-space: nowrap;">
					<view class="recom-card" v-for="(item,i) in newlist" :key="i">

						<view class="recom-incard">
							<image :src="`${imgUrl+item.data.tp}`"></image>
						</view>
						<view class="recom-bg">
							<view class="hide" style="font-size: 14px;">{{item.bt}}</view>
							<view style="color: #808080;font-size: 13px;" class="hide">{{item.data.ly}}</view>
							<view class="recom-fire">
								<view class="iconfont icon-huo" style="display: inline; color: red;"></view>
								{{item.rd}}
							</view>
						</view>
						<view class="hide recom-jj">{{item.zy}}</view>
					</view>
				</scroll-view>

			</view>

			<button class="buy">一键下单</button>

		</view>
		<!-- 热门书单 -->
		<view class="hot">
			<view class="hot-nav">
				<text class="bold">热门书单</text>
			</view>
			<view class="hot-body">
				<view class="bg"></view>
				<scroll-view scroll-x style=" white-space: nowrap;">

					<view class="hot-card" v-for="(item,i) in hotlist" :key="i">
						<view class="">
							{{item.bt}}
						</view>
						<view class="hide" style="font-size: 14px;color: #808080;">
							{{item.js}}
						</view>
						<view v-for="(item2,i) in item.tslist" :key="i" class="hot-body">
							<image :src="`${imgUrl+item2.fm}`" class="hot-img"></image>
							<view class="hot-jj">
								<view class="hide" style="font-size: 14px;">{{item2.sm}}</view>
								<view style="font-size: 13px; color: #969896;" class="hide">
									<text style="color: red;">作者：</text>
									{{item2.zz}}</view>
								<view class="hot-pri">
									<view class="iconfont icon-huo" style="display: inline; color: red;"></view>
									<text>
										{{item2.zxrd}}
									</text>
									<view class="iconfont icon-sheng" style="display: inline; color: orange;"></view>
									<view class="iconfont icon-renmingbiriyuan" style="display: inline;vertical-align: center; "></view>

									<text>{{item2.hys}}</text>
								</view>
							</view>
						</view>
					</view>


				</scroll-view>

			</view>

		</view>
		<!-- 全部分类 -->
		<view class="title">
			<view class="title-nav">
				<text class="bold">全部分类</text>
				<text class="rank">纸享热度</text>
				<text class="rank">豆瓣</text>
			</view>
			<view class="title-body">
				<view class="title-ev">
					<view v-for="(item,i) in booklist" :key="i" class="title-card">
						<image :src="`${imgUrl+item.data.tp}`" class="title-img"></image>
						<view class="title-jj">
							<view class="hide" style="font-size: 15px;">{{item.bt}}</view>
							<view style="font-size: 13px; color: #969896;">
								<text style="color: red;">作者：</text>
								{{item.data.ly}}</view>
							<view class="title-pri">
								<view class="iconfont icon-huo" style="display: inline; color: red;"></view>
								<text>
									{{item.rd}}
								</text>
								<view class="iconfont icon-sheng" style="display: inline; color: orange;"></view>
								<view class="iconfont icon-renmingbiriyuan" style="display: inline;vertical-align: center; "></view>

								<text>{{item.yj}}</text>
							</view>
						</view>
						<view class="rate">
							<view>
								<view class="iconfont icon-shoucang"></view>
								<text>收藏</text>
							</view>
							<view @click="addBag(i,item)" :class="{'modify':item.sc}" >
								<view class="iconfont icon-shubao"></view>
								<text>加书包</text>
							</view>
						</view>
					</view>

				</view>
			</view>
			<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
			<uni-load-more v-else :status="'noMore'"></uni-load-more>
		</view>
	</view>

</template>
<script>
	import {
		myRequestGet
	} from '@/utils/zgrequest.js'


	import uniSearchBar from '../../components/uni-ui/uni-search-bar/uni-search-bar.vue'
	export default {
		data() {
			return {
				page: 1,
				page1: 1,
				newlist: [],
				booklist: [],
				hotlist: [],
				isselect:false,
				bt: "",
				arr: [{
						name: '首页',
					},
					{
						name: '分类选书',
					},
					{
						name: '名师导读',
					},
					{
						name: '阅读评测',
					},
					{
						name: '成为会员'
					}
				],
				flag: true,
				imgUrl: "https://uptownlet.com/appendix/image.jspx?id="
			}
		},
		onLoad() {
			this.getRecom();
			this.getBookList();
			this.getHotList();

		},
		onReachBottom() {
			console.log("xxxxxxxxxxxxxxx");
			this.page++;
			this.getBookList();
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 300
			});
		},
		computed: {
			age() {
				return this.num
			}
		},
		methods: {
			async getRecom() {
				let result = await myRequestGet(
					'resid=SdAction.zntjsd', {
						page: this.page1
					}
				);
				this.newlist = result;
			},
			async getBookList() {
				let result2 = await myRequestGet(
					'resid=SdAction.syts&sxtj=ZXRD&hyid=84f5b7553fa74b6dbd2e7fdc6bd53984&yhid=84f5b7553fa74b6dbd2e7fdc6bd53984', {
						page: this.page
					});
				this.booklist = [...result2];

				console.log(result2);
			},
			nextRecom() {
				console.log("1111111111111")
				this.page1++;
				this.getRecom();
			},
			async getHotList() {
				let result3 = await myRequestGet(
					'resid=SdAction.hotsd&yhid=84f5b7553fa74b6dbd2e7fdc6bd53984', {
						page: 1
					});
				this.hotlist = result3;

				console.log(result3, "2222222");
			},
			addBag(n,it){
				
				console.log(n,it,"111111111111");
				it.sc = !it.sc;
				uni.$emit("sendbook", "你好，bag")
			},
			define(){
				uni.navigateTo({
					url:'/pages/choose/choose'
				})
			}
		},
		components: {
			uniSearchBar
		}

	}
</script>

<style lang="less">
	@import '../../static/icon/iconfont.css';

	.content {
		padding: 5px;
		flex-direction: column;

		.nav {
			font-size: 14px;
			display: flex;

			.lo {
				text-align: center;
				flex: 1;
				flex-direction: row;
			}
		}

		swiper {
			swiper-item {
				image {
					width: 365.2px;
					height: 150px;
				}
			}

			margin-bottom: 20px;
		}

		.recom-nav {
			position: relative;
			font-size: 14px;
			color: #999999;
		}

		.recom-body {
			margin-top: 15px;

			.recom-card {
				margin: 30px 10px 10px 10px;
				padding: 10px 5px 10px 15px;
				width: 430rpx;
				height: 400rpx;
				border-radius: 10px;
				box-shadow: 0 0 15px -5px;
				display: inline-block;
				position: relative;

				.recom-bg {
					width: 98px;
					// background-color:yellow ;
					display: inline-block;
					float: right;
					margin-top: -100px;

					.recom-fire {
						font-size: 14px;
						color: #808080;
						padding: 5px 10px 5px 10px;
						margin-left: -5px;
						width: 60px;
						border-radius: 0px 20px 20px 0px;
						background-color: #E9E9E9;

					}

				}

				.recom-incard {

					margin-top: -30px;
					border-radius: 5px;
					box-shadow: 0 0 10px -5px;
					width: 110px;
					height: 160px;

					image {
						width: 110px;
						height: 160px;
					}

				}

				.recom-jj {
					margin-top: 15px;
					width: 400rpx;
					height: 60px;
					background-color: yellow;
					word-wrap: break-word;
					font-size: 14px;
					color: #969896;

				}
			}

		}

		.buy {
			margin: 15px 0px 20px 0px;
			padding: 3px 0px 3px 0px;
			font-size: 16px;
			border-radius: 20px;
			color: #808080;

		}

		.hot {
			// .bg {
			// 	width: 430rpx;
			// 	height: 680rpx;
			// 	border-radius: 10px;
			// 	background-color: #999999;
			// }

			scroll-view {

				.hot-card {
					margin: 30px 10px 10px 10px;
					padding: 10px 10px 10px 20px;
					width: 430rpx;
					height: 620rpx;
					border-radius: 10px;
					box-shadow: 0 0 15px -5px;
					display: inline-block;

					.hot-body {
						margin-top: 10px;

						.hot-img {
							display: inline-block;
							width: 50px;
							height: 70px;
							float: left;
							margin-right: 5px;
						}

						.hot-jj {
							view {
								margin: 3px 0px 3px 0px;
							}

							display: inline-block;
							width: 140px;
							height: 90px;
							// background-color: pink;
							float: left;

							.hot-pri {
								font-size: 10px;
								color: #808080;

								view {
									margin-left: 8px;
								}

								text {
									padding: 5px 5px 5px 5px;
								}
							}
						}
					}


				}
			}

		}
		.modify{
			view{
				color:red;
			}
			text{
				color: red;
			}
		}
		.hide {

			text-overflow: ellipsis;
			overflow: hidden;

		}

		.title {
			margin-top: 20px;

			.title-nav {
				.rank {
					font-size: 12px;
					color: #808080;
					background-color: #E9E9E9;
					padding: 3px 10px 3px 10px;
					margin-left: 10px;
				}
			}

			.title-card {
				margin-top: 10px;

				height: 120px;
				padding: 5px 0px 0px 5px;
				display: inline-block;
				position: relative;
				width: 100%;

				.title-img {
					display: inline-block;
					width: 80px;
					height: 105px;
					float: left;
					margin-right: 10px;
				}

				.title-jj {
					view {
						margin: 7px 0px 7px 0px;
					}

					display: inline-block;
					width: 220px;
					height: 100px;
					// background-color: pink;
					float: left;
					margin-top: 10px;
					border-right: 1px dashed #808080;

					.title-pri {
						font-size: 12px;
						color: #808080;

						view {
							margin-left: 10px;
						}

						text {
							padding: 5px 5px 5px 5px;
						}
					}
				}

				.rate {
					padding: 5px 0px 0px 5px;
					display: inline-block;
					width: 40px;
					font-size: 13px;

					color: #808080;

					view {
						width: 40px;
						margin-top: 10px;
						text-align: center;

						text {
							margin-top: 5px;
							font-size: 13px;
						}

						view {

							font-size: 20px;
							margin-top: 5px;
						}
					}
				}
			}
		}
	}

	.bold {
		padding: 10px;
		color: black;
		font-size: 15px;
		font-weight: bold;
	}
</style>
