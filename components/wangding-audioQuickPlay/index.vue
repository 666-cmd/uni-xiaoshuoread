<template>
	<view class="audo-video">
		<video id="myVideo" :src="url" class="hidden" @timeupdate="timeupdate" ref="video" @loadedmetadata="loadedmetadata" ></video>
		
		<view class="slider-box">
			<text class="mm">{{timer}}</text>
			<slider 
				style="width: 500upx;"
				@change="sliderChange"
				@changing="sliderChanging"
				class="audio-slider" 
				block-size="16" 
				:min="0"
				:max="duration"
				:value="currentTime"
				activeColor="#ff7400"
				@touchstart="lock= true"
				@touchend="lock = false"
				/>
			<text class="ss">{{overTimer}}</text>
		</view>
		
		<button @tap="play">播放</button>
		<button @tap="stop">暫停</button>
		<button @tap="setRate(0.5)">0.5倍</button>
		<button @tap="setRate(0.75)">0.75倍</button>
		<button @tap="setRate(1)">1倍</button>
		<button @tap="setRate(1.5)">1.5倍</button>
		<button @tap="setRate(2)">2倍</button>
		
		
	</view>
</template>

<script>
	export default {
		
		props: {
			url: ''
		},
		data() {
			return {
				lock: false, // 锁
				status: 1, // 1暂停 2播放
				currentTime: 0,  //当前进度
				duration: 100, // 总进度
				videoContext: ''
			}
		},
		computed:{
			timer() {
				return calcTimer(this.currentTime)
			},
			overTimer() {
				return calcTimer(this.duration)
			}
		},
		created() {
			 this.videoContext = uni.createVideoContext('myVideo')
		},
		mounted() {
		},
		methods: {
			// 倍速
			setRate(num) {
				this.videoContext.playbackRate(num)
			},
			
			// 播放
			play() {
				this.status = 2
				this.videoContext.play()
			},
			
			// 暂停
			stop() {
				this.videoContext.pause()
				this.status = 1
			},
			
			// 更新进度条
			timeupdate(event) {
				if(this.lock) return; // 锁
				var currentTime,duration;
				if(event.detail.detail) {
					currentTime = event.detail.detail.currentTime
					duration = event.detail.detail.duration
				}else {
					currentTime = event.detail.currentTime
					duration = event.detail.duration
				}
				this.currentTime = currentTime
				this.duration = duration
			},
			
			// 拖动进度条
			sliderChange(data) {
				this.videoContext.seek(data.detail.value)
			},
			
			//拖动中
			sliderChanging(data) {
				this.currentTime = data.detail.value
			},
			
			// 视频加载完成
			loadedmetadata(data) {
				this.duration = data.detail.duration
			}
		}
	}
	
	function calcTimer(timer) {
		if(timer === 0 || typeof timer !== 'number') {
			return '00:00'
		}
		let mm = Math.floor(timer / 60)
		let ss = Math.floor(timer % 60)
		if(mm < 10) {
			mm = '0' + mm
		}
		if(ss < 10) {
			ss = '0' + ss
		}
		return mm + ':' + ss
	}
	
</script>

<style scoped lang="scss">
	.audo-video {
		padding-bottom: 20upx;
	}
	.slider-box {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		color: #999;
	}
	
	button {
		display: inline-block;
		width: 100upx;
		background-color: #fff;
		font-size: 24upx;
		color: #000;
		padding: 0;
	}
	.hidden {
		position: fixed;
		z-index: -1;
		width: 1upx;height: 1upx;
	}
</style>
