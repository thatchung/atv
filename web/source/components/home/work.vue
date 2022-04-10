<template>
  <div class="container section-work">
    <h2 class="section-title">
      Work
    </h2>
    <div class="line-all" />
    <nuxt-link to="/work">
      <div class="link-page">
        All <b-icon-arrow-right />
      </div>
    </nuxt-link>
    <VueSlickCarousel v-bind="settings" class="list-work">
      <div v-for="index in 10" :key="index" class="work-slider-item">
        <Item />
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
export default {
  name: 'IndexPage',
  components: {
    Item
  },
  data() {
    return {
      settings:{
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": this.isMobile() ? 1 : 3,
        "slidesToScroll": 1
      }
    }
  },
  computed: {
    ...mapGetters({
      listWork: "work/getListWork"
    }),
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      getListWork: "work/getListWork"
    }),
    isMobile() {
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
  margin-top: 4rem;
}
.list-work{
  width: calc(100% + 1rem);
  margin-left: -0.5rem;
}
.work-slider-item{
  padding: 0.5rem;
}
.section-title{
  font-size: 4rem;
}
.link-page{
  font-size: 1.4rem;
  text-align: right;
  margin-top: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
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
</style>