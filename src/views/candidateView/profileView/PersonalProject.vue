<template>
            <div class="dashboard-widg-bar mb-5">
              <div class="section mb-3">
                <section class="relative bg-gray-500 overflow-hidden">
                    <div class="max-w-7xl mx-auto py-14 px-6 lg:px-8">
                        <div class="flex justify-center"> <!-- Added flex container to center the text -->
                            <h1 class="text-10xl tracking-tight text-white text-center sm:text-4xl">Projects</h1>
                        </div>
                    </div>
                </section>
            </div>
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="mb-4 rounded overflow-hidden">
                        <div class="max-w-5xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Add Personal Project Form -->
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
                                
                                <!-- List of Personal Projects -->
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Added Projects</h2>
                                    
                                    <ul id="projectList" class="space-y-4">
                                        <!-- Preloaded Personal Project Items -->
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Task Management App</h3>
                                            <p class="text-sm text-gray-700"><strong>Technologies Used:</strong> React, Node.js, MongoDB</p>
                                            <p class="text-sm text-gray-700"><strong>Link:</strong> <a href="https://taskmanager.example" class="text-purple-600" target="_blank">taskmanager.example</a></p>
                                            <p class="text-sm text-gray-700">A web app to manage personal tasks, with user authentication and real-time updates.</p>
                                        </li>
                                        <li class="p-4 bg-gray-100 rounded-md shadow-sm">
                                            <h3 class="text-lg font-bold">Portfolio Website</h3>
                                            <p class="text-sm text-gray-700"><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                                            <p class="text-sm text-gray-700"><strong>Link:</strong> <a href="https://portfolio.example" class="text-purple-600" target="_blank">portfolio.example</a></p>
                                            <p class="text-sm text-gray-700">A personal website showcasing projects, skills, and blog posts.</p>
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