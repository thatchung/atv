<template>
  <div class="container about-who-container">
    <h2 ref="whoweare" class="about-who-title">
      {{ $t('Whoweare') }}
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          {{ $t('VISION') }}
        </div>
        <div class="a_description about-who_a_description">
          {{ $t('WhoDesMoblie1') }}
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          {{ $t('MISSION') }}
        </div>
        <div class="a_description about-who_a_description">
          {{ $t('WhoDesMoblie2') }}
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          {{ $t('COREVALUES') }}
        </div>
        <div class="a_description about-who_a_description">
          <div>
            <div class="who-sub-title">{{ $t('WhoSubTitle1') }}</div>
            <div class="who-sub-des">{{ $t('WhoSubDes1') }}</div>
          </div>
          <div>
            <div class="who-sub-title">{{ $t('WhoSubTitle2') }}</div>
            <div class="who-sub-des">{{ $t('WhoSubDes2') }}</div>
          </div>
          <div>
            <div class="who-sub-title">{{ $t('WhoSubTitle3') }}</div>
            <div class="who-sub-des">{{ $t('WhoSubDes3') }}</div>
          </div>
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
            <div>
              <div class="who-sub-title">{{ $t('WhoSubTitle1') }}</div>
              <div class="who-sub-des">{{ $t('WhoSubDes1') }}</div>
            </div>
            <div>
              <div class="who-sub-title">{{ $t('WhoSubTitle2') }}</div>
              <div class="who-sub-des">{{ $t('WhoSubDes2') }}</div>
            </div>
            <div>
              <div class="who-sub-title">{{ $t('WhoSubTitle3') }}</div>
              <div class="who-sub-des">{{ $t('WhoSubDes3') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-all" />
    <div ref="exper" class="about-who-ex-title font-pp-bold">
      {{ $t('EXPERIENCEDLEADERS') }}
    </div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/people2.png"
          :name="$t('PeopleName2')"
          :des="$t('PeopleDes2')"
          :cut="$t('PeopleDesCut2')"
          :role="$t('PeopleRole2')"
          num="1"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/people1.png"
          :name="$t('PeopleName1')"
          :des="$t('PeopleDes1')"
          :cut="$t('PeopleDesCut1')"
          :role="$t('PeopleRole1')"
          num="1"
        />
      </div>
    </div>
    <div class="line-all" />
    <div class="about-who-ex-title font-pp-bold">
      {{ $t('KEYPEOPLE') }}
    </div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/people3.png"
          :name="$t('PeopleName3')"
          :des="$t('PeopleDes3')"
          :cut="$t('PeopleDesCut3')"
          :role="$t('PeopleRole3')"
          num="2"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/people4.png"
          :name="$t('PeopleName4')"
          :des="$t('PeopleDes4')"
          :cut="$t('PeopleDesCut4')"
          :role="$t('PeopleRole4')"
          num="2"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/people5.png"
          :name="$t('PeopleName5')"
          :des="$t('PeopleDes5')"
          :cut="$t('PeopleDesCut5')"
          :role="$t('PeopleRole5')"
          num="3"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/people6.png"
          :name="$t('PeopleName6')"
          :des="$t('PeopleDes6')"
          :cut="$t('PeopleDesCut6')"
          :role="$t('PeopleRole6')"
          num="3"
        />
      </div>
    </div>
    <div class="line-all" />
    <div class="row" style="margin-top: 3rem;">
      <div class="col-12 col-md-6 ex-item">
        <TeamList :name="$t('TEAM1')" thub="/images/group1.png" :content="$t('TEAMDES1')" />
      </div>
      <div class="col-12 col-md-6 ex-item">
        <TeamList :name="$t('TEAM2')" thub="/images/group2.png" :content="$t('TEAMDES2')" />
      </div>
    </div>
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
.about-who_a_description{
  width: 80%;
  margin-top: 1rem;
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
.who-sub-title{
  font-weight: 600;
}
.who-sub-des{
  font-size: 0.8rem;
}
@media (max-width: 575px) {
  .about-who-title{
    margin-top: 3rem;
  }
  .about-who_a_description{
    width: 100%;
  }
}
</style>