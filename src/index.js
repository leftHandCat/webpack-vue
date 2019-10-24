/**
 * @author nd
 * @date 2019-10-22
 * @vision 1.0
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/css/reset.css' 


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


