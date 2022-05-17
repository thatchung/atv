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
  }
}
</script>