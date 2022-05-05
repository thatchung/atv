<template>
  <div class="data-list">
    <div class="ex-title font-pp-bold">
      {{ name }}
    </div>
    <div class="team-item">
      <ThumbImage :src="'/images/peppleb.png'" ratio="3-2" />
      <img class="item-team" :src="thub"></img>
    </div>
    <div class="ex-description">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
    },
    thub: {
      type: String,
      default: '/images/slide4.jpg'
    },
    name: {
      type: String,
      default: 'PROFESSIONAL TEAM'
    }
  },
  data() {
    return {
      description: '',
      settings:{
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$gsap.to('.item-team', {
        scrollTrigger:{
            trigger: '.item-team',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        scale:1,
        ease: "expo.out",
        y:0,
        duration: 2.5
      })
    }
  }
}
</script>
<style lang="scss">
.ex-title{
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.ex-description{
  margin-top: 1rem;
}
.team-item{
  width: 100% !important;
  position: relative;
  overflow: hidden;
}
.item-team{
  position: absolute;
  width: 100%;
  bottom: 0px;
  opacity: 0.7;
  transform: translateY(150px) scale(0.85);
}
.pre-arrow{
  z-index: 2;
  margin-top: -25px;
  margin-left: 45px;
  &:before {
    display: none;
  }
  img{
    width: 50px;
  }
}
.next-arrow{
  z-index: 2;
  margin-top: -25px;
  margin-right: 75px;
  &:before {
    display: none;
  }
  img{
    width: 50px;
  }
}
</style>