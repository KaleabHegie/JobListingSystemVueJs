<template>
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
</template>