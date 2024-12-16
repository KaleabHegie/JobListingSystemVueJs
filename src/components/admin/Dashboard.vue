<template>
    <div class="ml-[15%] w-[80%] p-6 mt-16">
      <h1 class="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      
      <!-- Dashboard Overview with Graphs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div class="bg-purple-500 p-3 rounded-full text-white">
            <i class="fas fa-briefcase text-2xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">Total Jobs Posted</h3>
            <p class="text-2xl font-bold text-gray-800">15</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div class="bg-blue-500 p-3 rounded-full text-white">
            <i class="fas fa-users text-2xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">Total Candidates</h3>
            <p class="text-2xl font-bold text-gray-800">50</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div class="bg-green-500 p-3 rounded-full text-white">
            <i class="fas fa-paper-plane text-2xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">Total Applications</h3>
            <p class="text-2xl font-bold text-gray-800">30</p>
          </div>
        </div>
      </div>
      
      <!-- Graphs Section -->
      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Job Postings Graph -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Job Postings by Sector</h3>
          <img src="https://via.placeholder.com/400x200" alt="Static Graph" />
        </div>
        
        <!-- Applications Graph -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Applications Over Time</h3>
          <img src="https://via.placeholder.com/400x200" alt="Static Graph" />
        </div>
      </div>
    
      <!-- Top Sectors Section with Icons -->
      <div class="mt-6">
        <h2 class="text-2xl font-semibold mb-4">Top Sectors and Available Jobs</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div class="bg-purple-500 p-3 rounded-full text-white">
              <i class="fas fa-laptop-code text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Information Technology</h3>
              <p class="text-gray-600">10 Jobs</p>
            </div>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div class="bg-green-500 p-3 rounded-full text-white">
              <i class="fas fa-heartbeat text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Healthcare</h3>
              <p class="text-gray-600">8 Jobs</p>
            </div>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div class="bg-blue-500 p-3 rounded-full text-white">
              <i class="fas fa-dollar-sign text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Finance</h3>
              <p class="text-gray-600">5 Jobs</p>
            </div>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div class="bg-red-500 p-3 rounded-full text-white">
              <i class="fas fa-cogs text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Engineering</h3>
              <p class="text-gray-600">7 Jobs</p>
            </div>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div class="bg-yellow-500 p-3 rounded-full text-white">
              <i class="fas fa-bullhorn text-2xl"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Marketing</h3>
              <p class="text-gray-600">6 Jobs</p>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Latest Jobs Section -->
      <div class="mt-6">
        <h2 class="text-2xl font-semibold mb-4">Latest Jobs</h2>
        <ul class="space-y-4">
          <li class="flex justify-between items-center p-6 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4">
              <i class="fas fa-cogs text-2xl text-gray-500"></i>
              <span class="text-xl font-semibold">Software Engineer</span>
            </div>
            <span class="text-gray-600">Posted on: 2024-11-12</span>
          </li>
    
          <li class="flex justify-between items-center p-6 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4">
              <i class="fas fa-chart-line text-2xl text-gray-500"></i>
              <span class="text-xl font-semibold">Data Analyst</span>
            </div>
            <span class="text-gray-600">Posted on: 2024-11-10</span>
          </li>
    
          <li class="flex justify-between items-center p-6 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4">
              <i class="fas fa-bullhorn text-2xl text-gray-500"></i>
              <span class="text-xl font-semibold">Marketing Manager</span>
            </div>
            <span class="text-gray-600">Posted on: 2024-11-08</span>
          </li>
    
          <li class="flex justify-between items-center p-6 bg-white rounded-lg shadow-md">
            <div class="flex items-center space-x-4">
              <i class="fas fa-user-tie text-2xl text-gray-500"></i>
              <span class="text-xl font-semibold">UX/UI Designer</span>
            </div>
            <span class="text-gray-600">Posted on: 2024-11-05</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
