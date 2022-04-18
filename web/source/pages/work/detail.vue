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
      {{ work.create_date }}
    </div>
    <h1 class="work-title font-pp-bold">
      {{ work.title }}
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
import general from "~/mixins/general"

export default {
  name: 'IndexPage',
  mixins: [general],
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
  computed: {
    ...mapGetters({
      work: "work/getWork"
    }),
  },
  mounted() {
    this.loadData()
    this.checkMobile()
  },
  methods: {
    ...mapActions({
      getWorkBySlug: "work/getWorkBySlug"
    }),
    async loadData() {
      if (this.$route.params.id) {
        await this.getWorkBySlug({ url: this.$route.params.id })
        this.html_content = marked.parse(this.work.content.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
        // this.work.content = this.item_default.content
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