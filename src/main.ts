import { createApp } from 'vue';
import './assets/styles/main.scss';
import router from './router';
import App from './App.vue';
import {createPinia} from "pinia";

const app = createApp(App);
app.use(router);
app.use(createPinia());

createApp(App).use(router).mount('#app');
