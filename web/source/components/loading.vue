<template>
  <div v-if="show" class="loading">
    <div class="logo-main">
      <div class="rect-1" />
      <div class="rect-2" />
      <div class="rect-3" />
      <div class="rect-4" />
      <div class="logo-loading">
        <img src="/images/logo.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  mounted() {
    this.show = true
    setTimeout(() => {
      this.show = false
    }, 6000)
  }
}
</script>
<style lang="scss">
.loading{
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: #000000f7;
    z-index: 15;
}
.logo-main{
    position: relative;
    top: calc(50% - 120px);
    left: 50%;
    transform: translate(-50%);
    width: 170px;
    height: 120px;
}
.logo-loading{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
    animation: imgbg 6s ease-out;
    animation-fill-mode: forwards;
    top: 42px;
    left: 15px;
    img{
      animation: image 6s ease-out;
      animation-fill-mode: forwards;
      width: 50%;
      margin-left: 45px;
      margin-top: 42px;
    }
}
@keyframes image {
    0%{content:url(/images/logo.png)}
    75%{content:url(/images/logo.png)}
    94%{content:url(/images/logo_b.png)}
    100%{content:url(/images/logo_b.png)}
}
@keyframes imgbg {
    0%{background: radial-gradient(#000000, #00000000 50%, #00000000)}
    75%{background: radial-gradient(#000000, #00000000 50%, #00000000)}
    100%{background: none}
}
@keyframes color1 {
    0%{background-position: 100% 5%}
    75%{background-position: 0% 5%}
    100%{background-position: 50% 50%}
}
@keyframes color2 {
    0%{background-position: 50% 5%}
    50%{background-position: 0% 5%}
    75%{background-position: 0% 5%}
    100%{background-position: 50% 50%}
}
@keyframes color3 {
    0%{background-position: 100% 5%}
    50%{background-position: 100% 5%}
    75%{background-position: 75% 5%}
    100%{background-position: 50% 50%}
}
@keyframes color4 {
    0%{background-position: 100% 5%}
    25%{background-position: 100% 5%}
    50%{background-position: 50% 5%}
    75%{background-position: 25% 5%}
    100%{background-position: 50% 50%}
}
.rect-1{
    position: absolute;
    z-index: 4;
    left: 27px;
    top: 106px;
    width: 150px;
    height: 50px;
    clip-path: polygon(0% 100%, 40% 0%, 100% 100%);
    transform: rotate(5.5deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    animation: color1 6s ease-out;
    animation-fill-mode: forwards;
    background-position: 100% 10%;
}
.rect-2{
    position: absolute;
    z-index: 2;
    left: 13px;
    top: 72px;
    width: 89px;
    height: 66px;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    transform: rotate(90deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    background-position: 0% 0%;
    animation: color2 6s ease-out;
    animation-fill-mode: forwards;
}
.rect-3{
    position: absolute;
    z-index: 4;
    left: 27px;
    top: 54px;
    width: 150px;
    height: 50px;
    clip-path: polygon(0% 100%, 60% 0%, 100% 100%);
    transform: rotate(174.5deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    background-position: 0% 0%;
    animation: color3 6s ease-out;
    animation-fill-mode: forwards;
}
.rect-4{
    position: absolute;
    z-index: 2;
    left: 72px;
    top: 62px;
    width: 117px;
    height: 86px;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    transform: rotate(270deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    background-position: 100% 0%;
    animation: color4 6s ease-out;
    animation-fill-mode: forwards;
}
</style>
