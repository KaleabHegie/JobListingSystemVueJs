<template>
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="mb-4 rounded overflow-hidden">
          <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Add Personal Project Form -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Personal Project</h2>
  
                <form id="projectForm" @submit.prevent="addPersonalProject">
                  <div class="mb-4">
                    <label for="projectTitle" class="block text-sm font-medium text-gray-700">Project Title</label>
                    <input
                      type="text"
                      v-model="newProject.title"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Enter project title"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="technologies" class="block text-sm font-medium text-gray-700">Technologies Used</label>
                    <input
                      type="text"
                      v-model="newProject.technologies"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="E.g., Vue.js, Node.js, Python"
                      required
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="link" class="block text-sm font-medium text-gray-700">Project Link (Optional)</label>
                    <input
                      type="url"
                      v-model="newProject.link"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="https://example.com"
                    />
                  </div>
  
                  <div class="mb-4">
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      v-model="newProject.description"
                      rows="4"
                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      placeholder="Brief description of your project..."
                    ></textarea>
                  </div>
  
                  <button
                    type="submit"
                    class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Add Project
                  </button>
                </form>
              </div>
  
              <!-- List of Personal Projects -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Personal Projects</h2>
  
                <ul id="projectList" class="space-y-4">
                  <li
                    v-for="(project, index) in profileStore.profile?.personalProjects"
                    :key="index"
                    class="p-4 bg-gray-100 rounded-md shadow-sm"
                  >
                    <h3 class="text-lg font-bold">{{ project.name }}</h3>
                    <p class="text-sm text-gray-700"><strong>Technologies: </strong>{{ project.technologies }}</p>
                    <p class="text-sm text-gray-700"><strong>Description: </strong>{{ project.description }}</p>
                    <p v-if="project.link" class="text-sm text-blue-500">
                      <a :href="project.link" target="_blank" class="hover:underline">View Project</a>
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
    const newProject = ref({
      title: '',
      technologies: '',
      link: '',
      description: '',
    });

    console.log('Profile:', profileStore.profile);

    // Fetch the profile when the component is mounted
    onMounted(() => {
      profileStore.fetchProfile();
    });

    // Computed property to access the logged-in user's profile
    const profile = computed(() => profileStore.profile);

    // Function to handle form submission and add a new project
    const addPersonalProject = async () => {
      try {
        // Add the project to the backend
        const updatedProjects = [...(profile.value.projects || []), newProject.value];
        await profileStore.updateProfile({ projects: updatedProjects });

        // Reset the form
        newProject.value = {
          title: '',
          technologies: '',
          link: '',
          description: '',
        };
      } catch (error) {
        console.error('Error adding project:', error);
      }
    };

    return {
      profile,
      profileStore,
      newProject,
      addPersonalProject,
    };
  },
};
</script>

  