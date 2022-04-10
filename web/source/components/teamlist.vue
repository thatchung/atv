<template>
  <div class="data-list">
    <div class="ex-title font-pp-bold">
      {{ name }}
    </div>
    <VueSlickCarousel v-bind="settings" class="list-item">
      <div v-for="(item, index) in datas" :key="index" class="item">
        <ThumbImage :src="item.thub" ratio="16-9" />
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
    <div class="ex-description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => {
        return [{
          thub: '/images/slide4.jpg',
          content: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
        }]
      }
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
  },
  mounted() {
    this.description = this.datas[0].content
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