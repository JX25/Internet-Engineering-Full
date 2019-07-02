import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import router from './router/'

import VueLocalStorage from 'vue-localstorage'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  components: {App},
  template: '<App/>'
}).$mount('#app')
