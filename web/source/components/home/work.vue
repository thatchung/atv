<template>
  <div class="container section-work">
    <h2 class="home-work-section-title">
      {{ $t('Work') }}
    </h2>
    <div class="line-all" />
    <nuxt-link to="/work">
      <div class="link-page">
        {{ $t('All') }} <!-- <b-icon-arrow-right /> -->
        <img class="img-arrow-right page-arrow" src="/images/a_right.png"></img>
      </div>
    </nuxt-link>
    <VueSlickCarousel v-if="listWork && listWork.length > 0" v-bind="settings" class="list-work">
      <div v-for="(item,index) in listWork" :key="index" class="inno-slider-item">
        <Item v-if="!isMobile" :work="item" />
        <Item2 v-if="isMobile" :work="item" />
      </div>
      <template slot="prevArrow">
        <div class="pre-arrow">
          <img src="/images/left.jpg"></img>
        </div>
      </template>
      <template slot="nextArrow">
        <div class="next-arrow">
          <img src="/images/right.jpg"></img>
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Item from "~/components/workitem.vue"
import Item2 from "~/components/workitem2.vue"

export default {
  name: 'IndexPage',
  components: {
    Item,
    Item2
  },
  data() {
    return {
      settings:{
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": this.checkMobile() ? 1 : 3,
        "slidesToScroll": 1
      },
      isMobile: false
      // listDataShow: []
    }
  },
  computed: {
    ...mapGetters({
      listWork: "work/getListWork"
    }),
  },
  async mounted() {
    await this.loadData()
    this.isMobile = this.checkMobile()
    // let temp = []
    // for(let i = 0; i < this.listWork.length; i++) {
    //   if( i === 0 || (i % 6) > 0) {
    //     temp.push(this.listWork[i])
    //     if (i === this.listWork.length - 1) {
    //       this.listDataShow.push(temp)
    //       break
    //     }
    //   } else if ( i > 0 && (i % 6) === 0 ) {
    //     this.listDataShow.push(temp)
    //     temp = []
    //     temp.push(this.listWork[i])
    //   }
    // }
  },
  methods: {
    ...mapActions({
      // getListWork: "work/getListWork",
      getListFeatured: "work/getListFeatured"
    }),
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    },
    async loadData() {
      // const query = {
      //   _sort: 'id:DESC'
      // }
      // await this.getListWork({ params :query })
      this.getListFeatured()
    }
  }
}
</script>
<style lang="scss">
.section-work{
  margin-top: 5rem;
}
.list-work{
  width: calc(100% + 1rem);
  margin-left: -0.5rem;
}
.work-info{
  svg{
    font-size: 1.4rem;
  }
}
.work-slider-item{
  padding: 0.5rem;
  width: calc(100% / 3);
  display: inline-block;
}
.home-work-section-title{
  font-size: 5rem;
}
.link-page{
  font-size: 1.4rem;
  text-align: right;
  margin-top: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-bottom: 1rem;
  position: relative;
  padding-right: 2rem;
}
.page-arrow{
  position: absolute;
  top: 1rem;
  right: 0rem;
  &:hover{
    animation: arrow-left 2s linear infinite;
  }
}
.more-arrow{
  position: absolute;
  top: 0.7rem;
  right: -2rem;
  &:hover{
    animation: more-left 2s linear infinite;
  }
}
.pre-arrow{
  z-index: 2;
  margin-top: -25px;
  margin-left: 45px;
  &:before {
    display: none;
  }
  img{
    width: 50px;
  }
}
.next-arrow{
  z-index: 2;
  margin-top: -25px;
  margin-right: 75px;
  &:before {
    display: none;
  }
  img{
    width: 50px;
  }
}
@media (max-width: 575px) {
  .section-work{
    margin-top: 3rem;
  }
}
</style>