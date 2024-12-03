<template>
            <div class="dashboard-widg-bar mb-5">
              <div class="section mb-3">
                <section class="relative bg-gray-500 overflow-hidden">
                    <div class="max-w-7xl mx-auto py-14 px-6 lg:px-8">
                        <div class="flex justify-center"> <!-- Added flex container to center the text -->
                            <h1 class="text-10xl tracking-tight text-white text-center sm:text-4xl">Skills</h1>
                        </div>
                    </div>
                </section>
            </div>
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="mb-4 rounded overflow-hidden">
                        <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Add Skill Form -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Skill</h2>
                                    
                                    <form id="skillForm">
                                        <div class="mb-4">
                                            <label for="skillName" class="block text-sm font-medium text-gray-700">Skill Name</label>
                                            <input type="text" id="skillName" name="skillName" 
                                                   class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                                   placeholder="Enter skill name" required>
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="skillLevel" class="block text-sm font-medium text-gray-700">Skill Level</label>
                                            <select id="skillLevel" name="skillLevel" 
                                                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" required>
                                                <option value="beginner">Beginner</option>
                                                <option value="intermediate">Intermediate</option>
                                                <option value="advanced">Advanced</option>
                                            </select>
                                        </div>
                                        
                                        <button type="button" 
                                                class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                                onclick="addSkill()">
                                            Add Skill
                                        </button>
                                    </form>
                                </div>
                                
                                <!-- List of Skills -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Added Skills</h2>
                                    
                                    <ul id="skillList" class="space-y-4">
                                        <!-- Preloaded Skills -->
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">JavaScript</h3>
                                            <p class="text-sm text-gray-700">Advanced</p>
                                            <div class="w-full bg-gray-200 rounded-full">
                                                <div class="bg-green-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style="width: 90%;">90%</div>
                                            </div>
                                        </li>
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Python</h3>
                                            <p class="text-sm text-gray-700">Intermediate</p>
                                            <div class="w-full bg-gray-200 rounded-full">
                                                <div class="bg-yellow-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full" style="width: 60%;">60%</div>
                                            </div>
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