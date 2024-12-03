<template>
    <nav class="bg-white shadow-md p-2 fixed  top-0 left-0 right-0 flex justify-between items-center">
    <div class="flex items-center space-x-6">
        <!-- Brand or Logo -->
        <a href="#" class="text-2xl font-bold text-gray-800"></a>
    </div>
    
    <!-- Right Side: Profile, Bell, Logout -->
    <div class="flex items-center space-x-6">
        <!-- Bell Icon -->
        <div class="relative">
            <i class="fas fa-bell text-2xl text-gray-800"></i>
            <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span> <!-- Notification count -->
        </div>

        <!-- Profile Picture -->
        <div class="relative">
            <img src="https://via.placeholder.com/40" alt="Profile Picture" class="w-10 h-10 rounded-full border-2 border-gray-200">
        </div>

        <!-- Logout Button -->
        <button class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200">
            Logout
        </button>
    </div>
</nav>
</template>