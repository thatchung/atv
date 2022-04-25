<template>
  <div class="item">
    <nuxt-link :to="'/work/' + work.url">
      <ThumbImage :src="'http://103.39.93.99:1333' + work.thub.url" ratio="8-5" />
    </nuxt-link>
    <nuxt-link :to="'/work/' + work.url">
      <h2 class="item-title font-pp-bold">
        {{ work.title }}
      </h2>
    </nuxt-link>
    <div class="work-info">
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Year') }} : {{ work.year }}
        </div>
        /
        <div class="detail-text">
          {{ $t('Area') }} : {{ work.area }}m2
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Typeofproject') }} :
            <span v-if="$i18n.locale === 'vn'">{{ work.category | categoryVNFilter }}</span>
            <span v-else >{{ work.category | categoryFilter }}</span>
            <!-- {{ work.category | categoryFilter }} -->
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Location') }} : {{ work.location }}
        </div>
        <nuxt-link :to="'/work/' + work.url">
          <!-- <b-icon-arrow-right style="margin-left: 1rem;" /> -->
          <img class="img-arrow-right" src="/images/a_right.png"></img>
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
          thub: '/images/slide4.jpg',
          type_category: 'Office',
          location: 'Da Nang',
          area: 600,
          year: 2021
        }
      }
    }
  }
  // data() {
  //   return {
  //     isMobile: false
  //   }
  // },
  // mounted() {
  //   this.checkMobile()
  // },
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail-text{
  display: inline-block;
}
</style>