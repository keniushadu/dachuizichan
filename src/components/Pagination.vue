<template>
  <div class="pagination-wrap">
    <div class="container">
      <div class="pagination">
        <span v-if="totalRecord">
          <span
            v-for="page in showPageBtn"
            :key="page"
            @click="toPage(page)"
            :class="{active: page == curPage}"
            class="page-no"
          >
            {{page}}
          </span>
        </span>

        <span class="total-record">共{{totalRecord}}条记录</span>
        <span class="total-page">共{{totalPage}}页</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      curPage: {
        type: Number,
        default: 1
      }
    },
    computed: {
      showPageBtn(){
        let arr = []
        let total = Math.ceil(this.$store.state.debt.length/10)
        if( this.curPage < 5 ){
          let i = Math.min(5,total)
          while(i){
            arr.unshift(i--);
          }
        }else{
          let middle = this.curPage - 2
          let i = 5
          if( middle > (total-5) ){
            middle = (total - 5) + 1
          }
          while(i--){
            arr.push( middle++ );
          }
        }
        return arr
      },
      totalPage(){
        return Math.ceil(this.$store.state.debt.length/10)
      },
      totalRecord(){
        return this.$store.state.debt.length
      }
    },
    methods: {
      toPage(page){
        this.curPage = page
        this.$emit('change-page',page)
      }
    }
  }
</script>

<style scoped>
.pagination{
  padding: 10px;
  background: #fff;
  text-align: right;
}
.page-no{
  display: inline-block;
  border-radius: 2px;
  margin-left: 5px;
  text-align: center;
  height: 21px;
  padding: 0px 6px;
  line-height: 21px;
  font-size: 14px;
  background: #fff;
  border: 1px #ced3d6 solid;
  color: #0f2f4b;
  cursor: pointer;
}
.page-no.active{
  background: #f19700;
  color: #fff;
  border: 1px #f19700 solid;
}
.total-record{
  display: inline-block;
  margin-left: 10px;
}
.total-page{
  display: inline-block;
  margin-left: 10px;
}
</style>
