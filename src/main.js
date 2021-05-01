import Vue from 'vue';
import App from './App.vue';
import './lib/font-awesome';
import './lib/toast';
import './assets/tailwind.css';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
