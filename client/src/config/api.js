import axios from 'axios';

// API Configuration for different environments
const API_CONFIG = {
  development: {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  },
  production: {
    // TODO: Update this URL after backend deployment
    // Railway: https://your-app-name.railway.app
    // Render: https://your-app-name.onrender.com
    // Heroku: https://your-app-name.herokuapp.com
    baseURL: process.env.REACT_APP_API_URL || 'https://your-backend-domain.com',
  },
};

// Get current environment
const isDevelopment = process.env.NODE_ENV === 'development';
const config = API_CONFIG[isDevelopment ? 'development' : 'production'];

// Export base URL
export const API_BASE_URL = config.baseURL;

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient; 