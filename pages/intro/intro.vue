<template>
	<view>
		<view class="top">
			<!-- 搜素 -->
			<view class="daoread">
				<text>导读<text class="bot"></text></text>
				<text @click="go">书友推荐</text>
				<view class="sousuo1">
					<view class="iconfont icon-iconfontsousuokuangsousuo"></view>
					<input type="text" placeholder="搜索书名/作者/关键字..." class="sousuo" @click="goto('/pages/search/search')"/>
				</view>
			</view>
			<!-- 青少年导读 -->
			<view class="qingtop">
				<text>青少年导读</text>
				<text>| 自定义 <text class="iconfont icon-zidingyi"></text></text>
			</view>
			<view class="qingcon">
				<uni-list :border="false">
					<uni-list-item v-for="(item,index) in shuju" :key="item.id" :border="false">
						<!-- uni-list-item要使用插槽 -->
						<view slot="body" class="item slot-box slot-text" @click="fen(item.id,page)">
							<view class="left">
								<view class="q-left">
									<image class="img" :src="`https://uptownlet.com/appendix/image.jspx?id=${item.yptp}`"></image>
									<text class="iconfont icon-bofang1 tingshu"></text>
								</view>
							</view>
							<view class="right">
								<view class="tit">{{item.dgmc}}</view>
								<view class="people">导读人：{{item.zjr}}</view>
								<view class="ting">有{{item.tzsl}}人在听</view>
							</view>
						</view>
					</uni-list-item>
				</uni-list>
				<view class="huan" @click="change">
					换一换
				</view>
			</view>
			<!-- 热门导读 -->
			<view class="hotread">热门导读</view>

			<view class="beijing">
				<scroll-view scroll-x="true" class="scroll">
					<view class="sitem" v-for="(item,index) in hot" :key="item.id" @click="gotoLan(item.id,item.bt)">
						<view class="bt">{{item.bt}}</view>
						<view class="js">{{item.js}}</view>
						<view class="book" v-for="bitem in item.tslist" :key="bitem.fm">
							<image :src="`https://uptownlet.com/appendix/image.jspx?id=${bitem.fm}`" mode="widthFix"></image>
							<view class="jieshao">
								<view class="tit">{{bitem.sm}}</view>
								<view class="ting">有{{bitem.zxrd}}人在听</view>
								<view class="time">时长：{{bitem.hys}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 书友推荐 -->
			<view class="hotread friend">书友推荐</view>
			<view class="comments" v-for="item in comments" :key="item.id">
				<view class="tou">
					<view class="timg">
						<image :src="item.tx" v-if="item.tx"></image>
						<image src="../../static/2345_image_file_copy_1.jpg" v-else></image>
						<text>{{item._cuser}}</text>
					</view>
					<!-- :class="['zan',item.flag?'red':'nored']" -->
					<text class="zan" @click="dianzan(item.dzs,item.id)" v-model="item.dzs" :class="item.hfs===1?'red':''">{{item.dzs}}
						<text class="iconfont icon-zanpress"></text></text>
				</view>
				<view class="ping">
					{{item.yhly}}
				</view>
				<view class="shu" @click="goDetail(item.pid,item)">
					<view class="s-yes" v-if="item.fxtp">
						<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.fxtp}`"></image>
						<view class="shu-right">
							<text>{{item.fxmc}}</text>
							<text>{{item.fxzz}}</text>
						</view>
					</view>
					<view class="s-no" v-else>
						<text class="iconfont icon-bofang1"></text>
					</view>
				</view>
				<view class="shi">
					<text>{{item.cdate}}</text>
					<text @click="speack(item.id)"><text class="iconfont icon-pinglun"></text>评论</text>
				</view>
			</view>
			<view class="pinglun" @click="show"><text class="iconfont icon-pinglun"></text></view>
		</view>

	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue'
	// 发请求，拿数据
	import {
		myRequestPost,
		myRequestGet
	} from "@/utils/zgrequest.js"
	export default {
		data() {
			return {
				shuju: [],
				page: 1,
				hot: [],
				hotlist: [],
				i: 0,
				comments: [],
				isShua: ''
			}
		},
		components: {
			uniListItem,
			uniList
		},
		onLoad() {
			this.getQing();
			this.getHot();
			this.isShua = uni.getStorageSync("isShua")
			if (this.isShua == '') {
				this.getComment()
				console.log(this.isShua, "请求哦");
			} else {
				this.comments = uni.getStorageSync("comments")
				console.log(this.isShua, "缓存");

			}

		},
		onShow() {

		},
		methods: {
			goto(path){
				uni.navigateTo({
					url:path
				})
			},
			async getQing() {
				let result = await myRequestGet("/portal.php", {
					resid: 'DaoduAction.ddtslist',
					yhid: '3d93fe2e02234cc9a656b8af0bb11383',
					page: this.page,
					city: '临汾市',
					adcode: 1410
				})
				this.shuju = result.data
				// console.log(this.shuju)

			},
			async getHot() {
				let result = await myRequestGet("/portal.php", {
					resid: 'DaoduAction.ddsd',
					yhid: '3d93fe2e02234cc9a656b8af0bb11383',
					city: '临汾市',
					adcode: 1410
				})
				this.hot = result.data
				console.log(this.hot);
				this.hot.forEach(item => {
					this.hotlist = item.tslist
				})
				// console.log(this.hotlist);
			},
			async getComment() {
				let result = await myRequestPost("/portal.php", {
					resid: 'LyplAction.fxList',
					qlx: '2292F51S',
					page: 3,
					rows: 12,
					city: '临汾市',
					adcode: 1410
				})
				this.comments = result.data
				this.zan = this.comments.dzs
				console.log(this.comments, "xxxx");
			},
			change() {
				this.page++;
				this.getQing()
			},
			dianzan(item, id) {
				for (var i = 0; i < this.comments.length; i++) {
					if (id == this.comments[i].id) {
						if (this.comments[i].hfs == 0) {
							this.comments[i].hfs = 1
							this.comments[i].dzs++
						} else {
							this.comments[i].hfs = 0
							this.comments[i].dzs--
						}
					}
				}
				uni.setStorageSync("comments", this.comments)
				console.log(this.comments[1].hfs, "xxxxxxx");
				this.isShua = true
				this.comments.flag = true
				uni.setStorageSync("isShua", this.isShua)
			},
			show() {
				uni.showToast({
					title: "暂无未读消息~~~",
					icon: 'none'
				})
			},
			fen(id, page) {
				console.log(id);
				uni.navigateTo({
					url: `/pages/fenxiang/fenxiang?id=${id}&page=${page}`
				})
			},
			gotoLan(id, bt) {
				console.log(id);
				uni.navigateTo({
					url: `/pages/lanDetail/lanDetail?id=${id}&bt=${bt}`
				})
			},
			go() {
				uni.createSelectorQuery().select(".friend").boundingClientRect(function(res) {
					console.log("标签获取====>", typeof(res.top))
					uni.pageScrollTo({
						scrollTop: res.top,
						duration: 300
					});
				}).exec()
			},
			speack(id) {
				console.log("pinglun");
				uni.navigateTo({
					url: `/pages/pinglun/pinglun?id=${id}`
				})
			},
			goDetail(id, item) {
				// uni.navigateTo({
				// 	url: `/pages/detailChange/detailChange?id=${id}`
				// })
				if (item.hasOwnProperty("fxtp")) {
					uni.navigateTo({
						url: `/pages/detailChange/detailChange?id=${id}`
					})
				}
				if (!item.hasOwnProperty("fxtp")) {
					uni.navigateTo({
						url: `/pages/lanDetail/lanDetail`
					})
				}
				// for (var i = 0; i < this.comments.length; i++) {
				// 	if (this.comments[i].hasOwnProperty('fxtp')) {
				// 		uni.navigateTo({
				// 			url: `/pages/detailChange/detailChange?id=${id}`
				// 		})

				// 	} else {
				// 		uni.navigateTo({
				// 			url: `/pages/lanDetail/lanDetail`
				// 		})

				// 	}
				// }

			}
		}
	}
</script>

<style lang="scss">
	page {

		.red {
			color: red;
		}

		background-color: #F8F8F8;
		width: 750rpx;

		.top {
			width: 100%;
			margin-bottom: 100rpx;

			.daoread {
				font-size: 26rpx;
				padding: 0 20rpx;
				margin-top: 30rpx;
				/* #ifdef H5 */
				margin-top: 0;
				padding-top:15px ;
				/* #endif */ 
				text:nth-child(1) {
					font-weight: bold;
					margin-right: 40rpx;
					position: relative;

					.bot {
						display: block;
						width: 40rpx;
						height: 6rpx;
						border-radius: 40rpx;
						background-color: #4CD964;
						position: absolute;
						bottom: -8rpx;
						left: 6rpx;
					}
				}

				.sousuo1 {
					margin: 20rpx 0 30rpx;
					position: relative;

					.sousuo {
						width: 100%;
						height: 50rpx;
						margin: 20rpx auto 0;
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
						left: 10rpx;
						line-height: 50rpx;
						/* #endif */
						/* #ifdef MP-ALIPAY */
						position: absolute;
						left: 10rpx;
						top: 24rpx !important;
						/* #endif */
					}
				}
			}

			// 青少年

			.qingtop {
				font-size: 28rpx;
				padding: 0 20rpx;

				text:nth-child(1) {
					font-weight: bold;
					margin-right: 40rpx;
				}

				text:nth-child(2) {
					font-size: 26rpx;
					color: #666;

					.icon-zidingyi {
						font-size: 20rpx;
						font-weight: 300;
					}
				}
			}

			// 青内容
			.qingcon {
				width: 100%;
				padding: 0 20rpx;
				line-height: 42rpx;
				margin-top: 10px;

				.tit {
					font-size: 28rpx;
					color: #333333;
				}

				.people,
				.ting {
					font-size: 24rpx;
					color: #666666;
				}

				.uni-list-item__container {
					padding-left: 0;
					background-color: #F8F8F8;
				}

				.item {

					display: flex;

					.left {
						margin-right: 20rpx;

						.q-left {
							position: relative;
							width: 120rpx;
							height: 120rpx;
							background-color: #333333;
							border-radius: 50%;
							position: relative;

							.img {
								position: absolute;
								left: -14rpx;
								top: 0;
								width: 120rpx;
								height: 120rpx;
							}

							.tingshu {
								position: absolute;
								right: 26rpx;
								bottom: 8rpx;
								color: #F5F5F5;
							}
						}

					}



				}

				.huan {
					width: 710rpx;
					height: 75rpx;
					border-radius: 30rpx;
					background-color: #eee;
					text-align: center;
					line-height: 70rpx;
					font-size: 14px;
					color: #666;
					margin-top: 20rpx;

				}

			}

			.hotread {
				margin: 16rpx 0;
				font-weight: bold;
				font-size: 28rpx;
				padding: 20rpx;
			}

			// 热门导读
			.beijing::after {
				content: "";
				display: block;
				clear: both;
			}

			.beijing {
				width: 350rpx;
				height: 640rpx;
				background-color: #eee;
				border-top-right-radius: 30rpx;
				border-bottom-right-radius: 30rpx;
				padding-top: 6px;
				box-sizing: border-box;

				.scroll {
					width: 750rpx;
					display: flex;
					white-space: nowrap;
					border-radius: 30rpx;
					margin-top: 10px;

					.sitem {
						z-index: 1000;
						display: inline-block;
						height: 585rpx;
						margin-left: 20rpx;
						margin-right: 20rpx;
						width: 420rpx;
						background-color: #FFFFFF;
						border-radius: 30rpx;
						padding: 20rpx;
						box-sizing: border-box;
						box-shadow: 0 0 20rpx #E5E5E5;
						vertical-align: top;

						.bt {
							font-size: 28rpx;
						}

						.js {
							font-size: 24rpx;
							margin-top: 10rpx;
							color: #999999;
						}

						.book {
							// background-color: pink;
							display: flex;
							margin-top: 20rpx;
							line-height: 40rpx;
							height: 70px;
							vertical-align: bottom;

							image {
								width: 90rpx;
								height: 120rpx;
								margin-right: 20rpx;
							}

							.tit {
								font-size: 28rpx;
								color: #333333;
							}

							.time,
							.ting {
								font-size: 24rpx;
								color: #666666;
							}
						}
					}


				}

			}

			// 评论
			.comments {
				padding: 0 10px;

				.tou {
					display: flex;
					justify-content: space-between;
					margin-top: 10px;

					.timg {
						image {
							width: 20px;
							height: 20px;
							border-radius: 50%;
							vertical-align: middle;
							margin-right: 5px;
						}

						text {
							vertical-align: middle;
							font-size: 14px;
						}

					}

					.zan {
						font-size: 12px;

						text {
							margin-left: 3px;
						}
					}
				}

				.ping {
					font-size: 12px;
					margin: 10px 0;
					color: #333;
					line-height: 20px;
				}

				.shu {

					width: 100%;
					// height: 60px;
					padding: 8px;
					background-color: #eee;
					border-radius: 10px;
					box-sizing: border-box;


					.s-yes {
						line-height: 22px;
						display: flex;

						image {
							width: 40px;
							height: 50px;
							margin-right: 6px;

						}

						text:nth-child(1) {
							width: 280px;
							display: block;
							font-size: 12px;
							color: #333;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}

						text:nth-child(2) {
							display: block;
							width: 280px;
							font-size: 11px;
							color: #999;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}

					.s-no {

						// width: 40px;
						// height: 40px;
						// background-color: #555555;
						text {
							display: block;
							box-sizing: content-box;
							font-size: 20px;
							padding: 6px 0;
							color: #999999;
						}
					}
				}

				.shi {
					display: flex;
					justify-content: space-between;
					padding: 7px 0;

					text {
						font-size: 12px;
						color: #999;

						text {
							margin-right: 3px;
						}
					}

					border-bottom: 1px solid #E5E5E5;
				}


			}




			.pinglun {
				width: 40px;
				height: 40px;
				background-color: #3CB371;
				border-radius: 50%;
				position: fixed;
				text-align: center;
				line-height: 40px;
				color: #fff;
				right: 30px;
				bottom: 30px;
			}
		}
	}
</style>
