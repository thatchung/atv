<template>
  <div class="container-footer">
    <div class="container">
      <div class="footer-content">
        2022 AVT all right reserved
      </div>
      <div class="footer-icon">
        <a id="A1" href="https://m.facebook.com/AVT-International-100984125977680" target="_blank">
          <img class="img-icon" src="/images/i_face.png"></a>
        <a id="A4" href="https://www.instagram.com/avt_international" target="_blank">
          <img class="img-icon" src="/images/4_Icon_Insta.png"></a>
        <a id="A5" href="https://www.linkedin.com/company/avt-international" target="_blank">
          <img class="img-icon" src="/images/5_Linkedin.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.container-footer{
  background-color: #010101;
  height: 70px;
  color: white;
  text-align: center;
  line-height: 70px;
  z-index: 9;
  position: relative;
  margin-top: 10rem;
}
.container{
  position: relative;
}
.footer-content{
  color: white;
}
.footer-icon{
  position: absolute;
  right: 0px;
  top: 0px;
}
.img-icon{
  height: 24px;
  margin-right: 1rem;
}
</style>
