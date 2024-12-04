<template>
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-800 text-center mb-10">Explore Top Job Sectors</h2>

      <!-- Show loading state when sectors are being fetched -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <span class="text-xl text-gray-500">Loading sectors...</span> <!-- You can replace this with a spinner -->
      </div>

      <!-- Show sectors once they're loaded -->
      <div v-else class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        <!-- Sector 1: Engineering -->
        <div
          v-for="(sector, index) in sectors.data?.slice(0,6)"
          :key="index"
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500"
        >
          <div :class="sector.iconBg + ' p-4 rounded-full mb-4'">
            <svg
              :class="sector.iconColor + ' h-8 w-8'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="sector.iconPath" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">{{ sector.name }}</h3>
          <p class="text-sm text-gray-500">{{ sector.jobCount }} Jobs</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useJobSectorManager } from "@/manager/sector";  // Import the Pinia store

export default {
  data() {
    return {
      sectors: [],  // Initialize sectors as an empty array
      loading: true, // Loading state for sectors
    };
  },
  computed: {
    sectorManager() {
      return useJobSectorManager(); // Access the sector store
    },
  },
  mounted() {
    this.fetchSectors();
  },
  methods: {
    async fetchSectors() {
      try {
        await this.sectorManager.fetchSectors(); // Call the fetchSectors action
        this.sectors = this.sectorManager.sectors; // Assign sectors from the store
      } catch (error) {
        console.error("Error fetching sectors:", error);
      } finally {
        this.loading = false; // Set loading to false once sectors are fetched
      }
    },
  },
};
</script>
