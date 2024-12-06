<template>
    <div v-if="visible" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        <h3 class="text-lg font-semibold mb-4">{{ type === 'application' ? 'Edit Application' : 'View Application' }}</h3>
        <form @submit.prevent="submitForm">
          <div v-if="action === 'edit'">
            <!-- Status Dropdown -->
            <label for="status" class="block text-gray-700">Status</label>
            <select
              id="status"
              v-model="formData.status"
              class="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
  
          <div class="flex justify-end space-x-4">
            <button type="button" @click="$emit('close')" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
              Cancel
            </button>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
      type: String,
      action: String,
      itemData: Object,
    },
    emits: ['close', 'submit'],
    data() {
      return {
        formData: { ...this.itemData }, // Prepopulate with existing data
      };
    },
    methods: {
      submitForm() {
        this.$emit('submit', this.formData);
      },
    },
  };
  </script>
  