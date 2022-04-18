<template>
  <div class="container about-who-container">
    <h2 ref="whoweare" class="about-who-title">
      Who we are ?
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          MISSION
        </div>
        <div class="a_description">
          We grow with each client on the path to success.
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          VISION
        </div>
        <div class="a_description">
          Apply the latest Technology in Project Management and Construction Supervision to Design & Build with high creativity and proven professionalism
        </div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
        <div class="a_name">
          CORE VALUES
        </div>
        <div class="a_description">
          Trust, Honesty, Boldness, Innovation,Commitment.
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12">
        <div class="row">
          <div class="col-4 a_name">
            VISION
          </div>
          <div class="col-8 a_description">
            We grow with each client on the path to success.
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 a_name">
            MISSION
          </div>
          <div class="col-8 a_description">
            Apply the latest Technology in Project Management and Construction Supervision to Design & Build with high creativity and proven professionalism
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 a_name">
            CORE VALUES
          </div>
          <div class="col-8 a_description">
            Trust, Honesty, Boldness, Innovation,Commitment.
          </div>
        </div>
      </div>
    </div>
    <div class="line-all" />
    <div class="about-who-ex-title font-pp-bold">
      EXPERIENCED LEADERS
    </div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
    </div>
    <div class="line-all" />
    <div class="about-who-ex-title font-pp-bold">
      KEY PEOPLE
    </div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
    </div>
    <div class="line-all" />
    <div class="row" style="margin-top: 3rem;">
      <div class="col-12 col-md-6 ex-item">
        <TeamList name="PROFESSIONAL TEAM" :datas="team1" />
      </div>
      <div class="col-12 col-md-6 ex-item">
        <TeamList name="OPEN ENVIRONMENT" :datas="team1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoPage',
  data() {
    return {
      team1:[
        {
          thub: '/images/slide4.jpg',
          content: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
        },
        {
          thub: '/images/slide2.jpg',
          content: 'At AVT, our goal is to harmonize between discipline and creativity.Hence, the working environment at AVT is built around openness and transparency in order to foster innovation and cooperation.'
        }
      ],
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