<template>
    <div>
     <CandidateNavBar />
  
      
      <main>
        <Home />
      </main>
      
      <CandidateFooter />
    </div>
  </template>
  
  <script>

  import Home from './src/views/Home.vue';
  import CandidateNavBar from './src/components/candidate/include/CandidateNavBar.vue'
  import CandidateFooter from './src/components/candidate/include/CandidateFooter.vue';

  export default {
    components: {
      CandidateNavBar,
      CandidateFooter,
      Home
    }
  }
</script>
