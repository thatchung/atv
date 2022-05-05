<template>
  <div class="container section-client">
    <h2 class="client-title">
      {{ $t('Client') }}
    </h2>
    <div class="line-all" />
    <div class="row" style="margin-top: 3rem;">
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img client-img1" src="/images/1.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img client-img2" src="/images/13.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img client-img3" src="/images/11.jpeg" ></img>
      </div>
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img client-img4" src="/images/5.jpeg" ></img>
      </div>
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img client-img5" src="/images/3.png" ></img>
      </div>
      <div v-if="!isMobile" class="client-div col-6 col-md-2 justify-content-center">
      </div>
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img  client-img1" src="/images/15.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 justify-content-center">
        <img class="client-img  client-img2" src="/images/7.png" ></img>
      </div>
      <div class="client-div col-6 col-md-2 d-flex align-items-center justify-content-center">
        <img class="client-img client-img-last client-img3" src="/images/9.jpeg" ></img>
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
    this.animateOnScroll()
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
    },
    animateOnScroll() {
      this.$gsap.fromTo(`.client-img1`, {
        opacity:0,
        x: -100
      }, {
        scrollTrigger:{
          trigger: '.client-img1',
          toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        x:0,
        duration: 2
      })
      this.$gsap.fromTo(`.client-img2`, {
        opacity:0,
        x: -150
      }, {
        scrollTrigger:{
          trigger: '.client-img2',
          toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        x:0,
        duration: 2
      })
      this.$gsap.fromTo(`.client-img3`, {
        opacity:0,
        x: -200
      }, {
        scrollTrigger:{
          trigger: '.client-img3',
          toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        x:0,
        duration: 1.8
      })
      this.$gsap.fromTo(`.client-img4`, {
        opacity:0,
        x: -250
      }, {
        scrollTrigger:{
          trigger: '.client-img4',
          toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        x:0,
        duration: 1.8
      })
      this.$gsap.fromTo(`.client-img5`, {
        opacity:0,
        x: -300
      }, {
        scrollTrigger:{
          trigger: '.client-img4',
          toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        x:0,
        duration: 1.8
      })
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
  width: 60%;
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
.client-img-last{
  width: 100%;
}
@media (max-width: 575px) {

}
</style>