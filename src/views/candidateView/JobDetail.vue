<template>
    <CandidateNavBar />
        <Banner />
        <JobDetail />
    <CandidateFooter />
</template>


<script>
     import Banner from '../../components/candidate/jobDetailPageComponents/Banner.vue';
     import JobDetail from '../../components/candidate/jobDetailPageComponents/JobDetail.vue';

    export default {
        components: {
            JobDetail,
            Banner
        }
    }
</script>
