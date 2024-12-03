<template>
    <div>
     <CandidateNavBar />
     
  
      
      <main>
        <router-view></router-view>
      </main>
      
      <CandidateFooter />
    </div>
  </template>
  
  <script>

import CandidateNavBar from '../components/candidate/include/CandidateNavBar.vue';
import CandidateFooter from '../components/candidate/include/CandidateFooter.vue';

  export default {
    components: {
      CandidateNavBar,
      CandidateFooter,
    }
  }
</script>
