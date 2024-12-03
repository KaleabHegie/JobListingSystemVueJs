<template>
    <section class="parallax-section">
      <div class="content">
        <h2 class="text-3xl font-bold text-white text-center mb-8">Easiest Way To Apply</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h4 class="text-xl font-semibold text-dark mt-2">Browse Job</h4>
            <p class="text-gray-800 mt-2">
              Explore a wide range of job opportunities tailored to your skills and experience.
            </p>
          </div>
  
          <!-- Step 2 -->
          <div class="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h4 class="text-xl font-semibold text-dark mt-2">Find Your Vacancy</h4>
            <p class="text-gray-800 mt-2">
              Easily search and apply for positions that match your career goals.
            </p>
          </div>
  
          <!-- Step 3 -->
          <div class="bg-gray-200 p-6 rounded-lg shadow-md text-center">
            <h4 class="text-xl font-semibold text-dark mt-2">Submit Resume</h4>
            <p class="text-gray-800 mt-2">
              Quickly upload your resume and get noticed by top employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .parallax-section {
    position: relative;
    height: 400px; /* Adjust as needed */
    background-image: url('../../../assets/images/job-search.webp'); /* Background image path */
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  
  .parallax-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Optional overlay for better text contrast */
    z-index: 1;
  }
  
  .content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }
  </style>
  