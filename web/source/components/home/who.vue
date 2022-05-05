<template>
  <div class="container section-who">
    <h2 class="home-who-section-title">
      {{ $t('Whoweare') }}
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            {{ $t('VISION') }}
          </div>
          <div class="description">
            {{ $t('WhoDesMoblie1') }}
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            {{ $t('MISSION') }}
          </div>
          <div class="description">
            {{ $t('WhoDesMoblie2') }}
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            {{ $t('COREVALUES') }}
          </div>
          <div class="description">
            {{ $t('WhoDesMoblie3') }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12">
        <div class="row">
          <div class="col-4 name font-pp-bold">
            {{ $t('VISION') }}
          </div>
          <div class="col-8 description">
            {{ $t('WhoDesMoblie1') }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 name font-pp-bold">
            {{ $t('MISSION') }}
          </div>
          <div class="col-8 description">
            {{ $t('WhoDesMoblie2') }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 name font-pp-bold">
            {{ $t('COREVALUES') }}
          </div>
          <div class="col-8 description">
            {{ $t('WhoDesMoblie3') }}
          </div>
        </div>
      </div>
    </div>
    <div class="line-all" />
    <div class="row" style="margin-top: 2rem;">
      <div class="col-12 col-sm-6 col-md-6 col-lg-8">
        <div v-if="isMobile" class="who-name font-pp-bold">
          {{ $t('EXPERIENCEDLEADERS') }}
        </div>
        <nuxt-link to="/about#exper">
          <ThumbImage :src="'/images/proteam2.png'" ratio="16-9" :isgray="true" />
        </nuxt-link>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" style="position: relative;">
        <div v-if="!isMobile" class="who-name font-pp-bold">
          {{ $t('EXPERIENCEDLEADERS') }}
        </div>
        <div class="who-description">
          {{ $t('LeadDes1') }}
          </br>
          {{ $t('LeadDes2') }}
        </div>
        <nuxt-link to="/about#exper">
          <div class="who-more">
            {{ $t('SEEMORE') }}
            <img class="img-arrow-right more-arrow" src="/images/a_right.png"></img>
          </div>
        </nuxt-link>
      </div>
    </div>
    <h2 class="what-title">
      {{ $t('Whatwedo') }}
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="what-text font-pp-bold">
      <div class="what-text-1">
        {{ $t('HomeWhatDes1') }}
      </div>
      <div class="what-text-2">
        {{ $t('HomeWhatDes2') }}
      </div>
      <div class="what-text-3">
        {{ $t('HomeWhatDes3') }}
      </div>
    </div>
    <div v-if="isMobile" class="what-text font-pp-bold">
      <div class="what-text-1-m">
        {{ $t('HomeWhatDesM1') }}
      </div>
      <div class="what-text-2-m">
        {{ $t('HomeWhatDesM2') }}
      </div>
      <div class="what-text-3-m">
        {{ $t('HomeWhatDesM3') }}
      </div>
      <div class="what-text-4-m">
        {{ $t('HomeWhatDesM4') }}
      </div>
    </div>
    <div class="line-all" />
    <div v-if="!isMobile" class="what-text font-pp-bold">
      <div class="what-text-1">
        {{ $t('HomeWhatDes4') }}
      </div>
      <div class="what-text-2">
        {{ $t('HomeWhatDes5') }}
      </div>
      <div class="what-text-3">
        {{ $t('HomeWhatDes6') }}
      </div>
      <div class="what-text-3">
        {{ $t('HomeWhatDes7') }}
      </div>
    </div>
    <div v-if="isMobile" class="what-text font-pp-bold">
      <div class="what-text-1-m">
        {{ $t('HomeWhatDesM5') }}
      </div>
      <div class="what-text-2-m">
        {{ $t('HomeWhatDesM6') }}
      </div>
      <div class="what-text-3-m">
        {{ $t('HomeWhatDesM7') }}
      </div>
      <div class="what-text-4-m">
        {{ $t('HomeWhatDesM8') }}
      </div>
      <div class="what-text-5-m">
        {{ $t('HomeWhatDesM9') }}
      </div>
    </div>
    <nuxt-link to="/about#whatwedo">
      <div class="what-more">
        {{ $t('SEEMORE') }}
        <img class="img-arrow-right more-arrow" src="/images/a_right.png"></img>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'WhoPage',
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
    setTimeout(() => {
      if (this.isMobile) {
        this.animateOnScrollM()
      } else {
        this.animateOnScroll()
      }
    }, 300)
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
      this.$gsap.to('.what-text-1', {
        scrollTrigger:{
            trigger: '.what-text-1',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.to('.what-text-2', {
        scrollTrigger:{
            trigger: '.what-text-2',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.to('.what-text-3', {
        scrollTrigger:{
            trigger: '.what-text-3',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
    },
    animateOnScrollM() {
      this.$gsap.to('.what-text-1-m', {
        scrollTrigger:{
            trigger: '.what-text-1-m',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.to('.what-text-2-m', {
        scrollTrigger:{
            trigger: '.what-text-2-m',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.to('.what-text-3-m', {
        scrollTrigger:{
            trigger: '.what-text-3-m',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.to('.what-text-4-m', {
        scrollTrigger:{
            trigger: '.what-text-4-m',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.to('.what-text-5-m', {
        scrollTrigger:{
            trigger: '.what-text-5-m',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
    }
  }
}
</script>
<style lang="scss">
.section-who{
  margin-top: 8rem;
  padding-bottom: 4rem;
}
.home-who-section-title{
  font-size: 5rem;
}
.what-title{
  font-size: 5rem;
  margin-top: 8rem;
}
.name{
  font-size: 1.5rem;
}
.description{
  font-size: 1rem;
  width: 80%;
}
.who-name{
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.who-description{
  margin-top: 1rem;
  font-size: 1rem;
  text-align: left;
}
.who-more{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 0rem;
  svg{
    margin-left: 1rem;
    font-size: 1.4rem;
  }
}
.what-text{
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 80%;
  overflow: hidden;
  div{
    display: inline-block;
    white-space: nowrap;
  }
  .what-text-1{
    transform: translate(0px,250px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-2{
    transform: translate(0px,280px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-3{
    transform: translate(0px,300px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-1-m{
    transform: translate(0px,150px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-2-m{
    transform: translate(0px,180px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-3-m{
    transform: translate(0px,200px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-4-m{
    transform: translate(0px,180px);
    opacity: 0;
    font-family: "pp-reg";
  }
  .what-text-5-m{
    transform: translate(0px,200px);
    opacity: 0;
    font-family: "pp-reg";
  }
}
.what-more{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  svg{
    margin-left: 1rem;
    font-size: 1.4rem;
  }
}
@media (max-width: 575px) {
  .who-name{
    margin-top: 0rem;
    margin-bottom: 2rem;
  }
  .what-text{
    width: 100%;
  }
}
</style>