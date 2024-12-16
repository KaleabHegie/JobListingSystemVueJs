<template>
    <div>
      <!-- Sidebar -->
      <aside
        :class="[
          'fixed top-16 left-0 h-full bg-gray-800 p-4 shadow-xl transform transition-transform duration-300 ease-in-out z-40',
          sidebarVisible ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ]" style="width: 18%;"
      >
        <div class="flex flex-col items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Picture" class="rounded-full w-12 h-12 mb-2" />
          <h2 class="text-xl font-semibold text-white hidden lg:block">James Brown</h2>
        </div>
        <ul class="space-y-2">
              <li>
                <router-link
                  to="/profile"
                  class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
                >
                  <i class="fas fa-eye mr-2"></i>
                  <span class="hidden lg:block">View Profile</span>
                </router-link>
              </li>
            <!-- <ul
              class="ml-6 mt-2 space-y-1"
              :class="{'block': profileMenuVisible, 'hidden': !profileMenuVisible}"
            >
              <li>
                <router-link
                  to="/profile"
                  class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
                >
                  <i class="fas fa-eye mr-2"></i>
                  <span class="hidden lg:block">View Profile</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/profile/education"
                  class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
                >
                  <i class="fas fa-graduation-cap mr-2"></i>
                  <span class="hidden lg:block">Education</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/profile/experience"
                  class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
                >
                  <i class="fas fa-tasks mr-2"></i>
                  <span class="hidden lg:block">Experience</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/profile/project"
                  class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
                >
                  <i class="fas fa-project-diagram mr-2"></i>
                  <span class="hidden lg:block">Project</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/profile/skill"
                  class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
                >
                  <i class="fas fa-gear mr-2"></i>
                  <span class="hidden lg:block">Skills</span>
                </router-link>
              </li>
            </ul> -->
          
          <li>
            <router-link
              to="/profile/applied-jobs"
              class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md active:bg-indigo-700"
            >
              <i class="fas fa-briefcase mr-2"></i>
              <span class="hidden lg:block">Applied Jobs</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/profile/bookmarked-jobs"
              class="flex items-center p-2 text-gray-300 hover:bg-indigo-600 rounded-md"
            >
              <i class="fas fa-bookmark mr-2"></i>
              <span class="hidden lg:block">Bookmarked Jobs</span>
            </router-link>
          </li>
        </ul>
      </aside>
  
      <!-- Toggle Button -->
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
  
  export default {
    setup() {
      const sidebarVisible = ref(false);
      const profileMenuVisible = ref(false);  // Reactive state for profile menu
  
      const toggleSidebar = () => {
        sidebarVisible.value = !sidebarVisible.value;
      };
  
      const toggleProfileMenu = () => {
        profileMenuVisible.value = !profileMenuVisible.value;
      };
  
      return {
        sidebarVisible,
        toggleSidebar,
        profileMenuVisible,  // Expose the state to toggle profile submenus
        toggleProfileMenu,   // Expose the function to toggle profile submenus
      };
    },
  };
  </script>

  