import Vue from 'vue'
import Vuex from 'vuex'
import localForage from 'localforage'
import VuexPersistence from 'vuex-persist'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  /* storage: window.localStorage, */ //Usamos el localStorage para la persistencia de datos
  storage: localForage, // uso de localforage para la persistencia de datos
  modules: ['cart']
})

export default new Vuex.Store({
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})
