<template>
  <CandidateNavBar />
      <Hero/>
      <WhyChooseUs />
      <TopSectorsHome />
      <HowToApply />
      <JobListHome />
      <KeyMetrics />
  <CandidateFooter />
</template>


<script>
  import Hero from '../../components/candidate/homePageComponents/Hero.vue';
  import WhyChooseUs from '../../components/candidate/homePageComponents/WhyChooseUs.vue';
  import TopSectorsHome from '../../components/candidate/homePageComponents/TopSectorsHome.vue';
  import HowToApply from '../../components/candidate/homePageComponents/HowToApply.vue';
  import JobListHome from '../../components/candidate/homePageComponents/JobListHome.vue';
  import KeyMetrics from '../../components/candidate/homePageComponents/KeyMetrics.vue';

  export default {
    components: {
      Hero,
      WhyChooseUs,
      TopSectorsHome,
      HowToApply,
      JobListHome,
      KeyMetrics
    }
  }
</script>

