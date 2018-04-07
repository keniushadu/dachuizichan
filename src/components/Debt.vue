<template>
  <div class="main">
    <Query @query-page="changeQueryPage"></Query>
    <div class="debt-wrap">
      <div class="container">
        <div class="debt-list">
          <div
            v-for="item in debt"
            :key="item.id"
            :class="{processed: item.processed == 1,unprocessed: item.processed == 2}"
            class="debt-item clearfix"
          >
            <div class="debt-city">{{item.city}}</div>
            <div class="debt-type">
              <p class="d-title">标的类型</p>
              <p class="d-type">{{item.typeName}}</p>
            </div>
            <div class="debt-no">
              <p class="d-title">标的号</p>
              <p class="d-no">{{item.no}}</p>
            </div>
            <div class="debt-money">
              <p class="d-title">标的金额</p>
              <p class="d-money">{{item.money}}元</p>
            </div>
            <div class="debt-month">
              <p class="d-title">账龄</p>
              <p class="d-month">{{item.monthStart == item.monthEnd ? 'M'+item.monthStart : 'M'+item.monthStart+' - '+'M'+item.monthEnd}}</p>
            </div>
            <div class="debt-rate">
              <p class="d-title">代理费率</p>
              <p class="d-rate">{{item.rateStart == item.rateEnd ? item.rateStart+'%' : item.rateStart+'%-'+item.rateEnd+'%'}}</p>
            </div>
            <div v-if="item.processed == 1" class="debt-processed">
              <img src="@/assets/chuzhi.png" />
            </div>
            <div v-if="item.processed == 2" class="debt-processed">
              <button class="attention" type="button">添加关注</button>
              <button class="tender" type="button">一键摘标</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <Pagination :curPage="curPage" @change-page="pageHandle"></Pagination>
  </div>
</template>

<script>
  import Query from '@/components/Query'
  import Pagination from '@/components/Pagination'

  export default {
    data(){
      return {
        curPage: 1
      }
    },
    computed: {
      debt(){
        let start = (this.curPage-1)*10
        let end = this.curPage*10
        return this.$store.state.debt.slice(start,end)
      }
    },
    methods: {
      pageHandle(page){
        this.curPage = page
      },
      changeQueryPage(page){
        this.curPage = page
      }
    },
    components: {
      Query,
      Pagination
    },
    created(){
      this.$store.dispatch('getDebtAction')
    }
  }
</script>

<style scoped>
.main{
  min-height: 600px;
  padding: 40px 0;
}
.debt-item{
  padding: 16px 0;
  border-bottom: 1px #dce5ef solid;
  background: #fff;
}
.debt-city{
  float: left;
  width: 70px;
  height: 69px;
  line-height: 58px;
  overflow: hidden;
  padding-left: 61px;
  color: #fdfdfd;
  font-size: 16px;
  background: url("~@/assets/gps.png") no-repeat;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  left: -12px;
  top: 18px;
}
.debt-type{
  float: left;
  width: 130px;
  line-height: 46px;
  height: 120px;
}
.debt-no{
  float: left;
  width: 170px;
  line-height: 46px;
  height: 120px;
}
.debt-money{
  float: left;
  width: 136px;
  line-height: 46px;
  height: 120px;
}
.debt-month{
  float: left;
  width: 120px;
  line-height: 46px;
  height: 120px;
}
.debt-rate{
  float: left;
  width: 140px;
  line-height: 46px;
  height: 120px;
}
.debt-processed{
  float: left;
  padding-left: 10px;
  padding-top: 8px;
}
.d-title{
  font-size: 14px;
  color: #767a7e;
  text-align: center;
}
.d-type{
  font-size: 16px;
  color: #0f2f4b;
  text-align: center;
}
.d-no{
  font-size: 13px;
  font-weight: 100;
  color: #0f2f4b;
  text-align: center;
}
.d-money{
  font-size: 18px;
  font-weight: 600;
  color: #f19700;
  text-align: center;
}
.d-month{
  font-size: 13px;
  font-weight: 100;
  color: #0f2f4b;
  text-align: center;
}
.d-rate{
  font-size: 16px;
  font-weight: 600;
  color: #0f82d7;
  text-align: center;
}
.attention{
  display: block;
  width: 125px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  border: 1px #f19700 solid;
  color: #f19700;
  background: #fff;
  cursor: pointer;
  text-align: center;
  margin-bottom: 15px;
}
.tender{
  display: block;
  width: 125px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  border: 1px #f19700 solid;
  color: #fff;
  background: #f19700;
  cursor: pointer;
  text-align: center;
  margin-bottom: 15px;
}
.processed .debt-city{
  background: url("~@/assets/gps1.png") no-repeat;
}
.processed .d-city{
  color: #a1a1a1;
}
.processed .d-no{
  color: #a1a1a1;
}
.processed .d-money{
  color: #a1a1a1;
}
.processed .d-month{
  color: #a1a1a1;
}
.processed .d-rate{
  color: #a1a1a1;
}
</style>
