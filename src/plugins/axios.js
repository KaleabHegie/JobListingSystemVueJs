import axios from 'axios';
import { useAuthStore } from '@/manager/auth.js';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        if (authStore.token) {
            if (!authStore.isTokenValid()) {
                authStore.logout();
                throw new axios.Cancel("Token expired, logging out...");
            }
            config.headers.Authorization = `Bearer ${authStore.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            const authStore = useAuthStore();
            authStore.logout();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;