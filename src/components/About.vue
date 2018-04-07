<template>
  <div class="main">
    <div class="container clearfix">
      <Menu></Menu>
      <div class="content">
        <div class="title">关于我们</div>
        <div class="cont" v-html="about"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu'

  export default {
    computed: {
      about(){
        return this.$store.state.about
      }
    },
    components: {
      Menu
    },
    created(){
      this.$store.dispatch('getAboutAction')
    }
  }
</script>

<style scoped>
.main{
  padding: 40px 0;
}
.menu{
  float: left;
  width: 147px;
}
.content{
  float: right;
  width: 788px;
  padding: 25px;
  background: #fff;
}
.title{
  line-height: 34px;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
