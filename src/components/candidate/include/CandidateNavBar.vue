<template>
  <nav class="bg-gray-100 shadow-md fixed w-full z-10 top-0" id="navbar">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo on the left -->
        <div class="flex items-center">
          <img src="../../../assets/images/logo/download.webp" class="img-fluid rounded-3xl" style="height: 55px;" alt="mnm" />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex flex-1 justify-center">
          <div class="flex space-x-4">
            <router-link
              to="/"
              class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Home</router-link
            >
            <router-link
              to="/job"
              class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Jobs</router-link
            >
            <router-link
              to="/about"
              class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >About</router-link
            >
            <router-link
              to="/contact"
              class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Contact</router-link
            >
            <router-link
              to="/faqs"
              class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >FAQ</router-link
            >
          </div>
        </div>

        <!-- Desktop Buttons -->
        <div class="hidden sm:flex" v-if="!isAuthenticated">
          <router-link
            to="/register"
            class="text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-md text-sm font-medium"
            >Sign Up</router-link
          >
          <router-link
            to="/login"
            class="text-white ml-4 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-md text-sm font-medium"
            >Login</router-link
          >
        </div>

        <!-- User Profile Button (Visible when logged in) -->
        <div class="hidden sm:flex items-center space-x-4" v-else>
          <router-link
            to="/profile"
            class="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >Profile</router-link
          >
          <button
            @click="logout"
            class="text-white bg-red-600 hover:bg-red-500 px-5 py-3 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="sm:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/manager/auth'; // Adjust the path as needed

const authStore = useAuthStore();

// Computed property to check authentication status
const isAuthenticated = computed(() => authStore.isAuthenticated);
const router = useRouter();
// Logout handler
const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>
