<template>
  <div>
    <!-- Sidebar -->
    <aside
      :class="[ 
        'fixed top-0 left-0 h-full bg-gray-800 p-4 shadow-xl transform transition-transform duration-300 ease-in-out z-40', 
        sidebarVisible ? 'translate-x-0' : '-translate-x-full lg:translate-x-0' 
      ]"
      id="sidebar"
    >
      <div class="flex flex-col items-center mb-6">
        <img 
          src="https://via.placeholder.com/50" 
          alt="Profile Picture" 
          class="rounded-full w-16 h-16 mb-2" 
        />
        <h2 class="text-lg font-semibold text-white hidden lg:block">
          {{ userName }}
        </h2>
      </div>
      <h2 class="text-white text-lg font-semibold mb-4 hidden lg:block">Recruiter Dashboard</h2>

      <ul class="space-y-3">
        <!-- Jobs Posted Link -->
        <li>
          <router-link
            to="/recruiter/jobs-posted"
            class="flex items-center p-3 text-gray-300 hover:bg-indigo-600 rounded-md"
          >
            <i class="fas fa-briefcase mr-3"></i>
            Jobs Posted
          </router-link>
        </li>

        <!-- Candidates Link -->
        <li>
          <router-link
            to="/recruiter/candidates"
            class="flex items-center p-3 text-gray-300 hover:bg-indigo-600 rounded-md"
          >
            <i class="fas fa-users mr-3"></i>
            Candidates
          </router-link>
        </li>

        <!-- Companies Link -->
        <li>
          <router-link
            to="/recruiter/companies"
            class="flex items-center p-3 text-gray-300 hover:bg-indigo-600 rounded-md"
          >
            <i class="fas fa-building mr-3"></i>
            Companies
          </router-link>
        </li>

        <!-- Applications Link -->
        <li>
          <router-link
            to="/recruiter/applications"
            class="flex items-center p-3 text-gray-300 hover:bg-indigo-600 rounded-md"
          >
            <i class="fas fa-paper-plane mr-3"></i>
            Applications
          </router-link>
        </li>

        <!-- Job Sectors Link -->
        <li>
          <router-link
            to="/recruiter/job-sectors"
            class="flex items-center p-3 text-gray-300 hover:bg-indigo-600 rounded-md"
          >
            <i class="fas fa-folder-open mr-3"></i>
            Job Sectors
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Toggle Button (for mobile view) -->
    <button
      class="fixed top-1 left-4 z-50 p-3 bg-gray-600 text-white rounded-md lg:hidden"
      @click="toggleSidebar"
    >
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from "@/manager/auth"; // Adjust to your auth store path

export default {
  setup() {
    const sidebarVisible = ref(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
      sidebarVisible.value = !sidebarVisible.value;
    };

    return {
      sidebarVisible,
      toggleSidebar,
    };
  },
  computed: {
    userName() {
      const authStore = useAuthStore();
      return authStore.user?._id || "Admin"; // Fallback to "Guest" if the name isn't available
    },
  },
};
</script>
