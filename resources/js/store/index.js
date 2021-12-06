import Vue from 'vue'
import Vuex from 'vuex'

import account from './account'
import product from './product'
import category from './category'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      account,
      product,
      category
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEV
  })

  return Store
}