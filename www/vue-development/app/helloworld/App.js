import App from './components/App.vue';
const { createApp } = Vue;
import translations from './i18n.js'

const i18n = VueI18n.createI18n({
  locale: STORE_Global.getters['global/lang'],
  messages: translations,
})

// new Vue({
//   el: '#vue-hello-world',
//   store: STORE_Global,
//   // i18n: i18n,
//   template: '<App/>',
//   components: { App }
// })

const app = createApp(App);

app.use(STORE_Global);
app.use(i18n);
app.component(App);

app.mount('#vue-hello-world')