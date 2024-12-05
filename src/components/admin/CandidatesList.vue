<template>
    <div class="ml-[15%] w-[80%] p-6 mt-10">
      <h2 class="text-2xl font-semibold mb-4">Candidates List</h2>
  
     
      <div class="relative mb-4">
        <input
          type="text"
          id="candidateSearch"
          placeholder="🔍 Search candidates..."
          class="w-1/2 px-5 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition duration-200"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 16l4-4m0 0l-4-4m4 4H6m6 4V8"
          />
        </svg>
      </div>
  
      <!-- Responsive Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-gray-800">
              <th class="py-2 px-4 border-b">Candidate Name</th>
              <th class="py-2 px-4 border-b">Email</th>
              <th class="py-2 px-4 border-b">Phone</th>
              <th class="py-2 px-4 border-b">Id</th>
              <th class="py-2 px-4 border-b">Status</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
        <tr
          v-for="candidate in candidates"
          :key="candidate._id"
          class="hover:bg-gray-100"
        >
          <td class="py-2 px-4 border-b">{{ candidate.name }}</td>
          <td class="py-2 px-4 border-b">{{ candidate.email }}</td>
          <td class="py-2 px-4 border-b">{{ candidate.phone }}</td>
          <td class="py-2 px-4 border-b">{{ candidate._id }}</td>
          <td class="py-2 px-4 border-b">{{ candidate.active ? 'Active' : 'Inactive' }}</td>
          <td class="py-2 px-4 border-b">
            <button
              @click="viewCandidate(candidate)"
              class="text-white bg-yellow-600 hover:bg-yellow-700 p-2 rounded-md"
            >
              <i class="fas fa-eye"></i> View
            </button>
            <button
              @click="toggleCandidateStatus(candidate)"
              class="text-white bg-green-600 hover:bg-red-700 p-2 rounded-md ml-2"
            >
              <i class="fas fa-toggle-on"></i> {{ candidate.active ? 'Deactivate' : 'Activate' }}
            </button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
</div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  import { useCandidateManager } from '@/manager/candidate';
  
  export default {
    setup() {
      const router = useRouter();
      const candidateStore = useCandidateManager();
      const candidates = ref([]);
  
      // Fetch candidates on mount
      onMounted(() => {
        fetchCandidates();
      });
  
      async function fetchCandidates() {
        try {
          await candidateStore.fetchCandidates();
          candidates.value = candidateStore.candidates;
          console.log('Fetched candidates:', candidates.value);
        } catch (error) {
          console.error('Error fetching candidates:', error);
        }
      }
  
      function viewCandidate(candidate) {
        // Navigate to the candidate profile page using Vue Router
        router.push({ name: 'CandidatesDetails', params: { id: candidate._id } });
      }
  
      return {
        candidates,
        viewCandidate,
      };
    },
  };
  </script>
  