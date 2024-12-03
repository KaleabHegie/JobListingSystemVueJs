<template>
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-800 text-center mb-10">Explore Top Job Sectors</h2>
      <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">

        <!-- Sector 1: Engineering -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-indigo-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 12c2.28 0 4-1.343 4-3s-1.72-3-4-3-4 1.343-4 3 1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Engineering</h3>
          <p class="text-sm text-gray-500">120 Jobs</p>
        </div>

        <!-- Sector 2: Healthcare -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-green-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 20h6m-3-4v4m0-18v4m5 0h-6m3 0a9 9 0 01-9 9v3h18v-3a9 9 0 01-9-9z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Healthcare</h3>
          <p class="text-sm text-gray-500">75 Jobs</p>
        </div>

        <!-- Sector 3: Finance -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-blue-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4a8 8 0 00-8 8v4a4 4 0 004 4h8a4 4 0 004-4v-4a8 8 0 00-8-8z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Finance</h3>
          <p class="text-sm text-gray-500">50 Jobs</p>
        </div>

        <!-- Sector 4: Education -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-yellow-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 6l3 1 3-1 3 1 3-1 3 1v13a2 2 0 01-2 2h-6a2 2 0 01-2-2V6zM12 7v13m-6-3h12" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Education</h3>
          <p class="text-sm text-gray-500">30 Jobs</p>
        </div>

        <!-- Sector 5: Information Technology -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-purple-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 12a9 9 0 110-18 9 9 0 010 18zM12 9.5c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Information Technology</h3>
          <p class="text-sm text-gray-500">90 Jobs</p>
        </div>

        <!-- Sector 6: Marketing -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-pink-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12a7 7 0 00-7 7v3a1 1 0 001 1h3a7 7 0 007-7v-3M9 12h3M15 9V5a1 1 0 00-1-1h-1M5 12V8m14 4V8m-9-5h3m-3 5h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Marketing</h3>
          <p class="text-sm text-gray-500">65 Jobs</p>
        </div>

        <!-- Sector 7: Customer Service -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-teal-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 7a5 5 0 00-10 0v1H4v4h16V8h-1V7a5 5 0 00-5-5h-3a5 5 0 00-1 0" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Customer Service</h3>
          <p class="text-sm text-gray-500">40 Jobs</p>
        </div>

        <!-- Sector 8: Sales -->
        <div
          class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div class="bg-red-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18m-9 9l6-6-6-6m-6 6h18" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Sales</h3>
          <p class="text-sm text-gray-500">55 Jobs</p>
        </div>

      </div>
    </div>
  </section>


</template>