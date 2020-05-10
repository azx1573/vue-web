import Vue from 'vue'
import App from './App.vue'
import axios from './common/axios'
import router from './router'
import store from './store'

import './assets/fonts/iconfont.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/common.scss'

import './common/rem'

// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)

Vue.use(ElementUI)
Vue.use(Vant)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
