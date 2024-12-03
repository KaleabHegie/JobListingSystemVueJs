<template>
    <CandidateNavBar />
        <Banner />
        <InfoSection />
        <WhyUs   />
        <AskQuestion />

    <CandidateFooter />
  </template>
  
  
  <script>
      import InfoSection from '../../components/candidate/aboutPageComponents/InfoSection.vue';
      import WhyUs from '../../components/candidate/aboutPageComponents/WhyUs.vue';
      import AskQuestion from '../../components/candidate/aboutPageComponents/AskQuestion.vue';
      import Banner from '../../components/candidate/aboutPageComponents/banner.vue';
  
    export default {
      components: {
        Banner,
        InfoSection,
        WhyUs,
        AskQuestion
      }
    }
  </script>
  
  
