<template>
    <div class="w-full p-6 bg-gray-lighter">
      <div class="dashboard-widg-bar mb-5">
          <Banner />
          <List />
      </div>
  </div>
            
</template>

<script>

import List from '../../../components/candidate/userSKillComponents/List.vue';
import Banner from '../../../components/candidate/userSKillComponents/Banner.vue';

export default {
components: {
  Banner,
  List
}
}
</script>
