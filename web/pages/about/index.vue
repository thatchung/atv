<template>
  <div>
    <Who />
    <What />
    <Convention />
    <Where />
  </div>
</template>

<script>
import Who from "~/components/about/Who.vue"
import What from "~/components/about/What.vue"
import Convention from "~/components/about/Convention.vue"
import Where from "~/components/about/Where.vue"
export default {
  name: 'AboutPage',
  components: {
    Who,
    What,
    Convention,
    Where
  }
}
</script>