<template>
  <div class="container section-contact">
    <h2 class="section-title">
      Contact
    </h2>
    <div class="line-all line-all-contact" />
    <div v-if="!isMobile" class="row">
      <div class="col-4 col-md-4">
        <div>
          <div class="place font-pp-bold">
            Ho Chi Minh
          </div>
          <div class="address">
            Level 9, Doxaco Building, 307B Nguyen Van Troi st., W1, Tan Binh Dict., HCMC
          </div>
          <div class="type">
            Head Office
          </div>
        </div>
      </div>
      <div class="col-4 col-md-4">
        <div>
          <div class="place font-pp-bold">
            Ha Noi
          </div>
          <div class="address">
            Level 5, Sentinel Place, 41A Ly Thai To st., Hoan Kiem dist., Ha Noi
          </div>
          <div class="type">
            Branch
          </div>
        </div>
      </div>
      <div class="col-4 col-md-4">
        <div>
          <div class="place font-pp-bold">
            Da Nang
          </div>
          <div class="address">
            267 Tran Phu, Q. Hai Chau,Da Nang City
          </div>
          <div class="type">
            Branch
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="row">
      <div class="col-12">
        <div>
          <div class="place font-pp-bold">
            Ho Chi Minh
          </div>
          <div class="address">
            Level 9, Doxaco Building, 307B Nguyen Van Troi st., W1, Tan Binh Dict., HCMC
          </div>
          <div class="type">
            Head Office
          </div>
        </div>
      </div>
      <div class="line-all-c" />
      <div class="col-12">
        <div>
          <div class="place font-pp-bold">
            Ha Noi
          </div>
          <div class="address">
            Level 5, Sentinel Place, 41A Ly Thai To st., Hoan Kiem dist., Ha Noi
          </div>
          <div class="type">
            Branch
          </div>
        </div>
      </div>
      <div class="line-all-c" />
      <div class="col-12">
        <div>
          <div class="place font-pp-bold">
            Da Nang
          </div>
          <div class="address">
            267 Tran Phu, Q. Hai Chau,Da Nang City
          </div>
          <div class="type">
            Branch
          </div>
        </div>
      </div>
    </div>
    <div class="line-all line-all-last" />
    <div class="phone">
      Hotline
      <div><a href="tel:0123456789">+84 908 734 134</a></div>
    </div>
    <div class="back-top" @click="toTopAction">
      <b-icon-arrow-up />
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
.section-contact{
  margin-top: 4rem;
  padding-bottom: 4rem;
}
.line-all-contact{
  margin-bottom: 3rem;
}
.line-all-last{
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.section-title{
  font-size: 4rem;
}
.place{
  font-size: 1.5rem;
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
}
.phone a{
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
  .line-all-contact{
    margin-bottom: 1rem;
  }
  .line-all-last{
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .phone div{
    display: block;
    font-size: 2rem;
  }
}
</style>