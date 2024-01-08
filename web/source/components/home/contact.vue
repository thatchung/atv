<template>
  <div>
    <div class="container section-contact" v-if="!isMobile">
      <h2 class="section-title">
        {{ $t('Contact') }}
      </h2>
      <div class="line-all" />
      <div class="row contact-info">
        <div class="col-4 col-md-4">
          <div class="contact-left-info">
            <div class="contact-left-title">Hotline</div>
            <div class="contact-left-text contact-left-end">{{ contact.phone | formatPhoneNumber }}</div>
            <div class="contact-left-title">{{ $i18n.locale === 'vn' ? contact.location1_vn : contact.location1}}</div>
            <div class="contact-left-text">{{ $i18n.locale === 'vn' ? contact.address1_vn : contact.address1}}</div>
            <div class="contact-left-text contact-left-end">{{ $t('HeadOffice') }}</div>
            <div class="contact-left-title">{{ $i18n.locale === 'vn' ? contact.location2_vn : contact.location2}}</div>
            <div class="contact-left-text contact-left-end">{{ $i18n.locale === 'vn' ? contact.address2_vn : contact.address2}}</div>
            <div class="contact-left-title">{{ $i18n.locale === 'vn' ? contact.location3_vn : contact.location3}}</div>
            <div class="contact-left-text">{{ $i18n.locale === 'vn' ? contact.address3_vn : contact.address3}}</div>
          </div>
        </div>
        <div class="col-8 col-md-8">
          <div class="contact-right-info">
            <h2 class="mail-title">
              {{ $t('MailUs') }}
            </h2>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_name" name="" :placeholder="$t('Contactname')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_company" name="" :placeholder="$t('CompanyName')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_phone" name="" :placeholder="$t('CompanyPhone')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_email" name="" placeholder="Email"></input>
            <div class="line-all-d" />
            <div style="color: #000;">
              {{ $t('YourMessage') }}
            </div>
            <textarea id="txtid" v-model="form_message" name="txtname" rows="5" cols="50" maxlength="200" />
            <div class="btn-send" v-if="loading" style="cursor: wait;" >
              {{ $t('Send') }}
            </div>
            <div class="btn-send" v-else @click="onPushContact">
              {{ $t('Send') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile">
      <div class="container">
        <h2 class="section-title">
          {{ $t('Contact') }}
        </h2>
        <div class="line-all" />
      </div>
      <div class="contact-info">
        <div class="contact-left-info">
          <div class="contact-left-title">Hotline</div>
          <div class="contact-left-text contact-left-end">{{ contact.phone | formatPhoneNumber }}</div>
          <div class="contact-left-title">{{ $i18n.locale === 'vn' ? contact.location1_vn : contact.location1}}</div>
          <div class="contact-left-text">{{ $i18n.locale === 'vn' ? contact.address1_vn : contact.address1}}</div>
          <div class="contact-left-text contact-left-end">{{ $t('HeadOffice') }}</div>
          <div class="contact-left-title">{{ $i18n.locale === 'vn' ? contact.location2_vn : contact.location2}}</div>
          <div class="contact-left-text contact-left-end">{{ $i18n.locale === 'vn' ? contact.address2_vn : contact.address2}}</div>
          <div class="contact-left-title">{{ $i18n.locale === 'vn' ? contact.location3_vn : contact.location3}}</div>
          <div class="contact-left-text">{{ $i18n.locale === 'vn' ? contact.address3_vn : contact.address3}}</div>
        </div>
        <div class="contact-right-info">
            <h2 class="mail-title">
              {{ $t('MailUs') }}
            </h2>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_name" name="" :placeholder="$t('Contactname')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_company" name="" :placeholder="$t('CompanyName')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_phone" name="" :placeholder="$t('CompanyPhone')"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" v-model="form_email" name="" placeholder="Email"></input>
            <div class="line-all-d" />
            <div style="color: #000;">
              {{ $t('YourMessage') }}
            </div>
            <textarea id="txtid" v-model="form_message" name="txtname" rows="5" cols="50" maxlength="200" />
            <div class="btn-send" v-if="loading" style="cursor: wait;" >
              {{ $t('Send') }}
            </div>
            <div class="btn-send" v-else @click="onPushContact">
              {{ $t('Send') }}
            </div>
        </div>
      </div>
    </div>
    <div class="back-top" @click="toTopAction">
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
      isMobile: false,
      loading: false,
      form_name: null,
      form_company: null,
      form_phone: null,
      form_email: null,
      form_message: null
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
      getContact: "common/getContact",
      postbyUrl: "common/postbyUrl"
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
    },
    resetForm(){
      this.form_name = null
      this.form_company = null
      this.form_phone = null
      this.form_email = null
      this.form_message = null
    },
    async onPushContact() {
      this.loading = true
      if(!this.form_name || !this.form_company || !this.form_phone || !this.form_email || !this.form_message) {
        this.$toast.open({
          type:'warning',
          message:'Vui lòng nhập đầy đủ thông tin!',
          position: 'top-right'
        });
        this.loading = false
        return
      }
      if(!this.validateEmail(this.form_email)) {
        this.$toast.open({
          type:'warning',
          message:'Vui lòng nhập đúng định dạng email!',
          position: 'top-right'
        });
        this.loading = false
        return
      }
      if(!this.validatePhone(this.form_phone)) {
        this.$toast.open({
          type:'warning',
          message:'Vui lòng nhập đúng số điện thoại!',
          position: 'top-right'
        });
        this.loading = false
        return
      }
      let res = await this.postbyUrl({
        url: '/api/contact-froms',
        params: {
            Name: this.form_name,
            Company: this.form_company,
            Phone: this.form_phone,
            Email: this.form_email,
            Message: this.form_message
        }
      })
      if(res && res.id) {
        this.resetForm()
        this.$toast.open({
          type:'success',
          message:'Gởi thông tin thành công!',
          position: 'top-right'
        });
      } else {
        this.$toast.open({
          type:'error',
          message:'Gởi thông tin thất bại! Vui lòng thử lại sau.',
          position: 'top-right'
        });
      }
      this.loading = false
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    validatePhone(phone) {
      let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      return vnf_regex.test(phone)
    }
  }
}
</script>
<style lang="scss">
.section-contact{
  margin-top: 4rem;
}
.section-title{
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
}
.contact-info{
  margin-top: 2rem;
}
.contact-left-info{
  padding: 1.5rem;
  background-color: #000;
  .contact-left-title{
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 0.7rem;
  }
  .contact-left-text{
    color: #fff;
    font-size: 18px;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  .contact-left-end{
    margin-bottom: 2rem;
  }
}
.contact-right-info{
  padding: 1.5rem;
  padding-right: 0px;
  .mail-title{
    font-weight: bold;
    font-size: 24px;
  }
  .line-all-d{
    width: 100%;
    margin: 1rem 0rem;
    border-top: 1px solid #7E8083;
  }
  .c-input{
    border: none;
    width: 100%;
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
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
  }
  textarea{
    width: 100%;
    background-color: #fff;
    margin-top: 1rem;
    border:1px solid #000;
    &:focus-visible {
      outline: none;
    }
    padding: 5px;
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
.back-top{
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
  float: right;
}
@media (min-width: 1700px) {
  .btn-send{
    color: white;
    background-color: black;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
    position: absolute;
    bottom: -1rem;
    right: 0.5rem;
  }
}
@media (max-width: 575px) {
  .contact-left-info{
    padding: 1.5rem;
  }
  .contact-right-info{
    padding: 1.5rem;
    padding-right: 1.5rem;
    position: relative;
  }

  .btn-send{
    bottom: -2rem;
    right: 1.5rem;
  }
  .back-top{
    right: 1rem;
  }
}
</style>