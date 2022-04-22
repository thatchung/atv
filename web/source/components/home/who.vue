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
            {{ $t('MISSION') }}
          </div>
          <div class="description">
           {{ $t('WhoDes1') }} </br> {{ $t('WhoDes2') }}
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            {{ $t('VISION') }}
          </div>
          <div class="description">
            {{ $t('WhoDes3') }} </br> {{ $t('WhoDes4') }} </br>
            {{ $t('WhoDes5') }}</br> {{ $t('WhoDes6') }}
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            {{ $t('COREVALUES') }}
          </div>
          <div class="description">
            {{ $t('WhoDes7') }}</br>{{ $t('WhoDes8') }}
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
      <div class="col-12 col-sm-6 col-md-6 col-lg-8" style="padding-right: 2rem;">
        <div v-if="isMobile" class="who-name font-pp-bold">
          {{ $t('EXPERIENCEDLEADERS') }}
        </div>
        <nuxt-link to="/about">
          <ThumbImage :src="'/images/lead.jpg'" ratio="16-9" />
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
        <nuxt-link to="/about">
          <div class="who-more">
            {{ $t('SEEMORE') }}
            <img class="img-arrow-right" src="/images/a_right.png"></img>
          </div>
        </nuxt-link>
      </div>
    </div>
    <h2 class="what-title">
      {{ $t('Whatwedo') }}
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="what-text font-pp-bold">
      {{ $t('HomeWhatDes1') }} </br> {{ $t('HomeWhatDes2') }} </br>
      {{ $t('HomeWhatDes3') }}
    </div>
    <div v-if="isMobile" class="what-text font-pp-bold">
     {{ $t('HomeWhatDesMobile1') }}
    </div>
    <div class="line-all" />
    <div v-if="!isMobile" class="what-text font-pp-bold">
      {{ $t('HomeWhatDes4') }}</br> {{ $t('HomeWhatDes5') }} </br>
      {{ $t('HomeWhatDes6') }}</br> {{ $t('HomeWhatDes7') }}
    </div>
    <div v-if="isMobile" class="what-text font-pp-bold">
      {{ $t('HomeWhatDesMobile2') }}
    </div>
    <nuxt-link to="/about">
      <div class="what-more">
        {{ $t('SEEMORE') }}
        <img class="img-arrow-right" src="/images/a_right.png"></img>
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
.section-who{
  margin-top: 8rem;
  padding-bottom: 4rem;
}
.home-who-section-title{
  font-size: 4rem;
}
.what-title{
  font-size: 4rem;
  margin-top: 8rem;
}
.name{
  font-size: 1.5rem;
}
.description{
  font-size: 1rem;
}
.who-name{
  margin-top: 1rem;
  font-size: 1.5rem;
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
  bottom: 1rem;
  svg{
    margin-left: 1rem;
    font-size: 1.4rem;
  }
}
.what-text{
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.what-more{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 2rem;
  right: 15px;
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
}
</style>