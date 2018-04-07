import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ac8b9e1dc9d9d4f3771679a'

export function getRecommend(){
  return axios('/recommend')
}

export function getBrand(){
  return axios('/brand')
}

export function getDebt(){
  return axios('/debt')
}

export function getAbout(){
  return axios('/about')
}

export function getContact(){
  return axios('/contact')
}