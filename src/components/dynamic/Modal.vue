<template>
    <div v-if="visible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-md shadow-lg w-96">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">{{ modalTitle }}</h2>
          <button @click="closeModal" class="text-gray-500">&times;</button>
        </div>
  
        <!-- Modal Content -->
        <form @submit.prevent="handleSubmit">
          <div v-if="type === 'job'">
            <div class="mb-4">
              <label for="jobTitle" class="block">Job Title</label>
              <input v-model="formData.title" type="text" id="jobTitle" class="w-full p-2 border" />
            </div>
            <div class="mb-4">
              <label for="jobDescription" class="block">Job Description</label>
              <textarea v-model="formData.description" id="jobDescription" class="w-full p-2 border"></textarea>
            </div>
          </div>
  
          <div v-if="type === 'application'">
            <div class="mb-4">
              <label for="applicantName" class="block">Applicant Name</label>
              <input v-model="formData.applicantName" type="text" id="applicantName" class="w-full p-2 border" />
            </div>
            <div class="mb-4">
              <label for="applicationStatus" class="block">Status</label>
              <select v-model="formData.status" id="applicationStatus" class="w-full p-2 border">
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
  
          <div v-if="type === 'sector'">
            <div class="mb-4">
              <label for="sectorName" class="block">Sector Name</label>
              <input v-model="formData.name" type="text" id="sectorName" class="w-full p-2 border" />
            </div>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex justify-end mt-4">
            <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-300 text-white rounded-md">Cancel</button>
            <button type="submit" class="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md">{{ actionButtonLabel }}</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        required: true, // 'job', 'application', 'sector'
      },
      action: {
        type: String,
        required: true, // 'add', 'edit', 'delete'
      },
      itemData: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        formData: { ...this.itemData }, // Bind the data for the form
      };
    },
    computed: {
      modalTitle() {
        if (this.action === 'add') {
          return `Add ${this.type.charAt(0).toUpperCase() + this.type.slice(1)}`;
        } else if (this.action === 'edit') {
          return `Edit ${this.type.charAt(0).toUpperCase() + this.type.slice(1)}`;
        } else if (this.action === 'delete') {
          return `Delete ${this.type.charAt(0).toUpperCase() + this.type.slice(1)}`;
        }
        return '';
      },
      actionButtonLabel() {
        return this.action.charAt(0).toUpperCase() + this.action.slice(1);
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      handleSubmit() {
        this.$emit('submit', { ...this.formData, action: this.action });
        this.closeModal();
      },
    },
  };
  </script>
  