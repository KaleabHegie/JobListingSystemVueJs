<template>
    <div class="flex gap-5">
      <div class="w-[30%]"> 
        <div class="p-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
          <!-- Filters Section -->
          <div class="space-y-6">
            <div class="">
              <!-- Location Filter -->
              <div>
                <p class="text-lg font-semibold text-gray-800 mb-2">Filter by Location</p>
                <div class="space-y-2 h-32 overflow-y-auto bg-white p-2 rounded-md shadow-inner">
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">All Locations</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="new_york" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">New York</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="san_francisco" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">San Francisco</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="london" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">London</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="berlin" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Berlin</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="sydney" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Sydney</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="tokyo" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Tokyo</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="location" value="dubai" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Dubai</span>
                  </label>
                  <!-- Add more locations as needed -->
                </div>
              </div>
              
            
              <!-- Company Filter -->
              <div>
                <p class="text-lg font-semibold text-gray-800 mb-2">Filter by Company</p>
                <div class="space-y-2 h-32 overflow-y-auto bg-white p-2 rounded-md shadow-inner">
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">All Companies</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="microsoft" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Microsoft</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="google" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Google</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="amazon" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Amazon</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="apple" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Apple</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="facebook" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Facebook</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="company" value="tesla" class="text-indigo-600 focus:ring-indigo-500">
                    <span class="text-gray-700">Tesla</span>
                  </label>
                  <!-- Add more companies as needed -->
                </div>
                
              </div>

             
            </div>
            
           
            <button class="text-white bg-gray-600 hover:bg-blue-700 px-4 py-2 rounded-md ">
              Apply Filter
           </button>
           
          </div>
        </div>
        
      </div>
      <div class="w-[70%]"> 
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    
          <a href="job_detail.html">
          <div
          class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Sales Manager</h3>
            <div class="flex flex-col mt-2">
              <div class="flex items-center text-gray-600 mb-1">
    
                <span> By </span> <span class="text-red-500"> Retail Group</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                </svg>
                <span>Miami, FL</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                </svg>
                <span>Sales</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Full-time</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
               <i class="fas fa-2x fa-bookmark mr-1"></i>
            </button>
            <span class="text-sm text-gray-500">Posted: 2 weeks ago</span>
          </div>
        </div>
        </a>



        <a href="job_detail.html">
        <div
          class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Software Engineer</h3>
            <div class="flex flex-col mt-2">
              <div class="flex items-center text-gray-600 mb-1">
    
                <span> By </span> <span class="text-red-500"> Tech Innovations</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                </svg>
                <span>Development</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Full-time</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
               <i class="fas fa-2x fa-bookmark mr-1"></i>
            </button>
            <span class="text-sm text-gray-500">Posted: 3 weeks ago</span>
          </div>
        </div>
        </a>


        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Tech Innovations</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>IT</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-time</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 2 days ago</span>
            </div>
          </div>
        </a>  
          

        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Marketing Specialist</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Creative Agency</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>New York, NY</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Marketing</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Part-time</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 1 week ago</span>
            </div>
          </div>
        </a>
          

        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Data Analyst</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Data Solutions</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>Chicago, IL</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Analytics</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-time</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 3 days ago</span>
            </div>
          </div>
        </a>  
          
        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Project Manager</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Global Enterprises</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>Seattle, WA</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Management</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contract</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 4 days ago</span>
            </div>
          </div>
        </a>
          
        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">UX/UI Designer</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Design Co.</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>Austin, TX</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Design</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-time</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 1 week ago</span>
            </div>
          </div>
        </a>
    
          
        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Content Writer</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Publishing House</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>Boston, MA</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Writing</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Freelance</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 5 days ago</span>
            </div>
          </div>
        </a>  
    
        <a href="job_detail.html">  
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Sales Manager</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Retail Group</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>Miami, FL</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Sales</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-time</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 2 weeks ago</span>
            </div>
          </div>
        </a>
    
          

        <a href="job_detail.html">
          <div
            class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <div class="flex flex-col mt-2">
                <div class="flex items-center text-gray-600 mb-1">
    
                  <span> By </span> <span class="text-red-500"> Tech Innovations</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                  </svg>
                  <span>Development</span>
                </div>
                <div class="flex items-center text-gray-600 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-time</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
                <i class="fas fa-2x fa-bookmark mr-1"></i>
              </button>
              <span class="text-sm text-gray-500">Posted: 3 weeks ago</span>
            </div>
          </div>
        </a>  

    <a href="job_detail.html">
          <div
          class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Software Engineer</h3>
            <div class="flex flex-col mt-2">
              <div class="flex items-center text-gray-600 mb-1">
    
                <span> By </span> <span class="text-red-500"> Tech Innovations</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                </svg>
                <span>IT</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Full-time</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
               <i class="fas fa-2x fa-bookmark mr-1"></i>
            </button>
            <span class="text-sm text-gray-500">Posted: 2 days ago</span>
          </div>
        </div>
      </a>  

    
        <a href="job_detail.html">
        <div
          class="bg-gray-50 rounded-lg p-6 flex justify-between shadow-lg border border-transparent transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
          <div>
            <h3 class="text-xl font-semibold text-gray-800">Marketing Specialist</h3>
            <div class="flex flex-col mt-2">
              <div class="flex items-center text-gray-600 mb-1">
    
                <span> By </span> <span class="text-red-500"> Creative Agency</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8M8 12h4M4 16h16" />
                </svg>
                <span>New York, NY</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 12c2.28 0 4-1.343 4-3s-1.72-3 4-3s-4 1.343-4 3s1.72 3 4 3zM4 20c0-3.35 5.333-4.99 8-4.99s8 1.64 8 4.99M4 20h16" />
                </svg>
                <span>Marketing</span>
              </div>
              <div class="flex items-center text-gray-600 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Part-time</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
               <i class="fas fa-2x fa-bookmark mr-1"></i>
            </button>
            <span class="text-sm text-gray-500">Posted: 1 week ago</span>
          </div>
        </div>
      </a>  

    
        </div>
      </div>
    </div>
</template>