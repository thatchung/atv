<template>
  <div class="container">
    <Breadcrumb>
      <template #name>
        <li class="breadcrumb-item">
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <h1 class="breadcrumb-h1">
            Innovation
          </h1>
        </li>
      </template>
    </Breadcrumb>
    <h2 class="inno-section-title">
      Innovation
    </h2>
    <div class="line-all" />
    <div class="inno-filter-list">
      <div class="inno-filter-item">
        Latest by 2021
        <b-icon-arrow-down v-if="sort" @click="loadSort" />
        <b-icon-arrow-up v-if="!sort" @click="loadSort" />
      </div>
    </div>
    <div v-if="!loading && listInnovation.length >= 0" class="inno-list-data row">
      <div v-for="(item,index) in listData" :key="index" class="inno-item col-12 col-md-4">
        <Item position="right-p" :item="item" />
      </div>
    </div>
    <!-- <div v-if="!loading && listInnovation.length === 0" class="inno-list-empty" >No Data</div> -->
    <div v-if="loading" class="inno-loading">
      <div class="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <div class="line-all" />
    <div class="paging-content">
      <client-only>
        <Paginate
          v-model="meta.page"
          :page-count="meta.pageCount"
          :prev-text="leftBtn"
          :next-text="rightBtn"
          :container-class="'pagination'"
          :click-handler="loadData"
          :page-class="'page-item'"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Item from "~/components/innoitem.vue"
export default {
  name: 'InnoPage',
  components: {
    Item
  },
  data() {
    return {
      loading: false,
      leftBtn: `<div class="btn-left"><img src="/images/p_left.jpg"></div>`,
      rightBtn: `<div class="btn-left"><img src="/images/p_right.jpg"></div>`,
      sort: true,
      meta : {
        page: 1,
        pageSize: 3,
        pageCount: 4,
        totalItem: 33
      },
      listData: [{
        id: 1,
        title: 'Crescent Mall C Club Lounge',
        url: 'crescent-mall-c-club-lounge',
        thub: '/images/inno1.jpg',
        description: 'Located at the ground floor of Crescent Mall - one of the deluxe shopping centers in South Saigon, C Club Lounge is where Cresent Mall’s Platinum card holders can enjoy the exclusive perks. To turn the empty space into a luxurious and classy hub for the elites, many innovative methods were utilized during the execution of this VIP lounge.',
        date: 'Dec 27, 2021'
      }],
      settings:{
        "dots": false,
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 1
      }
    }
  },
  computed: {
    ...mapGetters({
      listInnovation: "innovation/getListInnovation"
    }),
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      getListInnovation: "innovation/getListInnovation"
    }),
    loadSort () {
      this.sort = !this.sort
      this.loadData()
    },
    async loadData(page) {
      this.loading = true
      if (page && page > 0) {
        page = page - 1
      } else {
        page = 0
      }
      const query = {
        _start : page,
        _limit: 15,
        _sort: this.sort ? 'id:DESC' : 'id:ASC'
      }
      this.meta.page = page + 1
      await this.getListInnovation({ params :query })
      this.listInnovation = this.listData
      this.loading = false
    }
  }
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.inno-section-title{
  font-size: 4rem;
}
.inno-filter-list{
  width: 100%;
  height: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  font-size: 2rem;
}
.inno-filter-item{
  display: inline-block;
  float: left;
  cursor: pointer;
  sgv{
    margin-left: 1rem;
  }
}
.filter-active{
  border: 1px solid #7E8083;
}
.inno-list-data{
  margin: 3rem -15px;
  width: calc(100% + 30px);
}
.inno-list-empty{
  margin: 2rem 0px;
  min-height: 200px;
}
.inno-item{
  margin-bottom: 1rem;
}
.inno-loading{
  text-align: center;
  min-height: 200px;
  padding-top: 50px;
}
.paging-content{
  float: right;
  margin-top: 0rem;
  margin-right: 95px;
  line-height: 30px;
}
.pagination li:first-child {
  position: absolute;
  right: 55px;
}
.pagination li:last-child {
  position: absolute;
  right: 15px;
}
.pagination .active{
  border: 1px solid;
  background-color: black;
  color: white;
}
.page-item{
  padding: 0rem 0.5rem;
}
.btn-left img{
  width: 45px;
  height: 30px;
}
</style>