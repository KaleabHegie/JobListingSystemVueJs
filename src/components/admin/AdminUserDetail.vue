<template>
    <div class="ml-[18%] w-[82%] p-6 bg-gray-lighter">
      <section class="bg-gray-50 py-10" id="pdf_section">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Sidebar -->
            <div class="bg-white shadow-md rounded-lg p-6" v-if="candidate">
              <div class="text-center">
                <img
                  :src="candidate.avatar || 'https://via.placeholder.com/150'"
                  alt="Profile Picture"
                  class="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
                />
                <h3 class="text-lg font-bold text-gray-800">{{ candidate.user.first_name }} {{ candidate.user.last_name }}</h3>
                <div class="flex justify-center space-x-3 mt-3">
                  <a :href="candidate.github" class="text-gray-600 hover:text-gray-800">
                    <i class="fa-brands fa-github text-2xl"></i>
                  </a>
                  <a :href="candidate.linkedin" class="text-blue-600 hover:text-blue-800">
                    <i class="fa-brands fa-linkedin text-2xl"></i>
                  </a>
                </div>
              </div>
              <div class="mt-6">
                <h4 class="text-gray-700 font-semibold mb-2">Contact Information</h4>
                <ul class="text-gray-600 space-y-2">
                  <li><strong>Email:</strong> {{ candidate.user.email }}</li>
                  <li><strong>Phone:</strong> {{ candidate.user.phone }}</li>
                  <li><strong>Location:</strong> {{ candidate.user.location }}</li>
                </ul>
              </div>
            </div>
  
            <!-- Main Content -->
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
            v-model="candidate.about" 
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your about section"
          ></textarea>
          <p v-else class="text-gray-600">
            {{ candidate?.about || 'No description available.' }}
          </p>
        </div>
  
        <!-- Education Section -->
        <div class="mb-6">
          <h3 class="text-gray-800 font-bold text-lg mb-2">Education</h3>
          <div v-for="(edu, index) in candidate?.educations" :key="index" class="border-l-4 border-blue-600 pl-4">
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
          <div v-for="(exp, index) in candidate?.experiences" :key="index" class="border-l-4 border-blue-600 pl-4">
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
              v-for="(skill, index) in candidate?.skills"
              :key="index"
              class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
            >{{ skill.name }}</span>
          </div>
        </div>
        
        <div class="mb-6">
        <h3 class="text-gray-800 font-bold text-lg mb-2">Personal Projects</h3>
        <div v-for="(project, index) in candidate?.personalProjects" :key="index" class="border-l-4 border-green-600 pl-4 mb-4">
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
              v-for="(cert, index) in candidate?.certificates"
              :key="index"
              class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
            >{{ cert.name }}</span>
          </div>
        </div>
  
        
      </div>
    </div>
          </div>
        </div>
      </section>
      
    </div>
  
  </template>
  
  <script>
  import { onMounted, ref, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCandidateManager } from '@/manager/candidate';
  
  export default {
    setup() {
      const route = useRoute();
      const candidateStore = useCandidateManager();
      const candidate = ref(null);
      const isLoading = ref(true);
  
      // Fetch candidates when the component mounts
      onMounted(async () => {
        await candidateStore.fetchCandidates();  // Ensure candidates are fetched
      });
  
      // Watch for changes in the candidates array and fetch the specific candidate
      watchEffect(() => {
        if (candidateStore.candidates.length > 0) {
          const candidateId = route.params.id;
          candidate.value = candidateStore.getCandidateById(candidateId); // Get the candidate by ID
          isLoading.value = false;
          console.log('Fetched candidate:',candidate.value);
        }
      });
  
      return {
        candidate,
        isLoading,
      };
    },
  };
  </script>
  