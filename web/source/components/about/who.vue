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
        <People :item="leader1" />
      </div>
      <div class="col-12 col-md-6 about-who-ex-item">
        <People :item="leader2" />
      </div>
    </div>
    <div class="line-all" />
    <div class="about-who-ex-title font-pp-bold">
      KEY PEOPLE
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
      team1:[
        {
          thub: '/images/proteam.jpg',
          content: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
        }
      ],
      team2:[
        {
          thub: '/images/proteam2.jpg',
          content: 'At AVT, our goal is to harmonize between discipline and creativity. Hence, the working environment at AVT is built around openness and transparency in order to foster innovation and cooperation.'
        }
      ],
      leader1: {
        name: 'Vinh Doan',
        role: 'Co-founder & Director',
        description: `<p>After years of working in Japan as an architect that specialized in structural steel- work, Vinh Doan returned to Vietnam to set up his business when he and his partner - Lang Nguyen realized the then-unmet needs for shopping mall interior design-build solutions. That marked the birth of AVT in 2015.</p>
          <p>“Talk the talk, walk the walk.” Vinh Doan has a very inspiring mentality, which was heavily influenced by his time in Japan. As a leader, he always pushes for agility, accuracy, integrity, and commitment amongst all AVT members. His biggest ambition right now is to motivate and empower the next generation of key people and company leaders.</p>
          <p>Don’t be surprised if you meet Vinh Doan on a football field, on a motorcycle road trip, or at a swimming pool someday. When he is not devoting his time to AVT or the clients, those are the activities he loves to do. Plus, his impressive memory and quick thinking make him a worthy opponent in any mind game.</p>`,
        thub: '/images/leader1.jpg'
      },
      leader2: {
        name: 'Lang Nguyen',
        role: 'Co-founder & Consultant',
        description: `<p>Anyone who has got to know Lang would probably agree that he has an interesting, multifaceted personality.</p>
          <p>Lang takes an in-depth, disciplined, highly-pragmatic approach. He always requires the team to take ownership of their projects and fulfil responsibility to the highest level. He looks for ways to incorporate technology into every aspect of work in order to increase productivity and efficiency. Yet, he is an artistic and free spirit outside of work. In his spare time, Lang would enjoy music, photography, short films, or learning about how the world functions at the comfort of his home.</p>
          <p> Looking back at the progress of AVT over the years, Lang was most proud of the Harley Davidson project. The team won the bid and aced the outcome. That was one of the projects that put AVT on the map and created momentum for future development. Now, Lang is giving his best shot to establish AVT as Vietnam’s top high-end interior contractor, both for local and international clients.</p>`,
        thub: '/images/leader2.jpg'
      },
      key1: {
        name: 'Harada Shinji',
        role: 'Deputy Director',
        description: `<p>“You are never too old to learn something new.” </p>
          <p>Our Business Development Manager - Harada-san is the perfect embodiment of that famous quote. He had a fresh start with interior design at AVT after 20+ years of success in international construction. Upon joining us, his experience and vast knowledge of engineering and project management immediately became a valuable asset to the company. His first project at AVT was Aeon Phnom Penh Mall in Cambodia, which was also his first encounter with Design-Build method. After 8 months of hard work, the project concluded successfully under the management of Harada-san. </p>
          <p>Harada-san is a very good listener. He always finds a way to understand exactly what clients truly need before talking about the solutions. Everyone who worked with Harada-san describes him as a warm, professional and understanding “uncle”, who can make you feel comfortable and reassured. He is a shy person, but he does not shy away from learning new things from younger teammates. That’s what we always love and admire about our Harada-san</p>`,
        thub: '/images/key1.jpg'
      },
      key2: {
        name: 'Tuan Nguyen',
        role: 'Project Director',
        description: `<p>Tuan’s journey at AVT began in 2014 with a very challenging assignment: Aeon Long Bien Mall. That was his longest and most memorable project at the company. His achievement was even more noteworthy considering his background was not in interior design but architecture. After almost a decade at AVT, Tuan is proud to have made the switch to pursue a profession that he has been interested in since high school. He now takes pride in developing and perfecting the company’s project management aspect.</p>
          <p> His secret to success? Meticulousness, dedication, and professionalism. He impresses everyone with his experience and excellence in project management. He might not talk much but is actually a very friendly and caring person. That is why he is much loved and respected by the partners and clients who have worked with him.</p>`,
        thub: '/images/key4.jpg'
      },
      key3: {
        name: 'Mau Nguyen',
        role: 'Project Manager',
        description: `<p>Mau considers AVT as his second home. After becoming a part of AVT in 2019, his skill set expanded into full-range interior project management, from design to execution. He has an organized yet flexible way of working to meet the clients’ diverse demands.</p>
          <p> Mau graduated from Ho Chi Minh City University of Technology and Education, so it is no surprise that he is interested in the technical innovations, especially those in interior materials. His ambition is to make AVT the master of M&E and materials, which are the two indispensable factors in interior design.</p>
          <p> Every day, Mau would try to finish his works and support his subordinates as much as possible before leaving the office for some after-hours sports. “It can be quite a headache, since there are many tiny parts that make up a large project.” – said Mau. However, his thoroughness never disappoints, and that is the quality that makes him a star in our outstanding team.</p>`,
        thub: '/images/key3.jpg'
      },
      key4: {
        name: 'Hue Do',
        role: 'QS Manager',
        description: `<p>To everyone, “chi Hue” is a carefree and easy-going big sister that we all love. When it comes to work, she is a serious and careful leader, as her job requires working with various sub-contractors on a daily basis. She used to specialized in residences, but joining AVT has allowed her to challenge herself and grow with different types of interior project.</p>
          <p> “Finish what you started” is her favorite motto. That mindset helped her and her team to pull through what she called “the toughest project” ever – Dreamkid Ha Dong. Hue had to invest 110% of her effort into finding the right suppliers and sub-contractors from all over Vietnam to help bring the original design to life. She is indeed the driving force behind the success of AVT’s projects.</p>`,
        thub: '/images/key2.jpg'
      },
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