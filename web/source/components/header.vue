<template>
  <div class="header">
    <header class="container-header">
      <div class="container d-flex">
        <div @click="openMenu()">
          <!-- <nuxt-link to="/"> -->
            <img class="logo" src="/images/logo.png" alt="Riviu logo"></img>
          <!-- </nuxt-link> -->
        </div>
        <div class="div-right" @click="changeLang()">
          <img class="lang" src="/images/top_right.png"></img>
        </div>
      </div>
    </header>
    <div v-if="showMenu" class="full-menu" @click="closeMenu()">
      <div class="container menu-content">
        <div class="row menu-panel">
          <div class="col-12 col-md-4">
            <nuxt-link to="/">
              <div class="menu-title">
                {{ $t('Home') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/work">
              <div class="menu-title">
                {{ $t('Work') }}
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-4">
            <nuxt-link to="/about">
              <div class="menu-title menu-title-about">
                {{ $t('AboutUs') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/about#whoweare">
              <div class="menu-sub">
                {{ $t('WHOWEARE') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/about#whatwedo">
              <div class="menu-sub">
                {{ $t('WHATWEDO') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/about#wherewework">
              <div class="menu-sub">
                {{ $t('WHEREWEWORK') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/about#ouruniqueness">
              <div class="menu-sub">
                {{ $t('OURUNIQUENESS') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/about#ournetwork">
              <div class="menu-sub">
                {{ $t('OURNETWORK') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/about#process">
              <div class="menu-sub">
                {{ $t('PROCESS') }}
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-4">
            <nuxt-link to="/innovation">
              <div class="menu-title menu-title-inno">
                {{ $t('Innovation') }}
              </div>
            </nuxt-link>
            <nuxt-link to="/contact">
              <div class="menu-title">
                {{ $t('Contact') }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="menu-backgroud" />
    </div>
    <Loading />
  </div>
</template>

<script>
import Loading from "~/components/loading.vue"
export default {
  components: {
    Loading
  },
  data() {
    return {
      className: 'default',
      showMenu: false,
      land: 'en'
    }
  },
  // mounted () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  methods: {
    openMenu() {
      this.showMenu = true
    },
    closeMenu() {
      this.showMenu = false
    },
    changeLang() {
      if (this.land === 'en') {
        this.land = 'vn'
        this.$i18n.locale = 'vn'
      } else {
        this.land = 'en'
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>
<style lang="scss">
.header{
  position: relative;
}
.container-header{
  width: 100%;
  background-color: #010101;
  height: 70px;
  z-index: 10;
  position: relative;
  position: fixed;
  overflow: hidden;
}
.logo{
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
}
.div-right{
  position: absolute;
  right: 15px;
  cursor: pointer;
}
.lang{
  height: 30px;
  margin-top: 20px;
}
.default{
  position: relative;
}
.full-menu{
  position: fixed;
  width: 100%;
  background-color: #000000b3;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 12;
}
.menu-content{
  position: relative;
  padding-top: 10rem;
  z-index: 3;
}
.menu-panel{
  width: 90%;
}
.menu-backgroud{
  position:absolute;
  top: 0px;
  left: 0px;
  background-color: #010101;
  width: 80%;
  z-index: 2;
  height: 100vh;
}
.menu-title{
  color: #fff;
  margin-bottom: 1rem;
}
.menu-sub{
  color: #fff;
  margin-bottom: 0.5rem;
}
@media (min-width: 1700px) {
  .menu-panel{
    width: 87%;
  }
}
@media (max-width: 575px) {
  .div-right{
    right: 20px;
  }
}
</style>
