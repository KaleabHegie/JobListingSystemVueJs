import { createApp } from 'vue';
import App from '../App.vue'; // Root component
import router from './router/router';
import { createPinia } from 'pinia';

import VueApexCharts from "vue3-apexcharts";



const app = createApp(App);
app.use(VueApexCharts);

app.use(createPinia());
app.use(router); // Register the router
app.mount('#app');