<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Add Education</h2>

        <form id="educationForm">
            <div class="mb-4">
                <label for="institution" class="block text-sm font-medium text-gray-700">Institution Name</label>
                <input type="text" id="institution" name="institution"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Enter institution name" required>
            </div>

            <div class="mb-4">
                <label for="degree" class="block text-sm font-medium text-gray-700">Degree</label>
                <input type="text" id="degree" name="degree"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Enter degree (e.g., B.Sc., M.A.)" required>
            </div>

            <div class="mb-4">
                <label for="field" class="block text-sm font-medium text-gray-700">Field of Study</label>
                <input type="text" id="field" name="field"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Enter field of study" required>
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
                    placeholder="Brief description of your education..."></textarea>
            </div>

            <button type="button"
                class="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                onclick="addEducation()">
                Add Education
            </button>
        </form>
    </div>
</template>