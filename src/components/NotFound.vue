<template>
  <div class="main">
    <div class="error">
      <div class="container">
        <div class="content">
          <div class="error-pic"><img src="@/assets/404.jpg"></div>
          <h2>404</h2>
          <p>访问的页面不存在</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.main{
  padding: 40px 0;
}
.error .content{
  min-height: 600px;
  padding: 20px;
  background: #fff;
  text-align: center;
}
.error h2{
  font-size: 70px;
}
.error p{
  font-size: 30px;
}
</style>

