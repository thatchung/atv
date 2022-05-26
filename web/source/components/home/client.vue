<template>
  <div class="container section-client">
    <h2 class="client-title">
      {{ $t('Client') }}
    </h2>
    <div class="line-all" />
    <VueSlickCarousel
      ref="slide1"
      v-bind="settings"
      :focusOnSelect="focusOnSelect"
      @beforeChange="showAnimation"
    >
      <div class="slide-client" style="margin-top: 3rem;">
        <div v-if="!isMobile" class="slide-client-data">
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client1.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client2.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client3.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client4.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client5.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client6.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client7.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client8.jpg"></img>
          </div>
        </div>
        <div v-if="!isMobile" class="slide-client-data">
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client9.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client10.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client11.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client12.png"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client13.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client14.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client15.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client16.png"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client1.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client2.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client3.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client4.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client5.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client6.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client7.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client8.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client9.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client10.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client11.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client12.png"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client13.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client14.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client15.jpg"></img>
          </div>
          <div class="client-div d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client16.png"></img>
          </div>
        </div>
      </div>
      <div class="slide-client" style="margin-top: 3rem;">
        <div v-if="!isMobile" class="slide-client-data">
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client17.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client18.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client19.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client20.jpg"></img>
          </div>
        </div>
        <div v-if="!isMobile" class="slide-client-data">
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client21.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client22.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client23.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client24.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client17.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client18.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client19.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client20.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client21.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client22.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client23.jpg"></img>
          </div>
          <div class="client-div-1 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client24.jpg"></img>
          </div>
        </div>
      </div>
      <div class="slide-client" style="margin-top: 3rem;">
        <div v-if="!isMobile" class="slide-client-data">
          <div class="client-div-2 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client25.jpg"></img>
          </div>
          <div class="client-div-2 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client26.jpg"></img>
          </div>
          <div class="client-div-2 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client27.jpg"></img>
          </div>
          <div class="client-div-2 client-div-2-sub d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client28.jpg"></img>
          </div>
          <div class="client-div-2 client-div-2-sub d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client29.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-2 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client25.jpg"></img>
          </div>
          <div class="client-div-2 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client26.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-2 d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client27.jpg"></img>
          </div>
          <div class="client-div-2 client-div-2-sub d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client28.jpg"></img>
          </div>
        </div>
        <div v-if="isMobile" class="slide-client-data">
          <div class="client-div-2 client-div-2-sub d-flex align-items-center justify-content-center">
            <img class="client-img client-img1" src="/images/client29.jpg"></img>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <img class="slider-left" src="/images/slider-left.png" @click="goLeft()"></img>
    <img class="slider-right" src="/images/slider-right.png" @click="goRight()"></img>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      isMobile: false,
      focusOnSelect: true,
      settings: {
        arrows: true,
        dots: false,
        autoplay: false
        // autoplaySpeed: 5000
      },
      interval: null
    }
  },
  mounted() {
    this.checkMobile()
    this.animateOnScroll()
    this.goNext()
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
    goLeft() {
      this.$refs.slide1.prev()
      clearInterval(this.interval)
      this.goNext()
    },
    goRight() {
      this.$refs.slide1.next()
      clearInterval(this.interval)
      this.goNext()
    },
    showAnimation() {
      this.$gsap.fromTo(`.client-img1`, {
        opacity:0,
        y: 100
      }, {
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 2
      })
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
      // this.$gsap.fromTo(`.client-img2`, {
      //   opacity:0,
      //   x: -150
      // }, {
      //   scrollTrigger:{
      //     trigger: '.client-img2',
      //     toggleActions: 'restart none none reset'
      //   },
      //   opacity:1,
      //   ease: "expo.out",
      //   x:0,
      //   duration: 2
      // })
      // this.$gsap.fromTo(`.client-img3`, {
      //   opacity:0,
      //   x: -200
      // }, {
      //   scrollTrigger:{
      //     trigger: '.client-img3',
      //     toggleActions: 'restart none none reset'
      //   },
      //   opacity:1,
      //   ease: "expo.out",
      //   x:0,
      //   duration: 1.8
      // })
      // this.$gsap.fromTo(`.client-img4`, {
      //   opacity:0,
      //   x: -250
      // }, {
      //   scrollTrigger:{
      //     trigger: '.client-img4',
      //     toggleActions: 'restart none none reset'
      //   },
      //   opacity:1,
      //   ease: "expo.out",
      //   x:0,
      //   duration: 1.8
      // })
      // this.$gsap.fromTo(`.client-img5`, {
      //   opacity:0,
      //   x: -300
      // }, {
      //   scrollTrigger:{
      //     trigger: '.client-img4',
      //     toggleActions: 'restart none none reset'
      //   },
      //   opacity:1,
      //   ease: "expo.out",
      //   x:0,
      //   duration: 1.8
      // })
    },
    goNext() {
      this.interval = setInterval(() => { 
       this.$refs.slide1.next()
      }, 3500)
    }
  }
}
</script>
<style lang="scss">
.section-client{
  margin-top: 4rem;
}
.slider-left{
  width: 10%;
  float: left;
  cursor: pointer;
  margin-top: 3rem;
}
.slider-right{
  width: 10%;
  float: right;
  cursor: pointer;
  margin-top: 3rem;
}
.client-title{
  font-size: 5rem;
}
.client-div{
  min-height: 100px;
  margin-bottom: 1rem;
}
.client-div{
  width: calc(100% / 15);
  .client-img{
    height: auto;
    width: 100%;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
  }
}
.client-div-1{
  width: 14%;
  .client-img{
    height: auto;
    width: 100%;
  }
}
.client-div-2{
  width: calc(18%);
  .client-img{
    height: auto;
    width: 100%;
  }
}
.client-div-2-sub{
  width: 10%;
}
.slide-client-data{
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 2rem;
  min-height: 100px;
}
@media (max-width: 575px) {
  .slide-client-data{
    min-height: 70px;
  }
  .slider-left {
    width: 20%;
    margin-top: 1rem;
  }
  .slider-right {
    width: 20%;
    margin-top: 1rem;
  }
  .client-div {
    width: 18%;
    min-height: 70px;
    margin-bottom: 1rem;
  }
  .client-div-1{
    width: 45%;
    margin-bottom: 1rem;
  }
  .client-div-2{
    width: 45%;
    margin-bottom: 3rem;
  }
  .client-div-2-sub{
    width: 45%;
    margin-bottom: 3rem;
  }
}
</style>