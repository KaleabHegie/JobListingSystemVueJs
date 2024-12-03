<template>
    <div class="max-w-6xl mx-auto p-6 bg-white mt-10">
    <h2 class="text-3xl font-semibold text-red-500 mb-4">
        <i class="fas fa-briefcase mr-2"></i> Software Engineer
        <span>
          <button class="text-gray-500 hover:text-red-500 mt-10 ml-10">
            <i class="fas fa-bookmark mr-1"></i>
         </button>
        </span>
    </h2>
    
    <p class="text-lg text-gray-600 mb-2">
        <i class="fas fa-building mr-2"></i> <strong>Company:</strong> Tech Innovations Inc.
    </p>
    <p class="text-lg text-gray-600 mb-2">
        <i class="fas fa-map-marker-alt mr-2"></i> <strong>Location:</strong> New York, NY
    </p>
    <p class="text-lg text-gray-600 mb-2">
        <i class="fas fa-dollar-sign mr-2"></i> <strong>Salary:</strong> $80,000 - $100,000 per year
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <h3 class="text-xl  text-gray-700 mt-6 mb-2">
                <i class="fas fa-info-circle mr-2"></i> Job Description
            </h3>
            <p class="text-gray-700 mb-4">
                We are looking for a skilled Software Engineer to join our dynamic team. The ideal candidate will have experience in building scalable applications and a passion for technology.
            </p>
        </div>

        <div>
            <h3 class="text-xl  text-gray-700 mt-6 mb-2">
                <i class="fas fa-file-alt mr-2"></i> Job Summary
            </h3>
            <p class="text-gray-700 mb-4">
                This position involves working closely with other engineers and product teams to create innovative solutions. The candidate should be adaptable and willing to learn new technologies.
            </p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
            <h3 class="text-xl  text-gray-700 mt-6 mb-2">
                <i class="fas fa-tasks mr-2"></i> Responsibilities
            </h3>
            <ul class="list-disc list-inside text-gray-700 mb-4">
                <li>Develop and maintain web applications using modern frameworks.</li>
                <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                <li>Troubleshoot and debug applications to optimize performance.</li>
                <li>Participate in code reviews and maintain code quality.</li>
            </ul>
        </div>

        <div>
            <h3 class="text-xl  text-gray-700 mt-6 mb-2">
                <i class="fas fa-check-circle mr-2"></i> Requirements
            </h3>
            <ul class="list-disc list-inside text-gray-700 mb-4">
                <li>Bachelor's degree in Computer Science or related field.</li>
                <li>2+ years of experience in software development.</li>
                <li>Proficient in JavaScript, HTML, CSS, and modern frameworks (e.g., React, Angular).</li>
                <li>Strong problem-solving skills and attention to detail.</li>
            </ul>
        </div>
    </div>

    <div class="flex justify-end mt-6">
      <button class="text-blue-600  border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white px-4 py-2 rounded-md mr-2">
        <i class="fas fa-paper-plane mr-1"></i> Apply Now
    </button>
    
    </div>
</div>

</template>