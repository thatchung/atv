import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Paginate from 'vuejs-paginate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('Paginate', Paginate)
