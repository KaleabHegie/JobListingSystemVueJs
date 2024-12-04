<template>
    <CandidateNavBar />
    <section class="bg-gray-100 py-16">
        <Banner />
        <JobSearch />
        <div class="max-w-7xl mx-auto px-6 lg:px-8">

            <h1 class="text-4xl font-bold text-gray-800 text-center mb-1">Jobs You May Be Interested In</h1>
            <p class="text-xl text-gray-800 text-center mb-10">Explore our job listings from top companies.</p>
            <div class="flex gap-5">
            <JobFilter />
            <JobList />
            </div>
        </div>
    </section>
    <CandidateFooter />
</template>


<script >
import JobSearch from '../../components/candidate/jobPageComponents/JobSearch.vue';
import JobFilter from '../../components/candidate/jobPageComponents/JobFilter.vue';
import JobList from '../../components/candidate/jobPageComponents/JobList.vue';
import Banner from '../../components/candidate/jobPageComponents/Banner.vue';

export default {
    components: {
        JobSearch,
        JobFilter,
        JobList,
        Banner
    }
}
</script>
