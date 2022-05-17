<template>
  <div class="container">
    <h2 ref="ournetwork" class="about-where-title">
      {{ $t('OurNetwork') }}
    </h2>
    <div class="line-all" />
    <div class="row" style="margin-top: 2rem;">
      <div class="col-12 col-md-4 about-where-network">
        <div class="about-where-a_name font-pp-bold">
          9PMP - </br>{{ $t('SystematicPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes1') }} </br> {{ $t('WhereNetworkDes2') }}
        </div>
        <a href="https://9pmp.com/" target="_blank">
          <div class="about-see-more">
            {{ $t('SEEMORE') }}
            <img class="img-arrow-right more-arrow" src="/images/a_right.png"></img>
          </div>
        </a>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4 about-where-network">
        <div class="about-where-a_name font-pp-bold">
          The Sentry – </br>{{ $t('TechnicalPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes3') }}
        </div>
        <a href="https://thesentry.com.vn/" target="_blank">
          <div class="about-see-more">
            {{ $t('SEEMORE') }}
            <img class="img-arrow-right more-arrow" src="/images/a_right.png"></img>
          </div>
        </a>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4 about-where-network">
        <div class="about-where-a_name font-pp-bold">
          K-net Design – </br>{{ $t('DesignPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes4') }}</br>{{ $t('WhereNetworkDes5') }}
        </div>
        <a href="https://www.k-netdesign.co.jp/" target="_blank">
          <div class="about-see-more">
            {{ $t('SEEMORE') }}
            <img class="img-arrow-right more-arrow" src="/images/a_right.png"></img>
          </div>
        </a>
      </div>
    </div>
    <h2 ref="ouruniqueness" class="about-where-title">
      {{ $t('OurUniqueness') }}
    </h2>
    <div class="line-all" />
    <div style="margin-top: 2rem;">
      {{ $t('WhereUniquenessDes1') }}
    </div>
    <div class="efficency font-pp-bold">
      {{ $t('PMPEfficency') }}
    </div>
    <div>
      {{ $t('WhereUniquenessDes2') }}
    </div>
    <div>
      {{ $t('WhereUniquenessDes3') }}
    </div>
    <div v-if="!isMobile" class="row where-table" style="margin-top: 1rem;">
      <div class="col-6 col-md-6">
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            01
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Issue') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            02
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Submittal') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            03
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Milestone') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            04
          </div>
          <div class="col-7 col-md-4">
            {{ $t('DMAP') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
      </div>
      <div class="col-6 col-md-6">
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            05
          </div>
          <div class="col-7 col-md-4">
            {{ $t('CostChangeOrder') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            06
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Risk') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            07
          </div>
          <div class="col-7 col-md-4">
            {{ $t('MDailyreport') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            08
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Reports') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
      </div>
    </div>
    <div v-if="isMobile" class="row where-table" style="margin-top: 1rem;">
      <div class="col-12">
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            01
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Issue') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            02
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Submittal') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            03
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Milestone') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            04
          </div>
          <div class="col-7 col-md-4">
            {{ $t('DMAP') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            05
          </div>
          <div class="col-7 col-md-4">
            {{ $t('CostChangeOrder') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            06
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Risk') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            07
          </div>
          <div class="col-7 col-md-4">
            {{ $t('MDailyreport') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            08
          </div>
          <div class="col-7 col-md-4">
            {{ $t('Reports') }}
          </div>
          <div class="col-3 col-md-4">
            <!-- <b-icon-arrow-down /> -->
            <img class="img-arrow-down" src="/images/a_down.png"></img>
          </div>
        </div>
        <div class="line-all-s" />
      </div>
    </div>
    <div ref="process" class="efficency font-pp-bold">
      {{ $t('KuniHasegawaAesthetic') }}
    </div>
    <div class="row">
      <div class="col-12 col-md-6 last-img" style="position: relative;">
        <ThumbImage src="images/kumi.jpg" ratio="16-9" />
      </div>
      <div class="col-12 col-md-6">
        <div class="hase-name font-pp-bold">
          {{ $t('WhereProcessDes1') }}
        </div>
        <div class="hase-des">
          {{ $t('WhereProcessDes2') }}
        </div>
        <div class="hase-des">
          {{ $t('WhereProcessDes3') }}
        </div>
        <div class="back-top" @click="toTopAction">
          <!-- <b-icon-arrow-up /> -->
          <img class="img-arrow-up" src="/images/a_up.png"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import general from "~/mixins/general"
export default {
  name: 'WherePage',
  mixins: [general],
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
    toTopAction () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
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
    }
  }
}
</script>
<style lang="scss">
.about-where-a_name{
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.a_description{
  width: 90%;
}
.about-where-title{
  font-size: 5rem;
  margin-top: 8rem;
  margin-bottom: 1rem;
}
.where-des{
  font-size: 1.3rem;
  margin-top: 2rem;
}
.about-where-network{
  padding-bottom: 4rem;
}
.about-see-more{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 1rem;
  right: 4rem;
  svg{
    margin-left: 1rem;
    font-size: 1.4rem;
  }
}
.line-all-s{
  width: 100%;
  margin: 1rem 0rem;
  border-top: 2px solid #7E8083;
}
.hase-name{
  font-weight: 600;
}
.hase-des{
  margin-top: 2rem;
}
.back-top{
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  cursor: pointer;
}
</style>
