<template>
    <div class="dashboard-widg-bar mb-5">
      <div class="section mb-3">
        <section class="relative bg-gray-500 overflow-hidden">
          <div class="max-w-7xl mx-auto py-14 px-6 lg:px-8">
            <div class="flex justify-center">
              <h1 class="text-10xl tracking-tight text-white text-center sm:text-4xl">Applied Jobs</h1>
            </div>
          </div>
        </section>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="mb-4 rounded overflow-hidden">
            <div class="table-responsive bg-white shadow-md rounded-lg">
              <table class="table table-auto w-full">
                <thead class="bg-gray-800 text-white">
                  <tr>
                    <th scope="col" class="px-4 py-2 text-left">Job Title</th>
                    <th scope="col" class="px-4 py-2 text-left">Applied Date</th>
                    <th scope="col" class="px-4 py-2 text-left">Application Status</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <!-- Render applied jobs dynamically -->
                  <tr
                    v-for="(job, index) in profileStore.appliedJobs"
                    :key="index"
                    class="border-b hover:bg-gray-100"
                  >
                    <td class="px-4 py-2">
                      <i class="fas fa-briefcase text-blue-500 mr-2"></i>
                      {{ job.job_id?.title || 'N/A' }}
                    </td>
                    <td class="px-4 py-2">{{ job.applied_date || 'N/A' }}</td>
                    <td class="px-4 py-2">
                      <span
                        :class="{
                          'text-green-600': job.status === 'Approved',
                          'text-yellow-600': job.status === 'Pending',
                          'text-red-600': job.status === 'Rejected'
                        }"
                      >
                        {{ job.status || 'N/A' }}
                      </span>
                    </td>
                  </tr>
                  <!-- In case no jobs are applied -->
                  <tr v-if="!profileStore.loading && profileStore.appliedJobs.length === 0">
                    <td colspan="4" class="text-center px-4 py-2">No applied jobs found.</td>
                  </tr>
                </tbody>
              </table>
              <!-- Loading indicator -->
              <div v-if="profileStore.loading" class="text-center py-4">
                <span class="text-blue-500">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useProfileManager } from '@/manager/profile';
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      const profileStore = useProfileManager();
  
      onMounted(() => {
        profileStore.getAppliedJobs();
      });
  
      return {
        profileStore,
      };
    },
  };
  </script>
  