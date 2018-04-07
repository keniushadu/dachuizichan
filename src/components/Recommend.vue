<template>
  <div class="recommend">
    <div class="container">
      <div class="recommend-title">热标推荐</div>
      <div class="recommend-list">

        <div
          v-for="item in recommend" 
          :key="item.id"
          class="recommend-item clearfix"
        >
          <div class="recommend-city">{{item.city}}</div>
          <div class="recommend-type">
            <p class="rec-title">标的类型</p>
            <p class="rec-type"><span>{{ getType(item) }}</span>{{item.no}}</p>
          </div>
          <div class="recommend-money">
            <p class="rec-title">标的金额</p>
            <p class="rec-money">{{item.money}}元</p>
          </div>
          <div class="recommend-month">
            <p class="rec-title">账龄</p>
            <p class="rec-month">{{item.month}}</p>
          </div>
          <div class="recommend-rate">
            <p class="rec-title">代理费率</p>
            <p class="rec-rate">{{item.rate}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      recommend(){
        return this.$store.state.recommend
      }
    },
    methods: {
      getType(item){
        if(item.type === 1){
          return '押'
        }
        if(item.type === 2){
          return '小'
        }
        if(item.type === 3){
          return '消'
        }
      },
      getMon(item){
        return item.monthStart == item.monthEnd ? 'M'+item.monthStart : 'M'+item.monthStart+' - '+'M'+item.monthEnd
      },
      getRate(item){
        return item.rateStart == item.rateEnd ? item.rateStart+'%' : item.rateStart+'%'+'-'+item.rateEnd+'%'
      }
    },
    created(){
      this.$store.dispatch('getRecommendAction')
    }
  }
</script>

<style scoped>
.recommend{
  background: #fff;
}
.recommend-title{
  line-height: 72px;
  text-align: center;
  color: #767a7e;
  font-size: 24px;
  font-weight: bold;
}
.recommend-item{
  padding: 26px 0;
  border-top: 1px #dce5ef solid;
}
.recommend-city{
  float: left;
  width: 149px;
  height: 69px;
  line-height: 58px;
  padding-left: 61px;
  background: url("~@/assets/gps.png") no-repeat;
  color: #fdfdfd;
  font-size: 16px;
  position: relative;
  left: -12px;
}
.recommend-type{
  float: left;
  width: 293px;
}
.recommend-money{
  float: left;
  width: 164px;
}
.recommend-month{
  float: left;
  width: 164px;
}
.recommend-rate{
  float: left;
  width: 164px;
}
.rec-title{
  font-size: 14px;
  color: #767a7e;
  text-align: center;
  margin-bottom: 15px;
}
.rec-type{
  font-size: 16px;
  color: #0f2f4b;
  text-align: center;
}
.rec-type span{
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #5fba47;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 32px;
  margin-right: 9px;
}
.rec-money{
  font-size: 22px;
  color: #f19700;
  text-align: center;
}
.rec-month{
  font-size: 16px;
  color: #0f2f4b;
  text-align: center;
}
.rec-rate{
  font-size: 22px;
  color: #0f82d7;
  text-align: center;
}
</style>
