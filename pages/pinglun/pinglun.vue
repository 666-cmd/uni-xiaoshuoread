<template>
	<view>
		<view class="comments">
			<view class="tou">
				<view class="timg">
					<image :src="ping.tx" v-if="ping.tx"></image>
					<image src="../../static/2345_image_file_copy_1.jpg" v-else></image>
					<text>{{ping._cuser}}</text>
				</view>
			</view>
			<view class="ping">
				{{ping.yhly}}
			</view>
			<view class="shu">
				<view class="s-yes" v-if="ping.fxtp">
					<image :src="`https://uptownlet.com/appendix/image.jspx?id=${ping.fxtp}`"></image>
					<view class="shu-right">
						<text>{{ping.fxmc}}</text>
						<text>{{ping.fxzz}}</text>
					</view>
				</view>
				<view class="s-no" v-else>
					<text class="iconfont icon-bofang1"></text>
				</view>
			</view>
			<view class="shi">
				<text>{{ping.cdate}}</text>
				<text><text class="iconfont icon-pinglun"></text><text class="lun">评论</text></text>
			</view>
		</view>
	</view>
</template>

<script>
	// 发请求，拿数据
	import {
		myRequestPost,
		myRequestGet
	} from "@/utils/zgrequest.js"
	export default {
		data() {
			return {
				id: '',
				ping: {}
			}
		},
		onLoad(options) {
			console.log(options, "评论");
			this.id = options.id;
			this.getPing()
		},
		methods: {
			//https://uptownlet.com/portal.php?resid=LyplAction.fxhf&lyid=c697fdcd5a7c45a0911eef531710816c
			async getPing() {
				let result = await myRequestGet("/portal.php", {
					resid: 'LyplAction.fxhf',
					lyid: this.id
				})
				this.ping = result.data
				console.log(this.ping);
			},
		}
	}
</script>

<style lang="scss">
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
					height: 40px;
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
				font-size: 14px;
				color: #999;

				text {
					margin-right: 3px;
				}
			}

			border-bottom: 1px solid #E5E5E5;
			.lun{
				color: #4CD964;
			}
		}


	}
</style>
