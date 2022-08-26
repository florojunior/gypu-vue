import Vue from 'vue'
import Vuex from 'vuex'
import { modal } from './modal/modal'
import { contact } from './contact/contact'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
    contact
  },
});