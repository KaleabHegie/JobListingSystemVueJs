<template>
    <!-- Main Content Area -->
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
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 16l4-4m0 0l-4-4m4 4H6m6 4V8" />
        </svg>
        <button 
          @click="openModal('job', 'add')" 
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
              <th class="py-2 px-4 border-b">Job Title</th>
              <th class="py-2 px-4 border-b">Company</th>
              <th class="py-2 px-4 border-b">Location</th>
              <th class="py-2 px-4 border-b">Posted Date</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody id="jobTableBody">
            <tr 
              v-for="(job, index) in jobs" 
              :key="index" 
              class="hover:bg-gray-100"
            >
              <td class="py-2 px-4 border-b">{{ job.title }}</td>
              <td class="py-2 px-4 border-b">{{ job.company }}</td>
              <td class="py-2 px-4 border-b">{{ job.location }}</td>
              <td class="py-2 px-4 border-b">{{ job.postedDate }}</td>
              <td class="py-2 px-4 border-b">
                <button 
                  @click="openModal('job', 'edit', job)" 
                  class="text-white bg-yellow-600 hover:bg-yellow-700 p-2 rounded-md"
                >
                  <i class="fas fa-pen"></i>
                </button>
                <button 
                  @click="openModal('job', 'delete', job)" 
                  class="text-white bg-red-600 hover:bg-red-700 p-2 rounded-md ml-2"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Dynamic Modal -->
      <DynamicModal
        :visible="isModalVisible"
        :type="modalType"
        :action="modalAction"
        :itemData="modalItemData"
        @close="closeModal"
        @submit="handleModalSubmit"
      />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import DynamicModal from '@/components/dynamic/Modal.vue';
  
  export default {
    components: {
      DynamicModal,
    },
    setup() {
      // Mock data for jobs
      const jobs = ref([
        { title: 'Software Engineer', company: 'Tech Solutions Inc.', location: 'New York, NY', postedDate: '2024-10-01' },
        { title: 'Product Manager', company: 'Creative Agency', location: 'San Francisco, CA', postedDate: '2024-10-05' },
        { title: 'Data Scientist', company: 'Data Corp', location: 'Austin, TX', postedDate: '2024-10-10' },
      ]);
  
      // Modal state
      const isModalVisible = ref(false);
      const modalType = ref('');
      const modalAction = ref('');
      const modalItemData = ref({});
  
      // Open modal
      const openModal = (type, action, itemData = {}) => {
        modalType.value = type;
        modalAction.value = action;
        modalItemData.value = itemData;
        isModalVisible.value = true;
      };
  
      // Close modal
      const closeModal = () => {
        isModalVisible.value = false;
      };
  
      // Handle modal submit
      const handleModalSubmit = (formData) => {
        if (formData.action === 'add') {
          // Add a new job to the list
          jobs.value.push({ ...formData, postedDate: new Date().toISOString().split('T')[0] });
        } else if (formData.action === 'edit') {
          // Update the job details
          const index = jobs.value.findIndex(job => job.title === formData.title);
          if (index !== -1) {
            jobs.value[index] = { ...jobs.value[index], ...formData };
          }
        } else if (formData.action === 'delete') {
          // Remove the job from the list
          jobs.value = jobs.value.filter(job => job.title !== formData.title);
        }
  
        closeModal();
      };
  
      return {
        jobs,
        isModalVisible,
        modalType,
        modalAction,
        modalItemData,
        openModal,
        closeModal,
        handleModalSubmit,
      };
    },
  };
  </script>
  