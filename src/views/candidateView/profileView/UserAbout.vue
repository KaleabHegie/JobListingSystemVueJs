
<template>
      
            <section class="bg-gray-50 py-10" id="pdf_section">
                <div class="container mx-auto px-4">
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                    <PersonalInfo />
              
                    <DetailInfo />
                  </div>
                </div>
              </section>
       
</template>

<script>
import DetailInfo from '../../../components/candidate/userProfile/DetailInfo.vue'
import PersonalInfo from '../../../components/candidate/userProfile/PersonalInfo.vue'
export default {
  components: {
    DetailInfo,
    PersonalInfo
  }
}
</script>
