<template>
	<view>
		<view class="viewfor" v-for="(item,index) in result" :key="index">
			<text>{{item.title}}</text>
			<view style="width: 2000px;">
				<view style=" width: 260rpx;display: inline-block; margin-top: 10px;text-align: center;float: left;position: relative;"  v-for="(ico,coco) in item.moduleInfo" :key="coco" @click="main(ico)" :data-news="ico">
					<text style="position: absolute;top:80px;right: 15px;font-size: 20px; color: #eee;" class="iconfont icon-bofang"></text>
					<image style="height: 100px;width: 100px;" :src="`https://imagev2.xmcdn.com/${ico.albumInfo.cover}`"></image>
				<view style="height: 50px;font-size: 12px;width: 100px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">{{ico.albumInfo.title}}</view>
				</view>
				<text>{{item.moduleInfo}}</text>
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
			result:[
				// '猜你喜欢',
				// '免费热播榜',
				// '有声书',
				// '有声书排行榜',
				// '热门订阅',
				// '相声评书',
				// '相声评书排行榜',
				// '儿童',
				// '儿童排行榜',
				// '热门畅销',
				// '音乐',
				// '音乐排行榜',
				// '头条',
				// '头条排行榜',
				// '热门新品'
			],
			arr:[]
			}
		},
		methods: {
			main(ico){
				console.log(ico)
				let idd=ico.id
				let cover=ico.albumInfo.cover
				let title=ico.albumInfo.title
				let customTitle=ico.albumInfo.customTitle
				console.log(idd,cover,title,customTitle)
				uni.navigateTo({
					url: '/pages/musicmain/musicmain?idd='+idd+'&cover='+cover+'&title='+title+'&customTitle='+customTitle
				})
				//console.log(ico)
			},
			async radio() {
				let result = await myRequestGet('?categoryPinyin=recommend')
				let slov=result.data.modules
				//this.result=result.data.modules
				for(var i=0;i<=slov.length;i++){
					if(i!=2&&i!=16){
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

<style>

</style>
