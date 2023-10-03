import { createApp } from 'vue';
import './assets/styles/main.scss';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';
import router from './router';
import App from './App.vue';

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  messages,
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(i18n);

app.mount('#app');
