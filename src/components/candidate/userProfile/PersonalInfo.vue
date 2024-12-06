<template>
  <div v-if="profileStore.profile && profileStore.profile.user" class="bg-white shadow-md rounded-lg p-6">
    <div class="text-center">
      <img src="https://via.placeholder.com/150" alt="Profile Picture"
        class="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200" />
      <h3 class="text-lg font-bold text-gray-800">
        {{ profileStore.profile.user.first_name }} {{ profileStore.profile.user.last_name }}
      </h3>
      <div class="flex justify-center space-x-3 mt-3">
        <a href="https://github.com/johndoe" class="text-gray-600 hover:text-gray-800">
          <i class="fa-brands fa-github text-2xl"></i>
        </a>
        <a href="https://linkedin.com/in/johndoe" class="text-blue-600 hover:text-blue-800">
          <i class="fa-brands fa-linkedin text-2xl"></i>
        </a>
      </div>
    </div>
    <div class="mt-6">
      <h4 class="text-gray-700 font-semibold mb-2">Contact Information</h4>
      <ul class="text-gray-600 space-y-2">
        <li>
          <strong>Email:</strong> {{ profileStore.profile.user.email }}
        </li>
        <li>
          <strong>Phone:</strong> {{ profileStore.profile.user.phone }}
        </li>
        <li>
          <strong>Location:</strong> {{ profileStore.profile.user.address }}
        </li>
      </ul>
    </div>

    <hr>
    <div class="mb-6 mt-5">
      <h4 class="text-gray-700 font-semibold mb-2">Languages</h4>
      <ul v-if="profileStore.profile.languages" class="text-gray-600 space-y-2">
        <li v-for="(lan, index) in profileStore.profile.languages" :key="index">{{ lan }}</li>
      </ul>
    </div>
  </div>
  <div v-else class="text-center p-6 text-gray-500">
    Loading profile...
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useProfileManager } from '@/manager/profile';

export default {
  setup() {
    const profileStore = useProfileManager();
    const isEditing = ref(false);

    // Fetch the profile when the component is mounted
    onMounted(() => {
      profileStore.fetchProfile();
    });

    // Computed property to access the logged-in user's profile
    const profile = computed(() => profileStore.profile);

    // Toggle the edit mode

    return {
      profile,
      profileStore,
    };
  },
};
</script>
