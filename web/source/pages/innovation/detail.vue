<template>
  <div class="container">
    <h2 class="section-title">
      {{ $t('Innovation') }}
    </h2>
    <div class="line-all" />
    <div class="back-content" @click="$router.back()">
      <!-- <b-icon-arrow-left /> -->
      <img class="img-arrow-left" src="/images/a_left.png"></img>
      {{ $t('Back') }}
    </div>
    <div class="date-content">
      {{ item.date }}
    </div>
    <h1 class="inno-title font-pp-bold">
      {{ item.title }}
    </h1>
    <div class="inno-content">
      <div class="inno-content-text white-space-word" v-html="html_content" />
        <!-- <b-icon-arrow-up /> -->
      </div>
    </div>
<!--     <img class="img-arrow-up" src="/images/a_up.png"></img> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { marked } from 'marked'
import ApiService from '@/service/api.service'
import general from "~/mixins/general"

export default {
  name: 'IndexPage',
  data() {
    return {
      item:{
        title: 'Crescent Mall C Club Lounge',
        url: '/images/slide4.jpg',
        thub: '/images/slide4.jpg',
        date: 'Dec 27, 2021',
        content: ''
      },
      html_content: ''
    }
  },
  async asyncData({ route, req, app, redirect, store }) {
    let res = await ApiService.request({
      method: 'get',
      url: store.state.common.api_host + `/innovations?url=${route.params.id}`
    })
    let item = {}
    if (res && res.length > 0) {
      item = res[0]
      item.titleShare = res[0].title
      item.description = res[0].description
      item.image = res[0].thub ? store.state.common.api_host + res[0].thub.url : ''
      item.current_url = store.state.common.api_host + '/' + res[0].url
    }
    return { s_innovation: item }
  },
  head() {
    let headJson = {
      title:
        this.s_innovation !== undefined
          ? this.s_innovation.titleShare
          : "AVT - Công ty Cổ Phần Quản Lý Xây Dựng AVT",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.s_innovation !== undefined ? this.s_innovation.titleShare : ""
        },
        {
          hid: "description",
          property: "description",
          content: this.s_innovation !== undefined ? this.s_innovation.description : ""
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.s_innovation !== undefined ? this.s_innovation.description : ""
        },
        {
          hid: "robots",
          property: "robots",
          content:
            this.s_innovation !== undefined && this.s_innovation.meta_robots
              ? this.s_innovation.meta_robots
              : "INDEX,FOLLOW"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            this.s_innovation !== undefined && this.s_innovation.image !== ""
              ? this.s_innovation.image
              : ""
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.s_innovation !== undefined ? this.s_innovation.current_url : ""
        },
        {
          hid: "keywords",
          property: "keywords",
          content: this.s_innovation !== undefined ? this.s_innovation.keywords : ""
        }
      ],
      link: [
        {
          rel: "canonical",
          href: this.s_innovation.current_url
        }
      ]
    }
    return headJson
  },
  computed: {
    ...mapGetters({
      innovation: "innovation/getInnovation"
    }),
  },
  watch: {
    '$i18n.locale': function(newVal, oldVal) {
      if (this.innovation && this.innovation.content) {
        let lang = 'en'
        let lland = window.localStorage.getItem('lang')
        if (lland) {
          lang = lland
        }
        if (lang === 'vn') {
          this.html_content = marked.parse(this.innovation.content_vn.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
        } else {
          this.html_content = marked.parse(this.innovation.content.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
        }
      }
    }
  },
  mounted() {
    this.loadData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  methods: {
    ...mapActions({
      getInnovationBySlug: "innovation/getInnovationBySlug"
    }),
    async loadData() {
      if (this.$route.params.id) {
        await this.getInnovationBySlug({ url: this.$route.params.id })
        let lang = 'en'
        let lland = window.localStorage.getItem('lang')
        if (lland) {
          lang = lland
        }
        if (lang === 'vn') {
          this.html_content = marked.parse(this.innovation.content_vn.replace(/\/uploads\//g, `${this.$store.state.common.api_host}/uploads/`))
        } else {
          this.html_content = marked.parse(this.innovation.content.replace(/\/uploads\//g, `${this.$store.state.common.api_host}/uploads/`))
        }
      }
    },
    toTopAction () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
<style lang="scss">
.section-title{
  font-size: 5rem;
  margin-top: 2rem;
}
.back-content{
  display: inline-block;
  float: left;
  margin-top: 0rem;
  cursor: pointer;
}
.back-content svg{
  font-size: 1.4rem;
}
.date-content{
  display: inline-block;
  float: right;
  margin-top: 0rem;
}
.inno-title{
  font-size: 2rem;
  margin-top: 4rem;
  text-transform: uppercase;
}
.inno-content{
  position: relative;
  margin-top: 2rem;
  padding-bottom: 4rem;
}
.inno-content img{
  width: 100% !important;
}
.inno-back-top{
  position: absolute;
  bottom: 1rem;
  right: 0rem;
  cursor: pointer;
}
.detail-text{
  display: inline-block;
}
</style>