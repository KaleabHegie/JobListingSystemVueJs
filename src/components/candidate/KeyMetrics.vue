<template>
    <section class="parallax-stats">
      <div class="stats-content">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Job Posted -->
          <div class="p-6 rounded-lg shadow-md text-center">
            <div class="flex justify-center mb-2">
              <i class="fas fa-briefcase fa-4x text-white"></i> <!-- Job Posted Icon -->
            </div>
            <h1 class="text-4xl font-semibold text-white">1225</h1>
            <p class="text-white">Job Posted</p>
          </div>
  
          <!-- Job Filed -->
          <div class="p-6 rounded-lg shadow-md text-center">
            <div class="flex justify-center mb-2">
              <i class="fas fa-file-alt fa-4x text-white"></i> <!-- Job Filed Icon -->
            </div>
            <h1 class="text-4xl font-semibold text-white">145</h1>
            <p class="text-white">Job Filed</p>
          </div>
  
          <!-- Company -->
          <div class="p-6 rounded-lg shadow-md text-center">
            <div class="flex justify-center mb-2">
              <i class="fas fa-building fa-4x text-white"></i> <!-- Company Icon -->
            </div>
            <h1 class="text-4xl font-semibold text-white">170</h1>
            <p class="text-white">Company</p>
          </div>
  
          <!-- Members -->
          <div class="p-6 rounded-lg shadow-md text-center">
            <div class="flex justify-center mb-2">
              <i class="fas fa-users fa-4x text-white"></i> <!-- Members Icon -->
            </div>
            <h1 class="text-4xl font-semibold text-white">125</h1>
            <p class="text-white">Members</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .parallax-stats {
    position: relative;
    height: 250px; /* Adjust as needed */
    background-image: url('../../assets/images/job-search.webp'); /* Background image path */
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  
  .parallax-stats::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Overlay for better text visibility */
    z-index: 1;
  }
  
  .stats-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }
  
  .grid div {
    color: white;
  }
  </style>
  