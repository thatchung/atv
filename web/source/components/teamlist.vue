<template>
  <div class="data-list">
    <div class="ex-title font-pp-bold">
      {{ name }}
    </div>
    <!-- <VueSlickCarousel v-bind="settings" class="list-item"> -->
    <!-- <div v-for="(item, index) in datas" :key="index" class="team-item"> -->
    <div class="team-item">
      <ThumbImage :src="thub" ratio="3-2" />
    </div>
    <!-- <template slot="prevArrow">
        <div class="pre-arrow">
          <img src="/images/left.jpg"></img>
        </div>
      </template>
      <template slot="nextArrow">
        <div class="next-arrow">
          <img src="/images/right.jpg"></img>
        </div>
      </template> -->
    <!-- </VueSlickCarousel> -->
    <div class="ex-description">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
    },
    thub: {
      type: String,
      default: '/images/slide4.jpg'
    },
    name: {
      type: String,
      default: 'PROFESSIONAL TEAM'
    }
  },
  data() {
    return {
      description: '',
      settings:{
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  }
  // methods: {
  //   ...mapActions({
  //     getListitem: "item/getListitem"
  //   }),
  //   async loadData() {
  //     await this.getListitem()
  //     console.log(this.listitem)
  //   }
  // }
}
</script>
<style lang="scss">
.ex-title{
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.ex-description{
  margin-top: 1rem;
}
.team-item{
  width: 90% !important;
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