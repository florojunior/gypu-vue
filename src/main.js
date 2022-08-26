import Vue from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueTheMask)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

