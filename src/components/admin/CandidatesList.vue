<template>
     <div class="ml-[15%] w-[80%] p-6">
           
           <!-- Candidates List Section -->
           <div class="mt-10">
               <h2 class="text-2xl font-semibold mb-4">Candidates List</h2>
               
               <!-- Stylish Search Bar -->
               <div class="relative mb-4">
                   <input 
                       type="text" 
                       id="candidatesSearch" 
                       placeholder="🔍 Search candidates..." 
                       class="w-1/2 px-5 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm transition duration-200"
                   />
                   <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M10 16l4-4m0 0l-4-4m4 4H6m6 4V8" />
                   </svg>
               </div>
               
               <!-- Responsive Table -->
               <div class="overflow-x-auto">
                   <table class="min-w-full bg-white border border-gray-300">
                       <thead>
                           <tr class="bg-gray-200 text-gray-800">
                               <th class="py-2 px-4 border-b">Candidate Name</th>
                               <th class="py-2 px-4 border-b">Email</th>
                               <th class="py-2 px-4 border-b">Phone</th>
                               <th class="py-2 px-4 border-b">Actions</th>
                           </tr>
                       </thead>
                       <tbody id="candidatesTableBody">
                           <tr class="hover:bg-gray-100">
                               <td class="py-2 px-4 border-b">Alice Johnson</td>
                               <td class="py-2 px-4 border-b">alice.johnson@example.com</td>
                               <td class="py-2 px-4 border-b">(123) 456-7891</td>
                               <td class="py-2 px-4 border-b">
                                   <button class="text-white bg-yellow-600 hover:bg-blue-700 p-2 rounded-md">
                                       <i class="fas fa-eye"></i> <!-- View icon -->
                                   </button>
                                   <button class="text-white bg-green-600 hover:bg-red-700 p-2 rounded-md ml-2">
                                       <i class="fas fa-power-off"></i> <!-- Deactivate icon -->
                                   </button>
                               </td>
                           </tr>
                           <tr class="hover:bg-gray-100">
                               <td class="py-2 px-4 border-b">Bob Smith</td>
                               <td class="py-2 px-4 border-b">bob.smith@example.com</td>
                               <td class="py-2 px-4 border-b">(123) 456-7892</td>
                               <td class="py-2 px-4 border-b">
                                   <button class="text-white bg-yellow-600 hover:bg-blue-700 p-2 rounded-md">
                                       <i class="fas fa-eye"></i>
                                   </button>
                                   <button class="text-white bg-green-600 hover:bg-red-700 p-2 rounded-md ml-2">
                                       <i class="fas fa-power-off"></i>
                                   </button>
                               </td>
                           </tr>
                           <tr class="hover:bg-gray-100">
                               <td class="py-2 px-4 border-b">Charlie Brown</td>
                               <td class="py-2 px-4 border-b">charlie.brown@example.com</td>
                               <td class="py-2 px-4 border-b">(123) 456-7893</td>
                               <td class="py-2 px-4 border-b">
                                   <button class="text-white bg-yellow-600 hover:bg-blue-700 p-2 rounded-md">
                                       <i class="fas fa-eye"></i>
                                   </button>
                                   <button class="text-white bg-green-600 hover:bg-red-700 p-2 rounded-md ml-2">
                                       <i class="fas fa-power-off"></i>
                                   </button>
                               </td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </div>
</template>