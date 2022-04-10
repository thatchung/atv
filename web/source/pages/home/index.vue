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
import Banner from "~/components/home/bannertop.vue"
import Work from "~/components/home/work.vue"
import Who from "~/components/home/who.vue"
import Innovation from "~/components/home/innovation.vue"
import Contact from "~/components/home/contact.vue"

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
