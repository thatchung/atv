<template>
  <div>
    <div id="scrollTop"></div>
    <Header />
    <div id="main" style="min-height: calc(100vh - 155px);padding-top: 70px;">
      <nuxt />
    </div>
    <Footer ref="footer"/>
    <a href="#" id="btnScrollTop" class="d-flex align-items-center justify-content-center">
      <i class="icon-top-24"></i>
    </a>
    <div id="fb-root"></div>
  </div>
</template>

<script>
import Header from "~/components/header.vue"
import Footer from "~/components/footer.vue"
import general from "~/mixins/general"

export default {
  data() {
    return {
      timeclose: 5,
      is_loading: false
    }
  },
  mixins: [general],
  components: {
    Header,
    Footer
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
