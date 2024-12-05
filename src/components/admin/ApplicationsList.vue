<template>
  <div class="ml-[15%] w-[80%] p-6">
    <div class="mt-10">
      <h2 class="text-2xl font-semibold mb-4">Applications List</h2>
      
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
          
          <tbody>
            <tr 
              v-for="(application, index) in applications" 
              :key="index" 
              class="hover:bg-gray-100"
            >
              <td class="py-2 px-4 border-b">{{ application.job_id.title }}</td>
              <td class="py-2 px-4 border-b">{{ application.title}}</td>
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
import { ref, onMounted } from 'vue';
import { useApplicationManager } from '@/manager/application';  // Import your Pinia store
import DynamicModal from '@/components/dynamic/Modal.vue';

export default {
  components: {
    DynamicModal,
  },
  setup() {
    // Get the application store
    const applicationStore = useApplicationManager();

    // Modal state
    const isModalVisible = ref(false);
    const applications = ref([]);
    const modalType = ref('');
    const modalAction = ref('');
    const modalItemData = ref({});

    // Fetch applications when the component mounts
    onMounted(() => {
      fetchApplications(); // Fetch data from the store
    });

    async function fetchApplications() {
      try {
        await applicationStore.fetchApplications();
        applications.value = applicationStore.applications;
      } catch (error) {
        console.error("Error fetching application:", error);
      }
    }

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
        const index = applicationStore.applications.findIndex(app => app.email === formData.email);
        if (index !== -1) {
          applicationStore.applications[index] = { ...applicationStore.applications[index], ...formData };
        }
      }
      
      closeModal();
    };

    console.log('Applications:', applicationStore.applications);

    return {
      applications: applicationStore.applications,  // Directly use the fetched applications
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
