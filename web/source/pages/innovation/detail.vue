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
      <div class="inno-back-top" @click="toTopAction">
        <!-- <b-icon-arrow-up /> -->
        <img class="img-arrow-up" src="/images/a_up.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { marked } from 'marked'
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
  computed: {
    ...mapGetters({
      innovation: "innovation/getInnovation"
    }),
  },
  mounted() {
    this.loadData()
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
          this.html_content = marked.parse(this.innovation.content_vn.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
        } else {
          this.html_content = marked.parse(this.innovation.content.replace(/\/uploads\//g, 'http://103.39.93.99:1333/uploads/'))
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
  font-size: 4rem;
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