import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/init.css'
// test/setup.js
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
