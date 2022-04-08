<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <slot></slot>
    </ol>
  </nav>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
ol {
  margin: 0px;
  padding-left: 0px;
}
.breadcrumb {
  background-color: transparent;
  padding: 1rem 0rem 1rem 0rem;
  white-space: nowrap;
  margin-top: 1rem;
}
.breadcrumb-item {
  line-height: 20px;
  a {
    font-weight: 600;
    font-size: 1rem;
    color: #231F20;
  }
  &.active {
    font-size: 1rem;
    color: #231F20;
  }
}
</style>