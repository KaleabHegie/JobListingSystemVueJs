<template>
    <div class="ml-[15%] w-[80%] p-6">
      <div class="mt-10">
        <h2 class="text-2xl font-semibold mb-4">Applications List</h2>
        <div class="relative mb-4">
          <input 
            type="text" 
            id="tableSearch" 
            placeholder="🔍 Search applications..." 
            class="w-1/2 px-5 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition duration-200"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 16l4-4m0 0l-4-4m4 4H6m6 4V8" />
          </svg>
        </div>
        
        <!-- Responsive Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-gray-200 text-gray-800">
                <th class="py-2 px-4 border-b">Position Applied</th>
                <th class="py-2 px-4 border-b">Applicant Name</th>
                <th class="py-2 px-4 border-b">Email</th>
                <th class="py-2 px-4 border-b">Phone</th>
                <th class="py-2 px-4 border-b">Status</th>
                <th class="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody id="applicationsTable">
              <tr 
                v-for="(application, index) in applications" 
                :key="index" 
                class="hover:bg-gray-100"
              >
                <td class="py-2 px-4 border-b">{{ application.position }}</td>
                <td class="py-2 px-4 border-b">{{ application.name }}</td>
                <td class="py-2 px-4 border-b">{{ application.email }}</td>
                <td class="py-2 px-4 border-b">{{ application.phone }}</td>
                <td class="py-2 px-4 border-b">{{ application.status }}</td>
                <td class="py-2 px-4 border-b">
                  <button 
                    @click="openModal('application', 'view', application)" 
                    class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  <button 
                    @click="openModal('application', 'edit', application)" 
                    class="text-white bg-yellow-600 hover:bg-yellow-700 p-2 rounded-md ml-2"
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
      // Mock data
      const applications = ref([
        { position: 'Software Engineer', name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '(123) 456-7891', status: 'Pending' },
        { position: 'Product Manager', name: 'Bob Smith', email: 'bob.smith@example.com', phone: '(123) 456-7892', status: 'Reviewed' },
        { position: 'Data Scientist', name: 'Charlie Brown', email: 'charlie.brown@example.com', phone: '(123) 456-7893', status: 'Accepted' },
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
        console.log('Modal Submitted:', formData);
  
        if (formData.action === 'edit') {
          // Update the application list with edited data
          const index = applications.value.findIndex(app => app.email === formData.email);
          if (index !== -1) {
            applications.value[index] = { ...applications.value[index], ...formData };
          }
        }
  
        closeModal();
      };
  
      return {
        applications,
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
  