<template>
    <section class="w-4/5 mx-auto mt-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left Column: Image -->
            <div class="flex justify-center items-center">
                <img src="../../../assets/images/svg/contactus.avif" alt="Contact Us" class="w-full h-full object-cover">
            </div>

            <!-- Right Column: Contact Us Form -->
            <div class="bg-white p-6">
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">Get in touch</h2>
                <p class="text-lg text-gray-600 mb-6">We’d love to hear from you. Please fill out the form below, and
                    we'll get back to you as soon as possible!</p>

                <!-- Contact Form -->
                <form action="#" method="POST">
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                        <input type="text" id="name" name="name"
                            class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                        <input type="email" id="email" name="email"
                            class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                    </div>

                    <div class="mb-4">
                        <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
                        <textarea id="message" name="message" rows="4"
                            class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required></textarea>
                    </div>

                    <div class="mb-4">
                        <button type="submit"
                            class="border-blue-600 p-5 text-blue-600 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>