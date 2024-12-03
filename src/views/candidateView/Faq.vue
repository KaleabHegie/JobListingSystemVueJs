<template>
    <CandidateNavBar />
        <Banner />
        <Faq />
        

    <CandidateFooter />
  </template>
  
  
  <script>
      import Banner from '../../components/candidate/FaqPageComponents/Banner.vue';
      import Faq from '../../components/candidate/FaqPageComponents/Faq.vue';
      
  
    export default {
      components: {
        Banner,
        Faq
      }
    }
  </script>
  
  
