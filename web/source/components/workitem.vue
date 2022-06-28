<template>
  <div class="item">
    <nuxt-link :to="'/work/' + work.url">
      <ThumbImage :src="work.image_link ? work.image_link : image" ratio="8-5" :isgray="true" />
    </nuxt-link>
    <nuxt-link :to="'/work/' + work.url">
      <h2 class="w-item-title font-pp-bold">
        <!-- {{ work.title }} -->
        <span v-if="$i18n.locale === 'vn'">{{ work.title_vn ? work.title_vn : work.title }}</span>
        <span v-else>{{ work.title }}</span>
      </h2>
    </nuxt-link>
    <div class="work-info">
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Year') }}: {{ work.year }}
        </div>
        /
        <div class="detail-text">
          {{ $t('Area') }}: {{ work.area }} m<sup>2</sup>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Typeofproject') }}:
          <span v-if="$i18n.locale === 'vn'">{{ work.category_name_vn }}</span>
          <span v-else>{{ work.category_name }}</span>
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          {{ $t('Location') }}:
          <!-- <span v-if="$i18n.locale === 'vn'">{{ work.address_vn }}</span>
          <span v-else>{{ work.address }}</span> -->
          {{ work.locations && work.locations.length > 0 ? 
            ( $i18n.locale === 'vn' ? work.locations[0].name : getLocationFilter(work.locations[0].name) )
            : 'HO CHI MINH' }}
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
import tvkd from 'tieng-viet-khong-dau'
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
          image_link: null,
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
  watch: {
    work: (newVal, oldVal) => {
      if (newVal) {
        const link = newVal.thub.formats.medium ? newVal.thub.formats.medium.url : newVal.thub.url
        newVal.image_link = link
      }
    }
  },
  mounted() {
    const link = this.work.thub.formats.medium ? this.work.thub.formats.medium.url : this.work.thub.url
    this.image = link
  },
  methods: {
    getLocationFilter(state) {
      if(state === 'Phnôm Pênh_Campuchia') {
          return 'Phnompenh_Cambodia'
      } else {
          let stringState = tvkd.c(state)
          return stringState
      }
    }
  }
}
</script>
<style lang="scss">
.w-item-title{
  font-size: 1.5rem;
  margin-top: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 5px;
}
.detail-text{
  display: inline-block;
}
</style>