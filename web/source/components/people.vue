<template>
  <div class="item">
    <div class="img-content">
      <ThumbImage :src="'/images/peppleb.jpg'" ratio="8-5" />
      <img :class="`item-people cnum-${num}`" :src="thub"></img>
    </div>
    <h3 class="item-title-people">
      {{ name }} - {{ role }}
    </h3>
    <div class="item-content">
      <div v-if="!show">
        {{ cut }}
        <img class="img-arrow-down down-people" src="/images/a_down.png" @click="showMore"></img>
      </div>
      <div v-if="show" class="content" v-html="des" />
      <img v-if="show" class="img-arrow-up up-people" src="/images/a_up.png" @click="showLess"></img>
    </div>
  </div>
</template>

<script>
import general from "~/mixins/general"
export default {
  mixins: [general],
  props: {
    name:  {
      type: String,
      default: 'Harada Shinji'
    },
    role:  {
      type: String,
      default: 'Business Development Manager'
    },
    des: {
      type: String,
      default: 'Mau considers AVT as his second home. After becoming a part of AVT in 2019, his skill set expanded into full is skill set expanded into full is skill set expanded into full'
    },
    thub: {
      type: String,
      default: '/images/slide4.jpg'
    },
    cut: {
      type: String,
      default: 'Mau considers AVT as his second home. After becoming a part of AVT in 201...'
    },
    position: {
      type: String,
      default: 'left-p'
    },
    num: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    showMore() {
      this.show = true
    },
    showLess() {
      this.show = false
    },
    animateOnScroll() {
      this.$gsap.to('.cnum-1', {
        scrollTrigger:{
            trigger: '.cnum-1',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        scale:1,
        ease: "expo.out",
        y:0,
        duration: 2.5
      })
      this.$gsap.to('.cnum-2', {
        scrollTrigger:{
            trigger: '.cnum-2',
            toggleActions: 'restart none none reset'
        },
        opacity:1,
        scale:1,
        ease: "expo.out",
        y:0,
        duration: 2.5
      })
      this.$gsap.to('.cnum-3', {
        scrollTrigger:{
            trigger: '.cnum-3',
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
.item-title-people{
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  cursor: pointer;
}
.item-people{
  position: absolute;
  width: 100%;
  bottom: 0px;
  opacity: 0.7;
  transform: translateY(100px) scale(0.85);
}
.img-content{
  position: relative;
  width: 100%;
  overflow: hidden;
}
.item-content svg{
  margin-left: 0.5rem;
}
.down-people{
  margin-left: 0.5rem;
  cursor: pointer;
}
.up-people{
  margin-top: 0.5rem;
  float: right;
  cursor: pointer;
}
@media (max-width: 575px) {
  .item svg{
    margin-top: 1rem;
  }
}
</style>