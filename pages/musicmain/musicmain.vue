<template>
	<view>
		<view class="content">
			<image :src="`https://imagev2.xmcdn.com/${cover}`" class="img" mode=""></image>
			<view class="c-v">
				<text class="c-t1">{{title}}</text>
				<text class="c-t2">{{customTitle}}</text>
				<view class="bb">
					<button plain="true" @click="shoucang" class="btn c-b1" type="default" size="mini">✚订阅</button>
					<button open-type="share" type="default" size="mini" class="c-b2">
						<text class="iconfont icon-wechat"></text>
						<text style="padding-left: 19px;">分享</text>
					</button>
				</view>
			</view>
		</view>
		<view class="list">
			<view id="l-content" v-for="(uu,ii) in arr2" :key="ii" :class="{'active':active==ii}">
				<view class="l-top">
					<text class="l-t1" space="true" decode="true">{{ ii+1 }}</text>
					<text class="main">{{uu.trackInfo.title}}</text>
				</view>
				<view class="l-bottom">
					<text @click="pplly(uu,ii)"  class="iconfont" :class="['iconfont',uu.trackInfo.isPaid?'icon-zhengzaibofang':'icon-bofang',{'active':active==ii}]"></text>
					<text class="iconfont icon-kefu1"></text>
					<text style="color: #bbb;margin-right: 20px;">{{uu.trackInfo.duration}}</text>
					<text class="iconfont icon-shijian"></text>
					<text style="color: #bbb;">{{uu.trackInfo.createdAt}}</text>
				</view>
			</view>
		</view>
		<view>
			<view>
				<audio id="myAudio" :src="`${current.src}`" :poster="current.poster" :name="current.name" :author="current.author"
				 controls></audio>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		myRequestGet
	} from '@/utils/musicpage.js'
	export default {
		onReady: function(e) {
			
			// #ifdef MP-ALIPAY|MP-WEIXIN
			this.audioCtx = uni.createAudioContext('myAudio')
			//#endif
			 // #ifdef H5
			this.audioCtx = uni.createInnerAudioContext('myVideo')
			//#endif
		},
		data() {
			return {
				current: {
					poster: 'https://cdn.nlark.com/yuque/0/2020/jpeg/2545516/1608098409357-86b68b6f-8a85-442e-a92b-074746974101.jpeg',
					name: '点击播放按钮欣赏节目',
					author: '书语——诉你所抒',
					src: '',
				},
				flag: true,
				active: 9999999999999999999999999999,
				musicid: '',
				cover: '',
				title: '',
				customTitle: '',
				arr2: [],
				acc: 99999999999999999999999999999999999,
				index: 99999999999999999999999999999999,
			}
		},
		methods: {
			pplly(uu, ii) {
				if (this.acc != ii) {
					for (var i = 0; i < this.arr2.length; i++) {
						this.arr2[i].trackInfo.isPaid = false
					}
				}
				uu.trackInfo.isPaid = !uu.trackInfo.isPaid
				console.log(uu.trackInfo.isPaid)
				if (uu.trackInfo.isPaid) {
					setTimeout(() => {
						// #ifdef MP-ALIPAY|MP-WEIXIN
						this.audioCtx.play()
						//#endif
						this.acc = ii
					}, 100)
				} else {
					setTimeout(() => {
						// #ifdef MP-ALIPAY|MP-WEIXIN
						this.audioCtx.pause()
						// #endif
						
						this.acc = ii
					}, 100)
				}
				this.current.name = uu.trackInfo.title
				this.current.src = uu.trackInfo.playPath
				this.current.poster = `https://imagev2.xmcdn.com/${this.cover}`
				this.active = ii
				this.index = ii
			},
			async music() {
				let result = await myRequestGet(`?albumId=${this.musicid}&page=1&pageSize=20`)
				result = result.data.trackDetailInfos
				this.arr2 = result
			},
			shoucang() {
				uni.showToast({
					title: "订阅成功!"
				})
			}
		},
		onLoad: function(option) {
			this.musicid = option.idd
			this.cover = option.cover
			this.title = option.title
			this.customTitle = option.customTitle
			console.log(this.musicid, this.cover, this.title, this.customTitle)
			this.music()
		}
	}
</script>
<style lang="scss">
	.content {
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		.img {
			display: inline-block;
			width: 135px;
			height: 111px;
			vertical-align: top;
			border-radius: 10px;
			// margin-right:7px;
			margin-left: 8px;
		}

		.c-v {
			margin-bottom: 10px;
			// display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 235px;
			padding: 0px 23px;
            height:111px;
			.c-t1 {
				font-weight: 600;
				// display: inline-block;
				height: 25px;
				width: 275px;
				// overflow: hidden;
				// text-overflow: ellipsis;
				white-space: wrap;
				font-size: 18px;
			}

			.c-t2 {
				margin: 7px 0;
				display: block;
				font-size: 14px;
				color: #bbb;
			}

			.bb{
				.c-b1 {
					height: 29px;
					width: 80px;
					font-size: 13px;
				}
				
				.c-b2 {
					position: relative;
					font-size: 13px;
					height: 29px;
					width: 80px;
					color: white;
					background-color: #4CD964;
				}
			}
		}
	}

	.list {
		#l-content {
			position: relative;
			width: 670rpx;
			// height: 70px;
			border-bottom: 1px solid #ccc;
			padding: 10px 40rpx;
			
			.l-top{
				display: flex;
				.l-t1 {
					color: #999;
					font-size: 16px;
					font-weight: 600;
					margin: 6px 15px;
				}
			}
			.l-bottom{
				// position: relative;
				margin-left: 40px;
				margin-top: 5px;
				font-size: 12px;
				.icon-shijian{
					font-size: 12px;
					color: #999;
					margin-right: 3px;
				}
				.icon-kefu1{
					font-size: 12px;
					color: #999;
					margin-right: 3px;
				}
			}
		}

		
	}

	audio {
		position: fixed;
		bottom: 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.icon-wechat {
		font-size: 24px;
		position: absolute;
		left: 11px;
		top: -11px;
	}

	.btn {
		margin-right: 20px;
	}

	.icon-zhengzaibofang {
		position: absolute;
		font-size: 17px;
		top: 13px;
		right: 25px;
		color: #999;
	}

	.icon-bofang {
		position: absolute;
		font-size: 21px;
		top: 13px;
		right: 25px;
		color: #999;
	}

	.haha {
		background: #ff0000;
	}

	.active {
		color: red;
	}

	.main {
		display: inline-block;
		width: 250px;
		
		font-size: 14px;
		overflow: hidden;
		line-height: 23px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
