<template>
  <div class="container section-inno">
    <h2 class="section-title">Innovation</h2>
    <div class="line-all"></div>
    <nuxt-link to="/innovation">
      <div class="link-page">All <b-icon-arrow-right /></div>
    </nuxt-link>
    <VueSlickCarousel v-bind="settings" class="list-inno">
      <div class="inno-slider-item" v-for="index in 10" :key="index">
        <Item></Item>
      </div>
      <template slot="prevArrow">
        <div class="pre-arrow">
          <img src="/images/left.jpg"/>
        </div>
      </template>
      <template slot="nextArrow">
        <div class="next-arrow">
          <img src="/images/right.jpg"/>
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Item from "~/components/InnoItem.vue"
export default {
  name: 'InnoPage',
  components: {
    Item
  },
  computed: {
    ...mapGetters({
      listInnovation: "innovation/getListInnovation"
    }),
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
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      getListInnovation: "innovation/getListInnovation"
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
      await this.getListInnovation()
    }
  }
}
</script>
<style lang="scss">
.section-inno{
  margin-top: 4rem;
}
.list-inno{
  width: calc(100% + 1rem);
  margin-left: -0.5rem;
}
.inno-slider-item{
  padding: 0.5rem;
}
.section-title{
  font-size: 4rem;
}
.link-page{
  font-size: 1.4rem;
  text-align: right;
  margin-top: -1rem;
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