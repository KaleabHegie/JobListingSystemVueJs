<template>
  <div class="ml-[15%] w-[80%] p-6 mt-10">
    <h2 class="text-2xl font-semibold mb-4">Candidates List</h2>

    
    <div class="overflow-x-auto mt-10">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-gray-800">
            <th class="text-left py-2 px-4 border-b">Candidate Name</th>
            <th class="text-left py-2 px-4 border-b">Email</th>
            <th class="text-left py-2 px-4 border-b">Phone</th>
            <th class="text-left py-2 px-4 border-b">Status</th>
            <th class="text-left py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="candidate in candidates"
            :key="candidate._id"
            class="hover:bg-gray-100"
          >
            <td class="py-2 px-4 border-b">{{ candidate.user.first_name }} {{ candidate.user.last_name }}</td>
            <td class="py-2 px-4 border-b">{{ candidate.user.email }}</td>
            <td class="py-2 px-4 border-b">{{ candidate.user.phone }}</td>
            <td class="py-2 px-4 border-b">{{ candidate.user.active ? 'Active' : 'Inactive' }}</td>
            <td class="py-2 px-4 border-b">
              <router-link :to="`/recruiter/candidate-details/${candidate._id}`">
  <i class="fas fa-eye text-yellow-600 hover:bg-yellow-700"></i>
</router-link>
 
              
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useCandidateManager } from "@/manager/candidate";

export default {
  setup() {
    const router = useRouter();
    const candidateStore = useCandidateManager();
    const candidates = ref([]);

    onMounted(() => {
      fetchCandidates();
    });

    async function fetchCandidates() {
      try {
        await candidateStore.fetchCandidates();
        candidates.value = candidateStore.candidates;
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    }

    function viewCandidate(candidate) {
      router.push({ name: "CandidatesDetails", params: { id: candidate._id } });
    }

    async function toggleCandidateStatus(candidate) {
      try {
        if (candidate.user.active) {
          await candidateStore.deactivateCandidate(candidate.user._id);
          candidate.user.active = false;
        } else {
          await candidateStore.activateCandidate(candidate.user._id);
          candidate.user.active = true;
        }
      } catch (error) {
        console.error("Error toggling candidate status:", error);
      }
    }

    return {
      candidates,
      viewCandidate,
      toggleCandidateStatus,
    };
  },
};
</script>
