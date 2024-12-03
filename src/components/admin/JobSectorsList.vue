<template>
    <div class="ml-[15%] w-[80%] p-6 mt-10">
      <h2 class="text-2xl font-semibold mb-4">Job Sectors List</h2>
  
      <!-- Stylish Search Bar -->
      <div class="relative mb-4">
        <input 
          type="text" 
          id="sectorsSearch" 
          placeholder="🔍 Search sectors..." 
          class="w-1/2 px-5 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition duration-200"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 16l4-4m0 0l-4-4m4 4H6m6 4V8" />
        </svg>
        <button 
          @click="openModal('sector', 'add')" 
          class="float-end text-white bg-gray-600 hover:bg-sky-700 p-3 rounded-md mb-3 transition duration-200 shadow-md hover:shadow-lg"
        >
          + Add Sector
        </button>
      </div>
  
      <!-- Responsive Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-gray-800">
              <th class="py-2 px-4 border-b">Sector Name</th>
              <th class="py-2 px-4 border-b">Description</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody id="sectorsTableBody">
            <tr 
              v-for="(sector, index) in sectors" 
              :key="index" 
              class="hover:bg-gray-100"
            >
              <td class="py-2 px-4 border-b">{{ sector.name }}</td>
              <td class="py-2 px-4 border-b">{{ sector.description }}</td>
              <td class="py-2 px-4 border-b">
                <button 
                  @click="openModal('sector', 'view', sector)" 
                  class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button 
                  @click="openModal('sector', 'edit', sector)" 
                  class="text-white bg-green-600 hover:bg-green-700 p-2 rounded-md ml-2"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button 
                  @click="openModal('sector', 'delete', sector)" 
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
      // Mock data for sectors
      const sectors = ref([
        { name: 'Information Technology', description: 'Sector focusing on computer software and hardware.' },
        { name: 'Healthcare', description: 'Sector focused on providing medical services and care.' },
        { name: 'Finance', description: 'Sector dealing with investments, banking, and monetary systems.' },
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
          // Add a new sector to the list
          sectors.value.push({ ...formData });
        } else if (formData.action === 'edit') {
          // Update the sector details
          const index = sectors.value.findIndex(sector => sector.name === formData.name);
          if (index !== -1) {
            sectors.value[index] = { ...sectors.value[index], ...formData };
          }
        } else if (formData.action === 'delete') {
          // Remove the sector from the list
          sectors.value = sectors.value.filter(sector => sector.name !== formData.name);
        }
  
        closeModal();
      };
  
      return {
        sectors,
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
  