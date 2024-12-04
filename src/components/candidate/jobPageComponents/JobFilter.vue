<template>
    
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
      
</template>