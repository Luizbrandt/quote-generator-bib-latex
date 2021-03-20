import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false;

Vue.use(VueTheMask);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
