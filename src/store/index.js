import Vue from 'vue'
import Vuex from 'vuex'
import {getRecommend,getBrand,getDebt,getAbout,getContact} from '@/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recommend: [],
    brand: [],
    debt: [],
    debtList: [],
    about: '',
    contact: '',
    query: {
      expires: 'all',
      rate: 'all',
      city: 'all'
    }
  },
  mutations: {
    getRecommendMuta(state,payload){
      state.recommend = payload.list
    },
    getBrandMuta(state,payload){
      state.brand = payload.list
    },
    getDebtMuta(state,payload){
      state.debt = payload.list
      state.debtList = payload.list
    },
    queryDebt(state,payload){
      let arr = state.debtList
      if(payload.expires != 'all'){
        let indexof = payload.expires.indexOf('-')
        let start = indexof == -1 ? payload.expires.match(/M(\d+)\+/)[1] : payload.expires.match(/M(\d+)-M(\d+)/)[1]
        let end = indexof == -1 ? '' : payload.expires.match(/M(\d+)-M(\d+)/)[2]
        arr = arr.filter(item => {
          return indexof == -1 ? (item.monthEnd >= start) : (item.monthStart >= start && item.monthEnd <= end)
        })
      }

      if(payload.rate != 'all'){
        let indexof = payload.rate.indexOf('-')
        let start = indexof == -1 ? payload.rate.match(/(\d+)%\+/)[1] : payload.rate.match(/(\d+)-(\d+)%/)[1]
        let end = indexof == -1 ? '' : payload.rate.match(/(\d+)-(\d+)%/)[2]
        arr = arr.filter(item => {
          return indexof == -1 ? (item.rateStart >= start) : (item.rateStart >= start && item.rateEnd <= end)
        })
      }

      if(payload.city != 'all' && payload.city != ''){
        arr = arr.filter(item => {
          return item.city == payload.city
        })
      }

      state.debt = arr
    },
    getAboutMuta(state,payload){
      state.about = payload.content
    },
    getContactMuta(state,payload){
      state.contact = payload.content
    }
  },
  actions: {
    getRecommendAction(store){
      getRecommend().then(res => {
        store.commit('getRecommendMuta',{list: res.data.data})
      })
    },
    getBrandAction(store){
      return getBrand().then(res => {
        store.commit('getBrandMuta',{list: res.data.data})
      })
    },
    getDebtAction(store){
      return getDebt().then(res => {
        store.commit('getDebtMuta',{list: res.data.data})
      })
    },
    getAboutAction(store){
      getAbout().then(res => {
        store.commit('getAboutMuta',{content: res.data.data.content})
      })
    },
    getContactAction(store){
      getContact().then(res => {
        store.commit('getContactMuta',{content: res.data.data.content})
      })
    }
  }
})