<template>
  <div class="container">
    <Breadcrumb>
      <template>
        <li class="breadcrumb-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <h1 class="breadcrumb-h1">Work</h1>
        </li>
      </template>
    </Breadcrumb>
    <h2 class="work-section-title">Work</h2>
    <div class="line-all"></div>
    <div class="work-filter-list">
      <div v-for="(type, index) in types"
        :key="index"
        :class="'work-filter-item ' + ( typeActive === type ? 'filter-active': '' ) "
        @click="loadFilter(type)">
        {{ type | workTypeFilter }}
      </div>
      <div v-if="typeActive === 'location'" class="filter-item-active">
        <span v-if="!filterChoice" >
          {{ locationActive | locationFilter }}
        </span>
        <div v-if="filterChoice" class="filter-list">
          <div v-for="(i, idx) in locations" :key="idx" class="filter-item" @click="choiceLocationFilter(i)">
            {{ i | locationFilter }}
          </div>
        </div>
        <b-icon-arrow-down v-if="!filterChoice" @click="showChoiceFilter"/>
        <b-icon-arrow-up v-if="filterChoice" @click="closeChoiceFilter"/>
      </div>
      <div v-if="typeActive === 'category'" class="filter-item-active">
        <span v-if="!filterChoice" >
          {{ categoryActive | categoryFilter }}
        </span>
        <div v-if="filterChoice" class="filter-list">
          <div v-for="(i, idx) in categories" :key="idx" class="filter-item" @click="choiceCategoryFilter(i)">
            {{ i | categoryFilter }}
          </div>
        </div>
        <b-icon-arrow-down v-if="!filterChoice" @click="showChoiceFilter"/>
        <b-icon-arrow-up v-if="filterChoice" @click="closeChoiceFilter"/>
      </div>
      <div v-if="typeActive === 'year'" class="filter-item-active">
        <span v-if="!filterChoice" >
          {{ yearActive }}
        </span>
        <div v-if="filterChoice" class="filter-list">
          <div v-for="(i, idx) in years" :key="idx" class="filter-item" @click="choiceYearFilter(i)">
            {{ i }}
          </div>
        </div>
        <b-icon-arrow-down v-if="!filterChoice" @click="showChoiceFilter"/>
        <b-icon-arrow-up v-if="filterChoice" @click="closeChoiceFilter"/>
      </div>
    </div>
    <div v-if="!loading && listWork.length > 0" class="work-list-data row">
      <div v-for="index in 3" :key="index" class="work-item col-4 col-md-4">
        <Item />
      </div>
    </div>
    <div v-if="!loading && listWork.length === 0" class="work-list-empty" >No Data</div>
    <div v-if="loading" class="work-loading">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="line-all"></div>
    <div class="paging-content">
      <client-only>
        <Paginate
          :page-count="meta.pageCount"
          :prev-text="leftBtn"
          :next-text="rightBtn"
          v-model="meta.page"
          :container-class="'pagination'"
          :click-handler="loadData"
          :page-class="'page-item'"
        ></Paginate>
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import general from "~/mixins/general"
import Item from "~/components/WorkItem.vue"
export default {
  name: 'IndexPage',
  mixins: [general],
  components: {
    Item
  },
  data() {
    return {
      loading: false,
      filterChoice: false,
      types: ['featured', 'category', 'year', 'location', 'all'],
      typeActive: 'featured',
      locations: ['HOCHIMINH', 'HANOI', 'HAIPHONG', 'HALONG', 'DANANG', 'BINHDUONG',
        'NHATRANG', 'BENTRE', 'MYTHO', 'PHNOMPENH_CAMBODIA'],
      locationActive: 'HOCHIMINH',
      categories: ['office', 'mall', 'hospital'],
      categoryActive: 'office',
      years: ['2022', '2021', '2020', '2019', '2018'],
      yearActive: '2021',
      leftBtn: `<div class="btn-left"><img src="/images/p_left.jpg"></div>`,
      rightBtn: `<div class="btn-left"><img src="/images/p_right.jpg"></div>`,
      filters: {},
      meta : {
        page: 1,
        pageSize: 3,
        pageCount: 4,
        totalItem: 33
      },
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
      listWork: "work/getListWork"
    }),
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    ...mapActions({
      getListWork: "work/getListWork"
    }),
    async loadData(page) {
      this.loading = true
      if (page && page > 0) {
        page = page - 1
      } else {
        page = 0
      }
      const query = {
        ...this.filters,
        _start : page,
        _limit: 15,
        _sort: 'id:DESC'
      }
      this.meta.page = page + 1
      await this.getListWork({ params :query })
      this.loading = false
    },
    loadFilter (type) {
      this.typeActive = type
      if (type === 'featured' || type === 'all') {
        this.loadData()
      } else if (type === 'category') {
        this.filters = {
          category : this.categoryActive
        }
        this.loadData()
      } else if (type === 'location') {
        this.filters = {
          location : this.locationActive
        }
        this.loadData()
      } else if (type === 'year') {
        this.filters = {
          year : this.yearActive
        }
        this.loadData()
      }
    },
    showChoiceFilter () {
      this.filterChoice = true
    },
    closeChoiceFilter () {
      this.filterChoice = false
    },
    choiceLocationFilter(type) {
      this.locationActive = type
      this.filterChoice = false
      this.filters = {
        location : this.locationActive
      }
      this.loadData()
    },
    choiceCategoryFilter(type) {
      this.categoryActive = type
      this.filterChoice = false
      this.filters = {
        category : this.categoryActive
      }
      this.loadData()
    },
    choiceYearFilter(type) {
      this.yearActive = type
      this.filterChoice = false
      this.filters = {
        year : this.yearActive
      }
      this.loadData()
    }
  }
}
</script>
<style lang="scss">
.container{
  padding-bottom: 4rem;
}
.work-section-title{
  font-size: 4rem;
}
.work-filter-list{
  width: 100%;
  height: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  position: relative;
}
.work-filter-item{
  display: inline-block;
  float: left;
  margin-right: 0.5rem;
  padding: 0rem 0.5rem;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
}
.filter-active{
  border: 1px solid #7E8083;
}
.filter-item-active{
  display: inline-block;
  float: right;
  font-family: 'pp-semi';
  svg{
    margin-left: 0.5rem;
    cursor: pointer;
  }
}
.filter-list{
  max-height: 200px;
  overflow-y: scroll;
  width: 130px;
  display: inline-block;
  right: 20px;
  top: 0px;
  position: absolute;
  &::-webkit-scrollbar{
    width: 10px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 2px solid #555555;
  }
}
.filter-item{
  cursor: pointer;
  &:hover{
    background-color: #7E8083;
    color: #fff;
  }
}
.work-list-data{
  margin: 2rem -15px;
  width: calc(100% + 30px);
}
.work-list-empty{
  margin: 2rem 0px;
  min-height: 200px;
}
.work-item{
  margin-bottom: 1rem;
}
.work-loading{
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