<template>
  <div class="ml-[15%] w-[80%] p-6 mt-10">
    <!-- Title -->
    <h2 class="text-2xl font-semibold mb-4">Job Listings</h2>

    <!-- Search Bar -->
    <div class="relative mb-4">
      <input
        type="text"
        id="jobSearch"
        placeholder="🔍 Search job listings..."
        class="w-1/2 px-5 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition duration-200"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 16l4-4m0 0l-4-4m4 4H6m6 4V8"
        />
      </svg>

      <button
        @click="openCreateModal"
        class="float-end text-white bg-gray-600 hover:bg-sky-700 p-3 rounded-md mb-3 transition duration-200 shadow-md hover:shadow-lg"
      >
        + Add New Job
      </button>
    </div>

    <!-- Responsive Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-gray-800">
            <th class="float-left py-2 px-4 border-b">Job Title</th>
            <th class=" py-2 px-4 border-b">Company</th>
            <th class=" py-2 px-4 border-b">Location</th>
            <th class=" py-2 px-4 border-b">Posted Date</th>
            <th class=" py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through jobs and display them -->
          <tr
            v-for="job in jobs.data"
            :key="job._id"
            class="hover:bg-gray-100"
          >
            <td class="py-2 px-4 border-b">{{ job.title }}</td>
            <td class="py-2 px-4 border-b">{{ job.company.name }}</td>
            <td class="py-2 px-4 border-b">{{ job.location }}</td>
            <td class="py-2 px-4 border-b">{{ job.createdAt }}</td>
            <td class=" border-b">
              <button
                @click="openEditModal(job)"
                class="text-white bg-yellow-600 hover:bg-yellow-700 p-2 rounded-md"
              >
                <i class="fas fa-pen"></i> <!-- Edit icon -->
              </button>
              <button
                @click="deleteJob(job._id)"
                class="text-white bg-red-600 hover:bg-red-700 p-2 rounded-md ml-2"
              >
                <i class="fas fa-trash-alt"></i> <!-- Delete icon -->
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Component -->
    <Modal
      :visible="modalVisible"
      :title="modalTitle"
      @close="closeModal"
      @submit="handleSubmit"
    >
      <component
        :is="currentForm"
        :initialData="selectedData"
        @save="saveJob"
      ></component>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/dynamic/Modal.vue";
import JobForm from "@/components/forms/JobForm.vue";
import { useJobManager } from "@/manager/job";

export default {
  components: {
    Modal,
    JobForm,
  },
  data() {
    return {
      jobs: [], // Jobs data
      modalVisible: false, // Modal visibility
      modalTitle: "", // Modal title
      currentForm: null, // Current form component
      selectedData: null, // Data for editing
    };
  },
  computed: {
    jobManager() {
      return useJobManager(); // Access the job manager
    },
  },
  mounted() {
    this.fetchJobs(); // Fetch jobs on mount
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
    openCreateModal() {
      this.modalVisible = true;
      this.modalTitle = "Add New Job";
      this.currentForm = JobForm;
      this.selectedData = {}; // Empty data for new job
    },
    openEditModal(job) {
      this.modalVisible = true;
      this.modalTitle = "Edit Job";
      this.currentForm = JobForm;
      this.selectedData = job; // Pre-fill data for editing
    },
    closeModal() {
      this.modalVisible = false;
    },
    async saveJob(jobData) {
      console.log("Received data from child:", jobData);
  try {
    if (jobData._id) {
      // Update existing job
      await this.jobManager.updateJob(jobData._id, jobData);
      alert("Job updated successfully!");
    } else {
      // Create new job
      await this.jobManager.addJob(jobData);
      alert("Job added successfully!");
    }
    this.fetchJobs(); // Refresh the list
    this.closeModal(); // Close the modal
  } catch (error) {
    console.error("Error saving job:", error);
    alert("Failed to save the job. Please try again.");
  }
},
    async deleteJob(jobId) {
      try {
        await this.jobManager.deleteJob(jobId);
        this.fetchJobs(); // Refresh job list
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    },
    handleSubmit() {
      const form = this.$refs.formComponent;
      if (form) form.handleSubmit();
    },
  },
};
</script>
