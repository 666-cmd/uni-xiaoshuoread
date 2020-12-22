<template>
	<view>
		<view class="head">
			<!-- 可借/不可借 -->
			<view class="left">
				<text :class="item1.kjsl==0?'bukejie':'kejie'">{{item1.kjsl==0?'已借出':'可借'}}</text>
			</view>
			<!-- 图片 -->
			<view class="center">
				<image :src="`https://uptownlet.com/appendix/image.jspx?id=${list.fm}`" mode="widthFix"></image>
			</view>
			<!-- 分享/MP3 -->
			<view class="right">
				<text class="iconfont icon-zhuanfa"></text>
				<!-- <text class="iconfont iconicon-" :class="list.lx=='2CT07MLO'?'show':''"></text> -->
			</view>
		</view>
		<!-- 出版信息 -->
		<view class="xx">
			<text class="sm">{{list.sm}}</text>
			<text class="zz">{{list.zz}}</text>
			<text class="cbs">{{list.cbs}}/{{list.cbrq}}</text>
			<view class="hot">
				<text class="text"><text class="iconfont icon-huo"></text>{{list.zxrd}}</text>
				<text class="text"><text class="iconfont icon-shengji"></text>￥<text class="xian">{{list.yj}}</text></text>
			</view>
		</view>
		<!-- 简介 -->
		<view class="jjsyq" :class="gao>=380?'xvanting':''">
			<text @click="dianji"><text class="jj" :class="flag?'dianji':''">简介</text></text>
			<text @click="dianji1"><text class="syq" :class="flag?'':'dianji'">书友圈</text></text>
		</view>
		<!-- 简介和评论 -->
		<view class="zznrtwjj jianting1">
			<!-- #ifdef MP-WEIXIN|H5|APP-PLUS -->
			<rich-text class="tjy" :nodes="content"></rich-text>
			<!-- #endif -->
			<text :class="list.zznrtwjj!=''||list.zzjs==''?'cang':'sh'">
				<text class="bo">{{list.zzjs}}</text>
			</text>
			<text id="header" :class="list.zznrtwjj!=''||list.nrjj==''?'cang':'sh'">书籍介绍</text>
			<text :class="list.zznrtwjj!=''||list.nrjj==''?'cang':'sh'">
				<text class="bo">{{list.nrjj}}</text>
			</text>
			<!-- #ifdef MP-ALIPAY -->
			<rich-text class="tjy" :nodes="htmlNodes"></rich-text>
			<!-- #endif -->
		</view>
		<!-- 书有权 -->
		<view class="syqpl jianting2">
			<view id="header">书友圈</view>
			<view class="inp">
				<input placeholder="请输入评论" />
			</view>
			<view class="comments" v-for="item in commentsDetail" :key="item.id">
				<view class="tou">
					<view class="timg">
						<image :src="item.tx" v-if="item.tx"></image>
						<image src="../../static/2345_image_file_copy_1.jpg" v-else></image>
					</view>
					<view class="cent">
						<view class="name">
							<text>{{item._cuser}}</text>
						</view>
						<view class="ping">{{item.yhly}}</view>
						<view class="shi">
							<text>{{item.cdate}}</text>
						</view>
					</view>
					<view class="dzhf">
						<text class="zan" @click="dianzan(item.dzs,item.id)" v-model="item.dzs" :class="item.zt==0?'red':''">{{item.dzs}}
							<text class="iconfont icon-zan"></text>
						</text>
						<text class="zan"><text class="iconfont icon-pinglun"></text>评论</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tuijian">
			<text id="header">精品推荐</text>
			<view class="tjsj-all">
				<view class="tjsj-one" v-for="item2 in list2" :key="item2.id" @click="godetails(item2)">
					<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item2.tp}`"></image>
					<text>{{item2.bt}}</text>
				</view>
			</view>
		</view>


		<!-- 底部 -->
		<view class="footer">
			<button>
				可借提醒
			</button>
		</view>
	</view>
</template>

<script>
	// 解决富文本图片太大
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from "@/utils/htmlparser.js"
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				list: {},
				commentsDetail: [],
				item1: [],
				list2: [],
				htmlNodes: [],
				flag: true,
				gao: 0,
				value: '',
				cont: {},
				content:[]
			}
		},
		onLoad(options) {
			/* options是接收的上一个页面传递的信息 */
			this.item1 = options;
			/* 调用函数 */
			console.log(options.id, "-------------");
			this.getSwiper(options);
		},
		methods: {

			/* 获取数据库信息 */
			async getSwiper(options) {
				let result = await myRequestPost("/portal.php", {
					resid: "QueryBookAction.qmbook",
					rowid: options.id,
					yhid: "c935e06c19dd4a6cb5dcc500d3af21dd"
				})
				if (result != 0) {
					this.list = result.data
					// 拿到的内容为 我们 需要渲染的 富文本内容
					// 处理富文本 图片过大
					this.content = formatRichText(this.list.zznrtwjj)
					console.log(this.content, "ssssssss");
					this.htmlNodes = parse(this.content)
				}
				console.log(this.list ,"ssacsdcs");
				let result1 = await myRequestPost(
					"/portal.php", {
						resid: "LyplAction.lyplList",
						tid: options.id,
						openid: "ouJlZ5CQg49u6u6ODEcn28BckzmU",
						pllx: "1X7FJT1B",
						yhid: "c935e06c19dd4a6cb5dcc500d3af21dd"
					}
				)
				if (result1 != 0) {
					this.commentsDetail = result1.data
				}
				console.log(this.commentsDetail,"\\\\");
				
				let result2 = await myRequestPost(
					"/portal.php", {
						resid: "SbAction.jptj",
						lx: "2M8QUIME",
						tsid: "3e131263d90a440b97c2f198443c25af"
					}
				)
				if (result2 != 0) {
					this.list2 = result2.data.data
				}
				// console.log(this.list, "11111")
				console.log(this.list2, "124465768i7")
				// console.log(this.list2, 5555555)
			},
			/* 简介点击事件 */
			dianji() {
				this.flag = true;
				uni.createSelectorQuery().select(".jianting1").boundingClientRect(function(res) {
					console.log("标签获取====>", typeof(res.top))
					uni.pageScrollTo({
						scrollTop: res.top,
						duration: 300
					});
				}).exec()
			},
			/* 书友圈点击事件 */
			dianji1() {
				this.flag = false;
				uni.createSelectorQuery().select(".jianting2").boundingClientRect(function(res) {
					uni.pageScrollTo({
						scrollTop: res.top,
						duration: 300
					});
				}).exec()
			},
			/* 滚动条监视 */
			onPageScroll(e) {
				// console.log(e.scrollTop,22222); //距离页面顶部距离
				this.gao = e.scrollTop
				uni.createSelectorQuery().select(".jianting2").boundingClientRect((res) => {
					// console.log(res.top,11111)
					if (e.scrollTop >= res.top) {
						this.flag = false;
					} else {
						this.flag = true;
					}
				}).exec()

			},
			/* 点赞 */
			dianzan(dzs, id, zt) {
				for (var i = 0; i < this.commentsDetail.length; i++) {
					if (id == this.commentsDetail[i].id) {
						if (this.commentsDetail[i].zt == 1) {
							this.commentsDetail[i].zt = 0
							this.commentsDetail[i].dzs++
						} else {
							this.commentsDetail[i].zt = 1
							this.commentsDetail[i].dzs--
						}
					}
				}
				uni.setStorageSync("commentsDetail", this.commentsDetail)


				this.commentsDetail.flag = true

			},
			/* 精品书推荐点击事件 */
			godetails(item2) {
				uni.navigateTo({
					url: `/pages/detailChange/detailChange?id=${item2.id}`
				})
			},
			/* 发表评论 */
			getuserinfo: function() {
				// wx登录
				let that = this
				uni.login({
					success(res) {
						if (res.code) {
							//发起网络请求
							var code = res.code
							// 获取微信用户信息
							uni.getUserInfo({
								success: (res) => {
									that.cont = res.userInfo
									console.log(that.cont)
								},
								fail: res => {

								}
							})

						} else {

						}
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	#header {
		font-weight: bold;
		font-size: 28rpx;
		padding: 10px 0;
		box-sizing: border-box;
	}

	.red {
		color: red;
	}

	.head {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.left {
			width: 150rpx;
			vertical-align: top;
			margin-top: 20px;

			/* 可借不可借 */
			.kejie {
				display: block;
				width: 150rpx;
				color: #92E6D8;
				border: 1px solid #92E6D8;
				border-radius: 15px;
				margin-left: -15px;
				margin-bottom: 5px;
				padding: 2px;
				text-align: center;
			}

			.bukejie {
				display: block;
				width: 150rpx;
				text-align: center;
				color: pink;
				border: 1px solid pink;
				border-radius: 15px;
				margin-left: -15px;
				margin-bottom: 5px;
				padding: 2px;
			}
		}

		.center {
			// width: 100%;
			margin: 0 auto;
			image {
				width: 150px;
				margin-left: 0 auto;
			}
		}

		.right {

			vertical-align: top;
			width: 100rpx;
			vertical-align: top;
			margin-top: 20px;
			color: #92E6D8;

			.iconfont {
				font-size: 20px;
			}

			.iconicon- {
				display: block;
				margin-top: 10px;
				margin-left: -5px;
				font-size: 2em;
				display: none;
			}

			.show {
				display: block;
			}

		}
	}

	// 出版信息
	.xx {
		display: flex;
		flex-direction: column;
		text-align: center;
        margin-top: 5px;
		.sm {
			font-size: 15px;
			font-weight: 500;
			padding: 0 15px;
		}

		.zz,
		.cbs {
			font-size: 12px;
			color: #666;
			margin-top: 5px;
		}

		.hot {
			margin-top: 8px;
			font-size: 11px;
			color: #666666;

			.xian {
				text-decoration: line-through
			}

			.icon-huo {
				color: #ef7302;
				font-size: 10px;
				margin-right: 5px;
			}

			.icon-shengji {
				color: #FBD785;
				font-size: 10px;
				margin-left: 13px;
			}
		}
	}

	.jjsyq {
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
		display: flex;
		justify-content: space-around;
		font-size: 14px;

		text {
			padding: 10px 0;
		}

		.dianji {
			border-bottom: 1px solid rgb(25, 202, 173);
			color: rgb(25, 202, 173);
		}




		/* 简介、书友圈悬停 */
		.xvanting {
			position: fixed;
			top: 0;
			z-index: 100;

			button {
				margin-top: 0;
			}
		}
	}

	.zznrtwjj {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		// background-color: pink;
		display: flex;
		flex-direction: column;

		text {
			color: #666;
			font-size: 14px;
			line-height: 22px;
		}

		.cang {
			display: none;
		}

		.sh {
			.bo {
				color: #666;
			}
		}
	}

	// 书友圈
	.syqpl {
		padding: 10px;
		box-sizing: border-box;
		border-top: 5px solid #F5F5F5;
		border-bottom: 5px solid #F5F5F5;

		.inp {
			width: 300px;
			border-bottom: 1px solid #e5e5e5;
			padding-bottom: 15px;
			margin: 0 auto;
			margin-bottom: 10px;

			input {
				width: 280px;
				margin: 0 auto;
				border: 1px solid #eee;
				background-color: #e5e5e5;
				height: 30px;
				border-radius: 20px;
				line-height: 30px;
				font-size: 14px;
				box-sizing: border-box;
				padding-left: 10px;
			}
		}

		.comments {

			border-bottom: 1px solid #E5E5E5;
			margin-top: 10px;

			.tou {
				display: flex;
				justify-content: space-between;

				.timg {
					image {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						vertical-align: middle;
						margin-right: 5px;
					}
				}

				.dzhf {
					padding: 5px 0;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.zan {
						font-size: 12px;
					}

					.icon-zan {
						margin-left: 4px;
					}

					.icon-pinglun {
						margin-right: 2px;
					}
				}
			}

			.cent {
				width: 250px;
				background-clip: pink;

				.ping {
					font-size: 12px;
					margin: 10px 0;
					color: #333;

				}

				.name {
					font-size: 14px;
					font-weight: 500;
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


				}

			}

		}
	}

	/* 精品书推荐 */
	.tuijian {
		
		padding: 10px 10px 100px;
		box-sizing: border-box;
		/* #ifdef H5 */
		margin-bottom: 100px;
		/* #endif */
		.tjsj-all {
			display: flex;
			justify-content: space-between;
            height: 200px;
			.tjsj-one {
				width: 105px;
				margin-top: 5px;

				image {
					width: 100%;
					height: 120px;
					display: block;
					border-radius: 10px;
				}

				text {
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; //控制行数
					overflow: hidden;
					font-size: 14px;
					line-height: 21px;
					margin-top: 5px;
				}
			}
		}
	}

	// 足部
	.footer {
		width: 100%;
		display: flex;
		z-index: 100;
		padding-top: 10px;
		justify-content: space-between;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;

		button {
			width: 340px;
			color: #fff;
			height: 30px;
			line-height: 30px;
			background-color: #4CD964;
			border: none;
			outline: none;
			border-radius: 20px;
			color: #fff;
			font-size: 14px;
			margin-bottom: 5px;
			// margin-top: 10px;
			/* #ifdef MP-ALIPAY */
			margin-left: 17px;
			/* #endif */
		}

	}
</style>
