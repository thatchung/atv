<template>
  <div class="convention">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h2 class="convention-title font-pp-bold">
            {{ $t('CONVENTIONALMETHOD') }}
          </h2>
          <div class="about-con-line-all" />
          <div class="convention-name">
            {{ $t('OWNERPROJECTBURDEN') }}
          </div>
          <div v-if="!isMobile" class="row">
            <div class="col-2 col-md-2" />
            <div class="col-10 col-md-10">
              <div class="about-con-line-all" />
              <div class="convention-text">
                {{ $t('ARCHITECT') }}
              </div>
              <div class="about-con-line-all" />
              <div class="convention-text">
                {{ $t('MAINCONTRACTOR') }}
              </div>
              <div class="about-con-line-all" style="margin: 1rem 0rem 1rem 0rem;" />
              <div class="row sub">
                <div class="col-5 col-md-5">
                  {{ $t('SubsSuppliers') }} 1
                </div>
                <div class="col-2 col-md-2">
                  /
                </div>
                <div class="col-5 col-md-5">
                  {{ $t('SubsSuppliers') }} 2
                </div>
              </div>
              <div class="about-con-line-all-d" />
              <div class="row sub">
                <div class="col-5 col-md-5">
                  {{ $t('SubsSuppliers') }} 3
                </div>
                <div class="col-2 col-md-2">
                  /
                </div>
                <div class="col-5 col-md-5">
                  {{ $t('SubsSuppliers') }} 4
                </div>
              </div>
              <div class="about-con-line-all" style="margin: 1rem 0rem 1rem 0rem;" />
              <div class="convention-text">
                {{ $t('PROJECTMANAGER') }}
              </div>
            </div>
          </div>
          <div v-if="isMobile">
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-2 col-md-2" />
              <div class="col-10 col-md-10">
                <div class="convention-text">
                  {{ $t('ARCHITECT') }}
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-2 col-md-2" />
              <div class="col-10 col-md-10">
                <div class="convention-text">
                  {{ $t('MAINCONTRACTOR') }}
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-4 col-md-2" />
              <div class="col-6 col-md-10">
                <div class="convention-text">
                  {{ $t('SubsSuppliers') }} 1
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-4 col-md-2" />
              <div class="col-6 col-md-10">
                <div class="convention-text">
                  {{ $t('SubsSuppliers') }} 2
                </div>
              </div>
            </div>
            <div class="about-con-line-all-d" />
            <div class="row">
              <div class="col-4 col-md-2" />
              <div class="col-6 col-md-10">
                <div class="convention-text">
                  {{ $t('SubsSuppliers') }} 3
                </div>
              </div>
            </div>
            <div class="about-con-line-all-d" />
            <div class="row">
              <div class="col-4 col-md-2" />
              <div class="col-6 col-md-10">
                <div class="convention-text">
                  {{ $t('SubsSuppliers') }} 4
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-2 col-md-2" />
              <div class="col-10 col-md-10">
                <div class="convention-text">
                  {{ $t('PROJECTMANAGER') }}
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="convention-title font-pp-bold">
            {{ $t('DESIGNBUILDMETHOD') }}
          </h2>
          <div class="about-con-line-all" />
          <div class="convention-name">
            {{ $t('OWNERPROJECTBURDEN') }}
          </div>
          <div v-if="!isMobile" class="row">
            <div class="col-2 col-md-2" />
            <div class="col-10 col-md-10">
              <div class="about-con-line-all" />
              <div class="convention-text">
                {{ $t('AVTPROJECTMANAGER') }}
              </div>
              <div class="about-con-line-all" />
              <div class="convention-text">
                {{ $t('AVTDESIGNER') }}
              </div>
              <div class="about-con-line-all" />
              <div class="convention-text">
                {{ $t('SUBSSUPPLIERS') }}
              </div>
            </div>
          </div>
          <div v-if="isMobile">
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-2 col-md-2" />
              <div class="col-10 col-md-10">
                <div class="convention-text">
                  {{ $t('AVTPROJECTMANAGER') }}
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-2 col-md-2" />
              <div class="col-10 col-md-10">
                <div class="convention-text">
                  {{ $t('AVTDESIGNER') }}
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
            <div class="row">
              <div class="col-2 col-md-2" />
              <div class="col-10 col-md-10">
                <div class="convention-text">
                  {{ $t('SUBSSUPPLIERS') }}
                </div>
              </div>
            </div>
            <div class="about-con-line-all" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatPage',
  data() {
    return {
      team1:[
        {
          thub: '/images/slide4.jpg',
          content: 'Integrity is AVT’s most important recruitment criterion. As a result, the team at AVT has not only excellent expertise and on-theeld experience but also professional and trustworthy manner.'
        },
        {
          thub: '/images/slide2.jpg',
          content: 'At AVT, our goal is to harmonize between discipline and creativity.Hence, the working environment at AVT is built around openness and transparency in order to foster innovation and cooperation.'
        }
      ],
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = this.checkMobile()
  },
  methods: {
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    }
  }
}
</script>
<style lang="scss">
.about-con-line-all{
  width: 100%;
  margin: 1rem 0rem;
  border-top: 1.5px solid #000;
}
.about-con-line-all-d{
  width: 100%;
  margin: 0.5rem 0rem;
  border-top: 1.5px solid #000;
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
@media (max-width: 575px) {
  .convention .convention-title {
    font-size: 2rem;
    margin-top: 2rem;
  }
  .convention .sub {
    font-size: 1rem;
  }
}
</style>