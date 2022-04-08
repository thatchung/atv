<template>
  <div class="header">
    <header class="container-fluid">
      <div class="container d-flex container-header">
        <div>
          <nuxt-link to="/">
            <img class="logo" src="/images/logo.png" alt="Riviu logo" />
          </nuxt-link>
        </div>
        <div class="div-right" @click="openMenu()">
          <img class="lang" src="/images/top_right.png" />
        </div>
      </div>
    </header>
    <div class="full-menu" @click="closeMenu()" v-if="showMenu">
      <div class="menu-content">
        <div class="row">
          <div class="col-4 col-md-4">
            <nuxt-link to="/">
              <div class="menu-title">Home</div>
            </nuxt-link>
            <nuxt-link to="/work">
              <div class="menu-title">Work</div>
            </nuxt-link>
          </div>
          <div class="col-4 col-md-4">
            <nuxt-link to="/about">
              <div class="menu-title">About Us</div>
              <div class="menu-sub">WHO WE ARE</div>
              <div class="menu-sub">WHAT WE DO</div>
              <div class="menu-sub">WHERE WE WORK</div>
              <div class="menu-sub">OUR UNIQUENESS</div>
              <div class="menu-sub">OUR NETWORK</div>
              <div class="menu-sub">PROCESS</div>
            </nuxt-link>
          </div>
          <div class="col-4 col-md-4">
            <nuxt-link to="/innovation">
              <div class="menu-title">Innovation</div>
            </nuxt-link>
            <nuxt-link to="/contact">
              <div class="menu-title">Contact</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Loading />
  </div>
</template>

<script>
import Loading from "~/components/Loading.vue"
export default {
  computed: {
  },
  watch: {
    // $route(to, from) {
    //   if (!to.query.q) {
    //     this.search = "";
    //   } else if (to.query.q !== from.query.to) {
    //     this.search = to.query.q;
    //   }
    // },
  },
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
.container-fluid{
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
  right: 0px;
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
  background-color: #010101;
  width: 80%;
  height: 100vh;
  position: relative;
  padding-top: 15%;
  padding-left: 10%;
  z-index: 3;
}
.menu-title{
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.menu-sub{
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
@import "~/static/css/responsive.scss";
</style>
