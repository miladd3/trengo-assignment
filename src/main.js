import Vue from 'vue';
import App from './App.vue';
import './lib/font-awesome';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
