<template>
    <div class="w-full p-6 bg-gray-lighter">
        <div class="dashboard-widg-bar mb-5">
            <Banner />
            <List />
        </div>
    </div>

</template>

<script>
import Banner from '../../../components/candidate/userProjectComponents/Banner.vue';
import List from '../../../components/candidate/userProjectComponents/List.vue';
export default {
    components: {
        Banner,
        List
    }
}
</script>
