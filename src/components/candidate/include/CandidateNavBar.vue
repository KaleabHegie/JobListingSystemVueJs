<template>
    <nav class="bg-gray-100 shadow-md fixed w-full z-10 top-0" id="navbar">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo on the left -->
          <div class="flex items-center">
            <img src="../../../assets/images/logo/download.webp" class="img-fluid rounded-3xl" style="height: 55px;" alt="mnm">
          </div>
  
          <!-- Menu items centered -->
          <div class="flex-1 flex justify-center">
            <div class="hidden sm:block">
              <div class="flex space-x-4">
                <router-link to="/" class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                <router-link to="/job" class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Jobs</router-link>
                <router-link to="/about" class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</router-link>
                <router-link to="/contact" class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</router-link>
                <router-link to="/faqs" class="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">FAQ</router-link>
              </div>
            </div>
          </div>
  
          <!-- Sign Up and Login buttons on the right -->
          <div class="hidden sm:block">
            <router-link to="/register" class="text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-md text-sm font-medium">Sign Up</router-link>
          </div>
          <div class="hidden sm:block">
            <router-link to="/login" class="text-white ml-4 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-md text-sm font-medium">Login</router-link>
          </div>
  
          <!-- Mobile menu button -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <!-- Icon when menu is open -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" class="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</router-link>
          <router-link to="/job" class="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Jobs</router-link>
          <router-link to="/about" class="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</router-link>
          <router-link to="/contact" class="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</router-link>
          <router-link to="/faqs" class="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">FAQ</router-link>
          <router-link to="/auth/sign-up" class="text-white bg-indigo-600 hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium">Sign Up</router-link>
          <router-link to="/auth/login" class="text-white bg-green-600 hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium">Login</router-link>
        </div>
      </div>
    </nav>
  </template>
  