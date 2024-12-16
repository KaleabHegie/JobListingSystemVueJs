<template>
  <div class="ml-[15%] w-[80%] p-6">
    <div class="mt-10">
      <h2 class="text-2xl font-semibold mb-4">Applications List</h2>
      
      <!-- Responsive Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-gray-800">
              <th class="text-left py-2 px-4 border-b">Position Applied</th>
              <th class="text-left py-2 px-4 border-b">Applicant Name</th>
              <th class="text-left py-2 px-4 border-b">Email</th>
              <th class="text-left py-2 px-4 border-b">Phone</th>
              <th class="text-left py-2 px-4 border-b">Status</th>
              <th class="text-left py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            <tr 
              v-for="(application, index) in applicationStore.applications" 
              :key="index" 
              class="hover:bg-gray-100"
            >
              <td class="py-2 px-4 border-b">{{ application.job_id.title }}</td>
              <td class="py-2 px-4 border-b">{{ application.candidate_id.user?.first_name }} {{ application.candidate_id.user?.last_name }}</td>
              <td class="py-2 px-4 border-b">{{ application.candidate_id.user?.email }}</td>
              <td class="py-2 px-4 border-b">{{ application.candidate_id.user?.phone }}</td>
              <td class="py-2 px-4 border-b">{{ application.status }}</td>
              <td class="py-2 px-4 border-b">
                <button 
                  @click="openModal('application', 'edit', application)" 
                  class="text-yellow-600 hover:bg-yellow-700 p-2 rounded-md ml-2"
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
import DynamicModal from '@/components/dynamic/ApplicationStatModal.vue';

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
    const handleModalSubmit = async (formData) => {
      if (formData.action === 'edit') {
        try {
          // Update the application status in the backend
          console.log("Application updated:", formData);
          await applicationStore.updateApplication(formData._id, { status: formData.status });
          

          // Reflect the changes in the frontend
          const index = applications.value.findIndex(app => app._id === formData._id);
          if (index !== -1) {
            applications.value[index].status = formData.status;
          }
        } catch (error) {
          console.error("Error updating application:", error);
        }
      }

      closeModal();
    };

    return {
      applications: applicationStore.applications,  // Directly use the fetched applications
      isModalVisible,
      modalType,
      modalAction,
      modalItemData,
      openModal,
      closeModal,
      handleModalSubmit,
      applicationStore,
    };
  },
};
</script>
