<template> 
            <div class="dashboard-widg-bar mb-5">
              <div class="section mb-3">
                <section class="relative bg-gray-500 overflow-hidden">
                    <div class="max-w-7xl mx-auto py-14 px-6 lg:px-8">
                        <div class="flex justify-center"> <!-- Added flex container to center the text -->
                            <h1 class="text-10xl tracking-tight text-white text-center sm:text-4xl">Experience</h1>
                        </div>
                    </div>
                </section>
            </div>
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="mb-4 rounded overflow-hidden">
                        <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Add Experience Form -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Experience</h2>
                                    
                                    <form id="experienceForm">
                                        <div class="mb-4">
                                            <label for="company" class="block text-sm font-medium text-gray-700">Company Name</label>
                                            <input type="text" id="company" name="company" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter company name" required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="position" class="block text-sm font-medium text-gray-700">Position</label>
                                            <input type="text" id="position" name="position" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter position title" required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                                            <input type="text" id="location" name="location" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter location" required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
                                            <input type="date" id="startDate" name="startDate" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
                                            <input type="date" id="endDate" name="endDate" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm">
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                                            <textarea id="description" name="description" rows="4" 
                                                      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                      placeholder="Brief description of your experience..."></textarea>
                                        </div>
                                        
                                        <button type="button" 
                                                class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                                onclick="addExperience()">
                                            Add Experience
                                        </button>
                                    </form>
                                </div>
                                
                                <!-- List of Experiences -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Added Experiences</h2>
                                    
                                    <ul id="experienceList" class="space-y-4">
                                        <!-- Preloaded Experience Items -->
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Google (2019 - 2021)</h3>
                                            <p class="text-sm text-gray-700"><strong>Position:</strong> Software Engineer</p>
                                            <p class="text-sm text-gray-700"><strong>Location:</strong> Mountain View, CA</p>
                                            <p class="text-sm text-gray-700">Worked on developing scalable web applications and cloud solutions.</p>
                                        </li>
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Microsoft (2021 - Present)</h3>
                                            <p class="text-sm text-gray-700"><strong>Position:</strong> Senior Developer</p>
                                            <p class="text-sm text-gray-700"><strong>Location:</strong> Redmond, WA</p>
                                            <p class="text-sm text-gray-700">Leading a team in developing innovative AI-powered tools and platforms.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                      
                        
                        
                    </div>
                  </div>
                </div>
              </div>
              
</template>