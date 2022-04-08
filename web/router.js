
import Vue from 'vue'
import Router from 'vue-router'

function interopDefault(promise) {
  return promise.then(m => m.default || m)
}

const HomePage = () => interopDefault(import(/* webpackChunkName: "HomePage" */ './pages/home/index.vue'))
const WorkPage = () => interopDefault(import(/* webpackChunkName: "WorkPage" */ './pages/work/index.vue'))
const InnovationPage = () => interopDefault(import(/* webpackChunkName: "InnovationPage" */ './pages/innovation/index.vue'))
const AboutPage = () => interopDefault(import(/* webpackChunkName: "AboutPage" */ './pages/about/index.vue'))
const ContactPage = () => interopDefault(import(/* webpackChunkName: "ContactPage" */ './pages/contact/index.vue'))
const WorkDetail = () => interopDefault(import(/* webpackChunkName: "WorkDetail" */ './pages/work/detail.vue'))
const InnovationDetail = () => interopDefault(import(/* webpackChunkName: "InnovationDetail" */ './pages/innovation/detail.vue'))
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: HomePage
            },
            {
                path: '/work',
                component: WorkPage
            },
            {
                path: '/innovation',
                component: InnovationPage
            },
            {
                path: '/about',
                component: AboutPage
            },
            {
                path: '/contact',
                component: ContactPage
            },
            {
                path: '/work/:id',
                component: WorkDetail
            },
            {
                path: '/innovation/:id',
                component: InnovationDetail
            }

        ]
    })
}