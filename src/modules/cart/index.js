import state from './state' // datos del modulo
import * as mutations from './mutations' // Alteran los datos del modulo
import * as getters from './getters' // Filtran datos del modulo

export default {
  namespaced: true,
  state,
  mutations,
  getters
}