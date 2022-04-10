<template>
  <div class="item">
    <nuxt-link :to="'/work/' + work.url">
      <ThumbImage :src="work.thub" ratio="8-5" />
    </nuxt-link>
    <nuxt-link :to="'/work/' + work.url">
      <h2 class="item-title font-pp-bold">
        {{ work.title }}
      </h2>
    </nuxt-link>
    <div class="work-info">
      <div class="work-info">
        <div class="detail-text">
          Year: {{ work.year }}
        </div>
        /
        <div class="detail-text">
          Year: {{ work.area }}m2
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Type of project: {{ work.type_category }}
        </div>
      </div>
      <div class="work-info">
        <div class="detail-text">
          Location: {{ work.location }}
        </div>
        <nuxt-link :to="'/work/' + work.url">
          <b-icon-arrow-right style="margin-left: 1rem;" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkItem',
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
  // methods: {
  //   ...mapActions({
  //     getListWork: "work/getListWork"
  //   }),
  //   async loadData() {
  //     await this.getListWork()
  //     console.log(this.listWork)
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