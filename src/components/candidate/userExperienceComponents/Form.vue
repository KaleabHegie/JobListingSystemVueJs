<template>
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
</template>