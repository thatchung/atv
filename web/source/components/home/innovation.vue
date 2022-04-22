<template>
  <div class="container section-inno">
    <h2 class="section-title">
      Innovation
    </h2>
    <div class="line-all" />
    <nuxt-link to="/innovation">
      <div class="link-page">
        All <!-- <b-icon-arrow-right /> -->
        <img class="img-arrow-right" src="/images/a_right.png"></img>
      </div>
    </nuxt-link>
    <VueSlickCarousel v-if="listInnovation && listInnovation.length > 0" v-bind="settings" class="list-inno">
      <div v-for="(item,index) in listInnovation" :key="index" class="inno-slider-item">
        <Item v-if="!isMobile" :item="item" />
        <Item2 v-if="isMobile" :item="item" />
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
import Item from "~/components/innoitem.vue"
import Item2 from "~/components/innoitem2.vue"
export default {
  name: 'InnoPage',
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
      listData: [{
        id: 1,
        title: 'Crescent Mall C Club Lounge',
        url: 'crescent-mall-c-club-lounge',
        thub: '/images/inno1.jpg',
        description: 'Located at the ground floor of Crescent Mall - one of the deluxe shopping centers in South Saigon, C Club Lounge is where Cresent Mall’s Platinum card holders can enjoy the exclusive perks. To turn the empty space into a luxurious and classy hub for the elites, many innovative methods were utilized during the execution of this VIP lounge.',
        date: 'Dec 27, 2021'
      }],
      isMobile: false
    }
  },
  computed: {
    ...mapGetters({
      listInnovation: "innovation/getListInnovation"
    }),
  },
  mounted() {
    this.loadData()
    this.isMobile = this.checkMobile()
  },
  methods: {
    ...mapActions({
      getListInnovation: "innovation/getListInnovation"
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
      await this.getListInnovation()
    }
  }
}
</script>
<style lang="scss">
.section-inno{
  margin-top: 8rem;
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