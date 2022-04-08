<template>
  <div class="convention">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6">
          <h2 class="convention-title font-pp-bold">CONVENTIONAL METHOD</h2>
          <div class="about-con-line-all"></div>
          <div class="convention-name">OWNER (PROJECT BURDEN)</div>
          <div class="row">
            <div class="col-2 col-md-2"></div>
            <div class="col-10 col-md-10">
              <div class="about-con-line-all"></div>
              <div class="convention-text">ARCHITECT</div>
              <div class="about-con-line-all"></div>
              <div class="convention-text">MAIN CONTRACTOR</div>
              <div class="about-con-line-all" style="margin: 1rem 0rem 1rem 0rem;"></div>
              <div class="row sub">
                <div class="col-5 col-md-5">Subs & Suppliers 1</div>
                <div class="col-2 col-md-2">/</div>
                <div class="col-5 col-md-5">Subs & Suppliers 2</div>
              </div>
              <div class="about-con-line-all-d"></div>
              <div class="row sub">
                <div class="col-5 col-md-5">Subs & Suppliers 3</div>
                <div class="col-2 col-md-2">/</div>
                <div class="col-5 col-md-5">Subs & Suppliers 4</div>
              </div>
              <div class="about-con-line-all" style="margin: 1rem 0rem 1rem 0rem;"></div>
              <div class="convention-text">PROJECT MANAGER</div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6">
          <h2 class="convention-title font-pp-bold">DESIGN - BUILD METHOD</h2>
          <div class="about-con-line-all"></div>
          <div class="convention-name">OWNER (PROJECT BURDEN)</div>
          <div class="row">
            <div class="col-2 col-md-2"></div>
            <div class="col-10 col-md-10">
              <div class="about-con-line-all"></div>
              <div class="convention-text">AVT PROJECT MANAGER</div>
              <div class="about-con-line-all"></div>
              <div class="convention-text">AVT DESIGNER</div>
              <div class="about-con-line-all"></div>
              <div class="convention-text">SUBS & SUPPLIERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatPage'
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.about-con-line-all{
  width: 100%;
  margin: 1rem 0rem;
  border-top: 2px solid #000;
}
.about-con-line-all-d{
  width: 100%;
  margin: 0.5rem 0rem;
  border-top: 2px solid #000;
}
.convention{
  width: 100%;
  padding: 4rem 0rem;
  background-color: #AFB0B3;
}
.convention{
  color: #000;
  font-weight: 600;
  .sub{
    font-weight: 400;
  }
}
</style>