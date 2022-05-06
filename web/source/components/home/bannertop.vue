<template>
  <div class="banner-slide">
    <VueSlickCarousel
      ref="slide1"
      :autoplay='false'
      :focusOnSelect="focusOnSelect"
      @beforeChange="syncSliders"
    >
      <div v-if="!isMobile" class="banner-img" @click="showVideo">
        <ThumbImage
          ref="videoCut"
          :sourceVideo="'/images/video_atv_cut.mp4'"
          :nameClass="'image-banner'"
          :contain="false"
          :video="true"
          @
          ratio="21-9"
        />
        <div v-show="isPlay" class="play-done">
          <div class="play-done-data d-flex align-items-center justify-content-center">
            <div
              class="text-play-video"
              @mouseover="hoverPlay = true"
              @mouseout="hoverPlay = false"
              @click="showVideo">
              <span v-if="hoverPlay">Click to explore our transformation<b-icon-arrow-right /></span>
              <img v-if="!hoverPlay" src="/images/btn.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile" class="banner-img" @click="showVideo">
        <ThumbImage
          :sourceVideo="'/images/video_atv_cut.mp4'"
          :nameClass="'image-banner'"
          :contain="false"
          :video="true"
          ratio="1-1"
        />
        <div v-show="isPlay" class="play-done">
          <div class="play-done-data d-flex align-items-center justify-content-center">
            <div
              class="text-play-video"
              @mouseover="hoverPlay = true"
              @mouseout="hoverPlay = false"
              @click="showVideo">
              <span v-if="hoverPlay">Click to explore our transformation<b-icon-arrow-right /></span>
              <img v-if="!hoverPlay" src="/images/btn.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-img">
        <div class="banner-content banner-content-1">
          <div class="banner-title">
            Efficiency
          </div>
          <div class="banner-title">
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
                <div class="banner-text-left">Do</div>
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
      <!-- <div class="banner-img">
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
      </div> -->
    </VueSlickCarousel>
    <div class="slide-sub">
      <div v-for="(img, idx) in images" :key="idx" class="sub-img-item" :style="style[idx]" @click="render(idx)">
        <!-- <img class="sub-imgage" :src="img"></img> -->
        <!-- <img class="sub-imgage" src="/images/b_img.png"></img> -->
        <div class="sub-div-imgage"></div>
      </div>
    </div>
    <div v-if="isVideo" class="video-full">
      <div class="video-close" @click="hideVideo">Close</div>
      <div v-if="!isMobile" class="video-wrapper d-flex align-items-center justify-content-center ratio_21-9">
        <video
          ref="videoFull"
          autoplay
          controls
          playsinline
          :style="`object-fit: contain;`"
          class="thumbnail-video"
        >
          <source :src="'/images/atv.mp4'" type="video/mp4" />
        </video>
      </div>
      <div v-if="isMobile" class="video-wrapper d-flex align-items-center justify-content-center ratio_1-1">
        <video
          ref="videoFull"
          autoplay
          controls
          :style="`object-fit: contain;`"
          class="thumbnail-video"
        >
          <source :src="'/images/atv.mp4'" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>
<script>
// import Video from '~/components/video.vue'

export default {
  data() {
    return {
      isVideo: false,
      isPlay: false,
      hoverPlay: false,
      isMobile: false,
      images : ['/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg',
        '/images/banner4.jpg'],
      style: ['', '', '', '', '', ''],
      slide1: undefined,
      focusOnSelect: true,
      nameClass: 'image-banner'
    }
  },
  // components: {
  //   Video
  // },
  mounted() {
    this.isPlay = false
    this.isMobile = this.checkMobile()
    this.slide1 = this.$refs.slide1
    this.render(0)
    this.autoShowPlay()
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
      let deg = 65
      let len = this.images.length
      for (let i = 0;i < len; i++) {
        // if (i < 3) {
        //   t_slider[i] = `transform: translateX(${90 * i}%) rotateY(${deg + (len - i - 2) * 10}deg); z-index: ${5 + i};`
        // }
        // if (i === 3) {
        //   t_slider[i] = `transform: translateX(${90 * i - 10 * i}%) rotateY( 0deg ) translateZ( 110px );`
        // }
        // if (i > 3) {
        //   // t_slider[i] = `transform: translateX(${90 * i}% ) rotateY(-${deg + (len - i - 2) * 14}deg); z-index: ${5 - i};`
        //   t_slider[i] = `transform: translateX(400% ) rotateY(-${deg + (len - i - 2) * 10}deg); z-index: ${5 - i};`
        // }
        if (i < idx) {
          // t_slider[i] = `transform: translateX(${90 * (i - 2)}%) rotateY(${deg}deg); z-index: ${5 + i};`
        }
        if (i === idx) {
          if (this.isMobile) {
            t_slider[i] = `transform:perspective(70px) rotatey(-50deg) translateX(5px) translateZ(10px);opacity: 1;`
          } else {
            t_slider[i] = `transform:perspective(70px) rotatey(-50deg) translateX(5px) translateZ(15px);opacity: 1;`
          }
        }
        if (i > idx) {
          // t_slider[i] = `transform: translateX(${90 * (i - 2)}% ) rotateY(${deg}deg); z-index: ${5 - i};`
        }
      }
      this.style = t_slider
      this.$refs.slide1.goTo(idx)
      this.animateBanner(parseInt(idx) + 1)
    },
    animateBanner(idx) {
      if (idx === 2 || idx === 4) {
        idx = idx - 1
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
      } else if (idx === 3) {
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
    },
    autoShowPlay() {
      setTimeout(() => {
        this.isPlay = true
        this.autoPlay()
      }, 14000)
    },
    autoPlay() {
      setTimeout(() => {
        this.$refs.slide1.goTo(1)
      }, 7000)
    },
    showVideo () {
      this.isVideo = true
      setTimeout(() => {
        if (this.$ref && this.$ref.videoFull) {
          this.$ref.videoRef.play()
        }
      }, 500)
    },
    hideVideo () {
      this.isVideo = false
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
.play-done{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-color: black;
  top: 0px;
  right: 0px;
  z-index: 33;
}
.play-done-data{
  width: 100%;
  height: 100%;
}
.text-play-video{
  cursor: pointer;
  span{
    color: white;
    font-size: 1.5rem;
    svg{
      color: white;
      margin-left: 1rem;
      font-size: 1.4rem;
    }
  }
  img{
    width: 40px;
  }
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
.video-full{
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
}
.video-close{
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;
  color: white;
  font-size: 20px;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
}
.video-wrapper{
  width: 100%;
  background-color: black;
  position: relative;
}
.ratio_21-9 {
  padding-top: 42.85%; /* 21:9 Aspect Ratio */
}
.ratio_1-1 {
  padding-top: 100%; /* 1:1 Aspect Ratio */
}
.thumbnail-video{
  position: absolute !important;
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  left: calc(50%);
  transform: translate(-50%);
}
.slide-sub-old{
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
  width: 50px;
  height: 35px;
  opacity: 0.7;
  display: inline-block;
  transform: perspective(70px) rotateY(-70deg);
  margin: 0rem -5px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 300ms ease-in;
  -moz-transition: all 300ms ease-in;
  -ms-transition: all 300ms ease-in;
  -o-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  &:hover{
    opacity: 1;
    transform: perspective(70px) rotateY(-50deg) translateX(5px) translateZ(15px);
  }
}
.sub-img-item-old{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -30px;
  width: 50px;
  height: 40px;
  opacity: 0.7;
  -webkit-box-reflect: below 0 -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.3, transparent), to(white));
}
.sub-imgage{
  height: 100%;
  width: 100%;
}
.sub-div-imgage{
  height: 100%;
  width: 100%;
  background-color: #fff;
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
  .sub-img-item{
    width: 30px !important;
    height: 20px !important;
    margin: 0rem -3px;
    &:hover{
      transform: perspective(70px) rotateY(-50deg) translateX(5px) translateZ(10px);
    }
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
