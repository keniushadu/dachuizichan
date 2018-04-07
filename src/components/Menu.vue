<template>
  <div class="menu">
    <router-link to="/about">关于我们</router-link>
    <router-link to="/contact">联系我们</router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.menu{
  float: left;
  width: 147px;
  border-top: 1px #d0d7de solid;
}
.menu a{
  display: block;
  width: 147px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #0f2f4b;
  border-bottom: 1px #d0d7de solid;
}
.menu a.router-link-exact-active{
  color: #fff;
  background: #0f82d7;
}
</style>
