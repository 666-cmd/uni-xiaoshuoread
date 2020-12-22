<template>
	<view class="content">
		<image class="topImg" src="https://uptownlet.com/appendix/image.jspx?id=5efa0c52f04c4527be6f7dc71373522e" mode="widthFix"></image>
		<view class="zhang">
			<text>成长徽章</text>
			<image src="https://uptownlet.com/appendix/image.jspx?id=f22093ed57e84122a52035fe6304bd52" mode="widthFix"></image>
		</view>
		<view class="jifen">
			<text>积分：86/300<text class="iconfont icon-zhuyi"></text>如何获取>></text>
			<text>入门小海星</text>
		</view>
		<view class="progress-box">
			<progress percent="30" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
		</view>
		<view class="liebiao">
			<view class="pai" @click="$refs.popup.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=f22093ed57e84122a52035fe6304bd52" mode="widthFix"></image>
				<text>入门小海星</text>
				<uni-popup ref="popup">
					<view class="fugai">
						<view class="p-top">
							<text>成功获得</text>
							<text>已有122人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=f22093ed57e84122a52035fe6304bd52" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>入门小海星</text>
					    	<text>从0起步，点亮小海星!</text>
					    </view>
						<progress percent="30" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/299</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan"></view>
					</view>
				</uni-popup>
			</view>
			<view class="pai p"  @click="$refs.popup1.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=ae2f39a2bdb04e33951c86fa35d61b5c" mode="widthFix"></image>
				<text>机智小兔</text>
				<uni-popup ref="popup1">
					<view class="fugai">
						<view class="p-top">
							<text>暂未获得</text>
							<text>已有7人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=ae2f39a2bdb04e33951c86fa35d61b5c" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>机智小兔</text>
					    	<text>获得300积分,机智如你!</text>
					    </view>
						<progress percent="10" activeColor="#FF8247" active="true" stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/499</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan1"></view>
					</view>
				</uni-popup>
			</view>
			<view class="pai p"  @click="$refs.popup2.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=e84cb1eca49d43c1a01c74db8227e0eb" mode="widthFix"></image>
				<text>赛跑优胜龟</text>
				<uni-popup ref="popup2">
					<view class="fugai">
						<view class="p-top">
							<text>暂未获得</text>
							<text>已有3人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=e84cb1eca49d43c1a01c74db8227e0eb" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>赛跑优胜龟</text>
					    	<text>获得500积分,超越兔子的秘诀是坚持!</text>
					    </view>
						<progress percent="5" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/1249</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan2"></view>
					</view>
				</uni-popup>
			</view>
			<view class="pai p"  @click="$refs.popup3.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=8dc4a75cac374d788b6bcc24602014c7" mode="widthFix"></image>
				<text>进阶妙蛙</text>
				<uni-popup ref="popup3">
					<view class="fugai">
						<view class="p-top">
							<text>暂未获得</text>
							<text>已有1人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=8dc4a75cac374d788b6bcc24602014c7" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>进阶妙蛙</text>
					    	<text>获得1250积分,有了好习惯,龟速变蛙跳!</text>
					    </view>
						<progress percent="30" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/2499</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan3"></view>
					</view>
				</uni-popup>
			</view>
			<view class="pai p"  @click="$refs.popup4.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=3b2374eca2eb48aebe80b14f753c0252" mode="widthFix"></image>
				<text>龙虾霸霸</text>
				<uni-popup ref="popup4">
					<view class="fugai">
						<view class="p-top">
							<text>暂未获得</text>
							<text>已有1人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=3b2374eca2eb48aebe80b14f753c0252" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>龙虾霸霸</text>
					    	<text>获得2500积分，霸气不解释!</text>
					    </view>
						<progress percent="3" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/4599</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan4"></view>
					</view>
				</uni-popup>
			</view>
			<view class="pai p"  @click="$refs.popup5.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=c6f25d6f87e64a0eb9cd02b6cb79cb71" mode="widthFix"></image>
				<text>勤径千里马</text>
				<uni-popup ref="popup5">
					<view class="fugai">
						<view class="p-top">
							<text>暂未获得</text>
							<text>已有0人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=c6f25d6f87e64a0eb9cd02b6cb79cb71" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>勤径千里马</text>
					    	<text>积分达到4500!千里之行始于足下!</text>
					    </view>
						<progress percent="1" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/8999</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan5"></view>
					</view>
				</uni-popup>
			</view>
			<view class="pai p"  @click="$refs.popup6.open()">
				<image src="https://uptownlet.com/appendix/image.jspx?id=f593de8fde254fff99a11a0babe54fe6" mode="widthFix"></image>
				<text>熊猫大侠</text>
				<uni-popup ref="popup6">
					<view class="fugai">
						<view class="p-top">
							<text>暂未获得</text>
							<text>已有0人获得</text>
						</view>
						<image src="https://uptownlet.com/appendix/image.jspx?id=f593de8fde254fff99a11a0babe54fe6" mode="widthFix"></image>
					    <view class="p-center">
					    	<text>熊猫大侠</text>
					    	<text>积分达到9000!阅读大侠就是你!</text>
					    </view>
						<progress percent="30" activeColor="#FF8247" active stroke-width="9" border-radius="15" />
						<view class="p-bottom">
							<text>进度：86/20000</text>
							<text>请继续努力,再接再厉哟</text>
						</view>
						<view class="iconfont icon-xianshi_quxiao" @click="guan6"></view>
					</view>
				</uni-popup>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	import popupScroll from '@/components/uni-ui/uni-popup-scroll/popup-scroll.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			uniPopup,
			popupScroll
		},
		methods: {
			guan(){
				this.$refs.popup.close();
			},
			guan1(){
				this.$refs.popup1.close();
			},
			guan2(){
				this.$refs.popup2.close();
			},
			guan3(){
				this.$refs.popup3.close();
			},
			guan4(){
				this.$refs.popup4.close();
			},
			guan5(){
				this.$refs.popup5.close();
			},
			guan6(){
				this.$refs.popup6.close();
			}
		}
	}
</script>

<style lang="scss">
	.content {
		/deep/.uni-progress-inner-bar{
			border-radius: 15px!important;
		}
		.fugai{
			padding: 20px;
			margin-top: -100px;
			width: 220px;
			height: 350px;
			background-color: #fff;
			border-radius: 10px;
			position: relative;
			.p-top{
				display: flex;
				flex-direction: column;
				text:nth-child(1){
					font-size: 14px;
					font-weight: 700;
				}
				text:nth-child(2){
					font-size: 12px;
					color: #666;
					margin-top: 8px;
				}
			}
			image{
				width: 75px!important;
				margin: 60px 0;
			}
			.p-center{
				margin-top: 50px ;
				margin-bottom: 10px;
				display: flex;
				flex-direction: column;
				text:nth-child(1){
					font-size: 14px;
					font-weight: 700;
				}
				text:nth-child(2){
					font-size: 12px;
					color: #666;
					margin-top: 4px;
				}
			}
			.p-bottom{
				display: flex;
				flex-direction: column;
				margin-top: 8px;
				text:nth-child(1){
					font-size: 10px;
				}
				text:nth-child(2){
					margin-top: 15px;
					font-size: 12px;
					color: #666;
				}
			}
			.icon-xianshi_quxiao{
				font-size: 35px;
				font-weight: 400;
				color: #eee;
				position: absolute;
				bottom: -50px;
				left: 50%;
				margin-left: -12px;
			}
		}
		// padding: 0 10px;

		.topImg {
			width: 100%;
		}

		.zhang {
			display: flex;
			padding: 20rpx 40rpx;
			font-size: 15px;
			font-weight: 700;
			justify-content: space-between;
             text{
				 margin-top: 18px;
			 }
			image {
				width: 60px;
			}
		}

		.jifen {
			padding: 0px 40rpx 10px;
			display: flex;
			justify-content: space-between;

			text:nth-child(1) {
				font-size: 12px;
				color: #666;
			}

			text:nth-child(2) {
				font-size: 15px;
			}

			.icon-zhuyi {
				margin: 0 4px 0 6px;
			}
		}

		.progress-box {
			padding: 10rpx 40rpx;
			
		}

		.liebiao {
			padding: 0 40rpx;
			display: flex;
			flex-wrap: wrap;

			.pai {
				width: 210rpx;
				display: flex;
				flex-direction: column;
				text-align: center;
				margin-top: 20px;
				font-size: 16px;

				image {
					align-self: center;
					width: 55px;
					margin-bottom: 5px;
				}
			}

			.p image {
				-webkit-filter: grayscale(100%);
				-moz-filter: grayscale(100%);
				-ms-filter: grayscale(100%);
				-o-filter: grayscale(100%);
				filter: grayscale(100%);
				filter: gray;
			}

		}
	}
</style>
