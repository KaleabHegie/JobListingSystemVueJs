<template>
    <div class="flex min-h-1/3 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl border-spacing-4 shadow-2xl p-10 flex gap-6">
  
        <div class="sm:w-full sm:max-w-lg flex-1 bg-gray-50 p-8">
          <img class="img-fluid" src="../../../assets/images/svg/mobile-login-concept-illustration_114360-83.avif" alt="">
        </div>
  
        <!-- Left Form Div -->
        <div class="sm:w-full sm:max-w-lg flex-1">
          <h2 class="text-center text-2xl font-bold tracking-tight text-gray-900">Create your account</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- First Name -->
                  <div>
                      <label for="first-name" class="block text-sm font-medium text-gray-900">First Name</label>
                      <input id="first-name" v-model="userData.first_name" name="first-name" type="text" required placeholder="Enter your first name" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Last Name -->
                  <div>
                      <label for="last-name" class="block text-sm font-medium text-gray-900">Last Name</label>
                      <input id="last-name" v-model="userData.last_name" name="last-name" type="text" required placeholder="Enter your last name" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Username -->
                  <div>
                      <label for="user-name" class="block text-sm font-medium text-gray-900">Username</label>
                      <input id="user-name" v-model="userData.user_name" name="user-name" type="text" required placeholder="Choose a username" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Date of Birth -->
                  <div>
                      <label for="date-of-birth" class="block text-sm font-medium text-gray-900">Date of Birth</label>
                      <input id="date-of-birth" v-model="userData.date_of_birth" name="date-of-birth" type="date" required 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Email Address -->
                  <div>
                      <label for="email" class="block text-sm font-medium text-gray-900">Email Address</label>
                      <input id="email" v-model="userData.email" name="email" type="email" required placeholder="Enter your email" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Phone Number -->
                  <div>
                      <label for="phone" class="block text-sm font-medium text-gray-900">Phone Number</label>
                      <input id="phone" v-model="userData.phone" name="phone" type="tel" required placeholder="Enter your phone number" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Address -->
                  <div>
                      <label for="address" class="block text-sm font-medium text-gray-900">Address</label>
                      <input id="address" v-model="userData.address" name="address" type="text" required placeholder="Enter your address" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- City -->
                  <div>
                      <label for="city" class="block text-sm font-medium text-gray-900">City</label>
                      <input id="city" v-model="userData.city" name="city" type="text" required placeholder="Enter your city" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Country -->
                  <div>
                      <label for="country" class="block text-sm font-medium text-gray-900">Country</label>
                      <input id="country" v-model="userData.country" name="country" type="text" required placeholder="Enter your country" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Password -->
                  <div>
                      <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
                      <input id="password" v-model="userData.password" name="password" type="password" required placeholder="Create a password" 
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
                  <!-- Photo -->
                  <div class="sm:col-span-2">
                      <label for="photo" class="block text-sm font-medium text-gray-900">Photo</label>
                      <input id="photo" name="photo" type="file"  
                          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                  </div>
              
              </div>
          
              <!-- Sign-up Button -->
              <div>
                  <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Sign up
                  </button>
              </div>
          </form>
        
          <p class="mt-10 text-center text-sm text-gray-500">
              Already have an account? 
              <router-link to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</router-link>
          </p>
      </div>
      
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/manager/auth';  // Ensure correct path
  
  

  export default {
    setup() {
      const authStore = useAuthStore();
      const userData = ref({
        first_name: '',
        last_name: '',
        user_name: '',
        date_of_birth: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        password: '',
        photo: null,  // You can handle photo uploading here if needed
      });

      const router = useRouter();
  
      // Handle form submission
      const handleSubmit = async () => {
        const isRegistered = await authStore.register(userData.value);
        if (isRegistered) {
          // Redirect to the login page or show a success message
          alert('Registration successful!');
          router.push('/login');  // You can change this based on your routing setup
        } else {
          console.error('Registration failed:', authStore.getError);
        }
      };
  
      return {
        userData,
        handleSubmit,
      };
    },
  };
  </script>
  