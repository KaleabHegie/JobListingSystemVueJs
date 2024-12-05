<template>
  <div v-if="visible" class="fixed y-[-1] x-0  z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 scrollable-modal-content">
    <div class="bg-white w-1/2 rounded-lg shadow-lg p-6">
      <header class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <button @click="closeModal" class="text-gray-600 hover:text-red-500">&times;</button>
      </header>
      <div>
        <slot></slot>
      </div>
      <footer class="flex justify-end mt-4">
        <button @click="closeModal" class="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg mr-2">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, required: true },
    title: { type: String, default: "Modal Title" },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.scrollable-modal-content {
  max-height: 100%; /* Adjust height to fit the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
}
</style>
