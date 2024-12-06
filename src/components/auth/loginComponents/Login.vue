<template>
    <div class="flex min-h-1/3 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl border-spacing-4 shadow-2xl p-10 flex gap-6">
        <div class="sm:w-full sm:max-w-lg flex-1 bg-gray-50 p-8">
          <img class="img-fluid" src="@/assets/images/svg/mobile-login-concept-illustration_114360-83.avif" alt="">
        </div>
  
        <div class="sm:w-full sm:max-w-lg flex-1">
          <h2 class="mt-0 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          <div class="flex flex-col justify-center px-6 py-0 lg:px-8">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-10">
              <form @submit.prevent="onSubmit" class="space-y-6">
                <!-- Email Field -->
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input 
                    id="email"
                    v-model="email"
                    type="email"
                    autocomplete="email"
                    required
                    placeholder="Enter your email"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  >
                </div>
  
                <!-- Password Field -->
                <div class="mb-4">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    placeholder="Enter your password"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  >
                </div>
  
                <!-- Submit Button -->
                <div>
                  <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          <p class="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <router-link to="/register" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/manager/auth'; // Adjust path as needed
  import { ref } from 'vue';

  const authStore = useAuthStore();
  const router = useRouter();

  // Reactive state for email and password
  const email = ref('');
  const password = ref('');

  // Submit handler
  const onSubmit = async () => {
    try {
      const isSuccess = await authStore.login({ email: email.value, password: password.value });

      if (isSuccess) {
        const userRole = authStore.user?.user.role; // Assuming the role is stored in `authStore.user`
        
        // Redirect based on the user's role
        switch (userRole) {
          case 'recruiter':
            router.push('/recruiter/dashboard');
            break;
          case 'candidate':
            router.push('/profile');
            break;
          default:
            router.push('/profile'); // Default redirection
        }
      } else {
        alert(authStore.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Unexpected error occurred.');
    }
  };
</script>
