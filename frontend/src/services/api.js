// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://clacks-portal-backend.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for cookies/sessions
});

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  response => response,
  error => {
    // Handle authentication errors
    if (error.response && error.response.status === 401) {
      // Optionally redirect to login or trigger logout
      console.error('Authentication error');
    }
    return Promise.reject(error);
  }
);

export default api;
