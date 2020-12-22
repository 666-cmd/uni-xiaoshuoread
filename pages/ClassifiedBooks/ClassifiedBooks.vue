<template>
	<view>
		<view @click="search" class="sousuo">
			<text class="iconfont icon-iconfontsousuokuangsousuo"></text>
			<input type="text" placeholder="搜索书名/作者/关键字······" disabled="true" />
		</view>
		<scroll-view class="scrollup" scroll-x="true" style=" white-space: nowrap;">
			<text @click="upClickHandle(index,item)" class="textview" v-for="(item,index) in Classbook" :key="item.id" :class="{'active':active==index}">
				{{item.text}}
			</text>
		</scroll-view>
		<scroll-view class="scrolldown" scroll-x="true" style=" white-space: nowrap;">
			<text @click="downClickHandle(index,item)" class="twotext" v-for="(item,index) in Arrdown" :key="item.id" :class="{'textsmall':textsmall==index}">{{item.text}}</text>
		</scroll-view>
		<view class="list">
			<view v-for="item in con" :key="item.id" class="flexdad">
				<view class="flexcld">
					<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.fm}`"></image>
					<text>{{item.sm}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				Arrdown: [],
				active: 0,
				Classbook: [],
				textsmall: 0,
				qlx: "",
				page: 1,
				con: [],
				index:0
				
			}
		},
		components: {

		},
		onLoad() {
			this.getClass();
		},
		methods: {
			search() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			//获取主要分类
			async getClass() {
				let result = await myRequestPost('/portal.php', 'resid=BookAction.getSjlx')
				result = result.data.children
				this.Classbook = result
				this.upClickHandle(this.active, this.Classbook[this.active])
			},
			//获取次要分类
			upClickHandle(index, item) {
				this.active = index;
				this.textsmall = 0;
				//每次清空下面的scroll-view
				this.Arrdown = [];
				// 判断如果存在数组则渲染到页面上，如果不存在则空白显示
				if (item.children) {
					this.Arrdown = item.children;
				}
				this.downClickHandle(this.index, item)
			},
			//获取内容
			downClickHandle(index, item) {
				this.textsmall = index;
				this.qlx = item.id;
				this.con=[];
				this.getContent();
				

			},
			async getContent() {
				let con = await myRequestPost('/selectact/query.jspx', {
					'resid': 'IDJUT4E3LE',
					'qlx': this.qlx,
					'page': this.page
				})
				this.con = [...this.con,...con.data]
				console.log(con,"mmm");
			},
			
		},
		onReachBottom(){
			this.page++;
			this.getContent()
			console.log(this.page)
		},  
	}
</script>

<style lang="scss">
	.sousuo {
		height: 25px;
		width: 100%;
		border-bottom: 1px solid #ccc;
        position: relative;
		.icon-iconfontsousuokuangsousuo {
			display: inline-block;
			font-size: 17px;
			margin-left: 10px;
			position: absolute;
			bottom:4px;
			
		}

		input {
			
			display: inline-block;
			width: 260px;
			margin-left: 27px;
			font-size: 14px;
		}
	}
 //   .list{
	// background-color:pink;
	// width: 100%;
 //     }
	.flexdad {

		.flexcld {
			margin-left: 14px;
			margin-top: 10px;
			width: 110px;
			height: 160px;
			float: left;
			overflow: hidden;

			image {
				width: 103px;
				height: 114px;
			}

			text {
				display: block;
				width: 103px;
				height: 50px;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}

	.scrollup {
		border-bottom: 1px solid #ccc;
        padding: 5px 0;
		.textview {

			margin: 0px 10px;
			font-size: 14px;
			text-align: center;
		}

		.active {
			color: red;
			border-bottom: 2px solid red;
		}
	}

	.scrolldown {
		.twotext {
			font-size: 12px;
			margin: 0px 8px;
			text-align: center;
			color: #666;
		}

		.textsmall {
			color: red;
		}
	}

	//解决滚动条问题
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}
</style>
