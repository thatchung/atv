<template>
  <div class="container section-who">
    <h2 class="section-title">
      Who we are ?
    </h2>
    <div class="line-all" />
    <div v-if="!isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            MISSION
          </div>
          <div class="description">
            We grow with each client on the path to success.
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            VISION
          </div>
          <div class="description">
            Apply the latest Technology in Project Management and Construction Supervision to Design & Build with high creativity and proven professionalism
          </div>
        </div>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4">
        <div>
          <div class="name font-pp-bold">
            CORE VALUES
          </div>
          <div class="description">
            Trust, Honesty, Boldness, Innovation,Commitment.
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12">
        <div class="row">
          <div class="col-4 name font-pp-bold">
            MISSION
          </div>
          <div class="col-8 description">
            We grow with each client on the path to success.
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 name font-pp-bold">
            VISION
          </div>
          <div class="col-8 description">
            Apply the latest Technology in Project Management and Construction Supervision to Design & Build with high creativity and proven professionalism
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4 name font-pp-bold">
            CORE VALUES
          </div>
          <div class="col-8 description">
            Trust, Honesty, Boldness, Innovation,Commitment.
          </div>
        </div>
      </div>
    </div>
    <div class="line-all" />
    <div class="row" style="margin-top: 3rem;margin-bottom: 3rem;">
      <div class="col-12 col-sm-6 col-md-6 col-lg-8">
        <nuxt-link to="/about">
          <ThumbImage :src="'/images/temp.jpg'" ratio="16-9" />
        </nuxt-link>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" style="position: relative;">
        <div class="who-name font-pp-bold">
          EXPERIENCED LEADERS
        </div>
        <div class="who-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          llamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure.
        </div>
        <nuxt-link to="/about">
          <div class="who-more">
            SEE MORE <b-icon-arrow-right />
          </div>
        </nuxt-link>
      </div>
    </div>
    <h2 class="what-title">
      What we do ?
    </h2>
    <div class="line-all" />
    <div class="what-text font-pp-bold">
      ONE ENTITY, ONE CONTRACT, ONE UNIFIED FLOW OF WORK FROM INITIAL CONCEPT THROUGH COMPLETION. ONE INTEGRATED TEAM.
    </div>
    <div class="line-all" />
    <div class="what-text font-pp-bold">
      DESIGN - BUILD IS A METHOD OF PROJECT DELIVERY IN WHICH ONE ENTITY - THE DESIGN-BUILD TEAM - WORKS UNDER A SINGLE CONTRACT WITH THE PROJECT OWNER.
    </div>
    <nuxt-link to="/about">
      <div class="what-more">
        SEE MORE <b-icon-arrow-right />
      </div>
    </nuxt-link>
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
    this.checkMobile()
  },
  methods: {
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    }
  }
}
</script>
<style lang="scss">
.section-who{
  margin-top: 4rem;
}
.section-title{
  font-size: 4rem;
}
.what-title{
  font-size: 4rem;
  margin-top: 6rem;
}
.name{
  font-size: 1.5rem;
}
.description{
  font-size: 1rem;
}
.who-name{
  margin-top: 1rem;
  font-size: 1.5rem;
}
.who-description{
  margin-top: 1rem;
  font-size: 1rem;
  text-align: justify;
}
.who-more{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 1rem;
  svg{
    margin-left: 1rem;
  }
}
.what-text{
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.what-more{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 2rem;
  right: 0px;
  svg{
    margin-left: 1rem;
  }
}
</style>