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
          {{ $t('WhoDesMoblie3') }}
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
        <People
          thub="/images/leader1.png"
          :name="$t('PeopleName1')"
          :des="$t('PeopleDes1')"
          :cut="$t('PeopleDesCut1')"
          :role="$t('PeopleRole1')"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/leader2.png"
          :name="$t('PeopleName2')"
          :des="$t('PeopleDes2')"
          :cut="$t('PeopleDesCut2')"
          :role="$t('PeopleRole2')"
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
          thub="/images/key1.png"
          :name="$t('PeopleName3')"
          :des="$t('PeopleDes3')"
          :cut="$t('PeopleDesCut3')"
          :role="$t('PeopleRole3')"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/key4.png"
          :name="$t('PeopleName4')"
          :des="$t('PeopleDes4')"
          :cut="$t('PeopleDesCut4')"
          :role="$t('PeopleRole4')"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/key3.png"
          :name="$t('PeopleName5')"
          :des="$t('PeopleDes5')"
          :cut="$t('PeopleDesCut5')"
          :role="$t('PeopleRole5')"
        />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People
          thub="/images/key2.png"
          :name="$t('PeopleName6')"
          :des="$t('PeopleDes6')"
          :cut="$t('PeopleDesCut6')"
          :role="$t('PeopleRole6')"
        />
      </div>
    </div>
    <div class="line-all" />
    <div class="row" style="margin-top: 3rem;">
      <div class="col-12 col-md-6 ex-item">
        <TeamList :name="$t('TEAM1')" thub="/images/proteam.png" :content="$t('TEAMDES1')" />
      </div>
      <div class="col-12 col-md-6 ex-item">
        <TeamList :name="$t('TEAM2')" thub="/images/proteam2.png" :content="$t('TEAMDES2')" />
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
  .about-who_a_description{
    width: 100%;
  }
}
</style>