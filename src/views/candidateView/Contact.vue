<template>
    <CandidateNavBar />
        <Banner />
        <GetInTouch />
        <ContactInfo />
        <Map /> 
    <CandidateFooter />
  </template>
  
  
  <script>
    import Banner from '../../components/candidate/contactPageComponents/Banner.vue';
    import ContactInfo from '../../components/candidate/contactPageComponents/ContactInfo.vue';
    import GetInTouch from '../../components/candidate/contactPageComponents/GetInTouch.vue';
    import Map from '../../components/candidate/contactPageComponents/Map.vue';

      
  
    export default {
      components: {
        Banner,
        GetInTouch,
        ContactInfo,
        Map
        
      }
    }
  </script>
  
  
