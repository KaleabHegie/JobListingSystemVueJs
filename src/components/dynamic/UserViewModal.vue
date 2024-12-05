<template>
    <div v-if="visible" class="modal">
      <h2>{{ title }}</h2>
      <div>
        <!-- Dynamically display candidate data -->
        <p>Name: {{ selectedData.name }}</p>
        <p>Email: {{ selectedData.email }}</p>
        <p>Phone: {{ selectedData.phone }}</p>
        <!-- Add any additional fields you need to display -->
      </div>
      <button @click="close">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['visible', 'title', 'selectedData'], // Make sure selectedData is passed
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  