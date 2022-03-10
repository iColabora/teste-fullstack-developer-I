import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_TASKS_API_ENDPOINT;

createApp(App).mount('#app');
