<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: '微软雅黑';
  font-size: 14px;
  color: #0f2f4b;
  background: #eef3f8;
}
a{
  text-decoration: none;
}
ul,ol{
  list-style: none;
}
img{
  border: 0;
  vertical-align: middle;
}
.clearfix:before,
.clearfix:after{
  content: '';
  display: table;
}
.clearfix:after{
  clear: both;
}
.container{
  width: 1000px;
  margin: 0 auto;
}
.main{
  min-width: 1000px;
}
</style>
