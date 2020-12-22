<template>
	<!-- 这是分享页面 -->
	<view class="content">
		<!-- <view style="text-indent: 2em;">
			<sunui-grand :content="desc" color="#1D82FE" bg="#fff" :clamp='6' expandText="点击展开全文(单独)" shinkText=""></sunui-grand>
		</view> -->
		<view class="top">
			<view class="t-title">
				<text>{{neirong.dgmc}}</text>
				<text>纸享读书</text>
			</view>
		</view>
		<view class="song">
			<view class="audio-wrapper">
				<audio id="myVideo" :src="neirong.ypurl" class="hidden" @timeupdate="timeupdate" ref="video" @loadedmetadata="loadedmetadata"
				 controls="false"></audio>
				 <!-- #ifdef MP-ALIPAY|MP-WEIXIN -->
				<view class="audio-number">{{timer}}</view>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view class="audio-number">00:00</view>
				<!-- #endif -->
				<!-- @change="sliderChange" -->
				<slider class="audio-slider" @change="sliderChange" @changing="sliderChanging" block-size="16" :min="0" :max="duration"
				 :value="currentTime" activeColor="#19CAAD" @touchstart="lock= true" @touchend="lock = false" />
				<view class="audio-number">{{neirong.sc}}</view>
			</view>
			<view class="audio-control-wrapper">
				<view class="iconfont icon-xunhuanbofang s">

				</view>
				<view class="iconfont icon-1_music83 s">

				</view>
				<view :class="['icon',isPlay?'icon-play--filled':'icon-pause--outline--filled']" @click="play">

				</view>
				<view class="iconfont icon-1_music82 s">

				</view>
				<view class="iconfont icon-xuanze">

				</view>

			</view>
		</view>
		<!-- 介绍 -->
		<view class="jieshao">
			<!-- #ifdef MP-WEIXIN|H5|APP-PLUS -->
			<rich-text class="fload" :class="isFload ? 'hide' : 'show'" :nodes="neirong.twhhjs"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<rich-text class="fload" :class="isFload ? 'hide' : 'show'" :nodes="htmlNodes"></rich-text>
			<!-- #endif -->
			<text v-if="isFload" class="iconfont icon-baidishuangjiantouxiangxia" @click="fload"></text>
		</view>
		<!-- 书籍信息 -->
		<view class="information">
			<view class="hotread">书籍信息</view>
			<view class="cont" v-for="item in shuji" :key="item.id">
				<view class="img">
					<!-- ${shuji[0].tp} -->
					<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.tp}`"></image>
				</view>
				<view class="jianjie">
					<text class="tit">{{item.bt}}</text>
					<text class="name">{{item.zz}}</text>
					<view class="hot">
						<text class="text"><text class="iconfont icon-huo"></text>{{item.zxrd}}</text>
						<text class="text"><text class="iconfont icon-shengji"></text>￥<text class="xian">{{item.hys}}</text></text>
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
		</view>
		<!-- 用户留言 -->
		<view class="liuyan">
			<view class="liu-top">
				<view class="hotread">用户留言</view>
				<view class="yan">写留言</view>
			</view>
			<view class="hua">
				暂无评论·快来评论吧~
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	import sunUiGrand from '../../components/other/sunui-grand/sunui-grand.vue';
	// 发请求，拿数据
	import {
		myRequestPost
	} from "@/utils/zgrequest.js"
	// 解决支付包 rich-text问题
	import parse from "@/utils/htmlparser.js"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				id: "",
				page: '',
				neirong: {},
				shuji: [],
				storage: [],
				isFload: true,
				flag: false,
				sflag: false,
				word: "收藏",
				jia: "加书包",
				lock: false, // 锁
				status: 1, // 1暂停 2播放
				currentTime: 0, //当前进度
				duration: 100, // 总进度
				videoContext: '',
				isPlay: true,
				htmlNodes: [],
				isShu: '',
				ahah: []
			}

		},
		components: {
			'sunui-grand': sunUiGrand
		},
		computed: {
			timer() {
				return calcTimer(this.currentTime)
			},
			...mapState({
				carts: 'carts'
			}),
			...mapState({
				bao:'bao'
			})
		},
		created() {
			 // #ifdef MP-ALIPAY|MP-WEIXIN
			this.audioContext = uni.createAudioContext('myVideo')
			//#endif
			 // #ifdef H5
			this.audioContext = uni.createInnerAudioContext('myVideo')
			//#endif
		},
		onLoad(options) {
			this.id = options.id
			this.page = options.page
			console.log(this.id, this.page);
			this.getInfo();
			this.getShu();
		},
		methods: {
			...mapMutations({
				addCarts: 'addCarts'
			}),
			...mapMutations({
				addBao:'addBao'
			}),
			...mapMutations({
				clearCarts: "clearCarts"	
			}),
			...mapMutations({
				clearBao:'clearBao'
			}),
			play() {
				if (this.isPlay) {
					// #ifdef MP-ALIPAY|MP-WEIXIN
					this.audioContext.play()
					// #endif
				} else {
					// #ifdef MP-ALIPAY|MP-WEIXIN
					this.audioContext.pause()
					// #endif
				}
				this.isPlay = !this.isPlay
			},
			// 更新进度条
			timeupdate(event) {
				if (this.lock) return; // 锁
				var currentTime, duration;
				if (event.detail.detail) {
					currentTime = event.detail.detail.currentTime
					duration = event.detail.detail.duration
				} else {
					currentTime = event.detail.currentTime
					duration = event.detail.duration
				}
				this.currentTime = currentTime
				this.duration = duration
			},

			// 拖动进度条
			sliderChange(data) {
				// #ifdef MP-ALIPAY|MP-WEIXIN
				this.audioContext.seek(data.detail.value)
				// #endif
			},

			//拖动中
			sliderChanging(data) {
				this.currentTime = data.detail.value
			},

			// 视频加载完成
			loadedmetadata(data) {
				this.duration = data.detail.duration
			}

			,
			async getInfo() {
				let result = await myRequestPost("/portal.php", {
					resid: 'DaoduAction.ddtslist',
					yhid: '3d93fe2e02234cc9a656b8af0bb11383',
					page: this.page,
					city: '临汾市',
					adcode: 1410
				})
				for (var i = 0; i < result.data.length; i++) {
					if (result.data[i].id == this.id) {
						this.neirong = result.data[i];
						break;
					}
				}
				console.log(this.neirong, "xxxx");
				
				if(this.neirong.twhhjs!= null){
				    this.htmlNodes = parse(this.neirong.twhhjs)
				}
			},
			async getShu() {
				let result = await myRequestPost("/portal.php", {
					resid: 'ZsfxAction.jptj',
					yhid: '651f2613a599426dad75b4b7cbb9395e',
					lmdgid: this.id,
					city: '临汾市',
					adcode: 1410
				})
				this.shuji = result.data.data

				for (var i = 0; i < this.shuji.length; i++) {
					for (var j = 0; j < this.carts.length; j++) {
						if (this.shuji[i].id == this.carts[j].id) {
							this.shuji[i].sc = true
						}
					}
				}
				// 加书包
				for (var i = 0; i < this.shuji.length; i++) {
					for (var j = 0; j < this.bao.length; j++) {
						if (this.shuji[i].id == this.bao[j].id) {
							this.shuji[i].sb = true
						}
					}
				}
				console.log(this.shuji, "dsdsd");
			},
			fload() {
				this.isFload = !this.isFload;
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
						// uni.setStorageSync("shuji", this.shuji)
					}
				}
				console.log(id, shu, "xxxxxx");
			},
			baobao(id,shu) {
				for (var i = 0; i < this.shuji.length; i++) {
					if (id == this.shuji[i].id) {
						var shu = this.shuji[i]
						if (this.shuji[i].sb) {
							this.clearBao(shu)
						} else {
							this.addBao(shu)
						}
				
						this.shuji[i].sb = !this.shuji[i].sb
						// uni.setStorageSync("shuji", this.shuji)
					}
				}
				console.log(id, shu, "shubaoshubao");
			}
		}
	}

	function calcTimer(timer) {
		if (timer === 0 || typeof timer !== 'number') {
			return '00:00'
		}
		let mm = Math.floor(timer / 60)
		let ss = Math.floor(timer % 60)
		if (mm < 10) {
			mm = '0' + mm
		}
		if (ss < 10) {
			ss = '0' + ss
		}
		return mm + ':' + ss
	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.red {
		color: red;
	}

	audio {
		display: none;
	}

	.content {
		width: 750rpx;
		padding: 0 10px;
		box-sizing: border-box;

		.hotread {
			font-weight: bold;
			font-size: 14px;
			margin: 10px 0;
		}

		.top {
			width: 100%;
			height: 160px;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			.t-title {
				width: 480rpx;
				height: 60px;
				margin: 0 auto;
				// background-color: green;
				border-bottom: 1px solid #F5F5F5;
				text-align: center;
				display: flex;
				flex-direction: column;

				text:nth-child(1) {
					font-size: 14px;
					letter-spacing: 2px;
					font-weight: bold;
				}

				text:nth-child(2) {
					font-size: 13px;
					width: 60px;
					background-color: #F4606C;
					margin: 0 auto;
					padding: 4px 8px;
					color: #fff;
					letter-spacing: 1px;
					margin-bottom: 15px;
					margin-top: 3px;
				}
			}
		}

		.jieshao {
			width: 100%;
			position: relative;

			.fload {
				width: 100%;
				height: auto;
				display: -webkit-box;
				word-break: break-all;
				/* #ifdef MP-WEIXIN|H5|APP-PLUS */
				-webkit-box-orient: vertical;
				/* #endif */
				/* 要显示多少行就改变line-clamp的数据,此处折叠起来显示一行*/
				-webkit-line-clamp: 8;
				overflow: hidden;
				text-overflow: ellipsis;
				// background-color: #F5F5F5;
			}

			.hide {
				display: -webkit-box;
			}

			.show {
				display: block;
			}

			.icon-baidishuangjiantouxiangxia {
				width: 100%;
				height: 50px;
				text-align: center;
				line-height: 65px;
				color: #19CAAD;
				background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #f7f7f7);
				position: absolute;
				bottom: 0;
			}
		}

		// 银行活跃
		.song {
			width: 100%;
			height: 100px;
			background-color: #F5F5F5;
			margin-top: 20px;
			overflow: hidden;


			.audio-wrapper {
				display: flex;
				align-items: center;
				margin: 15px 0 0px;
				box-sizing: border-box;
				padding: 0 10px;


				.audio-number {
					font-size: 14px;
					line-height: 1;
					margin-right: 10rpx;
					color: #19CAAD;
				}

				.audio-slider {
					flex: 1;
					margin: 0 10px;
				}
			}

			.audio-control-wrapper {
				margin-top: 15px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				font-family: "iconfont" !important;
				font-size: 24px;
				color: #19CAAD;

				.s {
					font-size: 24px;
				}

				.icon-play--filled,
				.icon-pause--outline--filled {
					font-size: 34px;
				}


				.icon-xuanze {
					font-size: 16px;
				}
			}
		}

		.information {
			width: 100%;
			padding-bottom: 5px;
			border-top: 5px solid #F5F5F5;
			border-bottom: 5px solid #F5F5F5;

			.cont {
				display: flex;
				justify-content: space-between;
				margin-bottom: 5px;

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

		}

		.liuyan {
			.liu-top {
				display: flex;
				justify-content: space-between;

				.yan {
					background-color: #19CAAD;
					padding: 0 20px;
					height: 30px;
					line-height: 30px;
					margin-top: 5px;
					border-radius: 15px;
					font-size: 12px;
					color: #fff;
				}
			}

			.hua {

				width: 300px;
				margin: 10px auto 60px;
				border-top: 1px dashed #eee;
				text-align: center;
				padding-top: 20px;
				font-size: 16px;
				color: #666666;
			}
		}
	}
</style>
