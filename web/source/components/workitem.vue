<template>
  <div class="item">
    <nuxt-link :to="'/work/' + work.url">
      <ThumbImage :src="image" ratio="8-5" :isgray="true" />
    </nuxt-link>
    <nuxt-link :to="'/work/' + work.url">
      <h2 class="item-title font-pp-bold">
        <!-- {{ work.title }} -->
        <span v-if="$i18n.locale === 'vn'">{{ work.title_vn ? work.title_vn : work.title }}</span>
        <span v-else>{{ work.title }}</span>
      </h2>
    </nuxt-link>
    <div class="work-info">
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Year') }} : {{ work.year }}
        </div>
        /
        <div class="detail-text">
          {{ $t('Area') }} : {{ work.area }} m<sup>2</sup>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Typeofproject') }} :
          <span v-if="$i18n.locale === 'vn'">{{ work.category_name_vn }}</span>
          <span v-else>{{ work.category_name }}</span>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Location') }} :
          <!-- <span v-if="$i18n.locale === 'vn'">{{ work.address_vn }}</span>
          <span v-else>{{ work.address }}</span> -->
          {{ work.locations && work.locations.length > 0 ? work.locations[0].name : 'HO CHI MINH' }}
        </div>
        <nuxt-link :to="'/work/' + work.url">
          <!-- <b-icon-arrow-right style="margin-left: 1rem;" /> -->
          <img class="img-arrow-right item-arrow" src="/images/a_right.png"></img>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import general from "~/mixins/general"
export default {
  name: 'WorkItem',
  mixins: [general],
  props: {
    work: {
      type: Object,
      default: () => {
        return {
          title: 'Harley Davidson Da Nang',
          url: 'aefawfwa',
          thub: {
            url: '/images/slide4.jpg',
            formats: {}
          },
          type_category: 'Office',
          location: 'Da Nang',
          area: 600,
          year: 2021
        }
      }
    }
  },
  data() {
    return {
      image: ''
    }
  },
  mounted() {
    console.log(this.work)
    const link = this.work.thub.formats.medium ? this.work.thub.formats.medium.url : this.work.thub.url
    this.image = this.$store.state.common.api_host + link
  },
  // methods: {
  //   checkMobile() {
  //     if (!process.server) {
  //       if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //         this.isMobile = true
  //       } else {
  //         this.isMobile = false
  //       }
  //     }
  //   }
  // }
}
</script>
<style lang="scss">
.item-title{
  font-size: 1.5rem;
  margin-top: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 38px;
}
.detail-text{
  display: inline-block;
}
.item-arrow{
  &:hover{
    animation: run-left 2s linear infinite;
  }
}
</style>