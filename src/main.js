import { createApp } from 'vue';
import App from '../App.vue'; // Root component
import router from './router/router';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(router); // Register the router
app.mount('#app');