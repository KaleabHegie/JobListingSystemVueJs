<template>
    <div class="ml-[15%] w-[80%] p-6 mt-10">
      <h2 class="text-2xl font-semibold mb-4">Company List</h2>
  
      <!-- Search and Add Company -->
      <div class="relative mb-4">
        <input
          type="text"
          id="companySearch"
          placeholder="🔍 Search companies..."
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
          + Add New Company
        </button>
      </div>
  
      <!-- Responsive Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-gray-800">
              <th class="py-2 px-4 border-b">Name</th>
              <th class="py-2 px-4 border-b">Description</th>
              <th class="py-2 px-4 border-b">Location</th>
              <th class="py-2 px-4 border-b">Website</th>
              <th class="py-2 px-4 border-b">Email</th>
              <th class="py-2 px-4 border-b">Phone</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="company in companies.data"
              :key="company._id"
              class="hover:bg-gray-100"
            >
              <td class="py-2 px-4 border-b">{{ company.name }}</td>
              <td class="py-2 px-4 border-b">{{ company.description }}</td>
              <td class="py-2 px-4 border-b">{{ company.location }}</td>
              <td class="py-2 px-4 border-b">
                <a
                  :href="company.website"
                  target="_blank"
                  class="text-blue-500 hover:underline"
                  >{{ company.website }}</a
                >
              </td>
              <td class="py-2 px-4 border-b">{{ company.email }}</td>
              <td class="py-2 px-4 border-b">{{ company.phone }}</td>
              <td class="border-b">
                <button
                  @click="openEditModal(company)"
                  class="text-white bg-yellow-600 hover:bg-yellow-700 p-2 rounded-md"
                >
                  <i class="fas fa-pen"></i>
                </button>
                <button
                  @click="deleteCompany(company._id)"
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
      <Modal
        :visible="modalVisible"
        :title="modalTitle"
        @close="closeModal"
        @submit="handleSubmit"
      >
        <component
          :is="currentForm"
          :initialData="selectedData"
          @save="saveCompany"
        ></component>
      </Modal>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useCompanyManager } from '@/manager/company';
  import Modal from '@/components/dynamic/Modal.vue';
  import CompanyForm from '../forms/CompanyForm.vue';
  
  export default {
    components: {
      Modal,
      CompanyForm,
    },
    setup() {
      const companyStore = useCompanyManager();
      const companies = ref([]); // Companies data
      const modalVisible = ref(false); // Modal visibility
      const modalTitle = ref(''); // Modal title
      const currentForm = ref(null); // Current form component
      const selectedData = ref(null); // Data for editing
  
      // Fetch companies on mount
      onMounted(() => {
        fetchCompanies();
      });
  
      async function fetchCompanies() {
        try {
          await companyStore.fetchCompanies();
          companies.value = companyStore.companies;
        } catch (error) {
          console.error('Error fetching companies:', error);
        }
      }
  
      function openCreateModal() {
        modalVisible.value = true;
        modalTitle.value = 'Add New Company';
        currentForm.value = CompanyForm;
        selectedData.value = {}; // Empty data for new company
      }
  
      function openEditModal(company) {
        modalVisible.value = true;
        modalTitle.value = 'Edit Company';
        currentForm.value = CompanyForm;
        selectedData.value = company; // Pre-fill data for editing
      }
  
      function closeModal() {
        modalVisible.value = false;
      }
  
      async function saveCompany(companyData) {
        try {
          if (companyData._id) {
            // Update existing company
            await companyStore.updateCompany(companyData._id, companyData);
            alert('Company updated successfully!');
          } else {
            // Create new company
            await companyStore.addCompany(companyData);
            alert('Company added successfully!');
          }
          fetchCompanies(); // Refresh the list
          closeModal(); // Close the modal
        } catch (error) {
          console.error('Error saving company:', error);
          alert('Failed to save the company. Please try again.');
        }
      }
  
      async function deleteCompany(companyId) {
        try {
          await companyStore.deleteCompany(companyId);
          alert('Company deleted successfully!');
          fetchCompanies(); // Refresh company list
        } catch (error) {
          console.error('Error deleting company:', error);
        }
      }
  
      return {
        companies,
        modalVisible,
        modalTitle,
        currentForm,
        selectedData,
        openCreateModal,
        openEditModal,
        closeModal,
        saveCompany,
        deleteCompany,
      };
    },
  };
  </script>
  