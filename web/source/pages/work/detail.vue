<template>
  <div class="container">
    <h2 class="section-title">
      Work
    </h2>
    <div class="line-all" />
    <div class="work-back-content" @click="$router.back()">
      <b-icon-arrow-left />
      Back
    </div>
    <div class="work-date-content">
      {{ s_work ? s_work.create_date : work.create_date }}
    </div>
    <h1 class="work-title font-pp-bold">
      {{ s_work ? s_work.title : work.title }}
    </h1>
    <div v-if="!isMobile" class="work-info">
      <div class="work-info">
        <div class="detail-text">
          Year: {{ work.year }}
        </div>
        /
        <div class="detail-text">
          Year: {{ work.area }}m2
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Type of project: {{ work.category | categoryFilter }}
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Location: {{ work.address ? work.address : work.location }}
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Scope of work : {{ work.scope }}
        </div>
      </div>
    </div>
    <div class="work-content">
      <div class="work-content-text white-space-word" v-html="html_content" />
      <div class="back-top" @click="toTopAction">
        <b-icon-arrow-up />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { marked } from 'marked'
import ApiService from '@/service/api.service'
import general from "~/mixins/general"

export default {
  name: 'IndexPage',
  mixins: [general],
  async asyncData({ route, req, app, redirect }) {
    let res = await ApiService.request({
      method: 'get',
      url: `works?url=${route.params.id}`
    })
    let item = {}
    if (res && res.length > 0) {
      item = res[0]
      item.titleShare = res[0].title
      item.description = res[0].content
      item.image = res[0].thub ? res[0].thub.url : ''
      item.current_url = res[0].url
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
          ? this.s_work.name
          : "ATV - Công ty Cổ Phần Quản Lý Xây Dựng ATV",
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
  mounted() {
    this.checkMobile()
    this.loadData()
  },
  methods: {
    ...mapActions({
      getWorkBySlug: "work/getWorkBySlug"
    }),
    async loadData() {
      if (this.$route.params.id) {
        await this.getWorkBySlug({ url: this.$route.params.id })
        this.html_content = marked.parse(this.work.content.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
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
  font-size: 4rem;
  margin-top: 2rem;
}
.work-back-content{
  display: inline-block;
  float: left;
  margin-top: 0rem;
  cursor: pointer;
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
}
.work-content{
  position: relative;
  padding-bottom: 4rem;
  margin-top: 2rem;
}
.work-content img{
  width: 100% !important;
}
.back-top{
  position: absolute;
  bottom: 1rem;
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