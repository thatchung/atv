<template>
  <div class="container section-client">
    <h2 class="client-title">
      {{ $t('Client') }}
    </h2>
    <div class="line-all" />
    <div class="row">
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/1.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/13.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/11.jpeg" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/5.jpeg" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/3.png" ></img>
      </div>
      <div v-if="!isMobile" class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/15.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/7.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img" src="/images/9.jpeg" ></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
  },
  methods: {
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    }
  }
}
</script>
<style lang="scss">
.section-client{
  margin-top: 4rem;
}
.client-title{
  font-size: 5rem;
}
.client-div{
  min-height: 130px;
  margin-bottom: 1rem;
}
.client-img{
  width: 80%;
  margin: auto;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  &:hover{
    filter: grayscale(0%) !important;
    -webkit-filter: grayscale(0%) !important;
  }
}
@media (max-width: 575px) {

}
</style>