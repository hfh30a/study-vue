import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/style/main.css'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
