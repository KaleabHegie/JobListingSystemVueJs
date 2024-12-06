<template>
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="mb-4 rounded overflow-hidden">
          <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Add Experience Form -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Experience</h2>
  
                <form id="experienceForm" @submit.prevent="updateProfile">
                  <div class="mb-4">
                    <label for="company" class="block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" v-model="newExperience.company_name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Enter company name" required>
                  </div>
  
                  <div class="mb-4">
                    <label for="position" class="block text-sm font-medium text-gray-700">Position</label>
                    <input type="text" v-model="newExperience.position" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Enter position title" required>
                  </div>
  
                  <div class="mb-4">
                    <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                    <input type="text" v-model="newExperience.location" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Enter location" required>
                  </div>
  
                  <div class="mb-4">
                    <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
                    <input type="date" v-model="newExperience.from" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" required>
                  </div>
  
                  <div class="mb-4">
                    <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
                    <input type="date" v-model="newExperience.to" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                  </div>
  
                  <div class="mb-4">
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea v-model="newExperience.description" rows="4" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="Brief description of your experience..."></textarea>
                  </div>
  
                  <button type="submit" class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    Add Experience
                  </button>
                </form>
              </div>
  
              <!-- List of Experiences -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Added Experiences</h2>
  
                <ul id="experienceList" class="space-y-4">
                  <li v-for="(exp, index) in profileStore.profile?.experiences" :key="index" class="p-4 bg-gray-100 rounded-md shadow-sm">
                    <h3 class="text-lg font-bold">{{ exp.company_name }} ({{ new Date(exp.from).getFullYear() }} - {{ exp.to ? new Date(exp.to).getFullYear() : 'Present' }})</h3>
                    <p class="text-sm text-gray-700"><strong>Position: </strong> {{ exp.position }}</p>
                    <p class="text-sm text-gray-700"><strong>Description: </strong> {{ exp.description }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { useProfileManager } from '@/manager/profile';
  
  export default {
    setup() {
      const profileStore = useProfileManager();
      const newExperience = ref({
        company_name: '',
        position: '',
        location: '',
        from: '',
        to: '',
        description: ''
      });
  
      // Fetch the profile when the component is mounted
      onMounted(() => {
        profileStore.fetchProfile();
      });
  
      // Computed property to access the logged-in user's profile
      const profile = computed(() => profileStore.profile);
  
      // Function to handle form submission and add new experience
      const updateProfile = async () => {
        // You should implement an API request to save this experience to the backend
        try {
          await profileStore.updateProfile(newExperience.value); // Assuming the method `updateProfile` is implemented in your store
          newExperience.value = {}; // Reset the form after successful submission
        } catch (error) {
          console.error('Error adding experience:', error);
        }
      };
  
      return {
        profile,
        profileStore,
        newExperience,
        updateProfile
      };
    },
  };
  </script>
  