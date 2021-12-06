
require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuex)

import router from './router/index.js'

import store from './store/index.js'


const app = new Vue({
  el: '#app',
  router,
  store,
});

// require('./bootstrap');

// window.Vue = require('vue').default;
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// require('./App.vue').default


// const routes = [
//   { path: '/', component: require('./App.vue').default },
// ]

// const router = new VueRouter({
//   routes 
// })

// const app = new Vue({
//   el: '#app',
//   router,
// });


