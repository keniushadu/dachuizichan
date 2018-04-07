<template>
  <div class="header">
    <div class="container clearfix">
      <div class="logo"><router-link to="/"><img src="@/assets/logo.png" alt="大锤资产"></router-link></div>
      <div class="nav">
        <ul class="clearfix">
          <router-link to="/" tag="li">首页</router-link>
          <router-link to="/product" tag="li">产品与服务</router-link>
          <router-link to="/debt" tag="li">债务大厅</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.header{
  min-width: 1000px;
  background: #fdfdfd;
  border-bottom: 1px #e7ebed solid;
  border-top: 1px #e7ebed solid;
}
.logo{
  float: left;
  padding-top: 14px;
}
.nav{
  float: right;
}
.nav li{
  float: left;
  padding: 20px;
  margin: 0 10px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.nav li.router-link-exact-active{
  border-bottom: 4px #0f82d7 solid;
  padding-bottom: 16px;
}
</style>
