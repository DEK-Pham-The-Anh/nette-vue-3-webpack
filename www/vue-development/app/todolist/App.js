import Vue from 'vue';
import App from './components/App.vue';
import store from '../Global/Store';
import { createI18n } from 'vue-i18n';
import translations from './i18n.js';

const i18n = createI18n({
  locale: store.getters['global/lang'],
  messages: translations,
});

// new Vue({
//   el: '#vue-todo-app',
//   store: STORE_Global,
//   // i18n: i18n,
//   template: '<App/>',
//   components: { App }
// })

Vue.createApp(App).use(store).use(i18n).mount('#vue-todo-app');