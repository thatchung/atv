<template>
  <div class="container-footer">
    <div class="container">
      <div class="footer-content">
        2022 AVT all right reserved
      </div>
      <div class="footer-icon" v-if="isMobile">
        <a id="A5" :href="`tel:${contact.phone}`">
          <img class="img-icon" src="/images/phone.png"></a>
        <a id="A1" href="https://m.facebook.com/AVT-International-100984125977680" target="_blank">
          <img class="img-icon" src="/images/i_face.png"></a>
        <a id="A4" href="https://www.instagram.com/avt_international" target="_blank">
          <img class="img-icon" src="/images/4_Icon_Insta.png"></a>
      </div>
      <div class="des-icon-phone" v-if="!isMobile">
        <a :href="`tel:${contact.phone}`"><img class="img-icon" src="/images/phone.png"></a>
        <a :href="`tel:${contact.phone}`">
          <div>{{ contact.phone | formatPhoneNumber }}</div>
        </a>
      </div>
      <div class="footer-icon" v-if="!isMobile">
        <a id="A1" href="https://m.facebook.com/AVT-International-100984125977680" target="_blank">
          <img class="img-icon" src="/images/i_face.png"></a>
        <a id="A4" href="https://www.instagram.com/avt_international" target="_blank">
          <img class="img-icon" src="/images/4_Icon_Insta.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
import general from "~/mixins/general"
import { mapGetters, mapActions } from "vuex"
export default {
  mixins: [general],
  data() {
    return {
      isMobile: false
    }
  },
  computed: {
    ...mapGetters({
      contact: "common/getContact"
    }),
  },
  mounted() {
    this.checkMobile()
    this.getContact()
  },
  methods: {
    ...mapActions({
      getContact: "common/getContact"
    }),
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    },
  }
}
</script>

<style lang="scss">
.container-footer {
  background-color: #010101;
  height: 70px;
  color: white;
  text-align: center;
  line-height: 70px;
  z-index: 9;
  position: relative;
  margin-top: 10rem;
}

.container {
  position: relative;
}

.footer-content {
  color: white;
}

.footer-icon {
  position: absolute;
  right: 0px;
  top: 0px;

  .img-icon {
    height: 24px;
    margin-right: 1rem;
  }
}



.des-icon-phone {
  position: absolute;
  left: 0px;
  top: 0px;

  .img-icon {
    height: 24px;
    margin-right: 1rem;
  }

  div {
    color: #fff;
    display: inline-block;
  }
}
</style>
