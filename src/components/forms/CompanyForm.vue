<template>
    <form @submit.prevent="handleSubmit">
      <!-- Name -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter company name"
          required
        />
      </div>
  
      <!-- Description -->
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          v-model="formData.description"
          id="description"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter company description"
          required
        ></textarea>
      </div>
  
      <!-- Location -->
      <div class="mb-4">
        <label for="location" class="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          v-model="formData.location"
          type="text"
          id="location"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter company location"
          required
        />
      </div>
  
      <!-- Website -->
      <div class="mb-4">
        <label for="website" class="block text-sm font-medium text-gray-700">
          Website
        </label>
        <input
          v-model="formData.website"
          type="url"
          id="website"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter company website (optional)"
        />
      </div>
  
      <!-- Email -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter contact email"
          required
        />
      </div>
  
      <!-- Phone -->
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          v-model="formData.phone"
          type="tel"
          id="phone"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter contact phone"
          required
        />
      </div>
  
      <!-- Buttons -->
      <div class="flex justify-end space-x-4">
        <button
          type="button"
          @click="$emit('cancel')"
          class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
  </template>
  
  <script>
  import { reactive, watch } from "vue";
  
  export default {
    props: {
      initialData: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ["save", "cancel"],
    setup(props, { emit }) {
      const formData = reactive({
        name: "",
        description: "",
        location: "",
        website: "",
        email: "",
        phone: "",
      });
  
      // Populate formData with initial data when provided
      watch(
        () => props.initialData,
        (newData) => {
          Object.assign(formData, newData);
        },
        { immediate: true }
      );
  
      const handleSubmit = () => {
        emit("save", { ...formData });
      };
  
      return {
        formData,
        handleSubmit,
      };
    },
  };
  </script>
  