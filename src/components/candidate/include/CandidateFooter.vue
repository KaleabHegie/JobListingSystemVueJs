<template>
  <footer class="bg-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <!-- For Candidate Section -->
              <div>
                  <h3 class="text-white text-lg font-semibold">For Candidate</h3>
                  <ul class="mt-4 space-y-2">
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/job" class="text-gray-300 hover:text-white">Browse Jobs</router-link>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/profile" class="text-gray-300 hover:text-white">Account</router-link>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/job" class="text-gray-300 hover:text-white">Job List</router-link>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/register" class="text-gray-300 hover:text-white">Sign Up</router-link>
                      </li>
                  </ul>
              </div>

              <!-- Quick Links Section -->
              <div>
                  <h3 class="text-white text-lg font-semibold">Quick Links</h3>
                  <ul class="mt-4 space-y-2">
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/faqs" class="text-gray-300 hover:text-white">FAQ</router-link>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-chevron-right text-indigo-600 mr-2"></i>
                          <router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link>
                      </li>
                  </ul>
              </div>

              <!-- Information Section -->
              <div>
                  <h3 class="text-white text-lg font-semibold">Information</h3>
                  <p class="mt-4 text-gray-400 flex items-center">
                      <i class="fas fa-phone-alt text-green-400 mr-2"></i>
                      <span>+101 984 754</span>
                  </p>
                  <p class="text-gray-400 flex items-center">
                      <i class="fas fa-envelope text-blue-400 mr-2"></i>
                      <span>GlobalLink@outlook.com</span>
                  </p>
                  <p class="text-gray-400 flex items-center">
                      <i class="fas fa-map-marker-alt text-red-400 mr-2"></i>
                      <span>123, Denver, USA</span>
                  </p>
              </div>

              <!-- Company Description & Social Media Section -->
              <div>
                  <h3 class="text-white text-lg font-semibold">About Us</h3>
                  <p class="mt-4 text-gray-400">We are dedicated to connecting talented individuals with top employers. Our mission is to simplify the job search process and help candidates find their dream jobs.</p>
                  <h4 class="mt-6 text-white text-lg font-semibold">Follow Us</h4>
                  <ul class="mt-4 flex space-x-4">
                      <li>
                          <a href="#" class="text-gray-300 hover:text-white">
                              <i class="fab fa-facebook-f"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-300 hover:text-white">
                              <i class="fab fa-twitter"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-300 hover:text-white">
                              <i class="fab fa-linkedin-in"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-300 hover:text-white">
                              <i class="fab fa-instagram"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>

          <div class="mt-8 border-t border-gray-700 pt-4 text-center">
              <p class="text-gray-400 text-sm">&copy; 2024 GlobalLink. All rights reserved.</p>
          </div>
      </div>
  </footer>
</template>
