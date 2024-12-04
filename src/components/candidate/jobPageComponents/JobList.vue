<template>
    <div class="w-[70%]">
      <!-- Show loading state when jobs are being fetched -->
      <div v-if="jobManager.loading" class="flex justify-center items-center h-64">
        <span class="text-xl text-gray-500">Loading...</span> <!-- You can replace this with a spinner if you prefer -->
      </div>
  
      <!-- Show jobs once they're loaded -->
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            v-for="(job, index) in jobs.data"
            :key="index"
            :href="`/job_detail/${job._id}`"
          >
            <div
              class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500"
            >
              <div>
                <h3 class="text-xl font-semibold text-gray-800">{{ job.title }}</h3>
                <div class="flex flex-col mt-2">
                  <div class="flex items-center text-gray-600 mb-1">
                    <span> By </span>
                    <span class="text-red-500"> &nbsp;&nbsp;{{ job.company.name }}</span>
                  </div>
                  <div class="flex items-center text-gray-600 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 8h8M8 12h4M4 16h16"
                      />
                    </svg>
                    <span>{{ job.location }}</span>
                  </div>
                  <div class="flex items-center text-gray-600 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16"
                      />
                    </svg>
                    <span>{{ job.salary }}</span>
                  </div>
                  <div class="flex items-center text-gray-600 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{{ job.position }}</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                  <i class="fas fa-2x fa-bookmark mr-1"></i>
                </button>
                <span class="text-sm text-gray-500">Posted: {{ job.createdAt }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useJobManager } from "@/manager/job";  
  
  export default {
    data() {
      return {
        jobs: [], 
      };
    },
    computed: {
      jobManager() {
        return useJobManager(); 
      },
    },
    mounted() {
      this.fetchJobs();
    },
    methods: {
      async fetchJobs() {
        try {
          await this.jobManager.fetchJobs(); 
          this.jobs = this.jobManager.jobs; 
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      },
    },
  };
  </script>
  