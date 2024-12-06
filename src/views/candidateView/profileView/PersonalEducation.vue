<template>
      <div class="w-[100%] p-6 bg-gray-lighter">
        <div class="dashboard-widg-bar mb-5">
            <Banner />
            <List />
        </div>
    </div>
              
</template>

<script>
import Banner from '../../../components/candidate/userEducationComponents/Banner.vue';
import List from '../../../components/candidate/userEducationComponents/List.vue';
export default {
  components: {
    Banner,
    List
  }
}
</script>
