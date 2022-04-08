<template>
  <div>
    <Banner />
    <Work />
    <Who />
    <Innovation />
    <Contact />
  </div>
</template>

<script>
import Banner from "~/components/home/BannerTop.vue"
import Work from "~/components/home/Work.vue"
import Who from "~/components/home/Who.vue"
import Innovation from "~/components/home/Innovation.vue"
import Contact from "~/components/home/Contact.vue"

export default {
  name: 'IndexPage',
  components: {
    Banner,
    Work,
    Who,
    Innovation,
    Contact
  }
  // computed: {
  //   ...mapGetters({
  //     listWork: "work/getListWork"
  //   }),
  // },
  // mounted() {
  //   this.loadData()
  // },
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
