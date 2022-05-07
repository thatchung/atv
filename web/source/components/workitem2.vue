<template>
  <div class="item">
    <nuxt-link :to="'/work/' + work.url">
      <h2 class="item-title-2 font-pp-bold">
        <!-- {{ work.title }} -->
        <span v-if="$i18n.locale === 'vn'">{{ work.title_vn ? work.title_vn : work.title }}</span>
        <span v-else>{{ work.title }}</span>
      </h2>
    </nuxt-link>
    <nuxt-link :to="'/work/' + work.url">
      <ThumbImage :src="image" ratio="8-5" :isgray="true" />
    </nuxt-link>
    <div class="work-panel">
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
  },
  data() {
    return {
      image: ''
    }
  },
  mounted() {
    const link = this.work.thub.formats.medium ? this.work.thub.formats.medium.url : this.work.thub.url
    this.image = this.$store.state.common.api_host + link
  }
}
</script>
<style lang="scss">
.item-title-2{
  margin-top: 0rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.detail-text{
  display: inline-block;
  font-size: 1rem;
}
.work-panel{
  margin-top: 1rem;
}
@media (max-width: 575px) {
  .list-work .slick-arrow{
    margin-top: -40px !important;
  }
}
</style>