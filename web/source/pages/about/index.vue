<template>
  <div>
    <Who />
    <What />
    <Convention />
    <Where />
    <WhereMap />
  </div>
</template>

<script>
import Who from "~/components/about/who.vue"
import What from "~/components/about/what.vue"
import Convention from "~/components/about/convention.vue"
import Where from "~/components/about/where.vue"
import WhereMap from "~/components/about/where_map.vue"
export default {
  name: 'AboutPage',
  components: {
    Who,
    What,
    Convention,
    Where,
    WhereMap
  },
  head() {
    let headJson = {
      title: "About - AVT International cung cấp các dịch vụ thiết kế và thi công",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: 'About - AVT International cung cấp các dịch vụ thiết kế và thi công'
        },
        {
          hid: "description",
          property: "description",
          content: 'About - AVT International cung cấp các dịch vụ thiết kế và thi công'
        },
        {
          hid: "og:description",
          property: "og:description",
          content: 'About - AVT International cung cấp các dịch vụ thiết kế và thi công'
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
          content: '/about'
        },
        {
          hid: "keywords",
          property: "keywords",
          content: 'about, avt'
        }
      ],
      link: [
        {
          rel: "canonical",
          href: '/about'
        }
      ]
    }
    return headJson
  }
}
</script>