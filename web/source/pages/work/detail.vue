<template>
  <div class="container">
    <h2 class="section-title">
      {{ $t('Work') }}
    </h2>
    <div class="line-all" />
    <div class="work-back-content" @click="$router.back()">
      <!-- <b-icon-arrow-left /> -->
      <img class="img-arrow-left" src="/images/a_left.png"></img>
      {{ $t('Back') }}
    </div>
    <div class="work-date-content">
      {{ s_work ? s_work.create_date : work.create_date }}
    </div>
    <h1 class="work-title font-pp-bold">
      <!-- {{ s_work ? s_work.title : work.title }} -->
      <span v-if="$i18n.locale === 'vn'">{{ s_work ?
        ( s_work.title_vn ? s_work.title_vn : s_work.title )
        : ( work.title_vn ? work.title_vn : work.title ) }}</span>
      <span v-else>{{ s_work ? s_work.title : work.title }}</span>
    </h1>
    <div v-if="!isMobile" class="work-info">
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Year') }}: {{ work.year }}
        </div>
        /
        <div class="detail-text">
          {{ $t('Area') }}: {{ work.area }} m<sup>2</sup>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Typeofproject') }} :
            <span v-if="$i18n.locale === 'vn'">{{ work.category_name_vn }}</span>
            <span v-else >{{ work.category_name }}</span>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Location') }}:
          <span v-if="$i18n.locale === 'vn'">{{ work.address_vn }}</span>
          <span v-else>{{ work.address }}</span>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Scopeofwork') }}:
          <span v-if="$i18n.locale === 'vn'">{{ work.scope_vn }}</span>
          <span v-else>{{ work.scope }}</span>
        </div>
      </div>
    </div>
    <div class="work-content">
      <div class="work-content-text white-space-word" v-html="html_content" />
      <div class="work-back-top" @click="toTopAction">
        <!-- <b-icon-arrow-up /> -->
        <img class="img-arrow-up" src="/images/a_up.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { marked } from 'marked'
import ApiService from '@/service/api.service'
import { stripHtml } from 'string-strip-html'
import general from "~/mixins/general"

export default {
  name: 'IndexPage',
  mixins: [general],
  async asyncData({ route, req, app, redirect, store }) {
    let res = await ApiService.request({
      method: 'get',
      // url: store.state.common.api_host + `/works?url=${route.params.id}`
      url: `/api/works?url=${data.url}`
    })
    let item = {}
    if (res && res.length > 0) {
      item = res[0]
      item.titleShare = res[0].title
      item.description = stripHtml(marked.parse(res[0].content)).result
      item.image = res[0].thub ? store.state.common.api_host + res[0].thub.url : ''
      item.current_url = store.state.common.api_host + '/' + res[0].url
    }
    return { s_work: item }
  },
  data() {
    return {
      isMobile: false,
      item_default:{
        title: 'Harley Davidson Da Nang',
        url: '/images/slide4.jpg',
        thub: '/images/slide4.jpg',
        category: 'Office',
        location: 'Da Nang',
        create_date: 'December 27, 2021',
        area: 600,
        year: 2021,
        content: ''
      },
      html_content: ''
    }
  },
  head() {
    let headJson = {
      title:
        this.s_work !== undefined
          ? this.s_work.titleShare
          : "AVT - Công ty Cổ Phần Quản Lý Xây Dựng AVT",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.s_work !== undefined ? this.s_work.titleShare : ""
        },
        {
          hid: "description",
          property: "description",
          content: this.s_work !== undefined ? this.s_work.description : ""
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.s_work !== undefined ? this.s_work.description : ""
        },
        {
          hid: "robots",
          property: "robots",
          content:
            this.s_work !== undefined && this.s_work.meta_robots
              ? this.s_work.meta_robots
              : "INDEX,FOLLOW"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            this.s_work !== undefined && this.s_work.image !== ""
              ? this.s_work.image
              : ""
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.s_work !== undefined ? this.s_work.current_url : ""
        },
        {
          hid: "keywords",
          property: "keywords",
          content: this.s_work !== undefined ? this.s_work.keywords : ""
        }
      ],
      link: [
        {
          rel: "canonical",
          href: this.s_work.current_url
        }
      ]
    }
    return headJson
  },
  computed: {
    ...mapGetters({
      work: "work/getWork"
    }),
  },
  // jsonld() {
  //   return {
  //     "@context": "https://schema.org/",
  //     "@type": "Review",
  //     itemReviewed: {
  //       "@type": "Restaurant",
  //       image: this.review !== undefined ? this.review.image : "",
  //       name: this.review !== undefined ? this.review.place_name : "",
  //       priceRange:
  //         this.review && this.review.avg_cost
  //           ? `${this.review.avg_cost} đồng/người`
  //           : "",
  //       address: {
  //         "@type": "PostalAddress",
  //         streetAddress:
  //           this.review !== undefined ? this.review.place_full_address : "",
  //         addressCountry: {
  //           "@type": "Country",
  //           name: "Việt Nam"
  //         }
  //       }
  //     },
  //     reviewRating: {
  //       "@type": "Rating",
  //       bestRating: "5",
  //       worstRating: "1",
  //       ratingValue: this.data ?
  //           ( (this.data.overview_rating / 2) <= 1 ? 1
  //             : (this.data.overview_rating / 2) > 5 ? 5 : (this.data.overview_rating / 2) )
  //           : 1,
  //       reviewCount: this.review ? this.review.view_count : 0
  //     },
  //     name:
  //       this.review !== undefined
  //         ? this.review.titleShare
  //         : "Riviu - Ẩm Thực & Đời Sống",
  //     author: {
  //       "@type": "Person",
  //       name:
  //         this.review !== undefined ? this.review.author_name : "Thánh Riviu"
  //     },
  //     reviewBody:
  //       this.review !== undefined
  //         ? this.review.body
  //         : "Riviu - Ẩm Thực & Đời Sống",
  //     publisher: {
  //       "@type": "Organization",
  //       name: "Riviu - Ẩm Thực & Đời Sống"
  //     }
  //   };
  // },
  watch: {
    '$i18n.locale': function(newVal, oldVal) {
      if (this.work && this.work.content) {
        let lang = 'en'
        let lland = window.localStorage.getItem('lang')
        if (lland) {
          lang = lland
        }
        if (lang === 'vn') {
          this.html_content = marked.parse(this.work.content_vn.replace(/\/uploads\//g, `${this.$store.state.common.api_host}/uploads/`))
        } else {
          this.html_content = marked.parse(this.work.content.replace(/\/uploads\//g, `${this.$store.state.common.api_host}/uploads/`))
        }
      }
    }
  },
  mounted() {
    this.checkMobile()
    this.loadData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  methods: {
    ...mapActions({
      getWorkBySlug: "work/getWorkBySlug"
    }),
    async loadData() {
      if (this.$route.params.id) {
        await this.getWorkBySlug({ url: this.$route.params.id })
        let lang = 'en'
        let lland = window.localStorage.getItem('lang')
        if (lland) {
          lang = lland
        }
        if (lang === 'vn') {
          this.html_content = marked.parse(this.work.content_vn.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
        } else {
          this.html_content = marked.parse(this.work.content.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
        }
      }
    },
    toTopAction () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    }
  }
}
</script>
<style lang="scss">
.section-title{
  font-size: 5rem;
  margin-top: 2rem;
}
.work-back-content{
  display: inline-block;
  float: left;
  margin-top: 0rem;
  cursor: pointer;
}
.work-back-content svg{
  font-size: 1.4rem;
}
.work-content-text{
  font-family: 'pp-reg';
  font-size: 1.2rem;
}
.work-date-content{
  display: inline-block;
  float: right;
  margin-top: 0rem;
}
.work-title{
  font-size: 2rem;
  margin-top: 4rem;
  text-transform: uppercase;
}
.work-content{
  position: relative;
  margin-top: 2rem;
  margin-bottom: 5rem;
}
.work-content img{
  width: 100% !important;
}
.work-back-top{
  position: absolute;
  bottom: -3rem;
  right: 0rem;
  cursor: pointer;
}
.detail-text{
  display: inline-block;
}
@media (max-width: 575px) {
  .work-back-content svg{
    margin-right: 5px;
  }
}
</style>