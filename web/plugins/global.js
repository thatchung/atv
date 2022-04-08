import Vue from 'vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ThumbImage from '~/components/ThumbnailImg.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import People from '~/components/People.vue'
import TeamList from '~/components/TeamList.vue'

Vue.component('VueSlickCarousel', VueSlickCarousel)
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//     preLoad: 1.3,
//     error: '/images/no-image.png',
//     attempt: 1,
//     listenEvents: ['scroll', 'transitionend'],
//     // silent:false,
//     lazyComponent: true
// })
// import LazyHydrate from 'vue-lazy-hydration'
// Vue.component('LazyHydrate', LazyHydrate)
// From source

Vue.component('ThumbImage', ThumbImage)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('People', People)
Vue.component('TeamList', TeamList)
