import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../public/reset.css'
import '../public/style.css'
import '../public/forms.css'
import '../public/buttons.css'

import '../public/styles/header.css';
import '../public/styles/cards.css';
import '../public/styles/footer.css';
import '../public/styles/home.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
