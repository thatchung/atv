<template>
  <div class="container section-contact">
    <h2 class="section-title">
      Contact
    </h2>
    <div class="line-all" style="margin-bottom: 3rem;" />
    <div class="row">
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
    <div class="line-all" style="margin: 3rem 0rem;" />
    <div class="phone">
      Hotline
      <span>+84 908 734 134</span>
    </div>
    <div class="back-top" @click="toTopAction">
      <b-icon-arrow-up />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  methods: {
    toTopAction () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
<style lang="scss">
.section-contact{
  margin-top: 4rem;
  padding-bottom: 4rem;
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
.phone span{
  color: #7E8083;
}
.back-top{
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  cursor: pointer;
}
</style>