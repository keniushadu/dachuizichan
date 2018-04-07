<template>
  <div class="brand">
    <div class="container">
      <div class="brand-title">合作伙伴</div>
      <div class="brand-wrap">
        <div @click.prevent="brandPrev" class="brand-prev"></div>
        <div class="brand-list clearfix">
          <div
            v-for="item in brand"
            :key="item.id"
            class="brand-item"
          >
            <img :src="item.url">
          </div>
        </div>
        <div @click.prevent="brandNext" class="brand-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        brandIndex: 1,
        brand: []
      }
    },
    methods: {
      brandPrev(){
        this.brandIndex--
        if(this.brandIndex < 1){
          this.brandIndex = Math.ceil(this.$store.state.brand.length/10)
        }
        let start = (this.brandIndex-1)*10
        let end = this.brandIndex*10
        this.brand = this.$store.state.brand.slice(start,end)
      },
      brandNext(){
        this.brandIndex++
        if(this.brandIndex > Math.ceil(this.$store.state.brand.length/10)){
          this.brandIndex = 1
        }
        let start = (this.brandIndex-1)*10
        let end = this.brandIndex*10
        this.brand = this.$store.state.brand.slice(start,end)
      }
    },
    created(){
      this.$store.dispatch('getBrandAction').then(() => {
        this.brand = this.$store.state.brand.slice(0,10)
      })
    }
  }
</script>

<style scoped>
.brand{
  padding: 20px;
}
.brand-title{
  text-align: center;
  font-size: 24px;
  color: #767a7e;
  font-weight: bold;
  margin-bottom: 20px;
}
.brand-wrap{
  position: relative;
}
.brand-prev{
  width: 20px;
  height: 52px;
  position: absolute;
  left: 0;
  top: 66px;
  background: url("~@/assets/leftindex.png") no-repeat;
  cursor: pointer;
}
.brand-next{
  width: 20px;
  height: 52px;
  position: absolute;
  right: 0;
  top: 66px;
  background: url("~@/assets/rightindex.png") no-repeat;
  cursor: pointer;
}
.brand-list{
  width: 950px;
  min-height: 188px;
  margin: 0 auto;
}
.brand-item{
  float: left;
  padding: 2px 15px;
}
.brand-item img{
  width: 160px;
  height: 90px;
}
</style>
