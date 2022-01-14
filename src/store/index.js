/*
 * @Description: file information
 * @Author: Dzl
 * @Date: 2021-08-22 10:51:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-08 16:03:50
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    count: 0
  },

  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})
