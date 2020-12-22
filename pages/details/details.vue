<template>
	<view class="details">
		<scroll-view scroll-y="">
			<!-- 头部 -->
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
					<button type="primary" class="fxbtn" style="border: none;" open-type="share">
						<text class="iconfont icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></text>
					</button>
					<text class="iconfont iconicon-" :class="list.lx=='2CT07MLO'?'show':''" ></text>
				</view>
			</view>
			<!-- 出版信息 -->
			<view class="xx">
				<text class="sm">{{list.sm}}</text>
				<text class="zz">{{list.zz}}</text>
				<text class="cbs">{{list.cbs}}/{{list.cbrq}}</text>
				<view class="sheng">
					<text class="iconfont icon-huo" style="color: red;" ><text>{{list.zxrd}}</text></text>
					<text class="iconfont icon-sheng3" style="color: orange;text-decoration:line-through;"><text>￥{{list.yj}}</text></text>
				</view>
			</view>
			<!-- 简介 书友圈 -->
			<view class="jjsyq" :class="gao>=380?'xvanting':''">
				<button @click="dianji" class="jjbtn"><text class="jj" :class="flag?'dianji':''">简介</text></button>
				<button @click="dianji1" class="jjbtn"><text class="syq" :class="flag?'':'dianji'">书友圈</text></button>
			</view>
			<!-- 作者简介，书籍介绍 -->
			<view class="zznrtwjj jianting1">
				<!-- #ifdef MP-WEIXIN|H5|APP-PLUS -->
				<rich-text class="tjy" :nodes="list.zznrtwjj"></rich-text>
				<!-- #endif -->
				<text :class="list.zznrtwjj!=''||list.zzjs==''?'cang':'sh'"><text class="header">作者介绍</text>\n<text class="bo">{{list.zzjs}}\n\n</text></text>
				<text :class="list.zznrtwjj!=''||list.nrjj==''?'cang':'sh'"><text class="header">书籍介绍</text>\n<text class="bo">{{list.nrjj}}\n\n</text></text>
				<!-- #ifdef MP-ALIPAY -->
				<rich-text class="tjy" :nodes="htmlNodes"></rich-text>
				<!-- #endif -->
			</view>
			<!-- 书友圈 -->
			<view class="syqpl jianting2">
				<text class="header">书友圈</text>
				<view class="sypl" v-for="item in comments" :key="item.id">
					<image :src="`{{item.tx}}`" mode="" class="tx"></image>
					<view class="xinxi">
						<text class="username">{{item._cuser}}</text>
						<text class="yhly">{{item.yhly}}</text>
						<text class="cdate">{{item.cdate}}</text>
					</view>
					<!-- 评论点赞 -->
					<view class="dzhf">
						<view class="dianzan" @click="dianzan(item.dzs,item.id,item.zt)" v-model="item.dzs" :class="item.zt==1?'':'red'">
							<text>{{item.dzs}}</text>
							<text class="iconfont iconiconfontzhizuobiaozhun44"></text>
						</view>
						<text class="iconfont iconmore"></text>
					</view>
				</view>
				<input type="text" value=""  confirm-type="string" placeholder="请输入评论" v-model="value" />
				<!-- <button type="primary" class="btn" size="mini" form-type="submit" open-type="getUserInfo" @getuserinfo="getuserinfo">发送</button> -->
			</view>

			<!-- 精品推荐 -->
			<view class="tuijian">
				<text class="tj-title">精品推荐</text>
				<view class="tjsj-all">
					<view class="tjsj-one" v-for="item2 in list2.data" :key="item2.id" @click="godetails(item2)">
						<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item2.tp}`" mode=""></image>
						<text class="bookname">{{item2.bt}}</text>
					</view>
				</view>
			</view>


			<!-- 底部 -->
			<view class="footer">
				<view class="shoucang" @click="shoucang(list.id)" :class="flag1?'red':''">
					<text class="iconfont icon-shoucang sctb"></text>
					<text class="scz">收藏</text>
				</view>
				<view class="jia">
					<text class="sbs" @click="gobao">{{bao.length}}本</text>
					<text class="jrsb" @click="baobao(list.id)">加入书包</text>
				</view>
				<view class="jieyue" @click="govip">
					<text class="iconfont icon-gouwuche_on ljjetb"></text>
					<text class="ljjyz">立即借阅</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import sunUiGrand from '../../components/other/sunui-grand/sunui-grand.vue';
	import parse from "@/utils/htmlparser.js";
	import {
		myRequestPost
	} from '@/utils/zgrequest.js';
	import {
		mapState
	} from 'vuex';
	import {
		mapMutations
	} from 'vuex';
	// import store from "../../store/index.js"
	export default {
		data() {
			return {
				list: {},
				comments: [],
				item1: [],
				list2: [],
				htmlNodes: [],
				flag: true,
				flag1: "",
				flag2: "",
				gao: "",
				value: '',
				cont: {},
			}
		},
		components: {
			'sunui-grand': sunUiGrand
		},
		computed: {
			...mapState({
				carts: 'carts',
			}),
			...mapState({
				bao: 'bao'
			})
		},

		onLoad(options) {
			/* options是接收的上一个页面传递的信息 */
			this.item1 = options.id;
			console.log(this.item1, "钱钱钱钱钱");
			/* 调用函数 */
			this.getSwiper();

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
			/* 获取数据库信息 */
			async getSwiper() {
				let result = await myRequestPost("/portal.php", {
					resid: 'QueryBookAction.qmbook',
					rowid: this.item1,
					yhid: 'c935e06c19dd4a6cb5dcc500d3af21dd'
				})

				if (result != 0) {
					this.list = result.data
					console.log(this.list.zznrtwjj)
					/* ，添加符文本中图片的域名并修改图片富文本样式 */
					this.list.zznrtwjj = this.list.zznrtwjj.replace(/\<img src="/gi,
						'<img style="max-width: 100%;" src="https://uptownlet.com');
					this.htmlNodes = parse(this.list.zznrtwjj)
					console.log(this.list, "11111")
				}
				let result1 = await myRequestPost("/portal.php", {
					resid: 'LyplAction.lyplList',
					tid: this.item1,
					yhid: 'c935e06c19dd4a6cb5dcc500d3af21dd',
					openid: 'ouJlZ5CQg49u6u6ODEcn28BckzmU',
					pllx: '1X7FJT1B',
					yhid: 'c935e06c19dd4a6cb5dcc500d3af21dd'
				})


				if (result1 != 0) {
					this.comments = result1.data
					// console.log(this.comments, "33333")

				}
				let result2 = await myRequestPost("/portal.php", {
					resid: 'SbAction.jptj',
					lx: this.list.lx,
					tsid: '3e131263d90a440b97c2f198443c25af'
				})
				if (result2 != 0) {
					this.list2 = result2.data
					// console.log(this.list2, 5555555)
					for (var i = 0; i < this.carts.length; i++) {
						if (this.list.id === this.carts[i].id) {
							this.flag1 = true;
							break;
						} else {
							this.flag1 = false;
						}
					};
					for (var i = 0; i < this.bao.length; i++) {
						if (this.list.id === this.bao[i].id) {
							this.flag2 = true;
						} else {
							this.flag2 = false;
						}
					}
				}
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
				for (var i = 0; i < this.comments.length; i++) {
					if (id == this.comments[i].id) {
						if (this.comments[i].zt == 1) {
							this.comments[i].zt = 0
							this.comments[i].dzs++
						} else {
							this.comments[i].zt = 1
							this.comments[i].dzs--
						}
					}
				}
				uni.setStorageSync("comments", this.comments)

				this.isShua = true
				this.comments.flag = true
				uni.setStorageSync("isShua", this.isShua)
			},
			/* 精品书推荐点击事件 */
			godetails(item2) {
				uni.navigateTo({
					url: `../details/details?id=${item2.id}`
				})
			},

			/* 收藏 */
			shoucang(id, shu) {
				var shu = {
					id: this.list.id,
					bt: this.list.sm,
					clx: this.list.zz,
					tp: this.list.fm,
					zy: this.list.fxdbt,
					data: {
						// tp: this.list.fm,
						ly: this.list.zz
					}
				}
				if (this.flag1 == false) {
					this.addCarts(shu)
				} else {
					this.clearCarts(shu)
				}

				// uni.setStorageSync()
				this.flag1 = !this.flag1
			},
			/* 前往书包 */
			gobao() {
				uni.navigateTo({
					url: '/tabBa/pages/bag/bag'
				})
			},
			/* 前往会员 */
			govip() {
				uni.navigateTo({
					url: '/pages/member/member'
				})
			},
			/* 加入书包 */
			baobao(id, shu) {
				var shu = {
					id: this.list.id,
					bt: this.list.sm,
					clx: this.list.zz,
					tp: this.list.fm,
					zy: this.list.fxdbt,
					data: {
						tp: this.list.fm,
						ly: this.list.zz
					}
				}
				if (this.flag2 == false) {
					this.addBao(shu)
				} else {
					this.clearBao(shu)
				}
				this.flag2 = !this.flag2
			}
		},
	}
</script>
<style lang="less">
		@import '../../static/icon/iconfont.css';
	.details {
		position: relative;

		.head {
			width: 100%;
			height: 500rpx;
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

			/* 书籍图片 */
			.center {
				flex: 1;
				text-align: center;

				image {
					width: 300rpx;
				}
			}

			/* 分享，mp3 */
			.right {
				vertical-align: top;
				width: 100rpx;
				vertical-align: top;
				margin-top: 20px;
				color: #92E6D8;

				.fxbtn {
					background-color: #FFFFFF !important;
					margin-left: -5px;
					width: 80rpx;
					height: 80rpx;
					line-height: 80rpx;
					padding: 0;
				}

				.fxbtn::after {
					border: none !important;
				}

				.fxbtn>button {
					border: none !important;
				}

				.iconfont {
					margin: 0;

					font-size: 1.5em;
					color: #92E6D8;
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

		.xx {
			display: flex;
			flex-direction: column;
			text-align: center;

			.sm {
				font-weight: bold;
				margin-bottom: 10px;
			}

			.zz {
				color: #ABABAB;
				margin-bottom: 10rpx;
				font-size: 14px;
			}

			.cbs {
				color: #ABABAB;
				margin-bottom: 10rpx;
				font-size: 14px;
			}

			.iconfont {
				margin-right: 20px;
				font-size: 13px;
			}

			.iconhuo {
				color: rgb(239, 115, 32);

				text {
					color: #3B4144;
					font-size: 0.8em;
				}
			}

			.iconsheng {
				color: rgb(247, 182, 31);

				text {
					text-decoration: line-through;
					color: #3B4144;
					font-size: 0.8em;
				}
			}
		}

		.jjsyq {
			width: 100%;
			margin-bottom: 20px;
			background-color: #FFFFFF;

			.jjbtn::after {
				border: none !important;
			}

			.jjbtn>button {
				border: none !important;
			}

			.dianji {
				border-bottom: 1px solid rgb(25, 202, 173);
				color: rgb(25, 202, 173);
			}

			/* 简介，书友圈按钮 */
			button {
				width: 50%;
				border: 0;
				display: inline-block;
				background-color: #FFFFFF;
				margin-top: 10px;
				opacity: 0.5;
				font-size: 15px;
				font-weight: bold;
				border-bottom: 1px solid #19CAAD;
				text {
					padding: 10px;
					
				}
			}
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

		.zznrtwjj {
			padding: 10px;
			color:#858585 ;
			font-size: 14px;
			border-bottom: 4px solid #F8F9FA;
			image{
				width: 100%;
			}
			.cang {
				display: none;
			}

			.sh {
				.header {
					font-weight: bold;
				}

				.bo {
					color: #C0C0C0;
				}
			}
		}

		/* 书友圈评论 */
		.syqpl {
			display: flex;
			flex-direction: column;
			padding-bottom: 50rpx;
			margin-bottom: 50rpx;
			border-bottom: 4px solid #F8F9FA;
			.header {
				font-weight: bold;
				margin: 20px;
			}

			/* 书友评论 */
			.sypl {
				display: flex;
				justify-content: space-between;
				height: 80px;
				padding-top: 10px;
				padding-right: 5px;
				margin-bottom: 30px;

				/* 评论头像 */
				.tx {
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}

				/*评论信息  */
				.xinxi {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				/* 点赞 */
				.dzhf {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					text-align: center;

					.red {
						color: red;
					}

					.iconfont {
						font-size: 1.5em;
					}
				}
			}

			/* 评论输入框 */
			input {
				width: 610rpx;
				height: 30px;
				line-height: 30px;
				padding-left: 20px;
				padding-right: 20px;
				background-color: rgb(238, 238, 238);
				border-radius: 20px;
				margin-bottom: 20px;
				margin-left: 15px;
			}

			/*评论提交按钮 */
			.btn {
				background-color: rgb(25, 202, 173);
			}
		}

		/* 精品书推荐 */
		.tuijian {
			height: 300px;
			margin:0rpx 20rpx 200rpx 20rpx;
			.tj-title{
				font-weight: bold;
				margin-bottom: 160rpx;
			}
			.tjsj-all {
				
				display: flex;
				justify-content: space-around;

				.tjsj-one {
					padding: 5px;
					flex: 1;
					
					image {
						width: 80%;
						height: 180rpx;
						display: block;
					}
					.bookname{
						margin-top: 10rpx;
						font-size: 28rpx;
						color:#000000 ;
						text-overflow: ellipsis;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						
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

			/* 收藏 */

			.shoucang {
				margin-left: 20px;
				text-align: center;

				.sctb {
					display: block;
					font-size: 1.5em;

				}
			}

			.red {
				color: red;
			}

			/* 加入书包 */
			.jia {
				background-color: rgb(25, 202, 173);
				color: #ffffff;
				padding: 0 10px;
				text-align: center;
				border-radius: 20px;
				margin-bottom: 10px;
				line-height: 38px;

				.sbs {
					padding: 10px 20px;
					border-right: 1px solid #ffffff;
				}

				.jrsb {
					padding: 10px 30px;
				}
			}

			/* 立即借阅 */
			.jieyue {
				margin-right: 20px;
				text-align: center;

				.ljjetb {
					display: block;
					font-size: 1.5em;

				}
			}
		}
	}
</style>
