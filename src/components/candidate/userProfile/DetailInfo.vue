<template>
    <div class="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
      <nav class="mb-6 border-b pb-3">
        <ul class="flex space-x-4">
          <li>
            <a
              href="#overview"
              class="text-blue-600 font-medium hover:text-blue-800 border-b-2 border-blue-600"
            >Overview</a>
          </li>
        </ul>
      </nav>
  
      <div id="overview">
        <!-- About Section -->
        <div class="mb-6">
          <h3 class="text-gray-800 font-bold text-lg mb-2">About</h3>
          <textarea 
            v-if="isEditing" 
            v-model="profileStore.profile.about" 
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your about section"
          ></textarea>
          <p v-else class="text-gray-600">
            {{ profileStore.profile?.about || 'No description available.' }}
          </p>
        </div>
  
        <!-- Education Section -->
        <div class="mb-6">
          <h3 class="text-gray-800 font-bold text-lg mb-2">Education</h3>
          <div v-for="(edu, index) in profileStore.profile?.educations" :key="index" class="border-l-4 border-blue-600 pl-4">
            <p class="font-semibold text-gray-800">
              <input
                v-if="isEditing"
                v-model="edu.institution"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Institution Name"
              />
              <span v-else>{{ edu.institution }}</span>
            </p>
            <h3 class="text-lg font-bold">{{ edu.school }}</h3>
                    <p class="text-sm text-gray-700">
                      <strong>Degree: </strong>{{ edu.degree }}
                    </p>
                    <p class="text-sm text-gray-700">
                      <strong>Field of Study: </strong>{{ edu.field_of_study }}
                    </p>
            <p class="text-gray-600 text-sm">
              <input
                v-if="isEditing"
                v-model="edu.startYear"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Start Year"
              />
              <span v-else>{{ edu.startYear }} - {{ edu.endYear }}</span>
            </p>
          </div>
        </div>
       
  
        <!-- Experience Section -->
        <div class="mb-6">
          <h3 class="text-gray-800 font-bold text-lg mb-2">Experience</h3>
          <div v-for="(exp, index) in profileStore.profile?.experiences" :key="index" class="border-l-4 border-blue-600 pl-4">
            <p class="font-semibold text-gray-800">
              <input
                v-if="isEditing"
                v-model="exp.company"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Company Name"
              />
              <span v-else>{{ exp.company }}</span>
            </p>
            <p class="text-gray-600 text-sm">
              <input
                v-if="isEditing"
                v-model="exp.position"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Position"
              />
              <span v-else>{{ exp.position }}</span>
            </p>
            <p class="text-gray-600 text-sm">
              <input
                v-if="isEditing"
                v-model="exp.startYear"
                class="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Start Year"
              />
              <span v-else>{{ new Date(exp.from).getFullYear() }} - {{ exp.to ? new Date(exp.to).getFullYear() : 'Present' }}</span>
            </p>
          </div>
        </div>
  
        <!-- Skills Section -->
        <div class="mb-6">
          <h3 class="text-gray-800 font-bold text-lg mb-2">Skills</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in profileStore.profile?.skills"
              :key="index"
              class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
            >{{ skill.name }}</span>
          </div>
        </div>
        
        <div class="mb-6">
        <h3 class="text-gray-800 font-bold text-lg mb-2">Personal Projects</h3>
        <div v-for="(project, index) in profileStore.profile?.personalProjects" :key="index" class="border-l-4 border-green-600 pl-4 mb-4">
          <p class="font-semibold text-gray-800">
            <input
              v-if="isEditing"
              v-model="project.name"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Project Name"
            />
            <span v-else>{{ project.name }}</span>
          </p>
          <p class="text-gray-600 text-sm">
            <input
              v-if="isEditing"
              v-model="project.description"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Project Description"
            />
            <span v-else>{{ project.description }}</span>
          </p>
          <p class="text-gray-600 text-sm">
            <input
              v-if="isEditing"
              v-model="project.year"
              class="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Year"
            />
            <span v-else>{{ project.year }}</span>
          </p>
        </div>
      </div>
  
        <!-- Certifications Section -->
        <div class="mb-6">
          <h3 class="text-gray-800 font-bold text-lg mb-2">Certifications</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(cert, index) in profileStore.profile?.certificates"
              :key="index"
              class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
            >{{ cert.name }}</span>
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
      const isEditing = ref(false);
  
      // Fetch the profile when the component is mounted
      onMounted(() => {
        profileStore.fetchProfile();
      });
  
      // Computed property to access the logged-in user's profile
      const profile = computed(() => profileStore.profile);
  
      // Toggle the edit mode
      const toggleEdit = () => {
        isEditing.value = !isEditing.value;
        if (!isEditing.value) {
          profileStore.updateProfile(profile.value); // Save changes when editing is toggled off
        }
      };
  
      return {
        profile,
        profileStore,
        isEditing,
        toggleEdit
      };
    },
  };
  </script>
  