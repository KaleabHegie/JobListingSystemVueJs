import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from './home'; 
import authRoutes from './auth';
import profileRoutes from './profile';
import recruiterRoutes from './recruiter';

const routes = [
  ...homeRoutes, 
  ...authRoutes,
  ...profileRoutes,
  ...recruiterRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
