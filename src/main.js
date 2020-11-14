import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
