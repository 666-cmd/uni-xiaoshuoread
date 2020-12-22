import Vue from 'vue'
import App from './App'
// import store from './store/index.js'
import store from './store/store.js'

import "@/static/fonts/iconfont.css"

import "@/static/icon/fonts/iconfont.css"
import '@/static/icon/font_2282128_itialhmpshp/iconfont.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
