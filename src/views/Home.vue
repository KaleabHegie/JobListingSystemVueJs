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
  import Hero from '../components/candidate/hero.vue';
  import WhyChooseUs from '../components/candidate/WhyChooseUs.vue';
  import TopSectorsHome from '../components/candidate/TopSectorsHome.vue';
  import HowToApply from '../components/candidate/HowToApply.vue';
  import JobListHome from '../components/candidate/JobListHome.vue';
  import KeyMetrics from '../components/candidate/KeyMetrics.vue';

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

