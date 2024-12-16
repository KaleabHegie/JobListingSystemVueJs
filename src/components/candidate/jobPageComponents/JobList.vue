<template>
  <div class="w-[100%]">
    <div class="max-w-screen-xl mx-auto p-6 mb-5">
      <!-- Search Form -->
      <form class="max-w-3xl mx-auto" @submit.prevent="onSearchSubmit">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            v-model="searchQuery"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by title, company, or location..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>

    <!-- Loading State -->
    <div v-if="jobManager.loading" class="flex justify-center items-center h-64">
      <span class="text-xl text-gray-500">Loading...</span>
    </div>

    <!-- Job Listings -->
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <router-link
          v-for="(job, index) in filteredJobs"
          :key="index"
          :to="`/job_detail/${job._id}`"
        >
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500"
          >
            <div>
              <h3 class="text-xl font-semibold text-gray-800">{{ job.title }}</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
                  <span> By </span>
                  <span class="text-red-500"> &nbsp;&nbsp;{{ job.company?.name }}</span>
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
              <span class="text-sm text-gray-500">Posted: {{ formatDate(job.createdAt) }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { useJobManager } from "@/manager/job";

export default {
  data() {
    return {
      jobs: [], // Full job list fetched from the server
      searchQuery: "", // Holds the current search term
    };
  },
  computed: {
    jobManager() {
      return useJobManager();
    },
    // Filters jobs dynamically based on the search query
    filteredJobs() {
      if (!this.searchQuery) {
        return this.jobs.data; // Return all jobs if search query is empty
      }
      const query = this.searchQuery.toLowerCase();
      return this.jobs.data.filter((job) =>
        job.title.toLowerCase().includes(query) ||
        job.company?.name.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
      );
    },
  },
  mounted() {
    this.fetchJobs(); // Fetch jobs when the component is mounted
  },
  methods: {
    async fetchJobs() {
      try {
        await this.jobManager.fetchJobs();
        this.jobs = this.jobManager.jobs; // Store fetched jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    },
  formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long" , day : "numeric" }; // E.g., "December 2024"
    return date.toLocaleDateString("en-US", options);
  },

    onSearchSubmit(event) {
      event.preventDefault(); // Prevent the default form submission
      // Dynamic filtering is handled reactively by `filteredJobs`
    },
  },
};
</script>
