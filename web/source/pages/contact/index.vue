<template>
  <div>
    <div class="container">
      <h2 class="section-title">
        {{ $t('Contact') }}
      </h2>
      <div class="line-all" />
      <div v-if="!isMobile" class="row contact-info">
        <div class="col-4 col-md-4">
          <div>
            <div class="place">
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
            <div class="place">
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
            <div class="place">
              <span v-if="$i18n.locale === 'vn'">{{ contact.location3_vn }}</span>
              <span v-else >{{ contact.location3 }}</span>
            </div>
            <div class="address" :style="`width:${$i18n.locale === 'vn' ? '63' : '55'}%`">
              <span v-if="$i18n.locale === 'vn'">{{ contact.address3_vn }}</span>
              <span v-else >{{ contact.address3 }}</span>
            </div>
            <div class="type">
              {{ $t('Branch') }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile" class="contact-info">
        <div class="row">
          <div class="col-12">
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
        <div class="line-all" />
        <div class="row">
          <div class="col-12">
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
        <div class="line-all" />
        <div class="row">
          <div class="col-12">
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
      <div class="line-all" />
      <div class="phone" style="margin-bottom: 3rem;">
        Hotline
        <div>
          <a :href="`tel:${ contact.phone }`">
            <div class="tel-div">{{ contact.phone | formatPhoneNumber }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="mailus" ref="mailus">
      <div class="container">
        <h2 class="mail-title">
          {{ $t('MailUs') }}
        </h2>
        <div v-if="!isMobile" class="row" style="padding-bottom: 3rem;">
          <div class="col-6 col-md-6">
            <div class="line-all-d" />
            <!-- <div>
              {{ $t('Pleaseselecttypeofenquiry') }}
            </div> -->
            <input class="c-input" type="text" name="" :placeholder="$t('Pleaseselecttypeofenquiry')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Subject')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Title')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Fistname')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Lastname')"></input>
            <div class="line-all-d" />
          </div>
          <div class="col-6 col-md-6">
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('CompanyName')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('ContactNo')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Email"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('City')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Postal')"></input>
            <div class="line-all-d" />
          </div>
          <div class="col-12 col-md-12">
            <div>
              {{ $t('YourMessage') }}
            </div>
            <textarea id="txtid" name="txtname" rows="5" cols="50" maxlength="200" />
          </div>
          <div class="btn-send">
            {{ $t('Send') }}
          </div>
        </div>
        <div v-if="isMobile" class="row" style="padding-bottom: 3rem;">
          <div class="col-12">
            <div class="line-all-d" />
            <!-- <div>
              {{ $t('Pleaseselecttypeofenquiry') }}
            </div> -->
            <input class="c-input" type="text" name="" :placeholder="$t('Pleaseselecttypeofenquiry')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Subject')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Title')"></input>
            <div class="line-all-d" />
            <div class="row">
              <div class="col-6">
                <input class="c-input" type="text" name="" :placeholder="$t('Fistname')"></input>
                <div class="line-all-d" />
              </div>
              <div class="col-6">
                <input class="c-input" type="text" name="" :placeholder="$t('Lastname')"></input>
                <div class="line-all-d" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <input class="c-input" type="text" name="" :placeholder="$t('CompanyName')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('ContactNo')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Email"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('City')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" :placeholder="$t('Postal')"></input>
            <div class="line-all-d" />
          </div>
          <div class="col-12 col-md-12">
            <div>
              {{ $t('YourMessage') }}
            </div>
            <textarea id="txtid" name="txtname" rows="5" cols="50" maxlength="200" />
          </div>
          <div class="btn-send">
            {{ $t('Send') }}
          </div>
        </div>
      </div>
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
  head() {
    let headJson = {
      title: "Contact - AVT International cung cấp các dịch vụ thiết kế và thi công",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: 'Contact - AVT International cung cấp các dịch vụ thiết kế và thi công'
        },
        {
          hid: "description",
          property: "description",
          content: 'Contact - AVT International cung cấp các dịch vụ thiết kế và thi công'
        },
        {
          hid: "og:description",
          property: "og:description",
          content: 'Contact - AVT International cung cấp các dịch vụ thiết kế và thi công'
        },
        {
          hid: "robots",
          property: "robots",
          content:
            this.s_work !== undefined && this.s_work.meta_robots
              ? this.s_work.meta_robots
              : "INDEX,FOLLOW"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: '/uploads/DSC_05795_ad8e9b7584.jpg'
        },
        {
          hid: "og:url",
          property: "og:url",
          content: '/contact'
        },
        {
          hid: "keywords",
          property: "keywords",
          content: 'contact, avt'
        }
      ],
      link: [
        {
          rel: "canonical",
          href: '/contact'
        }
      ]
    }
    return headJson
  },
  mounted() {
    this.checkMobile()
    this.animateOnScroll()
    this.$gsap.to('.tel-div-c', {
      scale:1,
      ease: "elastic.out",
      duration: 1.5
    })
    this.getContact()
    if (this.$route.hash) {
      this.goto(this.$route.hash.replace('#', ''))
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
    goto(hash) {
      const el = this.$refs[('' + hash)]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          let yy = window.pageYOffset
          window.scrollTo({ top: yy - 70, behavior: 'smooth' })
        }, 900)
      }
    },
    animateOnScroll() {
      this.$gsap.to('.tel-div-c', {
        scrollTrigger:{
            trigger: '.tel-div-c',
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
.section-title{
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
}
.contact-info{
  margin-top: 2rem;
}
.place{
  font-size: 1.5rem;
  font-weight: 600;
}
.address{
  font-size: 1rem;
  margin: 0.5rem 0rem;
  height: 70px;
}
.type{
  font-weight: 600;
}
.phone{
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.phone a{
  color: #9D9FA2;
}
.tel-div-c{
  transform: scale(0.5, 0.5);
  margin-left: 0rem !important;
  color: #9D9FA2;
}
.phone div{
  display: inline-block;
}
.mailus{
  width: 100%;
  padding: 4rem 0rem;
  background-color: #AFB0B3;
}
.mail-title{
  font-size: 5rem;
  margin-bottom: 1rem;
}
.line-all-d{
  width: 100%;
  margin: 0.5rem 0rem;
  border-top: 1px solid #7E8083;
}
.c-input{
  border: none;
  width: 100%;
  background-color: #AFB0B3;
  &:focus-visible {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #5d5d5d;
  }
  &::-moz-placeholder {
    color: #5d5d5d;
  }
  &:-ms-input-placeholder {
    color: #5d5d5d;
  }
  &:-moz-placeholder {
    color: #5d5d5d;
  }
}
.c-input:-webkit-autofill,
.c-input:-webkit-autofill:hover,
.c-input:-webkit-autofill:focus,
.c-input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #AFB0B3 inset !important;
}
textarea{
  width: 100%;
  background-color: #AFB0B3;
  margin-top: 1rem;
  border:1px solid #7E8083;
  &:focus-visible {
    outline: none;
  }
}
.btn-send{
  color: white;
  background-color: black;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
@media (max-width: 575px) {
  .address{
    height: 50px;
  }
  .type{
    text-align: right;
  }
  .phone div{
    display: block;
    font-size: 2rem;
  }
  .tel-div-c{
    display: inline-block !important;
  }
}
</style>