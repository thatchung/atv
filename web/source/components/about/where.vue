<template>
  <div class="container">
    <h2 ref="wherewework" class="about-where-title">
      {{ $t('Wherewework') }}
    </h2>
    <!-- <ThumbImage src="images/map.jpg" ratio="16-9" /> -->
    <div ref="map" class="map-container">
      <div ref="mapdata" class="map-container-data">
        <div
          ref="map1"
          :class="`map-item map-item-1 ${item_active === 'HANOI' ? 'scale' : ''}`"
          @mouseover="viewItem('HANOI')"
          @click="clickMapItem('HANOI')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map2"
          :class="`map-item map-item-2 ${item_active === 'HAIPHONG' ? 'scale' : ''}`"
          @mouseover="viewItem('HAIPHONG')"
          @click="clickMapItem('HAIPHONG')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map3"
          :class="`map-item map-item-3 ${item_active === 'DANANG' ? 'scale' : ''}`"
          @mouseover="viewItem('DANANG')"
          @click="clickMapItem('DANANG')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map4"
          :class="`map-item map-item-4 ${item_active === 'NHATRANG' ? 'scale' : ''}`"
          @mouseover="viewItem('NHATRANG')"
          @click="clickMapItem('NHATRANG')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map5"
          :class="`map-item map-item-5 ${item_active === 'BINHDUONG' ? 'scale' : ''}`"
          @mouseover="viewItem('BINHDUONG')"
          @click="clickMapItem('BINHDUONG')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map6"
          :class="`map-item map-item-6 ${item_active === 'HOCHIMINH' ? 'scale' : ''}`"
          @mouseover="viewItem('HOCHIMINH')"
          @click="clickMapItem('HOCHIMINH')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map7"
          :class="`map-item map-item-7 ${item_active === 'PHNOMPENH_CAMBODIA' ? 'scale' : ''}`"
          @mouseover="viewItem('PHNOMPENH_CAMBODIA')"
          @click="clickMapItem('PHNOMPENH_CAMBODIA')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <div
          ref="map8"
          :class="`map-item map-item-8 ${item_active === 'MYTHO' ? 'scale' : ''}`"
          @mouseover="viewItem('MYTHO')"
          @click="clickMapItem('MYTHO')">
          <img class="map-img-item" src="/images/map.png"></img>
        </div>
        <img class="map-img" src="images/AVT_MAP.jpg"></img>
      </div>
    </div>
    <div class="location-list">
      <div
        v-for="(item, index) in locations"
        :key="index"
        :class="'location-item ' + ( item_active === item ? 'location-active' : '' )"
        @click="clickMapItem(item)"
      >
        <!-- {{ item | locationVNFilter }} -->
        <span v-if="$i18n.locale === 'vn'">{{ item | locationVNFilter }}</span>
        <span v-else >{{ item | locationFilter }}</span>
      </div>
    </div>
    <div class="line-all" />
    <div class="where-des font-pp-bold">
      {{ WherePlaceName }}
    </div>
    <div>
      {{ WherePlaceDes }}
    </div>
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
            <img class="img-arrow-right" src="/images/a_right.png"></img>
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
            <img class="img-arrow-right" src="/images/a_right.png"></img>
          </div>
        </a>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4 about-where-network">
        <div class="about-where-a_name font-pp-bold">
          K-net Japan – </br>{{ $t('DesignPartner') }}
        </div>
        <div class="a_description">
          {{ $t('WhereNetworkDes4') }}</br>{{ $t('WhereNetworkDes5') }}
        </div>
        <a href="https://www.k-netdesign.co.jp/" target="_blank">
          <div class="about-see-more">
            {{ $t('SEEMORE') }}
            <img class="img-arrow-right" src="/images/a_right.png"></img>
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
      locations: ['HOCHIMINH', 'HANOI', 'HAIPHONG', 'DANANG', 'BINHDUONG',
        'NHATRANG', 'BENTRE', 'PHNOMPENH_CAMBODIA'],
      item_active: 'HOCHIMINH',
      isMobile: false,
      WherePlaceName: 'Ho Chi Minh City (Electrolux Office)',
      WherePlaceDes: 'A Scandinavian-inspired office where everyone can feel the comfort of home',
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
    },
    clickMapItem(item) {
      let mapheight = this.$refs.mapdata.getBoundingClientRect().height
      this.item_active = item
      const el = this.$refs.map
      if (el && this.isMobile) {
        switch (item) {
          case 'HANOI':
            el.scrollTo({ top: 200, behavior: 'smooth' })
            break
          case 'HAIPHONG':
            el.scrollTo({ top: 200, behavior: 'smooth' })
            break
          case 'HALONG':
            el.scrollTo({ top: 200, behavior: 'smooth' })
            break
          case 'DANANG':
            el.scrollTo({ top: 140, behavior: 'smooth' })
            break
          case 'BINHDUONG':
            el.scrollTo({ top: 250, behavior: 'smooth' })
            break
          case 'NHATRANG':
            el.scrollTo({ top: 220, behavior: 'smooth' })
            break
          case 'HOCHIMINH':
            el.scrollTo({ top: 300, behavior: 'smooth' })
            break
          case 'BENTRE':
            el.scrollTo({ top: 300, behavior: 'smooth' })
            break
          case 'MYTHO':
            el.scrollTo({ top: 300, behavior: 'smooth' })
            break
          case 'PHNOMPENH_CAMBODIA':
            el.scrollTo({ top: 240, behavior: 'smooth' })
            break
          default:
            el.scrollTo({ top: 300, behavior: 'smooth' })
        }
      } else if (el && !this.isMobile) {
        switch (item) {
          case 'HANOI':
            el.scrollTo({ top: mapheight * 0.126811, behavior: 'smooth' })
            break
          case 'HAIPHONG':
            el.scrollTo({ top: mapheight * 0.126811, behavior: 'smooth' })
            break
          case 'HALONG':
            el.scrollTo({ top: mapheight * 0.126811, behavior: 'smooth' })
            break
          case 'DANANG':
            el.scrollTo({ top: mapheight * 0.43931, behavior: 'smooth' })
            break
          case 'BINHDUONG':
            el.scrollTo({ top: mapheight * 0.70199, behavior: 'smooth' })
            break
          case 'NHATRANG':
            el.scrollTo({ top: mapheight * 0.611413, behavior: 'smooth' })
            break
          case 'HOCHIMINH':
            el.scrollTo({ top: mapheight * 0.724637, behavior: 'smooth' })
            break
          case 'BENTRE':
            el.scrollTo({ top: mapheight * 0.815217, behavior: 'smooth' })
            break
          case 'MYTHO':
            el.scrollTo({ top: mapheight * 0.815217, behavior: 'smooth' })
            break
          case 'PHNOMPENH_CAMBODIA':
            el.scrollTo({ top: mapheight * 0.70199, behavior: 'smooth' })
            break
          default:
            el.scrollTo({ top: mapheight * 0.724637, behavior: 'smooth' })
        }
      }
      switch (item) {
        case 'HANOI':
          this.WherePlaceName = this.$t('WherePlaceName2')
          this.WherePlaceDes = this.$t('WherePlaceDes2')
          break
        case 'HAIPHONG':
          this.WherePlaceName = this.$t('WherePlaceName5')
          this.WherePlaceDes = this.$t('WherePlaceDes5')
          break
        case 'DANANG':
          this.WherePlaceName = this.$t('WherePlaceName6')
          this.WherePlaceDes = this.$t('WherePlaceDes6')
          break
        case 'BINHDUONG':
          this.WherePlaceName = this.$t('WherePlaceName8')
          this.WherePlaceDes = this.$t('WherePlaceDes8')
          break
        case 'NHATRANG':
          this.WherePlaceName = this.$t('WherePlaceName7')
          this.WherePlaceDes = this.$t('WherePlaceDes7')
          break
        case 'HOCHIMINH':
          this.WherePlaceName = this.$t('WherePlaceName1')
          this.WherePlaceDes = this.$t('WherePlaceDes1')
          break
        case 'BENTRE':
          this.WherePlaceName = this.$t('WherePlaceName4')
          this.WherePlaceDes = this.$t('WherePlaceDes4')
          break
        case 'PHNOMPENH_CAMBODIA':
          this.WherePlaceName = this.$t('WherePlaceName2')
          this.WherePlaceDes = this.$t('WherePlaceDes2')
          break
        default:
          this.WherePlaceName = this.$t('WherePlaceName3')
          this.WherePlaceDes = this.$t('WherePlaceDes3')
      }
    },
    viewItem (item) {
      this.item_active = item
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
  right: 15px;
  svg{
    margin-left: 1rem;
    font-size: 1.4rem;
  }
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
  height: 45px;
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
.map-container-data{
  position: relative;
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
.map-img-item{
  width: 35px;
  &:hover{
    transform: scale(1.5);
  }
}
.scale{
  transform: scale(1.5);
}
.map-item-1{
  left: 48%;
  top: 25%;
}
.map-item-2{
  left: 53%;
  top: 27%;
}
.map-item-3{
  left: 68%;
  top: 55%;
}
.map-item-4{
  left: 74%;
  bottom: 27%;
}
.map-item-5{
  left: 59%;
  bottom: 21%;
}
.map-item-6{
  left: 60%;
  bottom: 19%;
}
.map-item-7{
  left: 42%;
  bottom: 24%;
}
.map-item-8{
  left: 51%;
  bottom: 14%;
}
@media (max-width: 575px) {
  .where-des{
    font-size: 1.1rem;
  }
  .map-container{
    width: 100%;
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
  .map-img-item{
    width: 10px;
    &:hover{
      transform: scale(1.5);
    }
  }
  .map-item-1{
    left: 48%;
    top: 25%;
  }
  .map-item-2{
    left: 51%;
    top: 28%;
  }
  .map-item-3{
    left: 68%;
    top: 55%;
  }
  .map-item-4{
    left: 74%;
    bottom: 27%;
  }
  .map-item-5{
    left: 59%;
    bottom: 22%;
  }
  .map-item-6{
    left: 60%;
    bottom: 19%;
  }
  .map-item-7{
    left: 42%;
    bottom: 24%;
  }
  .map-item-8{
    left: 51%;
    bottom: 14%;
  }
}
</style>