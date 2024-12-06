<template>
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="mb-4 rounded overflow-hidden">
          <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Add Education Form -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Education</h2>
  
                <form id="educationForm" @submit.prevent="addEducation">
                  <div class="mb-4">
                    <label for="school" class="block text-sm font-medium text-gray-700">School Name</label>
                    <input
                      type="text"
                      v-model="newEducation.school"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Enter school name"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="degree" class="block text-sm font-medium text-gray-700">Degree</label>
                    <input
                      type="text"
                      v-model="newEducation.degree"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Enter degree"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="fieldOfStudy" class="block text-sm font-medium text-gray-700">Field of Study</label>
                    <input
                      type="text"
                      v-model="newEducation.field_of_study"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="E.g., Computer Science, Engineering"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      v-model="newEducation.start_date"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                      type="date"
                      v-model="newEducation.end_date"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      v-model="newEducation.description"
                      rows="4"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Brief description of your education..."
                    ></textarea>
                  </div>
  
                  <button
                    type="submit"
                    class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Add Education
                  </button>
                </form>
              </div>
  
              <!-- List of Educations -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Education</h2>
  
                <ul id="educationList" class="space-y-4">
                  <li
                    v-for="(edu, index) in profileStore.profile?.educations"
                    :key="index"
                    class="p-4 bg-gray-100 rounded-md shadow-sm"
                  >
                    <h3 class="text-lg font-bold">{{ edu.school }}</h3>
                    <p class="text-sm text-gray-700">
                      <strong>Degree: </strong>{{ edu.degree }}
                    </p>
                    <p class="text-sm text-gray-700">
                      <strong>Field of Study: </strong>{{ edu.field_of_study }}
                    </p>
                    <p class="text-sm text-gray-700">
                      <strong>Duration: </strong>
                      {{ new Date(edu.start_date).getFullYear() }} -
                      {{ edu.end_date ? new Date(edu.end_date).getFullYear() : 'Present' }}
                    </p>
                    <p class="text-sm text-gray-700">
                      <strong>Description: </strong>{{ edu.description }}
                    </p>
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
    const newEducation = ref({
      school: '',
      degree: '',
      field_of_study: '',
      start_date: '',
      end_date: '',
      description: '',
    });

    // Fetch the profile when the component is mounted
    onMounted(() => {
      profileStore.fetchProfile();
    });

    // Computed property to access the logged-in user's profile
    const profile = computed(() => profileStore.profile);

    // Function to handle form submission and add a new education
    const addEducation = async () => {
      try {
        // Add the education to the backend
        const updatedEducation = [...(profile.value.education || []), newEducation.value];
        await profileStore.updateProfile({ education: updatedEducation });

        // Reset the form
        newEducation.value = {
          school: '',
          degree: '',
          field_of_study: '',
          start_date: '',
          end_date: '',
          description: '',
        };
      } catch (error) {
        console.error('Error adding education:', error);
      }
    };

    return {
      profile,
      profileStore,
      newEducation,
      addEducation,
    };
  },
};
</script>
