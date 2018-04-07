<template>
  <div class="filter">
    <div class="container">
      <div class="filter-wrap">
        <div class="filter-row">
          <div class="filter-type">逾期时间</div>
          <div class="filter-list">
            <span
              @click="filterExpires(index)"
              v-for="(item,index) in expires"
              :key="item"
              :class="{active: index == expiresIndex}"
              class="filter-col"
            >
              {{item == 'all' ? '全部' : item}}
            </span>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-type">代理费率</div>
          <div class="filter-list">
            <span
              @click="filterRate(index)"
              v-for="(item,index) in rate"
              :key="item"
              :class="{active: index == rateIndex}"
              class="filter-col"
            >
              {{item == 'all' ? '全部' : item}}
            </span>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-type">所属城市</div>
          <div class="filter-list">
            <span 
              @click="filterCity(index)"
              v-for="(item,index) in city"
              :key="item"
              :class="{active: index == cityIndex}"
              class="filter-col"
            >
              {{item == 'all' ? '全部' : item}}
            </span>
          </div>
          <div class="search">
            <input v-model="searchCity" @keyup.13="search" class="search-input" type="text" placeholder="搜索城市" />
            <button @click="search" class="search-btn" type="button">搜索</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          expires: ['all','M1-M3','M4-M6','M7-M9','M10-M12','M12+'],
          rate: ['all','1-5%','6-10%','11-15%','16-20%','21-30%','30%+'],
          city: ['all','北京','天津','上海','广州','深圳'],
          expiresIndex: 0,
          rateIndex: 0,
          cityIndex: 0,
          searchCity: ''
      }
    },
    methods: {
      filterExpires(i){
        this.$emit('query-page',1)
        this.expiresIndex = i
        let city = this.searchCity.trim() == '' ? this.city[this.cityIndex] : this.searchCity.trim()
        this.$store.commit('queryDebt',{expires:this.expires[this.expiresIndex],rate:this.rate[this.rateIndex],city:city,page:1})
      },
      filterRate(i){
        this.$emit('query-page',1)
        this.rateIndex = i
        let city = this.searchCity.trim() == '' ? this.city[this.cityIndex] : this.searchCity.trim()
        this.$store.commit('queryDebt',{expires:this.expires[this.expiresIndex],rate:this.rate[this.rateIndex],city:city,page:1})
      },
      filterCity(i){
        this.$emit('query-page',1)
        this.cityIndex = i
        let city = this.searchCity.trim() == '' ? this.city[this.cityIndex] : this.searchCity.trim()
        this.$store.commit('queryDebt',{expires:this.expires[this.expiresIndex],rate:this.rate[this.rateIndex],city:city,page:1})
      },
      search(){
        this.$emit('query-page',1)
        let city = this.searchCity.trim() == '' ? this.city[this.cityIndex] : this.searchCity.trim()
        this.$store.commit('queryDebt',{expires:this.expires[this.expiresIndex],rate:this.rate[this.rateIndex],city:city,page:1})
      }
    }
  }
</script>

<style scoped>
.filter{
  margin-bottom: 20px;
}
.filter-wrap{
  background: #fdfdfd;
  padding: 14px 20px;
}
.filter-row{
  overflow: hidden;
}
.filter-row+.filter-row{
  margin-top: 10px;
}
.filter-type{
  float: left;
  font-size: 14px;
  color: #0f2f4b;
  line-height: 23px;
  padding-right: 30px;
  margin-top: 6px;
  margin-bottom: 6px;
}
.filter-list{
  float: left;
  overflow: hidden;
}
.filter-col{
  float: left;
  margin-right: 30px;
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 2px 7px;
  font-size: 14px;
  color: #0f2f4b;
  border-radius: 2px;
  cursor: pointer;
}
.filter-col.active{
  background: #f19700;
  color: #fff;
}
.search{
  float: left;
  position: relative;
}
.search-input{
  display: inline-block;
  width: 109px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  border: 1px #ced3d6 solid;
  background: #fdfdfd;
  padding-left: 10px;
  padding-right: 34px;
  color: #767a7e;
}
.search-input:focus{
  outline: none;
}
.search-btn{
  position: absolute;
  right: 0px;
  top: 0px;
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 0px 2px 2px 0px;
  border: none;
  background: url("~@/assets/search.png") center center no-repeat #f19700;
  cursor: pointer;
  line-height: 100px;
  overflow: hidden;
}
.search-btn:focus{
  outline: none;
}
.search-btn:hover{
  background: url("~@/assets/search.png") center center no-repeat #c67c01;
}
</style>
