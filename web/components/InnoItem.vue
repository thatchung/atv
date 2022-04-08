<template>
  <div class="item">
    <div :class="'item-date ' + position">{{ item.date }}</div>
    <nuxt-link :to="'/innovation/' + item.url">
      <ThumbImage :src="item.thub" ratio="8-5"></ThumbImage>
    </nuxt-link>
    <nuxt-link :to="'/innovation/' + item.url">
      <h2 class="item-title font-pp-bold">{{ item.title}}</h2>
    </nuxt-link>
    <div class="item-content">{{ item.content }}
      <nuxt-link :to="'/innovation/' + item.url"><b-icon-arrow-right /></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'innoItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: 'Viet Creadit Office',
          url: 'imagesae',
          thub: '/images/slide4.jpg',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam tetuer nonummy nibh euismod',
          date: 'Dec 27, 2021'
        }
      }
    },
    position: {
      type: String,
      default: 'left-p'
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
.detail-text{
  display: inline-block;
}
.item-date{
  margin-bottom: 0.5rem;
}
.item-title{
  font-size: 1.5rem;
  margin-top: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-content svg{
  margin-left: 0.5rem;
}
.left-p{
  float: left;
}
.right-p{
  float: right;
}
</style>