<template>
  <div class="container">
    <h2 ref="wherewework" class="about-where-title">
      {{ $t('Wherewework') }}
    </h2>
    <!-- <ThumbImage src="images/map.jpg" ratio="16-9" /> -->
    <div ref="map" class="map-container">
      <div ref="map1" class="map-item map-item-1" @click="clickMapItem('HA NOI')" />
      <div ref="map2" class="map-item map-item-2" @click="clickMapItem('HAI PHONG')" />
      <div ref="map3" class="map-item map-item-3" @click="clickMapItem('DA NANG')" />
      <div ref="map4" class="map-item map-item-4" @click="clickMapItem('NHA TRANG')" />
      <div ref="map5" class="map-item map-item-5" @click="clickMapItem('BINH DUONG')" />
      <div ref="map6" class="map-item map-item-6" @click="clickMapItem('HO CHI MINH')" />
      <div ref="map7" class="map-item map-item-7" @click="clickMapItem('PHNOMPENH (CAMBODIA)')" />
      <div ref="map8" class="map-item map-item-8" @click="clickMapItem('MY THO')" />
      <img class="map-img" src="images/AVT_MAP.jpg"></img>
    </div>
    <div class="location-list">
      <div
        v-for="(item, index) in locations"
        :key="index"
        :class="'location-item ' + ( item_active === item ? 'location-active' : '' )"
        @click="clickMapItem(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="line-all" />
    <div v-if="!isMobile" class="where-des font-pp-bold">
      {{ $t('HCMElectroluxOffice') }}
    </div>
    <div>
      A Scandinavian-inspired office where everyone can feel the comfort of home
    </div>
    <h2 ref="ournetwork" class="about-where-title">
      {{ $t('OurNetwork') }}
    </h2>
    <div class="line-all" />
    <div class="row" style="margin-top: 2rem;">
      <div class="col-12 col-md-4">
        <div class="about-where-a_name font-pp-bold">
          9PMP - </br>{{ $t('SystematicPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes1') }} </br> {{ $t('WhereNetworkDes2') }} </br>
          {{ $t('WhereNetworkDes3') }} </br> {{ $t('WhereNetworkDes4') }}
        </div>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4">
        <div class="about-where-a_name font-pp-bold">
          The Sentry – </br>{{ $t('TechnicalPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes5') }} </br> {{ $t('WhereNetworkDes6') }} </br> {{ $t('WhereNetworkDes7') }}
        </div>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4">
        <div class="about-where-a_name font-pp-bold">
          K-net Japan – </br>{{ $t('DesignPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes8') }}</br>{{ $t('WhereNetworkDes9') }}</br>
          {{ $t('WhereNetworkDes10') }}</br>{{ $t('WhereNetworkDes11') }}
        </div>
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
export default {
  name: 'WherePage',
  data() {
    return {
      locations: ['HO CHI MINH', 'HA NOI', 'HAI PHONG', 'HA LONG', 'DA NANG', 'BINH DUONG',
        'NHA TRANG', 'BEN TRE', 'MY THO', 'PHNOMPENH (CAMBODIA)'],
      item_active: 'HO CHI MINH',
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
      }
    },
    clickMapItem(item) {
      this.item_active = item
      const el = this.$refs.map
      if (el && this.isMobile) {
        switch (item) {
          case 'HA NOI':
            el.scrollTo({ top: 0, behavior: 'smooth' })
            break
          case 'HAI PHONG':
            el.scrollTo({ top: 0, behavior: 'smooth' })
            break
          case 'HA LONG':
            el.scrollTo({ top: 0, behavior: 'smooth' })
            break
          case 'DA NANG':
            el.scrollTo({ top: 140, behavior: 'smooth' })
            break
          case 'BINH DUONG':
            el.scrollTo({ top: 250, behavior: 'smooth' })
            break
          case 'NHA TRANG':
            el.scrollTo({ top: 220, behavior: 'smooth' })
            break
          case 'HO CHI MINH':
            el.scrollTo({ top: 300, behavior: 'smooth' })
            break
          case 'BEN TRE':
            el.scrollTo({ top: 300, behavior: 'smooth' })
            break
          case 'MY THO':
            el.scrollTo({ top: 300, behavior: 'smooth' })
            break
          case 'PHNOMPENH (CAMBODIA)':
            el.scrollTo({ top: 240, behavior: 'smooth' })
            break
          default:
            el.scrollTo({ top: 300, behavior: 'smooth' })
        }
      } else if (el && !this.isMobile) {
        switch (item) {
          case 'HA NOI':
            el.scrollTo({ top: 0, behavior: 'smooth' })
            break
          case 'HAI PHONG':
            el.scrollTo({ top: 0, behavior: 'smooth' })
            break
          case 'HA LONG':
            el.scrollTo({ top: 0, behavior: 'smooth' })
            break
          case 'DA NANG':
            el.scrollTo({ top: 600, behavior: 'smooth' })
            break
          case 'BINH DUONG':
            el.scrollTo({ top: 970, behavior: 'smooth' })
            break
          case 'NHA TRANG':
            el.scrollTo({ top: 890, behavior: 'smooth' })
            break
          case 'HO CHI MINH':
            el.scrollTo({ top: 1000, behavior: 'smooth' })
            break
          case 'BEN TRE':
            el.scrollTo({ top: 1100, behavior: 'smooth' })
            break
          case 'MY THO':
            el.scrollTo({ top: 1100, behavior: 'smooth' })
            break
          case 'PHNOMPENH (CAMBODIA)':
            el.scrollTo({ top: 1000, behavior: 'smooth' })
            break
          default:
            el.scrollTo({ top: 1000, behavior: 'smooth' })
        }
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
.location-list{
  margin-top: 2rem;
  height: 6rem;
}
.location-active {
  border: 1px solid;
  padding: 0rem 0.5rem;
  height: 40px;
  line-height: 40px;
}
.location-item{
  display: inline-block;
  padding: 0rem 1rem;
  float: left;
  font-size: 1.5rem;
  margin-right: 1rem;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-bottom: 1rem;
}
.efficency{
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
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
.map-container{
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar{
    width: 10px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }
}
.map-img{
  width: 100%;
}
.map-item{
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.map-item-1{
  left: 505px;
  top: 370px;
}
.map-item-2{
  left: 569px;
  top: 400px;
}
.map-item-3{
  left: 727px;
  top: 840px;
}
.map-item-4{
  left: 792px;
  top: 1110px;
}
.map-item-5{
  left: 626px;
  top: 1188px;
}
.map-item-6{
  left: 619px;
  top: 1226px;
}
.map-item-7{
  left: 468px;
  top: 1138px;
}
.map-item-8{
  left: 542px;
  top: 1283px;
}
@media (max-width: 575px) {
  .map-container{
    width: 360px;
    margin: auto;
    height: 200px;
    overflow-y: scroll;
  }
  .map-img{
    width: 100%;
  }
  .map-item{
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .map-item-1{
    left: 167px;
    top: 122px;
  }
  .map-item-2{
    left: 187px;
    top: 129px;
  }
  .map-item-3{
    left: 240px;
    top: 277px;
  }
  .map-item-4{
    left: 261px;
    top: 367px;
  }
  .map-item-5{
    left: 207px;
    top: 391px;
  }
  .map-item-6{
    left: 204px;
    top: 405px;
  }
  .map-item-7{
    left: 155px;
    top: 375px;
  }
  .map-item-8{
    left: 179px;
    top: 424px;
  }
}
</style>