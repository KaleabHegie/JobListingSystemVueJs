<template>
      <div class="bg-white p-6 rounded-lg shadow-md">
                            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Personal Project</h2>
                            
                            <form id="projectForm">
                                <div class="mb-4">
                                    <label for="projectName" class="block text-sm font-medium text-gray-700">Project Name</label>
                                    <input type="text" id="projectName" name="projectName" 
                                           class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                           placeholder="Enter project name" required>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="projectTech" class="block text-sm font-medium text-gray-700">Technologies Used</label>
                                    <input type="text" id="projectTech" name="projectTech" 
                                           class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                           placeholder="Enter technologies used" required>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="projectLink" class="block text-sm font-medium text-gray-700">Project Link</label>
                                    <input type="url" id="projectLink" name="projectLink" 
                                           class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                           placeholder="Enter project URL" required>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="projectDescription" class="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea id="projectDescription" name="projectDescription" rows="4" 
                                              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm" 
                                              placeholder="Brief description of the project..."></textarea>
                                </div>
                                
                                <button type="button" 
                                        class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                        onclick="addProject()">
                                    Add Project
                                </button>
                            </form>
                        </div>
</template>