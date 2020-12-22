<template>
	<view class="content">
		<view class="viewfor" v-for="(item,index) in result" :key="index">
			<text class="tit">{{item&&item.title}}</text>
			<view style="width: 2000px;">
				<!-- #ifdef MP-ALIPAY|MP-WEIXIN -->
				<view class="big " v-for="(ico,coco) in item.moduleInfo" :key="coco" @click="main(ico)" :data-news="ico">
				<!-- #endif -->	
				<!-- #ifdef H5 -->
				<view class="big " v-for="(ico,coco) in item&&item.moduleInfo" :key="coco" @click="main(ico)" :data-news="ico">
				<!-- #endif -->	
					<text class="iconfont icon-bofang"></text>
					<image class="img" :src="`https://imagev2.xmcdn.com/${ico.albumInfo.cover}`"></image>
					<view class="name">{{ico.albumInfo.title}}</view>
				</view>
				<!-- <text>{{item&&item.moduleInfo}}</text> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/radio.js'
	export default {
		data() {
			return {
				result: []				
			}
		},
		methods: {
			main(ico) {
				console.log(ico)
				let idd = ico.id
				let cover = ico.albumInfo.cover
				let title = ico.albumInfo.title
				let customTitle = ico.albumInfo.customTitle
				console.log(idd, cover, title, customTitle)
				uni.navigateTo({
					url: '/pages/musicmain/musicmain?idd=' + idd + '&cover=' + cover + '&title=' + title + '&customTitle=' +
						customTitle
				})
				//console.log(ico)
			},
			async radio() {
				let result = await myRequestGet('?categoryPinyin=recommend')
				let slov = result.data.modules
				//this.result=result.data.modules
				for (var i = 0; i <= slov.length; i++) {
					if (i != 2 && i != 16) {
						this.result.push(slov[i])
					}
				}
			}
		},
		onLoad() {
			this.radio()
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 10px;
		.tit{
			// padding: 10px 0!important;
			display: block;
			font-size: 15px;
			font-weight: 600;
		}
		.big {
			height: 138px;
			width: 122px;
			display: inline-block;
			margin-top: 10px;
			float: left;
			position: relative;
			margin-bottom: 10px;
			.iconfont {
				position: absolute;
				top: 80px;
				right: 15px;
				font-size: 20px;
				color: #eee;
			}

			.img {
				height: 110px;
				width: 110px;
				border-radius: 10px;
			}

			.name {
				font-size: 12px;
				width: 100px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				text-align: center;
				display: block;
				margin-bottom: 10px;
			}
		}
	}
</style>
