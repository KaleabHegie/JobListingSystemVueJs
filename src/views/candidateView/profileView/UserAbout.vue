<template>
      
            <section class="bg-gray-50 py-10" id="pdf_section">
                <div class="container mx-auto px-4">
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Sidebar -->
                    <div class="bg-white shadow-md rounded-lg p-6">
                      <div class="text-center">
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Profile Picture"
                          class="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-200"
                        />
                        <h3 class="text-lg font-bold text-gray-800">John Doe</h3>
                        <div class="flex justify-center space-x-3 mt-3">
                          <a href="https://github.com/johndoe" class="text-gray-600 hover:text-gray-800">
                            <i class="fa-brands fa-github text-2xl"></i>
                          </a>
                          <a href="https://linkedin.com/in/johndoe" class="text-blue-600 hover:text-blue-800">
                            <i class="fa-brands fa-linkedin text-2xl"></i>
                          </a>
                        </div>
                      </div>
                      <div class="mt-6">
                        <h4 class="text-gray-700 font-semibold mb-2">Contact Information</h4>
                        <ul class="text-gray-600 space-y-2">
                          <li>
                            <strong>Email:</strong> john.doe@example.com
                          </li>
                          <li>
                            <strong>Phone:</strong> +1234567890
                          </li>
                          <li>
                            <strong>Location:</strong> 123 Main Street, Springfield
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6">
                        <h4 class="text-gray-700 font-semibold mb-2">Languages</h4>
                        <ul class="text-gray-600 space-y-2">
                          <li>English - Fluent</li>
                          <li>Spanish - Intermediate</li>
                        </ul>
                      </div>
                    </div>
              
                    <!-- Main Content -->
                    <div class="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
                      <nav class="mb-6 border-b pb-3">
                        <ul class="flex space-x-4">
                          <li>
                            <a
                              href="#overview"
                              class="text-blue-600 font-medium hover:text-blue-800 border-b-2 border-blue-600"
                              >Overview</a
                            >
                          </li>
                        </ul>
                      </nav>
                      <div id="overview">
                        <div class="mb-6">
                          <h3 class="text-gray-800 font-bold text-lg mb-2">About</h3>
                          <p class="text-gray-600">
                            Highly motivated professional with over 5 years of experience in software development, specializing in designing, building, and optimizing scalable web and mobile applications. Proficient in modern programming languages like JavaScript, Python, and Java, with expertise in frameworks such as React, Django, and Node.js. Skilled in collaborating with cross-functional teams to deliver user-focused solutions that meet business objectives.
                            <br>Passionate about problem-solving and committed to staying updated with the latest technologies and industry trends. Adept at leading projects from concept to deployment, mentoring junior developers, and implementing agile methodologies to improve efficiency and productivity.
                          </p>
                        </div>
                        <div class="mb-6">
                          <h3 class="text-gray-800 font-bold text-lg mb-2">Education</h3>
                          <div class="border-l-4 border-blue-600 pl-4">
                            <p class="font-semibold text-gray-800">University of Springfield</p>
                            <p class="text-gray-600 text-sm">B.Sc. in Computer Science (2015 - 2019)</p>
                            <p class="text-gray-600 text-sm">Specialization: Software Engineering</p>
                          </div>
                          <div class="border-l-4 border-blue-600 pl-4 mt-2">
                            <p class="font-semibold text-gray-800">Loyola University of Chicago</p>
                            <p class="text-gray-600 text-sm">M.Sc. in Computer Science (2021 - 2023)</p>
                            <p class="text-gray-600 text-sm">Specialization: Data Analytics</p>
                          </div>
                        </div>
                        <div class="mb-6">
                          <h3 class="text-gray-800 font-bold text-lg mb-2">Experience</h3>
                          <div class="border-l-4 border-blue-600 pl-4">
                            <p class="font-semibold text-gray-800">Tech Solutions Inc.</p>
                            <p class="text-gray-600 text-sm">Software Engineer (2020 - Present)</p>
                            <p class="text-gray-600 text-sm">
                              Developed and maintained scalable web applications.
                            </p>
                          </div>
                        </div>
                        <div class="mb-6">
                          <h3 class="text-gray-800 font-bold text-lg mb-2">Skills</h3>
                          <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
                            <span class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Python</span>
                            <span class="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">React</span>
                          </div>
                        </div>
                        <div class="mb-6">
                          <h3 class="text-gray-800 font-bold text-lg mb-2">Certifications</h3>
                          <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                              AWS Certified Developer
                            </span>
                            <span class="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                              Certified Scrum Master
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
       
</template>