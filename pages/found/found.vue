<template>
	<view class="content">
		<view class="nav">
			<view class="lo">首页<text class="bot"></text></view>
			<view class="lo" @click="go('/pages/ClassifiedBooks/ClassifiedBooks')">分类选书</view>
			<view class="lo" @click="goDao()">名师导读</view>
			<view class="lo" @click="go('/pages/read/read')">阅读评测</view>
			<view class="lo" @click="memBuy()">成为会员</view>
		</view>

		<view class="sousuo1">
			<view class="iconfont icon-iconfontsousuokuangsousuo"></view>
			<input type="text" placeholder="搜索书名/作者/关键字..." class="sousuo" @click="go('/pages/search/search')" />
		</view>

		<swiper indicator-dots :autoplay="true" :interval="5000" circular>
			<swiper-item>
				<image src="https://uptownlet.com/appendix/image.jspx?id=9153d2a7ffd64ac3b7761eebfca0ff60" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://uptownlet.com/appendix/image.jspx?id=11be2f79dcd8419394faa7bb0b38e3bd" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="https://uptownlet.com/appendix/image.jspx?id=84e8deabc3dc46199460279ba36f7e44" mode="scaleToFill"></image>
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
					<view class="recom-card" v-for="(item,i) in newlist" :key="i" @click="godetail(item.id)">

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
						<text class="recom-jj">{{item.zy}}</text>
					</view>
				</scroll-view>

			</view>

			<button class="buy" @click="memBuy">一键下单</button>

		</view>
		<!-- 热门书单 -->
		<view class="hot1">
			<view class="hot-nav">
				<text class="bold">热门书单</text>
			</view>
			<view class="hot-body">
				<view class="bg"></view>
				<scroll-view scroll-x style=" white-space: nowrap;">

					<view class="hot-card" v-for="(item,i) in hotlist" :key="i" @click="gohosted(item.id)">
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
									<view class="iconfont icon-sheng3" style="display: inline; color: orange;font-weight: bold;"></view>
									<!-- <view class="iconfont icon-renmingbiriyuan" style="display: inline;vertical-align: center; "></view> -->
								
									<text style="text-decoration:line-through;">￥{{item2.hys}}</text>
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
				<text class="rank" @click="hotrank" :class="flag?'modify':''">纸享热度</text>
				<text class="rank" @click="peanrank" :class="flag?'modify':''">豆瓣</text>
			</view>
			<view class="title-body">
				<view class="title-ev">
					<!-- <view v-for="(item,i) in shuji" :key="i" class="title-card">
						<view @click="godetail(item.id)">
							<image :src="`${imgUrl+item.data.tp}`" class="title-img"></image>
							<view class="title-jj">
								<view class="hide" style="font-size: 15px;">{{item.bt}}</view>
								<view style="font-size: 13px; color: #969896;">
									<text style="color: red;">作者：</text>
									{{item.data.ly}}</view> -->
					<!-- <view class="title-pri">
									<view class="iconfont icon-huo" style="display: inline; color: red;"></view>
									<text>
										{{item.rd}}
									</text>
									<view class="iconfont icon-shengji" style="display: inline; color: orange;"></view>
									<view class="iconfont icon-renmingbiriyuan" style="display: inline;vertical-align: center; "></view>

									<text>{{item.yj}}</text>
								</view> -->
					<!-- <view class="hot">
									<text class="text"><text class="iconfont icon-huo"></text>{{item.rd}}</text>
									<text class="text"><text class="iconfont icon-shengji"></text>￥<text class="xian">{{item.yj}}</text></text>
								</view> -->
					<!-- </view> -->
					<view class="cont" v-for="item in shuji" :key="item.id">
						<view class="img" @click="godetail(item.id)">
							<!-- ${shuji[0].tp} -->
							<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.data.tp}`"></image>
						</view>
						<view class="jianjie" @click="godetail(item.id)">
							<text class="tit">{{item.bt}}</text>
							<text class="name">{{item.data.ly}}</text>
							<view class="hot">
								<text class="text"><text class="iconfont icon-huo"></text>{{item.rd}}</text>
								<text class="text"><text class="iconfont icon-shengji"></text>￥<text class="xian">{{item.yj}}</text></text>
							</view>
						</view>
						<view class="jiaru">
							<view class="s-top" @click="shoucang(item.id,item)">
								<text class="iconfont icon-shoucang" :class="item.sc?'red':''"></text>
								<text class="" :class="item.sc?'red':''">{{item.sc?"已收藏":"收藏"}}</text>
							</view>
							<view class="s-bottom" @click="baobao(item.id,item)">
								<text class="iconfont icon-shubao" :class="item.sb?'red':''"></text>
								<text :class="item.sb?'red':''">{{item.sb?"已加入":"加入"}}</text>
							</view>
						</view>
					</view>
					<!-- </view> -->
					<!-- </view> -->
					<!-- <view class="rate">
							<view @click="shoucang(item.id,item)" :class="item.sc?'modify':''">
								<view class="iconfont icon-shoucang"></view>
								<text>{{item.sc?"已收藏":"收藏"}}</text>
							</view>
							<view @click="baobao(item.id,item)" :class="item.sb?'modify':''">
								<view class="iconfont icon-shubao"></view>
								<text>{{item.sb?"已加入":"加书包"}}</text>
							</view>
						</view> -->
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
	// import store from '../../store/index.js'

	import uniSearchBar from '../../components/uni-ui/uni-search-bar/uni-search-bar.vue'

	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	// const app = new Vue({
	// 	store
	// 	})

	export default {

		data() {
			return {
				page: 1,
				page1: 1,
				newlist: [],
				shuji: [],
				hotlist: [],
				isselect: false,
				bt: "",
				flag: true,
				imgUrl: "https://uptownlet.com/appendix/image.jspx?id="
			}
		},
		onLoad() {
			this.getRecom();

			this.getHotList();

		},

		onShow() {
			this.getBookList();
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
		methods: {
			...mapMutations({
				addCarts: 'addCarts'
			}),
			...mapMutations({
				addBao: 'addBao'
			}),
			...mapMutations({
				clearCarts: "clearCarts"
			}),
			...mapMutations({
				clearBao: 'clearBao'
			}),

			async getRecom() {
				let result = await myRequestGet(
					'/portal.php', {
						resid: 'SdAction.zntjsd',
						page: this.page1
					}
				);
				this.newlist = result.data;
			},
			async getBookList() {
				let result2 = await myRequestGet(
					'/portal.php', {
						resid: 'SdAction.syts',
						sxtj: 'ZXRD',
						hyid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						yhid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						page: this.page
					});
				this.shuji = [...result2.data];

				for (var i = 0; i < this.shuji.length; i++) {
					for (var j = 0; j < this.carts.length; j++) {
						if (this.shuji[i].id == this.carts[j].id) {
							this.shuji[i].sc = true
						}
					}
				}

				for (var i = 0; i < this.shuji.length; i++) {
					for (var j = 0; j < this.bao.length; j++) {
						if (this.shuji[i].id == this.bao[j].id) {
							this.shuji[i].sb = true;
						}
					}
				}

				console.log(result2.data);
			},
			nextRecom() {
				console.log("1111111111111")
				this.page1++;
				this.getRecom();
			},
			async getHotList() {
				let result3 = await myRequestGet(
					'/portal.php', {
						resid: 'SdAction.hotsd',
						yhid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						page: 1
					});
				this.hotlist = result3.data;
				console.log(result3.data, "2222222");

			},
			async gethotrankList() {
				let result4 = await myRequestGet(
					'/portal.php', {
						resid: 'SdAction.syts',
						yhid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						hyid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						page: 2,
						sxtj: 'ZXRD'
					});
				this.shuji = result4.data;
				console.log(result4.data, "22222224444444444");

			},
			async getpeanrankList() {
				let result5 = await myRequestGet(
					'/portal.php', {
						resid: 'SdAction.syts',
						yhid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						hyid: '84f5b7553fa74b6dbd2e7fdc6bd53984',
						page: 2,
						sxtj: 'DBPF'
					});
				this.shuji = result5.data;
				console.log(result5.data, "2222222555555");

			},
			shoucang(id, shu) {
				for (var i = 0; i < this.shuji.length; i++) {
					if (id == this.shuji[i].id) {
						var shu = this.shuji[i]
						if (this.shuji[i].sc) {
							this.clearCarts(shu)
						} else {
							this.addCarts(shu)
						}

						this.shuji[i].sc = !this.shuji[i].sc
						uni.setStorageSync("shuji", this.shuji)
					}
				}
				console.log(id, shu, "xxxxxx");
			},
			baobao(id, shu) {
				for (var i = 0; i < this.shuji.length; i++) {
					if (id == this.shuji[i].id) {
						var shu = this.shuji[i]
						if (this.shuji[i].sb) {
							this.clearBao(shu)
						} else {
							this.addBao(shu)
						}

						this.shuji[i].sb = !this.shuji[i].sb
						uni.setStorageSync("shuji", this.shuji)
					}
				}
				console.log(id, shu, "shubaoshubao");
			},
			define() {
				uni.navigateTo({
					url: '/pages/choose/choose'
				})
			},
			memBuy() {
				uni.navigateTo({
					url: '/pages/member/member'
				})
			},
			go(path) {
				uni.navigateTo({
					url: path
				})
			},
			godetail(id) {
				uni.navigateTo({
					url: `/pages/details/details?id=${id}`
				})

			},
			gohosted(id) {
				uni.navigateTo({
					url: `/pages/hostd/hostd?id=${id}`
				})
				console.log(id,"ididididi");
			},
			hotrank() {
				this.flag = !this.flag;
				this.gethotrankList();
			},
			peanrank() {
				this.flag = !this.flag;
				this.getpeanrankList();
			},
			goDao() {
				uni.switchTab({
					url: '/pages/intro/intro'
				})
				console.log("ssssaaa");
			},

		},
		components: {
			uniSearchBar
		},
		computed: {
			...mapState({
				carts: 'carts'
			}),
			...mapState({
				bao: 'bao'
			})
		}

	}
</script>

<style lang="less">
	@import '../../static/icon/iconfont.css';
	// @import '../../static/fonts/iconfont.css';

	.content {
		padding: 10rpx;
		flex-direction: column;
		margin-top: 10px;

		.red {
			color: red;
		}

		.cont {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;

			.img {
				image {
					width: 120rpx;
					height: 140rpx;
				}
			}

			.jianjie {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				width: 220px;

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
				}

				.hot {
					font-size: 11px;
					color: #666666;

					.text {
						margin-right: 20px;
					}

					.xian {
						text-decoration: line-through
					}

					.icon-huo {
						color: #ef7302;
						font-size: 10px;
						margin-right: 3px;
					}

					.icon-shengji {
						color: #FBD785;
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

		.sousuo1 {
			margin: 20rpx 0 30rpx;
			position: relative;
			line-height: 55rpx;

			.sousuo {
				width: 690rpx;
				height: 55rpx;
				margin:55rpx auto 0;
				font-size: 13px;
				background-color: #eee;
				border-radius: 34rpx;
				box-sizing: border-box;
				padding: 0px 10rpx 0px 50rpx;
				overflow: hidden;
			}

			.icon-iconfontsousuokuangsousuo {
				display: inline-block;
				font-size: 32rpx;
				color: #666;
				/* #ifdef MP-WEIXIN|H5|APP-PLUS */
				position: absolute;
				left: 28rpx;
				top: 4rpx;
				line-height: 50rpx;
				/* #endif */
				/* #ifdef MP-ALIPAY */
				position: absolute;
				left: 10rpx;
				top: 50rpx !important;
				/* #endif */
			}
		}

		.nav {
			font-size: 14px;
			display: flex;
			justify-content: space-around;
			position: relative;
            
            /* #ifdef MP-ALIPAY|MP-WEIXIN */ 
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			background-color: white;
			z-index: 2;
			position: fixed;
			top: 0;
			/* #endif */ 
			.lo {
				text-align: center;
				// flex: 1;
				// flex-direction: row;
			}

			.bot {
				display: block;
				width: 43rpx;
				height: 6rpx;
				border-radius: 40rpx;
				background-color: #4CD964;
				position: absolute;
				bottom: 6rpx;
				/* #ifdef MP-ALIPAY|MP-WEIXIN */
				bottom: 6rpx;
				/* #endif */ 
				/* #ifdef H5 */
				bottom: -12rpx;
				/* #endif */ 
				left: 30rpx;
			}
		}

		swiper {
			height: 250rpx;

			swiper-item {
				image {
					width: 345px;
					height: 250rpx;
					margin-left: 10px;
					border-radius: 7px;
				}

			}

			margin-bottom: 40rpx;
		}

		.recom-nav {
			position: relative;
			font-size: 14px;
			color: #999999;
			box-sizing: border-box;
			padding: 0 10px;

			.bold {
				padding: 0;
				padding-right: 10px !important;
			}
		}

		.recom-body {
			margin-top: 15px;

			.recom-card {
				margin: 30px 10px 10px 10px;
				padding: 10px 5px 10px 15px;
				width: 400rpx;
				height: 330rpx;
				border-radius: 10px;
				box-shadow: 0 0 20rpx #E5E5E5;
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
						color: #999999;
						padding: 4px 10px 4px 10px;
						margin-left: -6px;
						margin-top: 22rpx;
						width: 120rpx;
						border-radius: 0px 50rpx 50rpx 0px;
						background-color: #E9E9E9;

					}

				}

				.recom-jj {
					margin-top: 15px;
					width: 390rpx;
					height: 80rpx;
					color: #ABABAB;
					font-size: 14px;
					// text-overflow: ellipsis;
					// overflow: hidden;
					// display: -webkit-box;
					// -webkit-line-clamp: 2;
					// -webkit-box-orient: vertical;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; //控制行数
					overflow: hidden;
					white-space: normal;
					font-size: 14px;
					line-height: 21px;
					margin-top: 17px
				}

				.recom-incard {
					margin-top: -30px;
					border-radius: 5px;
					box-shadow: 0 0 10px -5px;
					width: 90px;
					height: 130px;
					padding: 3px;
					border-radius: 5px;

					image {
						width: 90px;
						height: 130px;
						// border-radius: 8px;
					}

				}


			}

		}

		.buy::after {
			border: none;
		}

		.buy {
			// margin: 10px 0px 15px 0px;
			// padding: 3px 0px 3px 0px;
			display: block;
			height: 35px;
			font-size: 14px;
			line-height: 35px;
			width: 345px;
			margin: 0 auto;
			margin-top: 15px;
			margin-bottom: 20px;
			border-radius: 20px;
			color: #808080;
			border: none;
		}

		.hot1 {
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
					box-shadow: 0 0 20rpx #E5E5E5;
					display: inline-block;
					.iconfont{
						font-size: 12px;
					}
					
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
								margin: 5px 0px 3px 0px;
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
								.icon-shengji{
									margin-left: 5px;
								}
							}
						}
					}


				}
			}

		}

		.modify {
			view {
				color: red;
			}

			text {
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
				margin-bottom: 10px;

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

	.title-ev {
		padding: 0 10px;
	}
	.bold {
		padding: 10px;
		color: black;
		font-size: 15px;
		font-weight: bold;
	}
</style>
