// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create a Vue application instance
const app = createApp(App);

// Use the router with the Vue application
app.use(router);

// Mount the Vue application to the DOM
app.mount('#app');
