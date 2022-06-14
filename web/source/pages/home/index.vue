<template>
  <div>
    <!-- <Loading /> -->
    <Banner />
    <Work />
    <Who />
    <Client />
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
import Client from "~/components/home/client.vue"
// import Loading from "~/components/loading.vue"

export default {
  name: 'IndexPage',
  components: {
    Banner,
    Work,
    Who,
    Innovation,
    Contact,
    Client
    // Loading
  },
  // computed: {
  //   ...mapGetters({
  //     listWork: "work/getListWork"
  //   }),
  // },
  mounted() {
    if (!this.$route.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
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
