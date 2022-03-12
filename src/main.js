import Vue from 'vue';


import App from './App.vue';
import router from './router'
import store from './store/index'
import { toest } from './components/common/toest/index'
Vue.prototype.$bus = new Vue();

Vue.use(toest)
Vue.use(router)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

