import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router.js'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
