<template>
  <div class="banner-slide">
    <VueSlickCarousel
      ref="slide1"
      :autoplay='false'
      :focusOnSelect="focusOnSelect"
      @beforeChange="syncSliders"
    >
      <div class="banner-img">
        <div class="banner-content banner-content-1">
          <div class="banner-title">
            <!-- <div class="char">E</div>
            <div class="char">f</div>
            <div class="char">f</div>
            <div class="char">i</div>
            <div class="char">c</div>
            <div class="char">i</div>
            <div class="char">e</div>
            <div class="char">n</div>
            <div class="char">c</div>
            <div class="char">y</div> -->
            Efficiency
          </div>
          <div class="banner-title">
            <!-- <div class="char">W</div>
            <div class="char">i</div>
            <div class="char">t</div>
            <div class="char">h</div>
            <div class="char"> </div>
            <div class="char">A</div>
            <div class="char">e</div>
            <div class="char">s</div>
            <div class="char">t</div>
            <div class="char">h</div>
            <div class="char">e</div>
            <div class="char">t</div>
            <div class="char">i</div>
            <div class="char">c</div> -->
            With Aesthetic
          </div>
          <div class="banner-text">Forming Who We Are</div>
        </div>
        <ThumbImage
          v-if="!isMobile"
          :src="'/images/imgbanner1.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="21-9"
        />
        <ThumbImage
          v-if="isMobile"
          :src="'/images/imgbanner1.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="1-1"
        />
      </div>
      <div class="banner-img">
        <div class="banner-content banner-content-2">
          <div class="container">
            <div class="row">
              <div class="col-4 col-md-4">
                <div class="banner-title-left title-left-1">Design</div>
              </div>
              <div class="col-4 col-md-4">
                <img class="banner-line" src="/images/bannerline.png" alt="Design - Build"></img>
              </div>
              <div class="col-4 col-md-4">
                <div class="banner-title-left title-left-2">Build</div>
                <div class="banner-text-left">Telling</div>
                <div class="banner-text-left">What</div>
                <div class="banner-text-left">We</div>
              </div>
            </div>
          </div>
        </div>
        <ThumbImage
          v-if="!isMobile"
          :src="'/images/imgbanner2.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="21-9"
        />
        <ThumbImage
          v-if="isMobile"
          :src="'/images/imgbanner2.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="1-1"
        />
      </div>
      <div class="banner-img">
        <div class="banner-content banner-content-3">
          <div class="banner-title">Innovation</div>
          <div class="banner-text">Pushing Us Forward</div>
        </div>
        <ThumbImage
          v-if="!isMobile"
          :src="'/images/imgbanner3.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="21-9"
        />
        <ThumbImage
          v-if="isMobile"
          :src="'/images/imgbanner3.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="1-1"
        />
      </div>
      <div class="banner-img">
        <ThumbImage
          v-if="!isMobile"
          :src="'/images/banner4.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="21-9"
        />
        <ThumbImage
          v-if="isMobile"
          :src="'/images/banner4.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="1-1"
        />
      </div>
      <div class="banner-img">
        <ThumbImage
          v-if="!isMobile"
          :src="'/images/banner5.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="21-9"
        />
        <ThumbImage
          v-if="isMobile"
          :src="'/images/banner5.jpg'"
          :nameClass="'image-banner'"
          :contain="false"
          ratio="1-1"
        />
      </div>
    </VueSlickCarousel>
    <div class="slide-sub">
      <div v-for="(img, idx) in images" :key="idx" class="sub-img-item" :style="style[idx]" @click="render(idx)">
        <!-- <img class="sub-imgage" :src="img"></img> -->
        <img class="sub-imgage" src="/images/b_img.png"></img>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isMobile: false,
      images : ['/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg',
        '/images/banner4.jpg',
        '/images/banner5.jpg'],
      style: ['', '', '', '', '', ''],
      slide1: undefined,
      focusOnSelect: true,
      nameClass: 'image-banner'
    }
  },
  mounted() {
    this.isMobile = this.checkMobile()
    this.slide1 = this.$refs.slide1
    this.render(0)
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
    syncSliders(currentPosition, nextPosition) {
      this.$refs.slide1.goTo(nextPosition)
      this.render(nextPosition)
    },
    render(idx) {
      let t_slider = []
      let deg = 50
      let len = this.images.length
      for (let i = 0;i < len; i++) {
        if (i < idx) {
          t_slider[i] = `transform: translateX(${90 * i}%) rotateY(${deg + (len - i)}deg); z-index: ${5 + i};`
        }
        if (i === idx) {
          t_slider[i] = `transform: translateX(${90 * i}%) rotateY( 0deg ) translateZ( 30px ); z-index: 10;opacity: 1;`
        }
        if (i > idx) {
          t_slider[i] = `transform: translateX(${90 * i}% ) rotateY(-${deg + (len - i)}deg); z-index: ${5 - i};`
        }
      }
      this.style = t_slider
      this.$refs.slide1.goTo(idx)
      this.animateBanner(parseInt(idx) + 1)
    },
    animateBanner(idx) {
      if (idx === 1 || idx === 3) {
        this.$gsap.fromTo(`.banner-content-${idx} .banner-title`, {
          opacity:0,
          letterSpacing: '100px'
        }, {
          opacity:1,
          letterSpacing: '1px',
          ease: "expo.out",
          duration: 1.5
        })
        this.$gsap.fromTo(`.banner-content-${idx} .banner-text`, {
          opacity:0,
          y: 200
        }, {
          opacity:1,
          ease: "expo.out",
          y: 0,
          duration: 2
        })
      } else if (idx === 2) {
        this.$gsap.fromTo(`.banner-content-2 .title-left-1`, {
          opacity:0,
          x: -300
        }, {
          opacity:1,
          ease: "expo.out",
          x: 0,
          duration: 2
        })
        this.$gsap.fromTo(`.banner-content-2 .title-left-2`, {
          opacity:0,
          x: 300
        }, {
          opacity:1,
          ease: "expo.out",
          x: 0,
          duration: 2
        })
        this.$gsap.fromTo(`.banner-content-2 .banner-text-left`, {
          opacity:0,
          y: 200
        }, {
          opacity:1,
          ease: "expo.out",
          y: 0,
          duration: 2
        })
      }
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
  position: relative;
  width: 100%;
}
.image-banner{
  width: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.banner-content{
  width: 100%;
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translate(-50%);
  top: calc(50% - 190px);
}
.char{
  color: #fff;
  font-family: 'pp-light';
  display: inline-block;
}
.banner-title{
  text-align: center;
  color: #fff;
  font-family: 'pp-light';
  font-size: 120px;
  line-height: 120px;
  white-space: nowrap;
}
.banner-text{
  text-align: center;
  color: #fff;
  font-family: 'pp-light';
  font-size: 30px;
  white-space: nowrap;
  line-height: 110px;
}
.banner-line{
  width: 100%;
  margin-top: 50px;
}
.banner-title-left{
  color: #fff;
  font-family: 'pp-light';
  font-size: 120px;
  line-height: 120px;
  white-space: nowrap;
  margin-bottom: 20px;
}
.banner-text-left{
  color: #fff;
  font-family: 'pp-light';
  font-size: 30px;
  white-space: nowrap;
}
.slide-sub{
  position: absolute;
  bottom: 60px;
  left: calc(50% - 90px);
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
  width: 50px;
  height: 40px;
  margin-left: -25px;
  margin-top: -30px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 300ms ease-in;
  -moz-transition: all 300ms ease-in;
  -ms-transition: all 300ms ease-in;
  -o-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  opacity: 0.7;
}
.sub-img-item-old{
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
@media (min-width: 1700px) {
  .banner-content{
    top: calc(50% - 240px);
  }
  .banner-title{
    font-size: 160px;
    line-height: 170px;
  }
  .banner-text{
    font-size: 40px;
    line-height: 140px;
  }
  .banner-line{
    margin-top: 75px;
  }
  .banner-title-left{
    font-size: 160px;
    line-height: 170px;
  }
  .banner-text-left{
    font-size: 40px;
  }
}
@media (max-width: 575px) {
  .slide-sub{
    bottom: 25px;
  }
  .banner-content{
    top: calc(50% - 100px);
  }
  .banner-title{
    font-size: 40px;
    line-height: normal;
  }
  .banner-text{
    font-size: 14px;
    line-height: 20px;
  }
  .banner-line{
    margin-top: 25px;
    padding-left: 10px;
  }
  .banner-title-left{
    font-size: 40px;
    line-height: normal;
  }
  .banner-text-left{
    font-size: 14px;
  }
}
</style>
