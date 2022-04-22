<template>
  <div class="item">
    <nuxt-link :to="'/work/' + work.url">
      <h2 class="item-title-2 font-pp-bold">
        {{ work.title }}
      </h2>
    </nuxt-link>
    <nuxt-link :to="'/work/' + work.url">
      <ThumbImage :src="'http://103.39.93.99:1333' + work.thub.url" ratio="8-5" />
    </nuxt-link>
    <div class="work-panel">
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
          {{ $t('Typeofproject') }} : {{ work.category | categoryFilter }}
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
}
</script>
<style lang="scss">
.item-title-2{
  margin-top: 0rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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