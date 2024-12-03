<template>
    <div>
     <CandidateNavBar />
     
     <div class="mt-16 flex"> 
      <CandidateSidebar  />

      <div class="ml-[18%] w-[82%] p-6 bg-gray-lighter">
        <main>
          <router-view></router-view>
       </main>
      </div>

      </div>
      
      
    </div>
  </template>
  
  <script>

  import CandidateNavBar from '../components/candidate/include/CandidateNavBar.vue'
  import CandidateSidebar from '../components/candidate/include/CandidateSidebar.vue';

  export default {
    components: {
      CandidateNavBar,
      CandidateSidebar
    }
  }
</script>
