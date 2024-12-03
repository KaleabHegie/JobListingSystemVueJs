<template>
    <component :is="layout">
      <router-view />
    </component>
  </template>
  
  <script>
  import Candidate from './src/layouts/Candidate.vue';
  import Profile from './src/layouts/Profile.vue';
  import Recruiter from './src/layouts/Recruiter.vue';
  
  export default {
    computed: {
      layout() {
        const layout = this.$route.meta.layout || 'default';
        switch (layout) {
          case 'profile':
            return Profile;
          case 'recruiter':
            return Recruiter;
          default:
            return Candidate; // Default to ProfileLayout
        }
      },
    },
  };
  </script>
  