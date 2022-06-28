<template>
  <div class="where-container">
    <div class="container">
      <h2 ref="wherewework" class="about-map-title">
        {{ $t('Wherewework') }}
      </h2>
      <div v-if="isMobile" class="line-all-map " />
      <div class="row">
        <div class="col-7 col-md-6">
          <div ref="map" class="map-container">
            <div ref="mapdata" class="map-container-data">
              <div
                ref="map1"
                :class="`map-item map-item-1 ${item_active === 'HANOI' ? 'scale' : ''}`"
                @mouseover="viewItem('HANOI')"
                @click="clickMapItem('HANOI')">
              </div>
              <div
                ref="map2"
                :class="`map-item map-item-2 ${item_active === 'HAIPHONG' ? 'scale' : ''}`"
                @mouseover="viewItem('HAIPHONG')"
                @click="clickMapItem('HAIPHONG')">
              </div>
              <!-- <div
                ref="map2"
                :class="`map-item map-item-2-1 ${item_active === 'HALONG' ? 'scale' : ''}`"
                @mouseover="viewItem('HALONG')"
                @click="clickMapItem('HALONG')">
              </div> -->
              <div
                ref="map3"
                :class="`map-item map-item-3 ${item_active === 'DANANG' ? 'scale' : ''}`"
                @mouseover="viewItem('DANANG')"
                @click="clickMapItem('DANANG')">
              </div>
              <div
                ref="map4"
                :class="`map-item map-item-4 ${item_active === 'NHATRANG' ? 'scale' : ''}`"
                @mouseover="viewItem('NHATRANG')"
                @click="clickMapItem('NHATRANG')">
              </div>
              <div
                ref="map5"
                :class="`map-item map-item-5 ${item_active === 'BINHDUONG' ? 'scale' : ''}`"
                @mouseover="viewItem('BINHDUONG')"
                @click="clickMapItem('BINHDUONG')">
              </div>
              <div
                ref="map6"
                :class="`map-item map-item-6 ${item_active === 'HOCHIMINH' ? 'scale' : ''}`"
                @mouseover="viewItem('HOCHIMINH')"
                @click="clickMapItem('HOCHIMINH')">
              </div>
              <div
                ref="map7"
                :class="`map-item map-item-7 ${item_active === 'PHNOMPENH_CAMBODIA' ? 'scale' : ''}`"
                @mouseover="viewItem('PHNOMPENH_CAMBODIA')"
                @click="clickMapItem('PHNOMPENH_CAMBODIA')">
              </div>
              <div
                ref="map8"
                :class="`map-item map-item-8 ${item_active === 'BENTRE' ? 'scale' : ''}`"
                @mouseover="viewItem('BENTRE')"
                @click="clickMapItem('BENTRE')">
              </div>
              <!-- <div
                ref="map9"
                :class="`map-item map-item-9 ${item_active === 'MYTHO' ? 'scale' : ''}`"
                @mouseover="viewItem('MYTHO')"
                @click="clickMapItem('MYTHO')">
              </div> -->
              <img v-if="!isMobile" class="map-img" src="images/map-main.png"></img>
              <img v-if="isMobile" class="map-img" src="images/map-main-m.png"></img>
            </div>
          </div>
        </div>
        <div class="col-5 col-md-6">
          <div v-if="!isMobile" class="map-line line-all-map" />
          <div v-if="!isMobile" class="des-item">
            <div class="where-des font-pp-bold">
              {{ WherePlaceName }}
            </div>
            <div>
              {{ WherePlaceDes }}
            </div>
          </div>
          <div v-if="!isMobile" class="line-all-map" />
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
        </div>
      </div>
      <div v-if="isMobile" class="line-all-map" />
      <div v-if="isMobile" class="des-item">
        <div class="where-des font-pp-bold">
          {{ WherePlaceName }}
        </div>
        <div>
          {{ WherePlaceDes }}
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
      locations: ['HOCHIMINH', 'HANOI', 'HAIPHONG', 'DANANG', 'NHATRANG', 'BINHDUONG',
         'BENTRE', 'PHNOMPENH_CAMBODIA'],
      item_active: 'HOCHIMINH',
      isMobile: false,
      WherePlaceName: 'Ho Chi Minh (Electrolux Office)',
      WherePlaceDes: 'A Scandinavian-inspired office where everyone can feel the comfort of home',
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.hash) {
        this.goto(this.$route.hash.replace('#', ''))
      }
    },
    '$i18n.locale': function(newVal, oldVal) {
      this.clickMapItem(this.item_active)
    }
  },
  mounted() {
    this.isMobile = this.checkMobile()
    this.clickMapItem('HOCHIMINH')
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
      // const el = this.$refs[('' + hash)]
      // if (el) {
      //   el.scrollIntoView({ behavior: 'smooth' })
      //   setTimeout(() => {
      //     let yy = window.pageYOffset
      //     window.scrollTo({ top: yy - 90 })
      //   }, 720)
      // }
      if (hash === 'wherewework'){
        window.scrollTo({ top: 4352, behavior: 'smooth' })
      }
    },
    clickMapItem(item) {
      let mapheight = this.$refs.mapdata.getBoundingClientRect().height
      this.item_active = item
      // const el = this.$refs.map
      // if (el && this.isMobile) {
      //   switch (item) {
      //     case 'HANOI':
      //       el.scrollTo({ top: 200, behavior: 'smooth' })
      //       break
      //     case 'HAIPHONG':
      //       el.scrollTo({ top: 200, behavior: 'smooth' })
      //       break
      //     case 'HALONG':
      //       el.scrollTo({ top: 200, behavior: 'smooth' })
      //       break
      //     case 'DANANG':
      //       el.scrollTo({ top: 140, behavior: 'smooth' })
      //       break
      //     case 'BINHDUONG':
      //       el.scrollTo({ top: 250, behavior: 'smooth' })
      //       break
      //     case 'NHATRANG':
      //       el.scrollTo({ top: 220, behavior: 'smooth' })
      //       break
      //     case 'HOCHIMINH':
      //       el.scrollTo({ top: 300, behavior: 'smooth' })
      //       break
      //     case 'BENTRE':
      //       el.scrollTo({ top: 300, behavior: 'smooth' })
      //       break
      //     case 'MYTHO':
      //       el.scrollTo({ top: 300, behavior: 'smooth' })
      //       break
      //     case 'PHNOMPENH_CAMBODIA':
      //       el.scrollTo({ top: 240, behavior: 'smooth' })
      //       break
      //     default:
      //       el.scrollTo({ top: 300, behavior: 'smooth' })
      //   }
      // } else if (el && !this.isMobile) {
      //   switch (item) {
      //     case 'HANOI':
      //       el.scrollTo({ top: mapheight * 0.126811, behavior: 'smooth' })
      //       break
      //     case 'HAIPHONG':
      //       el.scrollTo({ top: mapheight * 0.126811, behavior: 'smooth' })
      //       break
      //     case 'HALONG':
      //       el.scrollTo({ top: mapheight * 0.126811, behavior: 'smooth' })
      //       break
      //     case 'DANANG':
      //       el.scrollTo({ top: mapheight * 0.43931, behavior: 'smooth' })
      //       break
      //     case 'BINHDUONG':
      //       el.scrollTo({ top: mapheight * 0.70199, behavior: 'smooth' })
      //       break
      //     case 'NHATRANG':
      //       el.scrollTo({ top: mapheight * 0.611413, behavior: 'smooth' })
      //       break
      //     case 'HOCHIMINH':
      //       el.scrollTo({ top: mapheight * 0.724637, behavior: 'smooth' })
      //       break
      //     case 'BENTRE':
      //       el.scrollTo({ top: mapheight * 0.815217, behavior: 'smooth' })
      //       break
      //     case 'MYTHO':
      //       el.scrollTo({ top: mapheight * 0.815217, behavior: 'smooth' })
      //       break
      //     case 'PHNOMPENH_CAMBODIA':
      //       el.scrollTo({ top: mapheight * 0.70199, behavior: 'smooth' })
      //       break
      //     default:
      //       el.scrollTo({ top: mapheight * 0.724637, behavior: 'smooth' })
      //   }
      // }
      switch (item) {
        case 'HANOI':
          this.WherePlaceName = this.$t('WherePlaceName2')
          this.WherePlaceDes = this.$t('WherePlaceDes2')
          break
        case 'HAIPHONG':
          this.WherePlaceName = this.$t('WherePlaceName5')
          this.WherePlaceDes = this.$t('WherePlaceDes5')
          break
        case 'HALONG':
          this.WherePlaceName = this.$t('WherePlaceName9')
          this.WherePlaceDes = this.$t('WherePlaceDes9')
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
        case 'MYTHO':
          this.WherePlaceName = this.$t('WherePlaceName10')
          this.WherePlaceDes = this.$t('WherePlaceDes10')
          break
        case 'PHNOMPENH_CAMBODIA':
          this.WherePlaceName = this.$t('WherePlaceName3')
          this.WherePlaceDes = this.$t('WherePlaceDes3')
          break
        default:
          this.WherePlaceName = this.$t('WherePlaceName1')
          this.WherePlaceDes = this.$t('WherePlaceDes1')
      }
    },
    viewItem (item) {
      this.item_active = item
    }
  }
}
</script>
<style lang="scss">
.where-container{
  width: 100%;
  background-color: #000;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
.about-where-a_name{
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.a_description{
  width: 90%;
}
.about-map-title{
  color: #fff;
  font-size: 5rem;
  margin-bottom: 4rem;
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
.line-all-map{
  border-top: 1.5px solid #fff;
  margin: 1rem 0px;
}
.map-line{
  margin-top: 2rem;
}
.des-item{
  margin-bottom: 4.5rem;
  margin-top: 5rem;
  height: 6rem;
  div{
    color: #fff;
  }
}
.location-list{
  margin-top: 4rem;
  height: 6rem;
  margin-left: -15px;
}
.location-active {
  border: 1px solid;
  padding: 0rem 0.5rem;
  height: 40px;
  line-height: 40px;
}
.location-item{
  display: inline-block;
  padding: 0rem 0.5rem;
  float: left;
  font-size: 1.5rem;
  margin-right: 1rem;
  height: 45px;
  line-height: 35px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: #fff;
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
  width: 70%;
  position: relative;
  margin: auto;
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
  width: 20px;
  height: 30px;
  cursor: pointer;
  background-image: url("/images/map.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.map-img-item{
  width: 35px;
  &:hover{
    transform: scale(1.35);
    background-image: url("/images/active_map.png");
  }
}
.scale{
  transform: scale(1.35);
  background-image: url("/images/active_map.png");
}
.map-item-1{
  left: 48%;
  top: 15%;
}
.map-item-2{
  left: 53%;
  top: 18%;
}
.map-item-2-1{
  left: 61%;
  top: 12%;
}
.map-item-3{
  left: 72%;
  top: 47%;
}
.map-item-4{
  left: 80%;
  bottom: 29%;
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
.map-item-9{
  left: 54%;
  bottom: 17%;
}
@media (min-width: 1700px) {
  .map-container{
    width: 100%;
  }
  .map-line{
    margin-top: 4rem;
  }
  .des-item {
    margin-bottom: 8.5rem;
    margin-top: 9rem;
    height: 6rem;
  }
  .map-item{
    width: 30px;
  }
}
@media (max-width: 575px) {
  .about-map-title{
    font-size: 4rem;
  }
  .where-des{
    font-size: 1.1rem;
  }
  .map-container{
    width: 100%;
  }
  .map-img{
    width: 100%;
  }
  .location-list{
    margin-top: 0rem;
    height: auto;
    margin-left: -15px;
  }
  .location-item{
    font-size: 1rem;
    padding: 0rem 0.5rem !important;
    height: 30px !important;
    line-height:25px !important;
    margin-bottom: 0.5rem;
  }
  .line-all-map{
    margin: 2rem 0px;
  }
  .des-item{
    margin-bottom: 0rem;
    margin-top: 0rem;
    height: 5rem;
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
    left: 37%;
    top: 15%;
  }
  .map-item-2{
    left: 43%;
    top: 18%;
  }
  .map-item-2-1{
    left: 51%;
    top: 12%;
  }
  .map-item-3{
    left: 62%;
    top: 47%;
  }
  .map-item-4{
    left: 70%;
    bottom: 29%;
  }
  .map-item-5{
    left: 49%;
    bottom: 22%;
  }
  .map-item-6{
    left: 50%;
    bottom: 19%;
  }
  .map-item-7{
    left: 22%;
    bottom: 24%;
  }
  .map-item-8{
    left: 41%;
    bottom: 14%;
  }
  .map-item-9{
    left: 44%;
    bottom: 17%;
  }
}
</style>