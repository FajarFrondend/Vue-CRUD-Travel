import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './index.css'; // Import Tailwind CSS

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:3001/api';

// Add a request interceptor to include the token in the headers
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

createApp(App).use(router).mount('#app');
