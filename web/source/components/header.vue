<template>
  <div class="header">
    <header class="container-header">
      <div class="container d-flex">
        <div>
          <nuxt-link to="/">
            <img class="logo" src="/images/logo.png" alt="Riviu logo"></img>
          </nuxt-link>
        </div>
        <div class="div-right" @click="openMenu()">
          <img class="lang" src="/images/top_right.png"></img>
        </div>
      </div>
    </header>
    <div v-if="showMenu" class="full-menu" @click="closeMenu()">
      <div class="container menu-content">
        <div class="row">
          <div class="col-12 col-md-4">
            <nuxt-link to="/">
              <div class="menu-title">
                Home
              </div>
            </nuxt-link>
            <nuxt-link to="/work">
              <div class="menu-title">
                Work
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-4">
            <nuxt-link to="/about">
              <div class="menu-title menu-title-about">
                About Us
              </div>
            </nuxt-link>
            <nuxt-link to="/about#whoweare">
              <div class="menu-sub">
                WHO WE ARE
              </div>
            </nuxt-link>
            <nuxt-link to="/about#whatwedo">
              <div class="menu-sub">
                WHAT WE DO
              </div>
            </nuxt-link>
            <nuxt-link to="/about#wherewework">
              <div class="menu-sub">
                WHERE WE WORK
              </div>
            </nuxt-link>
            <nuxt-link to="/about#ouruniqueness">
              <div class="menu-sub">
                OUR UNIQUENESS
              </div>
            </nuxt-link>
            <nuxt-link to="/about#ournetwork">
              <div class="menu-sub">
                OUR NETWORK
              </div>
            </nuxt-link>
            <nuxt-link to="/about#process">
              <div class="menu-sub">
                PROCESS
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-4">
            <nuxt-link to="/innovation">
              <div class="menu-title menu-title-inno">
                Innovation
              </div>
            </nuxt-link>
            <nuxt-link to="/contact">
              <div class="menu-title">
                Contact
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
      showMenu: false
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
}
.div-right{
  position: absolute;
  right: 15px;
}
.lang{
  height: 40px;
  margin-top: 15px;
}
.default{
  position: relative;
}
.full-menu{
  position: fixed;
  width: 100%;
  background-color: #000000db;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 12;
}
.menu-content{
  position: relative;
  padding-top: 15%;
  z-index: 3;
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
@import "~/static/css/responsive.css";
</style>
