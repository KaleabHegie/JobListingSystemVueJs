<template>
            <div class="dashboard-widg-bar mb-5">
              <div class="section mb-3">
                <section class="relative bg-gray-500 overflow-hidden">
                    <div class="max-w-7xl mx-auto py-14 px-6 lg:px-8">
                        <div class="flex justify-center"> <!-- Added flex container to center the text -->
                            <h1 class="text-10xl tracking-tight text-white text-center sm:text-4xl">Applied Jobs</h1>
                        </div>
                    </div>
                </section>
            </div>
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="mb-4 rounded overflow-hidden">
                      <div class="table-responsive bg-white shadow-md rounded-lg">
                        <table class="table table-auto w-full">
                          <thead class="bg-gray-800 text-white">
                            <tr>
                              <th scope="col" class="px-4 py-2 text-left">Job Title</th>
                              <th scope="col" class="px-4 py-2 text-left">Vacancies</th>
                              <th scope="col" class="px-4 py-2 text-left">Applied Date</th>
                              <th scope="col" class="px-4 py-2 text-left">Application Status</th>
                              <th scope="col" class="px-4 py-2 text-left">Action</th>
                            </tr>
                          </thead>
                          <tbody class="bg-white">
                            <!-- Row 1 -->
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <i class="fas fa-briefcase text-blue-500 mr-2"></i> Software Engineer
                              </td>
                              <td class="px-4 py-2">5</td>
                              <td class="px-4 py-2">2024-11-01</td>
                              <td class="px-4 py-2 text-green-600">Approved</td>
                              <td class="px-4 py-2">
                                <a href="#" class="text-blue-500 hover:underline"><i class="fas fa-eye mr-1"></i></a>
                                <a href="#" class="text-red-500 hover:underline ml-3"><i class="fas fa-trash-alt mr-1"></i></a>
                              </td>
                            </tr>
                            <!-- Row 2 -->
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <i class="fas fa-briefcase text-blue-500 mr-2"></i> Product Manager
                              </td>
                              <td class="px-4 py-2">3</td>
                              <td class="px-4 py-2">2024-10-28</td>
                              <td class="px-4 py-2 text-yellow-600">Pending</td>
                              <td class="px-4 py-2">
                                <a href="#" class="text-blue-500 hover:underline"><i class="fas fa-eye mr-1"></i></a>
                                <a href="#" class="text-red-500 hover:underline ml-3"><i class="fas fa-trash-alt mr-1"></i></a>
                              </td>
                            </tr>
                            <!-- Row 3 -->
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <i class="fas fa-briefcase text-blue-500 mr-2"></i> Data Analyst
                              </td>
                              <td class="px-4 py-2">2</td>
                              <td class="px-4 py-2">2024-10-15</td>
                              <td class="px-4 py-2 text-red-600">Rejected</td>
                              <td class="px-4 py-2">
                                <a href="#" class="text-blue-500 hover:underline"><i class="fas fa-eye mr-1"></i></a>
                                <a href="#" class="text-red-500 hover:underline ml-3"><i class="fas fa-trash-alt mr-1"></i></a>
                              </td>
                            </tr>
                            <!-- Row 4 -->
                            <tr class="border-b">
                              <td class="px-4 py-2">
                                <i class="fas fa-briefcase text-blue-500 mr-2"></i> UI/UX Designer
                              </td>
                              <td class="px-4 py-2">4</td>
                              <td class="px-4 py-2">2024-11-10</td>
                              <td class="px-4 py-2 text-green-600">Approved</td>
                              <td class="px-4 py-2">
                                <a href="#" class="text-blue-500 hover:underline"><i class="fas fa-eye mr-1"></i></a>
                                <a href="#" class="text-red-500 hover:underline ml-3"><i class="fas fa-trash-alt mr-1"></i></a>
                              </td>
                            </tr>
                            <!-- Row 5 -->
                            <tr>
                              <td class="px-4 py-2">
                                <i class="fas fa-briefcase text-blue-500 mr-2"></i> DevOps Engineer
                              </td>
                              <td class="px-4 py-2">1</td>
                              <td class="px-4 py-2">2024-11-05</td>
                              <td class="px-4 py-2 text-yellow-600">Pending</td>
                              <td class="px-4 py-2">
                                <a href="#" class="text-blue-500 hover:underline"><i class="fas fa-eye mr-1"></i></a>
                                <a href="#" class="text-red-500 hover:underline ml-3"><i class="fas fa-trash-alt mr-1"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>