<template>
  <div class="main">
    <Banner></Banner>
    <Platform></Platform>
    <Recommend></Recommend>
    <Brand></Brand>
  </div>
</template>

<script>
  import Banner from '@/components/Banner'
  import Platform from '@/components/Platform'
  import Recommend from '@/components/Recommend'
  import Brand from '@/components/Brand'

  export default {
    components: {
      Banner,
      Platform,
      Recommend,
      Brand
    }
  }
</script>

<style scoped>

</style>

