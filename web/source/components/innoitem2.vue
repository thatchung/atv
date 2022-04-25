<template>
  <div class="inno-item">
    <div :class="'item-date ' + position">
      {{ item.date }}
    </div>
    <nuxt-link :to="'/innovation/' + item.url">
      <h2 class="item-title-2 font-pp-bold">
        {{ item.title }}
      </h2>
    </nuxt-link>
    <nuxt-link :to="'/innovation/' + item.url">
      <ThumbImage :src="'http://103.39.93.99:1333' + item.thub.url" ratio="8-5" />
    </nuxt-link>
    <div class="item-content">
      {{ description }}
      <nuxt-link :to="'/innovation/' + item.url">
        <!-- <b-icon-arrow-right /> -->
        <img class="img-arrow-right" src="/images/a_right.png"></img>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import general from "~/mixins/general"
export default {
  mixins: [general],
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: 'Viet Creadit Office',
          url: 'imagesae',
          thub: '/images/slide4.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam tetuer nonummy nibh euismod',
          date: 'Dec 27, 2021'
        }
      }
    },
    position: {
      type: String,
      default: 'left-p'
    }
  },
  data() {
    return {
      description: ''
    }
  },
  mounted() {
    let lang = 'en'
    let lland = window.localStorage.getItem('lang')
    if (lland) {
      lang = lland
    }
    if (lang === 'vn') {
      this.description = this.get_excerpt(this.item.description_vn, 150)
    } else {
      this.description = this.get_excerpt(this.item.description, 150)
    }
  }
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