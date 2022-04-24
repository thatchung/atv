<template>
  <div class="container about-who-container">
    <h2 ref="whoweare" class="about-who-title">
      {{ $t('Whoweare') }}
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          {{ $t('MISSION') }}
        </div>
        <div class="a_description">
          {{ $t('WhoDes1') }} </br> {{ $t('WhoDes2') }}
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          {{ $t('VISION') }}
        </div>
        <div class="a_description">
          {{ $t('WhoDes3') }} </br> {{ $t('WhoDes4') }} </br>
          {{ $t('WhoDes5') }}</br> {{ $t('WhoDes6') }}
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          {{ $t('COREVALUES') }}
        </div>
        <div class="a_description">
          {{ $t('WhoDes7') }}</br>{{ $t('WhoDes8') }}
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12">
        <div class="row">
          <div class="col-4 a_name">
            {{ $t('VISION') }}
          </div>
          <div class="col-8 a_description">
            {{ $t('WhoDesMoblie1') }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 a_name">
            {{ $t('MISSION') }}
          </div>
          <div class="col-8 a_description">
            {{ $t('WhoDesMoblie2') }}
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 a_name">
            {{ $t('COREVALUES') }}
          </div>
          <div class="col-8 a_description">
            {{ $t('WhoDesMoblie3') }}
          </div>
        </div>
      </div>
    </div>
    <div class="line-all" />
    <div class="about-who-ex-title font-pp-bold">
      {{ $t('EXPERIENCEDLEADERS') }}
    </div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="leader1" />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="leader2" />
      </div>
    </div>
    <div class="line-all" />
    <div class="about-who-ex-title font-pp-bold">
      {{ $t('KEYPEOPLE') }}
    </div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="key1" />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="key2" />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="key3" />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="key4" />
      </div>
    </div>
    <div class="line-all" />
    <div class="row" style="margin-top: 3rem;">
      <div class="col-12 col-md-6 ex-item">
        <TeamList name="PROFESSIONAL TEAM" :datas="team1" />
      </div>
      <div class="col-12 col-md-6 ex-item">
        <TeamList name="OPEN ENVIRONMENT" :datas="team2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoPage',
  data() {
    return {
      team1: {
        thub: '/images/proteam.png',
        content: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
      },
      team2: {
        thub: '/images/proteam2.png',
        content: 'At AVT, our goal is to harmonize between discipline and creativity. Hence, the working environment at AVT is built around openness and transparency in order to foster innovation and cooperation.'
      },
      leader1: {
        name: 'Vinh Doan',
        role: 'Co-founder & Director',
        description: `${this.$t('PeopleDes1')}</br>
          ${this.$t('PeopleDes2')}</br>
          ${this.$t('PeopleDes3')}</br>`,
        thub: '/images/leader1.png'
      },
      leader2: {
        name: 'Lang Nguyen',
        role: 'Co-founder & Consultant',
        description: `${this.$t('PeopleDes4')}</br>
          ${this.$t('PeopleDes5')}</br>
          ${this.$t('PeopleDes6')}</br>`,
        thub: '/images/leader2.png'
      },
      key1: {
        name: 'Harada Shinji',
        role: 'Deputy Director',
        description: `${this.$t('PeopleDes7')}</br>
          ${this.$t('PeopleDes8')}</br>
          ${this.$t('PeopleDes9')}</br>`,
        thub: '/images/key1.png'
      },
      key2: {
        name: 'Tuan Nguyen',
        role: 'Project Director',
        description: `${this.$t('PeopleDes10')}</br>
          ${this.$t('PeopleDes11')}</br>`,
        thub: '/images/key4.png'
      },
      key3: {
        name: 'Mau Nguyen',
        role: 'Project Manager',
        description: `${this.$t('PeopleDes12')}</br>
          ${this.$t('PeopleDes13')}</br>
          ${this.$t('PeopleDes14')}</br>`,
        thub: '/images/key3.png'
      },
      key4: {
        name: 'Hue Do',
        role: 'QS Manager',
        description: `${this.$t('PeopleDes15')}</br>
          ${this.$t('PeopleDes16')}</br>`,
        thub: '/images/key2.png'
      },
      isMobile: false
    }
  },
  // watch: {
  //   $route(to, from) {
  //     if (this.$route.hash) {
  //       this.goto(this.$route.hash.replace('#', ''))
  //     }
  //   }
  // },
  mounted() {
    this.isMobile = this.checkMobile()
    // if (this.$route.hash) {
    //   this.goto(this.$route.hash.replace('#', ''))
    // }
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
        console.log(el)
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

}
</script>
<style lang="scss">
.about-who-title{
  font-size: 5rem;
  margin-top: 4rem;
}
.a_name{
  font-size: 1.5rem;
  font-weight: 600;
}
.a_description{
  width: 90%;
}
.about-who-ex-item{
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.about-who-ex-title{
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;
}
@media (max-width: 575px) {
  .about-who-title{
    margin-top: 3rem;
  }
}
</style>