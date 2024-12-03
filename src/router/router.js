import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from './home'; 
import authRoutes from './auth';
import profileRoutes from './profile';

const routes = [
  ...homeRoutes, 
  ...authRoutes,
  ...profileRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
