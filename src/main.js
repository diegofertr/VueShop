import Vue from 'vue'
import App from './App.vue'
import store from './store'
// importando plugins
import './plugins'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
