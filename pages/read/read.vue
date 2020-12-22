<template>
	<view class="content">
		<view class="sousuo">
			<!-- <text class="iconfont icon-sousuo"></text> -->
			<input :value="search" @input="messagesearch"  type="text" class="input" placeholder="搜索书名/作者/关键字......" />
			<button @click="searchClick" type="default">搜索</button>
		</view>
		<view class="card" @click="jump">
			<view class="left-line"></view>
			<text class="text-top">已经完成评测0次</text>
			<text class="text-center">已超过0.0%人</text>
			<view class="divider"></view>
			<text class="text-bottom">检验阅读成果，增加知识储备</text>
			<view class="circle">
				<view class="inner-circle">
					<view class="inner-center">
						<view class="linear"></view>
					</view>
				</view>
			</view>
			<view class="history">查看历史</view>
			<text class="iconfont icon-xiangyoujiantou"></text>
		</view>
		<view class="list" v-for="item in newsList" :key="item.bt" @click="jumpinner">
			<image :src="`https://uptownlet.com/appendix/image.jspx?id=${item.tp}`" class="img"></image>
			<view class="container">
				<text class="title">{{item.bt}}</text>
				<text class="author">作者</text>
				<text class="author-name">{{item.zz}}</text>
				<icon class="iconfont icon-redian"></icon>
				<text class="hot-score">{{item.zxrd}}</text>
			</view>
			<view class="right-box">
				<icon class="iconfont icon-pingcebaogao"></icon>
				<text class="review">评测</text>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		myRequestPost
	} from '../../utils/zgrequest.js'
	export default {
		data() {
			return {
				newsList: [],
				bt: "",
				zz: "",
				zxrd: "",
				pcid: "",
				tp: "",
				page: 1,
				search:''
			}
		},
		onLoad() {
			this.getnewsList()
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '/pages/review-history/review-history'
				})
			},
            jumpinner(){
				uni.navigateTo({
					url:'/pages/review-question/review-question'
				})
			},
			async getnewsList() {
				let result = await myRequestPost('/portal.php', {
					resid: 'PcAction.pctslist',
					bt: this.bt,
					zz: this.zz,
					zxrd: this.zxrd,
					pcid: this.pcid,
					tp: this.tp,
					page: this.page
				})
				this.newsList = [...this.newsList, ...result.data.tslist]
				console.log(result, "123456765432", this.newsList)
			},
			messagesearch:function(e){
							this.search = e.target.value
						},
						searchClick(){
							console.log(this.search)
							if(this.newsList.bt === this.search){
								console.log(this.newsList.bt)
							}
						},
		},
  
		onReachBottom() {
			this.page++;
			this.getnewsList();
			if(this.page == 13){
							uni.showModal({
								content:'没有更多了~'
							})
						}
		}
	}
</script>

<style lang="scss">
	.sousuo {
		height: 50rpx;
		width: 93%;
		margin: 10rpx auto;
		background-color: #F7F7F7;
		position: relative;
		overflow: hidden;
		border-radius: 20px;

		.icon-sousuo {
			display: inline-block;
			font-size: 16px !important;
            background-color: #F7F7F7;
			top: 5rpx;
			left: 2rpx;
			position: absolute;
		}

		.input {
			display: inline-block;
			height: 50rpx;
			width: 500rpx;
			top: 0;
			left: 22px !important;
			font-size: 12px !important;
			position: absolute;
			background-color: #F7F7F7;
		}

		button {
			float: right;
			height: 54rpx;
			width: 182rpx;
			display: inline-block;
			line-height: 54rpx;
			text-align: center;
			font-size: 12px !important;
			color: #3C3E49;
			right: -1px;
			top: -2rpx !important;
			position: absolute;
			background-color: #F7F7F7;

		}

	}

	.card {
		width: 93%;
		height: 180rpx;
		background-color: #F7F7F7;
		margin: 10px auto;

		border-radius: 12px;
		box-shadow: 1px 1px 5px #CCCCCC;
		position: relative;

		.left-line {
			position: absolute;
			width: 6px;
			height: 70rpx;
			left: -3px;
			top: 55rpx;
			background-color: salmon;
			border-radius: 10px;
		}

		.text-top {
			position: absolute;
			top: 30rpx;
			left: 30rpx;
			font-size: 20rpx;
			font-family: arial;
			letter-spacing: 3rpx;
		}

		.text-center {
			position: absolute;
			top: 75rpx;
			left: 30rpx;
			font-size: 18rpx;
			font-family: arial;
			letter-spacing: 3rpx;
			color: #555555;
		}

		.divider {
			position: absolute;
			width: 400rpx;
			height: 1rpx;
			border-top: 1px dashed #cccccc;
			top: 110rpx;
			left: 30rpx;

		}

		.text-bottom {
			position: absolute;
			bottom: 30rpx;
			left: 30rpx;
			font-size: 20rpx;
			font-family: arial;
			letter-spacing: 3rpx;
			color: #555555;
		}

		.circle {
			position: absolute;
			top: 20rpx;
			right: 50rpx;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			background: -webkit-linear-gradient(left, limegreen, lime, springgreen);

			.inner-circle {
				position: absolute;
				width: 72rpx;
				height: 72rpx;
				left: 14rpx;
				top: 14rpx;
				background-color: #F7F7F7;
				border-radius: 50%;

				.inner-center {
					position: absolute;
					width: 14rpx;
					height: 18rpx;
					left: 29rpx;
					top: 27rpx;
					border-radius: 30px;
					background: -webkit-linear-gradient(left, limegreen, lime, springgreen);

					.linear {
						position: absolute;
						width: 6rpx;
						height: 10rpx;
						top: 4rpx;
						left: 4rpx;
						background-color: #F7F7F7;
						border-radius: 10px;
					}
				}
			}
		}

		.history {
			position: absolute;
			right: 80rpx;
			bottom: 28rpx;
			font-size: 20rpx;
			font-family: arial;
			letter-spacing: 3rpx;
		}
		.icon-xiangyoujiantou{
			position: absolute;
			right: 50rpx;
			bottom: 28rpx;
			font-size: 20rpx;
			color: #777777;
		}
	}

	.list {
		width: 93%;
		height: 220rpx;
		background-color: #F5F5F5;
		margin: 20px auto;
		border-radius: 8px;
		// box-shadow: 1px 1px 5px #CCCCCC;		
		position: relative;

		.img {
			position: absolute;
			left: 20rpx;
			top: 30rpx;
			width: 130rpx;
			height: 170rpx;
		}

		.container {
			width: 377rpx;
			height: 220rpx;
			position: absolute;
			left: 180rpx;
			top: 0;

			// background-color: #F56C6C;
			.title {
				position: absolute;
				left: 0rpx;
				top: 35rpx;
				font-size: 28rpx;
				letter-spacing: 2rpx;
				white-space: nowrap;
				display: block;
				width: 377rpx;
				height: 35rpx;
				overflow: hidden;
			}

			.author {
				position: absolute;

				left: 0rpx;
				top: 100rpx;
				font-size: 25rpx;
				letter-spacing: 5rpx;
				color: red;
			}

			.author-name {
				position: absolute;
				left: 70rpx;
				top: 100rpx;
				font-size: 25rpx;
				letter-spacing: 2rpx;
				display: block;
				width: 330rpx;
				height: 30rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;

			}
            .icon-redian{
				position: absolute;
				left: 0;
				top: 130rpx;
				font-size: 30rpx;
				color: red;
			}
			.hot-score {
				position: absolute;
				left: 40rpx;
				top: 155rpx;
				font-size: 20rpx;
				letter-spacing: 2rpx;
			}
		}

		.right-box {
			position: absolute;
			width: 70rpx;
			left: 580rpx;
			top: 20rpx;
			height: 180rpx;
			border-left: 1px dashed #C0C0C0;
            
			.icon-pingcebaogao{
				position: absolute;
				font-size: 50rpx;
				left: 26rpx;
				top: 30rpx;
				color: #646566;
			}
			.review {
				position: absolute;
				font-size: 20rpx;
				color: #646566;
				left: 30rpx;
				bottom: 60rpx;
			}
		}
	}
</style>
