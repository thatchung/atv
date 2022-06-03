<template>
  <div class="container section-contact">
    <h2 class="section-title">
      {{ $t('Contact') }}
    </h2>
    <div class="line-all line-all-contact" />
    <div v-if="!isMobile" class="row">
      <div class="col-4 col-md-4">
        <div>
          <div class="place font-pp-bold">
            <span v-if="$i18n.locale === 'vn'">{{ contact.location1_vn }}</span>
            <span v-else >{{ contact.location1 }}</span>
          </div>
          <div class="address">
            <span v-if="$i18n.locale === 'vn'">{{ contact.address1_vn }}</span>
            <span v-else >{{ contact.address1 }}</span>
          </div>
          <div class="type">
            {{ $t('HeadOffice') }}
          </div>
        </div>
      </div>
      <div class="col-4 col-md-4">
        <div>
          <div class="place font-pp-bold">
            <span v-if="$i18n.locale === 'vn'">{{ contact.location2_vn }}</span>
            <span v-else >{{ contact.location2 }}</span>
          </div>
          <div class="address">
            <span v-if="$i18n.locale === 'vn'">{{ contact.address2_vn }}</span>
            <span v-else >{{ contact.address2 }}</span>
          </div>
          <div class="type">
            {{ $t('Branch') }}
          </div>
        </div>
      </div>
      <div class="col-4 col-md-4">
        <div>
          <div class="place font-pp-bold">
            <span v-if="$i18n.locale === 'vn'">{{ contact.location3_vn }}</span>
            <span v-else >{{ contact.location3 }}</span>
          </div>
          <div class="address">
            <span v-if="$i18n.locale === 'vn'">{{ contact.address2_vn }}</span>
            <span v-else >{{ contact.address2 }}</span>
          </div>
          <div class="type">
            {{ $t('Branch') }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row">
      <div class="col-12">
        <div>
          <div class="place font-pp-bold">
            <span v-if="$i18n.locale === 'vn'">{{ contact.location1_vn }}</span>
            <span v-else >{{ contact.location1 }}</span>
          </div>
          <div class="address">
            <span v-if="$i18n.locale === 'vn'">{{ contact.address1_vn }}</span>
            <span v-else >{{ contact.address1 }}</span>
          </div>
          <div class="type">
            {{ $t('HeadOffice') }}
          </div>
        </div>
      </div>
      <div class="line-all-c" />
      <div class="col-12">
        <div>
          <div class="place font-pp-bold">
            <span v-if="$i18n.locale === 'vn'">{{ contact.location2_vn }}</span>
            <span v-else >{{ contact.location2 }}</span>
          </div>
          <div class="address">
            <span v-if="$i18n.locale === 'vn'">{{ contact.address2_vn }}</span>
            <span v-else >{{ contact.address2 }}</span>
          </div>
          <div class="type">
            {{ $t('Branch') }}
          </div>
        </div>
      </div>
      <div class="line-all-c" />
      <div class="col-12">
        <div>
          <div class="place font-pp-bold">
            <span v-if="$i18n.locale === 'vn'">{{ contact.location3_vn }}</span>
            <span v-else >{{ contact.location3 }}</span>
          </div>
          <div class="address">
            <span v-if="$i18n.locale === 'vn'">{{ contact.address3_vn }}</span>
            <span v-else >{{ contact.address3 }}</span>
          </div>
          <div class="type">
            {{ $t('Branch') }}
          </div>
        </div>
      </div>
    </div>
    <div class="line-all line-all-last" />
    <div class="phone">
      Hotline
      <div>
        <a :href="`tel:${ contact.phone }`">
          <div class="tel-div">{{ contact.phone | formatPhoneNumber }}</div>
        </a>
      </div>
    </div>
    <div class="phone">
      Email
      <div>
        <nuxt-link to="/contact#mailus">
          <div class="tel-div">{{ contact.email ? contact.email : 'hello@avt.com.vn' }}</div>
        </nuxt-link>
      </div>
    </div>
    <div class="back-top" @click="toTopAction">
      <!-- <b-icon-arrow-up /> -->
      <img class="img-arrow-up" src="/images/a_up.png"></img>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import general from "~/mixins/general"
export default {
  name: 'ContactPage',
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
    this.animateOnScroll()
    this.getContact()
  },
  methods: {
    ...mapActions({
      getContact: "common/getContact"
    }),
    toTopAction () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    },
    animateOnScroll() {
      this.$gsap.to('.tel-div', {
        scrollTrigger:{
            trigger: '.tel-div',
            toggleActions: 'restart none none reset'
        },
        scale:1,
        ease: "elastic.out",
        duration: 1.5
      })
    }
  }
}
</script>
<style lang="scss">
.section-contact{
  margin-top: 4rem;
}
.line-all-contact{
  margin-bottom: 3rem;
}
.line-all-last{
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.section-title{
  font-size: 5rem;
}
.place{
  font-size: 1.5rem;
}
.address{
  font-size: 1rem;
  margin: 0.5rem 0rem;
  height: 70px;
  width: 60%;
}
.type{
  font-weight: 500;
  margin-top: 4rem;
}
.phone{
  font-size: 1.5rem;
  font-weight: 600;
}
.phone a{
  color: #9D9FA2;
}
.tel-div{
  margin-left: 0rem !important;
  color: #9D9FA2;
}
.phone div{
  display: inline-block;
  margin-left: 2rem;
}
.back-top{
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
  float: right;
}
@media (max-width: 575px) {
  .section-contact{
    margin-top: 0rem;
    padding-bottom: 4rem;
  }
  .section-contact .type{
    margin-top: 0rem;
  }
  .line-all-contact{
    margin-bottom: 1rem;
  }
  .line-all-last{
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .address{
    width: 100%;
  }
  .phone div{
    display: block;
    font-size: 2rem;
    margin-left: 0rem;
  }
  .tel-div{
    display: inline-block !important;
  }
  .back-top{
    right: 1rem;
  }
}
</style>