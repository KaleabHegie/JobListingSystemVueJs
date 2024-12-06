<template>
    <div v-if="job" class="max-w-6xl mx-auto p-6 bg-white mt-10">
      <h2 class="text-3xl font-semibold text-red-500 mb-4">
        <i class="fas fa-briefcase mr-2"></i> {{ job.title }}
        <span>
          <button @click="addBookmark" class="text-gray-500 hover:text-red-500 mt-10 ml-10">
            <i class="fas fa-bookmark mr-1"></i>
          </button>
        </span>
      </h2>
  
      <p class="text-lg text-gray-600 mb-2">
        <i class="fas fa-building mr-2"></i> <strong>Company:</strong> {{ job.company.name }}
      </p>
      <p class="text-lg text-gray-600 mb-2">
        <i class="fas fa-map-marker-alt mr-2"></i> <strong>Location:</strong> {{ job.location }}
      </p>
      <p class="text-lg text-gray-600 mb-2">
        <i class="fas fa-dollar-sign mr-2"></i> <strong>Salary:</strong> {{ job.salary || 'N/A' }}
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-xl text-gray-700 mt-6 mb-2">
            <i class="fas fa-info-circle mr-2"></i> Job Description
          </h3>
          <p class="text-gray-700 mb-4">
            {{ job.description }}
          </p>
        </div>
  
        <div>
          <h3 class="text-xl text-gray-700 mt-6 mb-2">
            <i class="fas fa-file-alt mr-2"></i> Job Summary
          </h3>
          <p class="text-gray-700 mb-4">
            {{ job.summary || 'No summary available.' }}
          </p>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 class="text-xl text-gray-700 mt-6 mb-2">
            <i class="fas fa-tasks mr-2"></i> Requirements
          </h3>
          <p class="text-gray-700 mb-4">
            {{ job.requirements }}
          </p>
        </div>
  
        <div>
          <h3 class="text-xl text-gray-700 mt-6 mb-2">
            <i class="fas fa-check-circle mr-2"></i> Skills
          </h3>
          <ul class="list-disc list-inside text-gray-700 mb-4 ml-10">
            <li v-for="(skill, index) in job.skills" :key="index">
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="flex justify-end mt-6">
        <button
          @click="applyForJob" class="text-blue-600 border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white px-4 py-2 rounded-md mr-2"
        >
          <i class="fas fa-paper-plane mr-1"></i> Apply Now
        </button>
      </div>
    </div>
  
    <div v-else class="text-center mt-10">
      <p class="text-gray-600">Loading job details...</p>
    </div>
  </template>
  <script>
import { useJobManager } from '@/manager/job';
import { useApplicationManager } from '@/manager/application';
import { useAuthStore } from '@/manager/auth';
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import axios from 'axios';

export default {
  name: 'JobDetails',
  setup() {
    const jobStore = useJobManager();
    const authStore = useAuthStore();
    const applicationStore = useApplicationManager()
    const route = useRoute();
    const id = route.params.id;

    // Ensure jobs are fetched first
    onMounted(async () => {
      await jobStore.fetchJobs(); // Fetch jobs
    });

    // Compute the job by id
    const job = computed(() => jobStore.getJobById(id));

    // Function to apply for a job
    const applyForJob = async () => {
  try {
    const application = await applicationStore.addApplication(id);
    alert('Application submitted successfully!');
  } catch (error) {
    alert('Failed to apply for the job: ' + applicationStore.error);
  }
};
const addBookmark = async () => {
  try {
    const bookmark = await applicationStore.addBookmark(id);
    alert(' Bookmarked successfully!');
  } catch (error) {
    alert('Failed to bookmark job: ' + applicationStore.error);
  }
};


    return {
      job,
      applyForJob,
      addBookmark,
    };
  },
};
</script>