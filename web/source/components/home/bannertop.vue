<template>
  <div class="banner-slide">
    <VueSlickCarousel
      ref="slide1"
      :focusOnSelect="focusOnSelect"
      @beforeChange="syncSliders"
    >
      <div v-for="(img, idx) in images" :key="idx" class="banner-img">
        <ThumbImage
          :src="img"
          :noratio="true"
          :nameClass="nameClass"
          :contain="false"
        />
      </div>
    </VueSlickCarousel>
    <div class="slide-sub">
      <div v-for="(img, idx) in images" :key="idx" class="sub-img-item" :style="style[idx]" @click="render(idx)">
        <img class="sub-imgage" :src="img"></img>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      images : ['/images/slide1.jpg',
        '/images/slide2.jpg',
        '/images/slide3.jpg',
        '/images/slide4.jpg',
        '/images/slide5.jpg',
        '/images/slide6.jpg'],
      style: ['', '', '', '', '', ''],
      slide1: undefined,
      focusOnSelect: true,
      nameClass: 'image-banner'
    }
  },
  mounted() {
    this.slide1 = this.$refs.slide1
    this.render(0)
  },
  methods: {
    syncSliders(currentPosition, nextPosition) {
      this.$refs.slide1.goTo(nextPosition)
      this.render(nextPosition)
    },
    render(idx) {
      let t_slider = []
      for (let i = 0;i < this.images.length; i++) {
        if (i < idx) {
          t_slider[i] = `transform: translateX(-${70 * (idx - i)}%) rotateY(45deg); z-index: ${5 + i};`
        }
        if (i === idx) {
          t_slider[i] = 'transform: rotateY( 0deg ) translateZ( 140px ); z-index: 10;'
        }
        if (i > idx) {
          t_slider[i] = `transform: translateX(${70 * (i - idx)}% ) rotateY(-45deg); z-index: ${5 - i};`
        }
      }
      this.style = t_slider
      this.$refs.slide1.goTo(idx)
    }
  }
}
</script>
<style lang="scss">
.banner-slide{
  position: relative;
  overflow: hidden;
}
.banner-img{
  width: 100%;
  height: calc(100vh - 100px);
}
.image-banner{
  width: 100%;
  height: calc(100vh - 100px);
  object-fit: cover;
}
.slide-sub{
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  -webkit-perspective: 600px;
}
.sub-img{
  width: 170px;
  height: 370px;
  float: left;
  position: relative;
  -webkit-perspective: 370px;
}
.sub-img-item{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 50px;
  margin-left: -25px;
  margin-top: -90px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 300ms ease-in;
  -moz-transition: all 300ms ease-in;
  -ms-transition: all 300ms ease-in;
  -o-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  -webkit-box-reflect: below 0 -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.3, transparent), to(white));
}
.sub-imgage{
  height: 100%;
  width: 100%;
}
#coverflow {
    height: 100%;
    width: 100%;
    -webkit-perspective: 600px;
}

#coverflow section {
    display: position;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 170px;
    height: 170px;
    margin-left: -90px;
    margin-top: -90px;
    background-color: white;
    background-size: 100%;
   -webkit-transform-style: preserve-3d;
   -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
    -webkit-transition: all 300ms ease-in;
     -moz-transition: all 300ms ease-in;
        -ms-transition: all 300ms ease-in;
         -o-transition: all 300ms ease-in;
            transition: all 300ms ease-in;
    -webkit-box-reflect: below 0
    -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.3, transparent), to(white));
}

#controls {
    position: absolute;
    width: 100%;
    bottom: 10%;
    z-index: 1;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;

    color: #999;
    font-size: 18px;
}

#controls a  {
    color: white;
    cursor: pointer;
}

#controls a:hover  {
    color: 66FFFF;
}
</style>
