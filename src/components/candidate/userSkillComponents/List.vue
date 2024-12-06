<template>
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="mb-4 rounded overflow-hidden">
          <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Add Skill Form -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Skill</h2>
  
                <form id="skillForm" @submit.prevent="addSkill">
                  <div class="mb-4">
                    <label for="title" class="block text-sm font-medium text-gray-700">Skill Title</label>
                    <input
                      type="text"
                      v-model="newSkill.title"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Enter skill title (e.g., JavaScript, Communication)"
                      required
                    />
                  </div>
  
                  
  
                  <button
                    type="submit"
                    class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Add Skill
                  </button>
                </form>
              </div>
  
              <!-- List of Skills -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Skills</h2>
  
                <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in profileStore.profile?.skills"
              :key="index"
              class="bg-gray-600 text-white text-sm px-3 py-1 rounded-full"
            >{{ skill.name }}</span>
          </div>
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
    const newSkill = ref({
      title: '',
      description: '',
    });

    // Fetch the profile when the component is mounted
    onMounted(() => {
      profileStore.fetchProfile();
    });

    // Computed property to access the logged-in user's profile
    const profile = computed(() => profileStore.profile);

    // Function to handle form submission and add a new skill
    const addSkill = async () => {
      try {
        // Add the skill to the backend
        const updatedSkills = [...(profile.value.skills || []), newSkill.value];
        await profileStore.updateProfile({ skills: updatedSkills });

        // Reset the form
        newSkill.value = {
          title: '',
          description: '',
        };
      } catch (error) {
        console.error('Error adding skill:', error);
      }
    };

    return {
      profile,
      profileStore,
      newSkill,
      addSkill,
    };
  },
};
</script>
  