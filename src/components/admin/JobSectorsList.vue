<template>
  <div class="ml-[15%] w-[80%] p-6 mt-10">
    <h2 class="text-2xl font-semibold mb-4">Job Sectors List</h2>

    <!-- Add Sector Button -->
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
            <th class="py-2 px-4 border-b">Sector Name</th>
            <th class="py-2 px-4 border-b">Description</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="sector in sectors.data" 
            :key="sector._id" 
            class="hover:bg-gray-100"
          >
            <td class="py-2 px-4 border-b">{{ sector.name }}</td>
            <td class="py-2 px-4 border-b">{{ sector.description }}</td>
            <td class="border-b">
              <button
                @click="openEditModal(sector)"
                class="text-white bg-yellow-600 hover:bg-yellow-700 p-2 rounded-md"
              >
                <i class="fas fa-pen"></i> <!-- Edit icon -->
              </button>
              
              <button
                @click="deleteSector(sector._id)"
                class="text-white bg-red-600 hover:bg-red-700 p-2 rounded-md ml-2"
              >
                <i class="fas fa-trash-alt"></i> <!-- Delete icon -->
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Dynamic Modal -->
    <Modal
      :visible="modalVisible"
      :title="modalTitle"
      @close="closeModal"
      @submit="handleSubmit"
    >
      <component
        :is="currentForm"
        :initialData="selectedData"
        @save="saveSector"
      ></component>
    </Modal>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useJobSectorManager } from '@/manager/sector';
import Modal from '@/components/dynamic/Modal.vue';
import JobSectorForm from '../forms/JobSectorForm.vue';

export default {
  components: {
    Modal,
    JobSectorForm
  },
  setup() {
    const jobSectorStore = useJobSectorManager();
    const sectors = ref([]); // Jobs data
    const modalVisible = ref(false); // Modal visibility
    const modalTitle = ref(""); // Modal title
    const currentForm = ref(null); // Current form component
    const selectedData = ref(null); // Data for editing

    // Fetch sectors on mount
    onMounted(() => {
      fetchJobSectors();
    });

    async function fetchJobSectors() {
      try {
        await jobSectorStore.fetchSectors();
        sectors.value = jobSectorStore.sectors;
      } catch (error) {
        console.error("Error fetching sectors:", error);
      }
    }

    function openCreateModal() {
      modalVisible.value = true;
      modalTitle.value = "Add New Sector";
      currentForm.value = JobSectorForm;
      selectedData.value = {}; // Empty data for new sector
    }

    function openEditModal(sector) {
      modalVisible.value = true;
      modalTitle.value = "Edit Sector";
      currentForm.value = JobSectorForm;
      selectedData.value = sector; // Pre-fill data for editing
    }

    function closeModal() {
      modalVisible.value = false;
    }

    async function saveSector(sectorData) {
      try {
        if (sectorData._id) {
          // Update existing sector
          await jobSectorStore.updateSector(sectorData._id, sectorData);
          alert("Sector updated successfully!");
        } else {
          // Create new sector
          await jobSectorStore.addSector(sectorData);
          alert("Sector added successfully!");
        }
        fetchJobSectors(); // Refresh the list
        closeModal(); // Close the modal
      } catch (error) {
        console.error("Error saving Sector:", error);
        alert("Failed to save the Sector. Please try again.");
      }
    }

    async function deleteSector(sectorId) {
      try {
        await jobSectorStore.deleteSector(sectorId);
        fetchJobSectors(); // Refresh Sector list
      } catch (error) {
        console.error("Error deleting Sector:", error);
      }
    }

    return {
      sectors,
      modalVisible,
      modalTitle,
      currentForm,
      selectedData,
      openCreateModal,
      openEditModal,
      closeModal,
      saveSector,
      deleteSector,
    };
  },
};
</script>
