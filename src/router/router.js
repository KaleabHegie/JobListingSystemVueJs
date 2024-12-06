import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from './home'; 
import authRoutes from './auth';
import profileRoutes from './profile';
import recruiterRoutes from './recruiter';
import { useAuthStore } from '@/manager/auth'; // Adjust path based on your store's location

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

// Add the beforeEach guard here
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); // Access authentication store

  // Check if route requires authentication
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated) {
      // Redirect to login if not authenticated
      return next({ path: '/login', query: { redirect: to.fullPath } });
    }

    // Check if route has role-based access
    if (to.meta.roles) {
      const userRole = authStore.userRole; // Assumes `userRole` is derived from your store
      if (!to.meta.roles.includes(userRole)) {
        // Redirect to an unauthorized page or home
        return next({ path: '/unauthorized' });
      }
    }
  }

  next(); // Allow navigation if authenticated and authorized
});

export default router;
