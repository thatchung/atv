<template>
  <div class="item">
    <ThumbImage :src="item.thub" ratio="16-9"></ThumbImage>
    <h3 class="item-title">{{ item.name}} - {{ item.role}} </h3>
    <div class="item-content">{{ item.description }}
      <b-icon-arrow-down />
    </div>
  </div>
</template>

<script>
export default {
  name: 'peopleItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: 'Harada Shinji',
          role: 'Business Development Manager',
          description: 'Mau considers AVT as his second home. After becoming a part of AVT in 2019, his skill set expanded into full. . .',
          thub: '/images/slide4.jpg'
        }
      }
    },
    position: {
      type: String,
      default: 'left-p'
    }
  }
  // methods: {
  //   ...mapActions({
  //     getListitem: "item/getListitem"
  //   }),
  //   async loadData() {
  //     await this.getListitem()
  //     console.log(this.listitem)
  //   }
  // }
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
</style>