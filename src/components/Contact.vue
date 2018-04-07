<template>
  <div class="main">
    <div class="container clearfix">
      <Menu></Menu>
      <div class="content">
        <div class="title">联系我们</div>
        <div class="cont" v-html="contact"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu'

  export default {
    computed: {
      contact(){
        return this.$store.state.contact
      }
    },
    components: {
      Menu
    },
    created(){
      this.$store.dispatch('getContactAction')
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
