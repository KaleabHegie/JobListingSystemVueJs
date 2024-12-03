import { createApp } from 'vue';
import App from '../App.vue'; // Root component
import router from './router/router';

const app = createApp(App);
app.use(router); // Register the router
app.mount('#app'); // Mount the app
