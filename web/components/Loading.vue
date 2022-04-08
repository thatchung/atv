<template>
  <div class="loading" v-if="show">
    <div class="logo-main">
      <div class="rect-1"></div>
      <div class="rect-2"></div>
      <div class="rect-3"></div>
      <div class="rect-4"></div>
      <div class="logo-loading">
        <img src="/images/logo.png" />
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
    }, 4000)
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
    background-color: #000000db;
    z-index: 15;
}
.logo-main{
    position: relative;
    top: calc(50% - 120px);
    left: 50%;
    transform: translate(-50%);
    width: 345px;
    height: 240px;
}
.logo-loading{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
    background: radial-gradient(#000000, #00000000 50%, #00000000);
    img{
      width: 50%;
      margin-left: 85px;
      margin-top: 61px;
    }
}
@keyframes color1 {
    0%{background-position: 100% 0%}
    5%{background-position: 90% 0%}
    10%{background-position: 80% 0%}
    15%{background-position: 70% 0%}
    20%{background-position: 60% 0%}
    25%{background-position: 50% 0%}
    30%{background-position: 40% 1%}
    35%{background-position: 30% 0%}
    40%{background-position: 35% 0%}
    45%{background-position: 40% 0%}
    50%{background-position: 45% 0%}
    55%{background-position: 50% 1%}
    60%{background-position: 55% 2%}
    65%{background-position: 60% 3%}
    70%{background-position: 65% 4%}
    75%{background-position: 60% 5%}
    80%{background-position: 59% 6%}
    85%{background-position: 58% 7%}
    90%{background-position: 57% 8%}
    95%{background-position: 56% 9%}
    100%{background-position: 55% 10%}
}
@keyframes color2 {
    0%{background-position: 100% 0%}
    5%{background-position: 100% 0%}
    10%{background-position: 100% 0%}
    15%{background-position: 100% 0%}
    20%{background-position: 90% 0%}
    25%{background-position: 80% 0%}
    30%{background-position: 70% 0%}
    35%{background-position: 60% 0%}
    40%{background-position: 50% 0%}
    45%{background-position: 40% 1%}
    50%{background-position: 30% 0%}
    55%{background-position: 35% 0%}
    60%{background-position: 40% 0%}
    65%{background-position: 45% 0%}
    70%{background-position: 50% 0%}
    75%{background-position: 60% 5%}
    80%{background-position: 59% 6%}
    85%{background-position: 58% 7%}
    90%{background-position: 57% 8%}
    95%{background-position: 56% 9%}
    100%{background-position: 55% 10%}
}
.rect-1{
    position: absolute;
    z-index: 4;
    left: 27px;
    top: 106px;
    width: 300px;
    height: 100px;
    clip-path: polygon(0% 100%, 40% 0%, 100% 100%);
    transform: rotate(5.5deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    animation: color1 6s ease-out;
    background-position: 100% 0%;
}
.rect-2{
    position: absolute;
    z-index: 2;
    left: 0px;
    top: 36px;
    width: 178px;
    height: 133px;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    transform: rotate(90deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    background-position: 55% 30%;
    animation: color2 6s ease-out;
}
.rect-3{
    position: absolute;
    z-index: 4;
    left: 27px;
    top: 0px;
    width: 300px;
    height: 100px;
    clip-path: polygon(0% 100%, 60% 0%, 100% 100%);
    transform: rotate(174.5deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    background-position: 55% 30%;
    animation: color2 6s ease-out;
}
.rect-4{
    position: absolute;
    z-index: 2;
    left: 118px;
    top: 17px;
    width: 235px;
    height: 172px;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    transform: rotate(270deg);
    background:radial-gradient(#ffffff, #ffffff 10%, #000000 60%,#000000);
    background-size: 600% 600%;
    background-position: 100% 0%;
    animation: color1 6s ease-out;
}
</style>
