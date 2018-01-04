import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'

import router from './routes'

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
