<template>
  <div class="container">
    <h2 ref="whatwedo" class="about-what-section-title">
      {{ $t('Whatwedo') }}
    </h2>
    <div class="line-all" />
    <div class="about-what-description">
      {{ $t('HomeWhatDesMobile1') }}
    </div>
    <div class="line-all line-animation" />
    <div class="about-what-description">
      {{ $t('HomeWhatDesMobile2') }}
    </div>

    <div class="about-what-design-title font-pp-bold">
      {{ $t('THEDESIGNBUILDADVANTAGES') }}
    </div>
    <div class="line-all" style="margin: 2rem 0rem 1rem 0rem;" />
    <div v-if="!isMobile" class="row" style="margin-bottom: 3rem;">
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-2 col-md-2">
            01
          </div>
          <div class="col-10 col-md-10">
            {{ $t('FasterDelivery') }}
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-2 col-md-2">
            03
          </div>
          <div class="col-10 col-md-10">
            {{ $t('BetterQuality') }}
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-2 col-md-2">
            05
          </div>
          <div class="col-10 col-md-10">
            {{ $t('DecreasedAdministrativeBurden') }}
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-2 col-md-2">
            02
          </div>
          <div class="col-10 col-md-10">
            {{ $t('SingularResponsibility') }}
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-2 col-md-2">
            04
          </div>
          <div class="col-10 col-md-10">
            {{ $t('CostControl') }}
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-2 col-md-2">
            06
          </div>
          <div class="col-10 col-md-10">
            {{ $t('ReducedRisk') }}
          </div>
        </div>
        <div class="line-all-what" />
      </div>
    </div>
    <div v-if="isMobile" class="row" style="margin-bottom: 3rem;">
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            01
          </div>
          <div class="col-9 col-md-9">
            {{ $t('FasterDelivery') }}
          </div>
          <div class="line-all-what" />
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            02
          </div>
          <div class="col-9 col-md-9">
            {{ $t('SingularResponsibility') }}
          </div>
          <div class="line-all-what" />
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            03
          </div>
          <div class="col-9 col-md-9">
            {{ $t('BetterQuality') }}
          </div>
          <div class="line-all-what" />
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            04
          </div>
          <div class="col-9 col-md-9">
            {{ $t('CostControl') }}
          </div>
          <div class="line-all-what" />
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            05
          </div>
          <div class="col-9 col-md-9">
            {{ $t('ReducedRisk') }}
          </div>
          <div class="line-all-what" />
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            06
          </div>
          <div class="col-9 col-md-9">
            {{ $t('DecreasedAdministrativeBurden') }}
          </div>
          <div class="line-all-what" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatPage',
  data() {
    return {
      isMobile: false
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.hash) {
        this.goto(this.$route.hash.replace('#', ''))
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  },
  mounted() {
    this.isMobile = this.checkMobile()
    this.animateOnScroll()
    if (this.$route.hash) {
      this.goto(this.$route.hash.replace('#', ''))
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  methods: {
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    },
    goto(hash) {
      const el = this.$refs[('' + hash)]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          let yy = window.pageYOffset
          window.scrollTo({ top: yy - 90, behavior: 'smooth' })
        }, 900)
      }
    },
    animateOnScroll() {
      this.$gsap.to('.about-what-description', {
        scrollTrigger:{
            trigger: '.about-what-description',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        ease: "expo.out",
        y:0,
        duration: 1.5
      })
      this.$gsap.fromTo(`.line-animation`, {
        opacity:0,
        y: 200
      }, {
        scrollTrigger:{
          trigger: '.line-animation',
          toggleActions: 'restart none none reset'
        },
        opacity:1,
        y: 0,
        ease: "expo.out",
        duration: 1.5
      })
    }
  }
}
</script>
<style lang="scss">
.about-what-section-title{
  font-size: 5rem;
  margin-top: 8rem;
}
.about-what-description{
  font-size: 2rem;
  font-weight: 600;
  margin: 2.5rem 0rem;
  width: 80%;
  transform: translate(0px,200px);
  opacity: 0;
}
.about-what-design-title{
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 4rem;
}
.line-all-what{
  width: 100%;
  margin: 0.5rem 0rem;
  border-top: 1.5px solid #7E8083;
}
@media (max-width: 575px) {
  .about-what-design-title{
    font-size: 2rem;
  }
  .about-what-description{
    width: 100%;
  }
}
</style>