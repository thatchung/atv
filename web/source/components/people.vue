<template>
  <div class="item">
    <ThumbImage :src="item.thub" ratio="16-9" />
    <h3 class="item-title">
      {{ item.name }} - {{ item.role }}
    </h3>
    <div class="item-content">
      <div v-if="!show" >
        {{ description }}
        <!-- <b-icon-arrow-down @click="showMore" /> -->
        <img class="img-arrow-down down-people" src="/images/a_down.png" @click="showMore"></img>
      </div>
      <div v-if="show" class="content" v-html="description" />
      <!-- <b-icon-arrow-up v-if="show" @click="showLess" /> -->
      <img v-if="show" class="img-arrow-up up-people" src="/images/a_up.png" @click="showLess"></img>
    </div>
  </div>
</template>

<script>
import general from "~/mixins/general"
export default {
  mixins: [general],
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: 'Harada Shinji',
          role: 'Business Development Manager',
          description: 'Mau considers AVT as his second home. After becoming a part of AVT in 2019, his skill set expanded into full is skill set expanded into full is skill set expanded into full',
          thub: '/images/slide4.jpg'
        }
      }
    },
    position: {
      type: String,
      default: 'left-p'
    }
  },
  data() {
    return {
      show: false,
      description: ''
    }
  },
  mounted () {
    this.description = this.get_excerpt(this.item.description, 100)
  },
  methods: {
    showMore() {
      this.show = true
      this.description = this.item.description
    },
    showLess() {
      this.show = false
      this.description = this.get_excerpt(this.item.description, 100)
    }
  }
}
</script>
<style lang="scss">
.item-title{
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.item-content svg{
  margin-left: 0.5rem;
}
.down-people{
  margin-left: 0.5rem;
  cursor: pointer;
}
.up-people{
  margin-top: 0.5rem;
  float: right;
  cursor: pointer;
}
@media (max-width: 575px) {
  .item svg{
    margin-top: 1rem;
  }
}
</style>