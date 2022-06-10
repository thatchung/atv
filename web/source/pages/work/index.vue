<template>
  <div class="container">
    <Breadcrumb>
      <template #name>
        <li class="breadcrumb-item">
          <nuxt-link to="/">
            {{ $t('Home') }}
          </nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <h1 class="breadcrumb-h1">
            {{ $t('Work') }}
          </h1>
        </li>
      </template>
    </Breadcrumb>
    <h2 class="work-section-title">
      {{ $t('Work') }}
    </h2>
    <div class="line-all" />
    <div class="work-filter-list">
      <div
        v-for="(type, index) in types"
        :key="index"
        :class="'work-filter-item ' + ( typeActive === type ? 'filter-active': '' ) "
        @click="loadFilter(type)"
      >
        <div v-if="$i18n.locale === 'vn'">{{ type | workTypeVNFilter }}</div>
        <div v-else >{{ type | workTypeFilter }}</div>
      </div>
      <div v-if="!isMobile && typeActive === 'location'" class="filter-item-active">
        <!-- <span v-if="!filterChoice">
          <span v-if="$i18n.locale === 'vn'">{{ locationActive.name}}</span>
          <span v-else>{{ locationActive.name | locationFilter }}</span>
        </span>
        <div v-if="filterChoice" class="filter-list"> -->
        <div v-for="(i, idx) in listLocation" :key="idx"
          :class="`filter-item ${ i.id === locationActive.id ? 'is-active' : ''}`"
          @click="choiceLocationFilter(i)">
          <span v-if="$i18n.locale === 'vn'">{{ i.name }}</span>
          <span v-else>{{ i.name  | locationFilter}}</span>
        </div>
        <!-- </div>
        <b-icon-arrow-down v-if="!filterChoice" @click="showChoiceFilter" />
        <b-icon-arrow-up v-if="filterChoice" @click="closeChoiceFilter" /> -->
      </div>
      <div v-if="!isMobile && typeActive === 'category'" class="filter-item-active">
        <!-- <span v-if="!filterChoice">
          <div style="display: inline-block;" v-if="$i18n.locale === 'vn'">{{ categoryActive.name_vn }}</div>
          <div style="display: inline-block;" v-else >{{ categoryActive.name }}</div>
        </span>
        <div v-if="filterChoice" class="filter-list"> -->
        <div v-for="(i, idx) in listCategory" :key="idx"
          :class="`filter-item ${ i.id === categoryActive.id ? 'is-active' : ''}`"
          @click="choiceCategoryFilter(i)">
          <!-- {{ i | categoryFilter }} -->
          <span v-if="$i18n.locale === 'vn'">{{ i.name_vn }}</span>
          <span v-else >{{ i.name }}</span>
        </div>
        <!-- </div>
        <b-icon-arrow-down v-if="!filterChoice" @click="showChoiceFilter" />
        <b-icon-arrow-up v-if="filterChoice" @click="closeChoiceFilter" /> -->
      </div>
      <div v-if="!isMobile && typeActive === 'year'" class="filter-item-active">
        <!-- <span v-if="!filterChoice">
          {{ yearActive }}
        </span> -->
          <div v-for="(i, idx) in listYear" :key="idx"
            :class="`filter-item ${ i.name === yearActive ? 'is-active' : ''}`"
            @click="choiceYearFilter(i.name)">
            {{ i.name }}
          </div>
        <!-- <b-icon-arrow-down v-if="!filterChoice" @click="showChoiceFilter" />
        <b-icon-arrow-up v-if="filterChoice" @click="closeChoiceFilter" /> -->
      </div>
      <div v-if="isMobile" class="filter-mobile-panel">
        <b-icon-chevron-left class="p-b-left" @click="leftFilter" 
          v-if="typeActive === 'location' || typeActive === 'category' || typeActive === 'year'"/>
        <b-icon-chevron-right class="p-b-right" @click="rightFilter" 
          v-if="typeActive === 'location' || typeActive === 'category' || typeActive === 'year'"/>
        <div ref="filterlist" v-if="typeActive === 'location'" class="filter-item-active">
          <div ref="filterall" class="filter-all-items">
            <div v-for="(i, idx) in listLocation" :key="idx"
              :class="`filter-item ${ i.id === locationActive.id ? 'is-active' : ''}`"
              @click="choiceLocationFilter(i)">
              <span v-if="$i18n.locale === 'vn'">{{ i.name }}</span>
              <span v-else>{{ i.name  | locationFilter}}</span>
            </div>
          </div>
        </div>
        <div ref="filterlist" v-if="typeActive === 'category'" class="filter-item-active">
          <div ref="filterall" class="filter-all-items">
            <div v-for="(i, idx) in listCategory" :key="idx"
              :class="`filter-item ${ i.id === categoryActive.id ? 'is-active' : ''}`"
              @click="choiceCategoryFilter(i)">
              <!-- {{ i | categoryFilter }} -->
              <span v-if="$i18n.locale === 'vn'">{{ i.name_vn }}</span>
              <span v-else >{{ i.name }}</span>
            </div>
          </div>
        </div>
        <div ref="filterlist" v-if="typeActive === 'year'" class="filter-item-active">
          <div ref="filterall" class="filter-all-items">
            <div v-for="(i, idx) in listYear" :key="idx"
              :class="`filter-item ${ i.name === yearActive ? 'is-active' : ''}`"
              @click="choiceYearFilter(i.name)">
              {{ i.name }}
            </div>
          </div>
        </div>
      </div>


    </div>
    <div v-if="!loading && listWork.length >= 0 && typeActive !== 'featured'" class="work-list-data row">
      <div v-for="(item, index) in listWork" :key="index" class="work-item col-12 col-md-4">
        <Item :work="item" />
      </div>
    </div>
    <div v-if="!loading && listWorkFeatured.length >= 0 && typeActive === 'featured'" class="work-list-data row">
      <div v-for="(item, index) in listWorkFeatured" :key="index" class="work-item col-12 col-md-4">
        <Item :work="item" />
      </div>
    </div>
    <div v-if="!loading && listWork.length === 0" class="work-list-empty" >No Data</div>
    <div v-if="loading" class="work-loading">
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
import general from "~/mixins/general"
import Item from "~/components/workitem.vue"

export default {
  name: 'IndexPage',
  components: {
    Item
  },
  mixins: [general],
  data() {
    return {
      loading: false,
      isMobile: false,
      filterChoice: false,
      types: ['featured', 'category', 'year', 'location', 'all'],
      typeActive: 'featured',
      locations: [{
          id : 2,
          name : 'HOCHIMINH'
        }, {
          id : 1,
          name : 'HANOI'
        }, {
          id : 3,
          name : 'HAIPHONG'
        }, {
          id : 4,
          name : 'HALONG'
        }, {
          id : 5,
          name : 'DANANG'
        }, {
          id : 6,
          name : 'BINHDUONG'
        }, {
          id : 7,
          name : 'NHATRANG'
        }, {
          id : 8,
          name : 'BENTRE'
        }, {
          id : 9,
          name : 'MYTHO'
        }, {
          id : 10,
          name : 'PHNOMPENH_CAMBODIA'
      }],
      locationActive: {
        id : 2,
        name : 'HOCHIMINH'
      },
      categoryActive: {
        id : 2,
        name : 'Workplace',
        name_vn: 'Văn phòng'
      },
      years: [ { name: '2022'},
        { name: '2021' },
        { name: '2020' },
        { name: '2019' },
        { name: '2018' },
        { name: '2017' },
        { name: '2016' }],
      yearActive: '2021',
      leftBtn: `<div class="btn-left"><img src="/images/p_left.jpg"></div>`,
      rightBtn: `<div class="btn-left"><img src="/images/p_right.jpg"></div>`,
      filters: {},
      meta : {
        page: 1,
        pageSize: 15,
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
      },
      scrollValue: 0
    }
  },
  head() {
    let headJson = {
      title: "Work - Các Dự Án Của AVT",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: 'Work - Các Dự Án Của AVT'
        },
        {
          hid: "description",
          property: "description",
          content: 'Work - Các Dự Án Của AVT'
        },
        {
          hid: "og:description",
          property: "og:description",
          content: 'Work - Các Dự Án Của AVT'
        },
        {
          hid: "robots",
          property: "robots",
          content:
            this.s_work !== undefined && this.s_work.meta_robots
              ? this.s_work.meta_robots
              : "INDEX,FOLLOW"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: '/uploads/DSC_05795_ad8e9b7584.jpg'
        },
        {
          hid: "og:url",
          property: "og:url",
          content: '/work'
        },
        {
          hid: "keywords",
          property: "keywords",
          content: 'work, avt'
        }
      ],
      link: [
        {
          rel: "canonical",
          href: '/work'
        }
      ]
    }
    return headJson
  },
  computed: {
    ...mapGetters({
      listWork: "work/getListWork",
      listWorkFeatured: "work/getListWorkFeatured",
      listYear: "common/getListYear",
      listLocation: "common/getListLocation",
      listCategory: "common/getListCategory"
    }),
  },
  async mounted() {
    this.typeActive = 'featured'
    this.checkMobile()
    await this.loadFilter('featured')
    await this.getListCategory()
    await this.getListYear()
    if(this.listYear.length === 0) {
      this.listYear = this.years
    }
    await this.getListLocation()
    if(this.listLocation.length === 0) {
      this.listLocation = this.locations
    }
    let res = await this.getCountWork()
    if (res) {
      this.meta.totalItem = res
      this.meta.pageCount = this.meta.totalItem / this.meta.pageSize
    }
  },
  methods: {
    ...mapActions({
      getListWork: "work/getListWork",
      getCountWork: "work/getCountWork",
      getListYear: "common/getListYear",
      getListLocation: "common/getListLocation",
      getListCategory: "common/getListCategory",
      getListFeatured: "work/getListFeatured"
    }),
    checkMobile() {
      if (!process.server) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      }
    },
    leftFilter() {
      if (this.scrollValue >= 100) {
        this.scrollValue = this.scrollValue - 100
      }
      this.$refs.filterlist.scrollTo({ left: this.scrollValue, behavior: 'smooth' })
    },
    rightFilter() {
      let max = this.$refs.filterall.getBoundingClientRect().width
      if(this.scrollValue < (max - 300)) {
        this.scrollValue = this.scrollValue + 100
      }
      this.$refs.filterlist.scrollTo({ left: this.scrollValue, behavior: 'smooth' })
    },
    async loadData(page) {
      this.loading = true
      if (page && page > 0) {
        page = page - 1
      } else {
        page = 0
      }
      const query = {
        ...this.filters,
        _start : page * 15,
        _limit: 15,
        _sort: 'id:DESC'
      }
      this.meta.page = page + 1
      await this.getListWork({ params :query })
      let res = await this.getCountWork({ params :query })
      if (res) {
        this.meta.totalItem = res
        this.meta.pageCount = this.meta.totalItem / this.meta.pageSize
      }
      this.loading = false
    },
    async loadFilter (type) {
      this.typeActive = type
      if (type === 'all') {
        this.filters = { }
        await this.loadData()
      } else if (type === 'featured') {
        await this.getListFeatured()
      } else if (type === 'category') {
        this.filters = {
          categories : this.categoryActive.id
        }
        await this.loadData()
      } else if (type === 'location') {
        this.filters = {
          locations : this.locationActive.id
        }
        await this.loadData()
      } else if (type === 'year') {
        this.filters = {
          year : this.yearActive
        }
        await this.loadData()
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
        locations : type.id
      }
      this.loadData()
    },
    choiceCategoryFilter(type) {
      this.categoryActive = type
      this.filterChoice = false
      this.filters = {
        categories : type.id
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
.work-section-title{
  font-size: 4rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
}
.work-filter-list{
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  float: left;
}
.work-filter-list svg{
  font-size: 1.4rem;
}
.work-filter-item{
  display: inline-block;
  float: left;
  margin-right: 0.5rem;
  padding: 0rem 0.2rem;
  cursor: pointer;
  height: 30px;
  line-height: 25px;
}
.filter-active{
  border: 1px solid #7E8083;
}
.filter-item-active{
  width: 100%;
  font-family: "pp-reg";
  font-size: 2rem;
  margin-left: 0rem;
  float: left;
  svg{
    margin-left: 0.5rem;
    cursor: pointer;
  }
}
.filter-list{
  max-height: 100px;
  height: 60px;
  overflow-y: scroll;
  width: 210px;
  display: inline-block;
  right: 2rem;
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
  font-size: 1rem;
  display: inline-block;
  float: left;
  color: #B2B2B2;
  margin-right: 1rem;
  &:hover{
    color: #231F20;
  }
}
.is-active{
  color: #231F20 !important;
}
.work-list-data{
  margin-top: 2rem;
  margin-left: -15px;
  margin-right: -15px;
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
  background-color: white;
  color: black;
}
.page-item{
  padding: 0rem 0.5rem;
  height: 40px;
  line-height: 40px;
}
.btn-left img{
  width: 45px;
  height: 30px;
}
@media (min-width: 1700px) {
  .filter-list{
    height: 70px;
    width: 250px;
  }
  .paging-content{
    margin-right: 135px;
  }
  .btn-left img{
    width: 60px;
    height: 40px;
  }
  .pagination li:first-child {
    right: 73px;
  }
  .pagination .active{
    height: 40px;
    line-height: 40px;
  }
}
@media (max-width: 575px) {
  .filter-item-active{
    position: relative;
    float: left;
    width: calc(100% - 60px);
    font-size: 1.8rem;
    margin-bottom: 0rem;
    margin-top: 10px;
    font-family: "pp-reg";
    margin-left: 30px;
    overflow-x: scroll;
  }
  .filter-mobile-panel{
    width: 100%;
    float: left;
    position: relative;
    .p-b-left{
      position: absolute;
      top: 17px;
      font-size: 14px;
      left: 7px;
    }
    .p-b-right{
      position: absolute;
      top: 17px;
      font-size: 14px;
      right: 7px;
    }
  }
  .filter-all-items{
    width: max-content;
    float: left;
    display: inline;
    height: 30px;
  }
  .filter-item-active span{
    float: left;
  }
  .filter-list{
    width: 150px;
    display: inline-block;
    left: 0px;
    position: relative;
    background-color: white;
    z-index: 1;
    float: left;
    height: 40px;
  }
  .filter-item-active svg{
    position: relative;
  }
  .filter-item{
    font-size: 1rem;
  }
  .work-filter-list{
    width: calc(100% + 20px);
    margin-left: -10px;
  }
  .work-filter-item{
    height: 30px;
    line-height: 25px;
  }
}
</style>