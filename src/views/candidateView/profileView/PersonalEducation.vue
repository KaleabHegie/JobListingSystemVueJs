
<template>
     <!-- Main Content Area -->
            <div class="dashboard-widg-bar mb-5">
              <div class="section mb-3">
                <section class="relative bg-gray-500 overflow-hidden">
                    <div class="max-w-7xl mx-auto py-14 px-6 lg:px-8">
                        <div class="flex justify-center"> <!-- Added flex container to center the text -->
                            <h1 class="text-10xl tracking-tight text-white text-center sm:text-4xl">Education</h1>
                        </div>
                    </div>
                </section>
            </div>
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="mb-4 rounded overflow-hidden">
                        <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Add Education Form -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Education</h2>
                                    
                                    <form id="educationForm">
                                        <div class="mb-4">
                                            <label for="institution" class="block text-sm font-medium text-gray-700">Institution Name</label>
                                            <input type="text" id="institution" name="institution" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter institution name" required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="degree" class="block text-sm font-medium text-gray-700">Degree</label>
                                            <input type="text" id="degree" name="degree" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter degree (e.g., B.Sc., M.A.)" required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="field" class="block text-sm font-medium text-gray-700">Field of Study</label>
                                            <input type="text" id="field" name="field" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter field of study" required>
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
                                                      placeholder="Brief description of your education..."></textarea>
                                        </div>
                                        
                                        <button type="button" 
                                                class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                                onclick="addEducation()">
                                            Add Education
                                        </button>
                                    </form>
                                </div>
                                
                                <!-- List of Educations -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Added Educations</h2>
                                    
                                    <ul id="educationList" class="space-y-4">
                                        <!-- Preloaded Education Items -->
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Harvard University (2015 - 2019)</h3>
                                            <p class="text-sm text-gray-700"><strong>Degree:</strong> B.Sc. Computer Science</p>
                                            <p class="text-sm text-gray-700"><strong>Field:</strong> Computer Science</p>
                                            <p class="text-sm text-gray-700">Focused on software engineering and machine learning.</p>
                                        </li>
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Stanford University (2020 - Present)</h3>
                                            <p class="text-sm text-gray-700"><strong>Degree:</strong> M.Sc. Artificial Intelligence</p>
                                            <p class="text-sm text-gray-700"><strong>Field:</strong> AI and Data Science</p>
                                            <p class="text-sm text-gray-700">Specializing in deep learning and data-driven AI solutions.</p>
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