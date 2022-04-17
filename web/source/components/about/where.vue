<template>
  <div class="container">
    <h2 class="about-where-title">
      Where we work ?
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
      <div ref="map8" class="map-item map-item-8" @click="clickMapItem('MY THO')"></div>
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
      HO CHI MINH CITY (Electrolux Office)
    </div>
    <div>
      A Scandinavian-inspired office where everyone can feel the comfort of home
    </div>
    <h2 class="about-where-title">
      Our Network
    </h2>
    <div class="line-all" />
    <div class="row" style="margin-top: 2rem;">
      <div class="col-12 col-md-4">
        <div class="about-where-a_name font-pp-bold">
          9PMP - </br>Systematic Partner
        </div>
        <div class="a_description">
          9PMP specializes in providing project management solutions for construction industry. As of the moment, AVT is utilizing 9PMP system in all current projects.
        </div>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4">
        <div class="about-where-a_name font-pp-bold">
          The Sentry – </br>Technical Partner
        </div>
        <div class="a_description">
          The Sentry is a Vietnam-based property management and project marketing firm.
        </div>
        <div v-if="isMobile" class="line-all-w" />
      </div>
      <div class="col-12 col-md-4">
        <div class="about-where-a_name font-pp-bold">
          K-net Japan – </br>Design Partner
        </div>
        <div class="">
          K-net is a Japanese design company founded by Kuni Hasegawa.
        </div>
        <div class="a_description">
          K-net assists AVT in developing concepts for large-scaled projects.
        </div>
      </div>
    </div>
    <h2 class="about-where-title">
      Our Uniqueness
    </h2>
    <div class="line-all" />
    <div style="margin-top: 2rem;">
      AVT is the only interior company in Vietnam to inherit all resources from 9PMP, especially AECIS – the 8-point project management system :
    </div>
    <div class="efficency font-pp-bold">
      9PMP (Efficency)
    </div>
    <div>
      9PMP specializes in providing project management solutions for construction industry.
    </div>
    <div>
      As of the moment, AVT is utilizing 9PMP system in all current projects.
    </div>
    <div v-if="!isMobile" class="row where-table" style="margin-top: 1rem;">
      <div class="col-6 col-md-6">
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            01
          </div>
          <div class="col-7 col-md-4">
            Issue
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            02
          </div>
          <div class="col-7 col-md-4">
            Submittal
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            03
          </div>
          <div class="col-7 col-md-4">
            Milestone
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            04
          </div>
          <div class="col-7 col-md-4">
            DMAP
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
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
            Cost/Change Order
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            06
          </div>
          <div class="col-7 col-md-4">
            Risk
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            07
          </div>
          <div class="col-7 col-md-4">
            MDaily report
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            08
          </div>
          <div class="col-7 col-md-4">
            Reports
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
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
            Issue
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            02
          </div>
          <div class="col-7 col-md-4">
            Submittal
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            03
          </div>
          <div class="col-7 col-md-4">
            Milestone
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            04
          </div>
          <div class="col-7 col-md-4">
            DMAP
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            05
          </div>
          <div class="col-7 col-md-4">
            Cost/Change Order
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            06
          </div>
          <div class="col-7 col-md-4">
            Risk
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            07
          </div>
          <div class="col-7 col-md-4">
            MDaily report
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
        <div class="row">
          <div class="col-2 col-md-2">
            08
          </div>
          <div class="col-7 col-md-4">
            Reports
          </div>
          <div class="col-3 col-md-4">
            <b-icon-arrow-down />
          </div>
        </div>
        <div class="line-all-s" />
      </div>
    </div>
    <div class="efficency font-pp-bold">
      Kuni Hasegawa (Aesthetic)
    </div>
    <div class="row">
      <div class="col-12 col-md-6 last-img" style="position: relative;">
        <ThumbImage src="images/slide1.jpg" ratio="16-9" />
      </div>
      <div class="col-12 col-md-6">
        <div class="hase-name font-pp-bold">
          “DESIGN IS A NEVER-ENDING JOURNEY.”
        </div>
        <div class="hase-des">
          Kuni Hasegawa – the consultant/architect/partner that we often dearly call “Kuni-san” – excels in delivering beauty in an efficient and flexible manner, as seen in his impressive portfolio.
        </div>
        <div class="hase-des">
          With more than 40 years of experience in the industry, Kuni Hasegawa has left his mark on the world’s biggest cities – New York, Tokyo, Mumbai, Bangkok, and more. His design process does not have an end, because he believes that each and every design can always evolve into a better version of itself with time.
        </div>
        <div class="back-top" @click="toTopAction">
          <b-icon-arrow-up />
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
  mounted() {
    this.isMobile = this.checkMobile()
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
            el.scrollTo({ top: 150, behavior: 'smooth' })
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
            el.scrollTo({ top: 500, behavior: 'smooth' })
            break
          case 'BINH DUONG':
            el.scrollTo({ top: 870, behavior: 'smooth' })
            break
          case 'NHA TRANG':
            el.scrollTo({ top: 790, behavior: 'smooth' })
            break
          case 'HO CHI MINH':
            el.scrollTo({ top: 900, behavior: 'smooth' })
            break
          case 'BEN TRE':
            el.scrollTo({ top: 1000, behavior: 'smooth' })
            break
          case 'MY THO':
            el.scrollTo({ top: 1000, behavior: 'smooth' })
            break
          case 'PHNOMPENH (CAMBODIA)':
            el.scrollTo({ top: 900, behavior: 'smooth' })
            break
          default:
            el.scrollTo({ top: 900, behavior: 'smooth' })
        }
      }
    }
  }
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.about-where-a_name{
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.a_description{
  width: 90%;
}
.about-where-title{
  font-size: 5rem;
  margin-top: 5rem;
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
  left: 465px;
  top: 295px;
}
.map-item-2{
  left: 525px;
  top: 315px;
}
.map-item-3{
  left: 685px;
  top: 765px;
}
.map-item-4{
  left: 750px;
  top: 1035px;
}
.map-item-5{
  left: 580px;
  top: 1110px;
}
.map-item-6{
  left: 575px;
  top: 1150px;
}
.map-item-7{
  left: 425px;
  top: 1055px;
}
.map-item-8{
  left: 500px;
  top: 1205px;
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
    background-color: red;
  }
  .map-item-1{
    left: 153px;
    top: 97px;
  }
  .map-item-2{
    left: 173px;
    top: 104px;
  }
  .map-item-3{
    left: 226px;
    top: 250px;
  }
  .map-item-4{
    left: 246px;
    top: 340px;
  }
  .map-item-5{
    left: 192px;
    top: 365px;
  }
  .map-item-6{
    left: 189px;
    top: 378px;
  }
  .map-item-7{
    left: 140px;
    top: 349px;
  }
  .map-item-8{
    left: 163px;
    top: 397px;
  }
}
</style>