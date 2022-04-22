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
              Ho Chi Minh
            </div>
            <div class="address">
              Level 9, Doxaco Building,</br> 307B Nguyen Van Troi st., W1,</br> Tan Binh Dict., HCMC
            </div>
            <div class="type">
              {{ $t('HeadOffice') }}
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div>
            <div class="place">
              Ha Noi
            </div>
            <div class="address">
              Level 5, Sentinel Place,</br> 41A Ly Thai To st.,</br> Hoan Kiem dist., Ha Noi
            </div>
            <div class="type">
              {{ $t('Branch') }}
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div>
            <div class="place">
              Da Nang
            </div>
            <div class="address">
              267 Tran Phu, Q. Hai Chau,</br>Da Nang City
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
              Ho Chi Minh
            </div>
            <div class="address">
              Level 9, Doxaco Building, 307B Nguyen Van Troi st., W1, Tan Binh Dict., HCMC
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
              Ha Noi
            </div>
            <div class="address">
              Level 5, Sentinel Place, 41A Ly Thai To st., Hoan Kiem dist., Ha Noi
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
              Da Nang
            </div>
            <div class="address">
              267 Tran Phu, Q. Hai Chau,Da Nang City
            </div>
            <div class="type">
              {{ $t('Branch') }}
            </div>
          </div>
        </div>
      </div>
      <div class="line-all" />
      <div class="phone">
        Hotline
        <div><a href="tel:0123456789">+84 908 734 134</a></div>
      </div>
    </div>
    <div class="mailus">
      <div class="container">
        <h2 class="mail-title">
          Mail Us
        </h2>
        <div v-if="!isMobile" class="row" style="padding-bottom: 3rem;">
          <div class="col-6 col-md-6">
            <div class="line-all-d" />
            <div>
              {{ $t('Pleaseselecttypeofenquiry') }}
            </div>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Subject*"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Title"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Fist name"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Last name"></input>
            <div class="line-all-d" />
          </div>
          <div class="col-6 col-md-6">
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Company Name"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Contact No*"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Email"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="City"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Postal"></input>
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
            <div>
              {{ $t('Pleaseselecttypeofenquiry') }}
            </div>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Subject*"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Title"></input>
            <div class="line-all-d" />
            <div class="row">
              <div class="col-6">
                <input class="c-input" type="text" name="" placeholder="Fist name"></input>
                <div class="line-all-d" />
              </div>
              <div class="col-6">
                <input class="c-input" type="text" name="" placeholder="Last name"></input>
                <div class="line-all-d" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <input class="c-input" type="text" name="" placeholder="Company Name"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Contact No*"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Email"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="City"></input>
            <div class="line-all-d" />
            <input class="c-input" type="text" name="" placeholder="Postal"></input>
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
export default {
  name: 'ContactPage',
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
  },
  methods: {
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
  margin-bottom: 3rem;
}
.phone a{
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
  border-top: 2px solid #464748;
}
.c-input{
  border: none;
  width: 100%;
  background-color: #AFB0B3;
  &:focus-visible {
    outline: none;
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
  border:2px solid #464748;
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
}
</style>