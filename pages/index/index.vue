<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<audio poster="{{poster}}" name="{{name}}" author="{{author}}" src="{{src}}" id="myAudio" controls loop></audio>
			
			<button type="primary" bindtap="audioPlay">播放</button>
			<button type="primary" bindtap="audioPause">暂停</button>
			<button type="primary" bindtap="audio14">设置当前播放时间为14秒</button>
			<button type="primary" bindtap="audioStart">回到开头</button>
			
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
				    name: '此时此刻',
				    author: '许巍',
				    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
			}
		},
		onLoad() {

		},
		audioPlay: function () {
		    this.audioCtx.play()
		  },
		  audioPause: function () {
		    this.audioCtx.pause()
		  },
		  audio14: function () {
		    this.audioCtx.seek(14)
		  },
		  audioStart: function () {
		    this.audioCtx.seek(0)
		  },
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
