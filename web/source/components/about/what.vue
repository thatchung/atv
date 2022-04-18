<template>
  <div class="container">
    <h2 ref="whatwedo" class="about-what-section-title">
      What we do ?
    </h2>
    <div class="line-all" />
    <div class="about-what-description">
      ONE ENTITY, ONE CONTRACT, ONE UNIFIED FLOW OF WORK FROM INITIAL CONCEPT THROUGH COMPLETION. ONE INTEGRATED TEAM.
    </div>
    <div class="line-all" />
    <div class="about-what-description">
      DESIGN - BUILD IS A METHOD OF PROJECT DELIVERY IN WHICH ONE ENTITY - THE DESIGN-BUILD TEAM - WORKS UNDER A SINGLE CONTRACT WITH THE PROJECT OWNER.
    </div>

    <div class="about-what-design-title font-pp-bold">
      THE DESIGN-BUILD ADVANTAGES
    </div>
    <div class="line-all" style="margin: 2rem 0rem 1rem 0rem;" />
    <div v-if="!isMobile" class="row">
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-3 col-md-3">
            01
          </div>
          <div class="col-9 col-md-9">
            Faster Delivery
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-3 col-md-3">
            03
          </div>
          <div class="col-9 col-md-9">
            Better Quality
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-3 col-md-3">
            05
          </div>
          <div class="col-9 col-md-9">
            Decreased Administrative Burden
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-3 col-md-3">
            02
          </div>
          <div class="col-9 col-md-9">
            Singular Responsibility
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-3 col-md-3">
            04
          </div>
          <div class="col-9 col-md-9">
            Cost Control
          </div>
        </div>
        <div class="line-all-what" />
      </div>
      <div class="col-4 col-md-4">
        <div class="row">
          <div class="col-3 col-md-3">
            06
          </div>
          <div class="col-9 col-md-9">
            Reduced Risk
          </div>
        </div>
        <div class="line-all-what" />
      </div>
    </div>
    <div v-if="isMobile" class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3 col-md-3">
            01
          </div>
          <div class="col-9 col-md-9">
            Faster Delivery
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
            Singular Responsibility
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
            Better Quality
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
            Cost Control
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
            Reduced Risk
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
            Decreased Administrative Burden
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
      }
    }
  },
  mounted() {
    this.isMobile = this.checkMobile()
    if (this.$route.hash) {
      this.goto(this.$route.hash.replace('#', ''))
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
      }
    }
  }
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.about-what-section-title{
  font-size: 5rem;
  margin-top: 2rem;
}
.about-what-description{
  font-size: 2rem;
  font-weight: 600;
  margin: 2.5rem 0rem;
}
.about-what-design-title{
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 4rem;
}
.line-all-what{
  width: 100%;
  margin: 0.5rem 0rem;
  border-top: 2px solid #7E8083;
}
@media (max-width: 575px) {
  .about-what-design-title{
    font-size: 2rem;
  }
}
</style>