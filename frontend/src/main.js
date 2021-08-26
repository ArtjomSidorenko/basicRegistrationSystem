import Vue from 'vue'
import App from './App.vue'
import router from './router'
import loader from "vue-ui-preloader";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.use(loader);
