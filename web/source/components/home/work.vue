<template>
  <div class="container section-work">
    <h2 class="home-work-section-title">
      {{ $t('Work') }}
    </h2>
    <div class="line-all" />
    <nuxt-link to="/work">
      <div class="link-page">
        {{ $t('All') }} <!-- <b-icon-arrow-right /> -->
        <img class="img-arrow-right effect background-left" src="/images/a_right.png" data-effect="News"></img>
      </div>
    </nuxt-link>
    <VueSlickCarousel v-if="listWork && listWork.length > 0" v-bind="settings" class="list-work">
      <div v-for="(item, index) in listWork" :key="index" class="work-slider-item">
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
  },
  methods: {
    ...mapActions({
      getListWork: "work/getListWork"
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
      await this.getListWork()
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
  svg{
    margin-left: 5px;
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