<template>
	<view class="content">
		<view class="sousuo">
			<!-- <text class="iconfont icon-sousuo"></text> -->
			<input type="text" v-model="inputValue" @confirm="search" placeholder="搜索书名/作者/关键字······" />
			<button @click="getdate">搜索</button>
		</view>
		<view style="display: flex;align-items: center;justify-content: space-between;box-sizing: border-box;padding: 0px 5px;">
			<text class="head">历史记录</text>
			<view style="color: red;font-size: 28px;" @click="empty">×</view>
		</view>
		<view class="histview">
			<text v-for="(item,index) in carts" :key="index" class="historytext">{{item}}</text>
		</view>
		<view>
			<text class="head">热门搜索</text>
			<text v-for="(item,index) in obj" :key="index" class="historytextdown" @click="touch(item)">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
				carts: [],
				obj: ['一年顶十年',
					'儿童大脑 开窍指南',
					'大话西方艺术',
					'如何高效学习:1年完成MIT4年33门课程的整体性学习法',
					'性格的力量'
				]
			}
		},
		methods: {
			touch(item) {
				this.inputValue = item
				this.getdate()
			},
			search() {
				if (this.inputValue.trim().length == 0) {
					uni.showModal({
						title: '搜索内容不能为空',

					});
				} else {
					if (!this.carts.includes(this.inputValue)) {
						this.carts.unshift(this.inputValue);
						uni.setStorage({
							key: 'searchList',
							data: this.carts
						});
					} else {
						//有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
						let i = this.carts.indexOf(this.inputValue);
						this.carts.splice(i, 1);
						this.carts.unshift(this.inputValue);
						// uni.showToast({
						// 	title: '请勿重复输入'
						// });
						uni.setStorage({
							key: 'searchList',
							data: this.carts
						});
					}
				}
			},
			getdate() {
				this.search()
			},
			empty() {
				uni.showToast({
					title: '已清空'
				});
				uni.removeStorage({
					key: 'searchList'
				});

				this.carts = [];
			}
		},
		async onLoad() {
			let list = await uni.getStorage({
				key: 'searchList'
			});
			console.log(list);

			if (list[1].data) {
				this.carts = list[1].data;
			}
		}


	}
</script>

<style lang="scss">
	.content {
		padding: 15px;
		box-sizing: border-box;
	}

	.sousuo {
		height: 30px;
		width: 355px;
		margin: 0 auto;
		background-color: #eee;
		border-radius: 17px;
		padding: 0px 5px 0px 10px;
		overflow: hidden;
		box-sizing: border-box;

		.icon-sousuo {
			display: inline-block;
			font-size: 20px;
			vertical-align: top;
		}

		button {
			padding: 3px 30px;
			margin-right: -10px;
			margin-top: -6px;
			float: right;
			// width: 100px;
			// height: 25px;
			font-size: 14px;
		}

		input {
			width: 260px;
			height: 30px;
			display: inline-block;
			font-size: 14px;
			line-height: 30px;
		}
	}



	.head {
		font-size: 20px;
		margin-top: 10px 0px;
		display: block;
		font-size: 14px;
		font-weight: 600;
	}

	.histview {
		width: 100%;
		// height: 187px;
		overflow: auto;
		box-sizing: border-box;
        margin: 5px 0 15px 0px;
		.historytext {
			display: inline-block;
			margin: 5px 0px;
			margin-left: 10px;
			// margin-left: 3px;
			padding: 3px 8px;
			border-radius: 18px;
			background-color: #eee;
			font-size: 13px;
			color: #999;
		}
	}

	.historytextdown {
		box-sizing: border-box;
		display: inline-block;
		margin-left: 10px;
		margin-top: 12px;
		padding: 3px 8px;
		border-radius: 20px;
		background-color: #eee;
		font-size: 13px;
		color: #999;

	}
</style>
