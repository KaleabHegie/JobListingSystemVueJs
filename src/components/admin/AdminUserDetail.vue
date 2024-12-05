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
                <h3 class="text-lg font-bold text-gray-800">{{ candidate.name }}</h3>
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
                  <li><strong>Email:</strong> {{ candidate.email }}</li>
                  <li><strong>Phone:</strong> {{ candidate.phone }}</li>
                  <li><strong>Location:</strong> {{ candidate.location }}</li>
                </ul>
              </div>
            </div>
  
            <!-- Main Content -->
            <div class="lg:col-span-2 bg-white shadow-md rounded-lg p-6" v-if="candidate">
              <nav class="mb-6 border-b pb-3">
                <ul class="flex space-x-4">
                  <li>
                    <a href="#overview" class="text-blue-600 font-medium hover:text-blue-800 border-b-2 border-blue-600">Overview</a>
                  </li>
                </ul>
              </nav>
              <div id="overview">
                <div class="mb-6">
                  <h3 class="text-gray-800 font-bold text-lg mb-2">About</h3>
                  <p class="text-gray-600">{{ candidate.about }}</p>
                </div>
                <div class="mb-6">
                  <h3 class="text-gray-800 font-bold text-lg mb-2">Experience</h3>
                  <div v-for="exp in candidate.experience" :key="exp.company" class="border-l-4 border-blue-600 pl-4">
                    <p class="font-semibold text-gray-800">{{ exp.company_name }}</p>
                    <p class="text-gray-600 text-sm">{{ exp.position }} ({{ exp.start }} - {{ exp.end }})</p>
                  </div>
                </div>
                <!-- More sections like skills, certifications, etc. -->
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
  