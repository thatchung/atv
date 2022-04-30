import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)
Vue.component('Paginate', Paginate)
