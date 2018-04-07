<template>
  <div class="footer">
    <div class="container clearfix">
      <div class="footer-left">
        <div class="footer-nav">
          <router-link to="/about">关于我们</router-link> <span>|</span>
          <router-link to="/contact">联系我们</router-link>
        </div>
        <div class="footer-copyright">Copyright 2017 大锤资产 <span>|</span> 苏ICP备16045727号</div>
      </div>
      <div class="footer-right clearfix">
        <div class="footer-email">
          <p>公司邮箱</p>
          <p>market@dachuizichan.com</p>
        </div>
        <div class="footer-phone">
          <p>商务合作</p>
          <p>010-56282250</p>
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
.footer{
  min-width: 1000px;
  background: #2b2f34;
  padding: 22px 0;
  line-height: 36px;
}
.footer-left{
  float: left;
  padding-right: 100px;
}
.footer-nav a{
  font-size: 14px;
  color: #d7dce3;
}
.footer-nav span{
  color: #595d64;
  padding: 0 5px;
}
.footer-copyright{
  font-size: 14px;
  color: #d7dce3;
}
.footer-copyright span{
  color: #595d64;
  padding: 0 5px;
}
.footer-right{
  float: left;
  border-left: 1px #3c4147 solid;
}
.footer-email{
  float: left;
  padding-left: 100px;
  font-size: 14px;
  color: #d7dce3;
}
.footer-phone{
  float: left;
  padding-left: 70px;
  font-size: 14px;
  color: #d7dce3;
}
</style>
