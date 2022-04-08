<template>
  <div class="container">
    <h2 class="about-who-title">Who we are ?</h2>
    <div class="line-all"></div>
    <div class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
          <div class="a_name">MISSION</div>
          <div class="a_description">We grow with each client on the path to success.</div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
          <div class="a_name">VISION</div>
          <div class="a_description">Apply the latest Technology in Project Management and Construction Supervision to
          Design & Build with high creativity and proven professionalism</div>
      </div>
      <div class="col-12 col-sm-4 col-md-4 col-lg-4">
          <div class="a_name">CORE VALUES</div>
          <div class="a_description">Trust, Honesty, Boldness, Innovation,Commitment.</div>
      </div>
    </div>
    <div class="line-all"></div>
    <div class="about-who-ex-title font-pp-bold">EXPERIENCED LEADERS</div>
    <div class="row">
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People />
      </div>
    </div>
    <div class="line-all"></div>
    <div class="about-who-ex-title font-pp-bold">KEY PEOPLE</div>
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
    <div class="line-all"></div>
    <div class="row" style="margin-top: 3rem;">
      <div class="col-12 col-md-6 ex-item">
        <TeamList name="PROFESSIONAL TEAM" :datas="team1"/>
      </div>
      <div class="col-12 col-md-6 ex-item">
        <TeamList name="OPEN ENVIRONMENT" :datas="team1"/>
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
      ]
    }
  }
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.about-who-title{
  font-size: 4rem;
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
</style>