<template>
    <form @submit.prevent="handleSubmit">
        <!-- Title -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Job Title -->
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Job Title</label>
                <input v-model="formData.title" type="text" id="title" class="w-full px-4 py-2 border rounded-md"
                    required />
            </div>

            <!-- Company Dropdown -->
            <div>
                <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                <select v-model="formData.company" id="company" class="w-full px-4 py-2 border rounded-md" required>
                    <option value="" disabled>Select a company</option>
                    <option v-for="company in companies" :key="company._id" :value="company._id">
                        {{ company.name }}
                    </option>
                </select>
            </div>

            <!-- Sector Dropdown -->
            <div>
                <label for="sector" class="block text-sm font-medium text-gray-700">Sector</label>
                <select v-model="formData.sector" id="sector" class="w-full px-4 py-2 border rounded-md" required>
                    <option value="" disabled>Select a sector</option>
                    <option v-for="sector in sectors" :key="sector._id" :value="sector._id">
                        {{ sector.title }}
                    </option>
                </select>
            </div>

            <!-- Vacancy -->
            <div>
                <label for="vacancy" class="block text-sm font-medium text-gray-700">Vacancy</label>
                <input v-model="formData.vacancy" type="number" id="vacancy" class="w-full px-4 py-2 border rounded-md"
                    required />
            </div>

            <!-- Experience -->
           

            <!-- Position -->
            
        </div>

        <!-- Full-width Fields -->
        <div class="grid grid-cols-1  gap-4 mb-4">
  <!-- Description -->
  <div>
    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
    <textarea
      v-model="formData.description"
      id="description"
      class="w-full px-4 py-2 border rounded-md"
      rows="5"
      required
    ></textarea>
  </div>

  <!-- Requirements -->

</div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Location -->
            <div>
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <input v-model="formData.location" type="text" id="location" class="w-full px-4 py-2 border rounded-md"
                    required />
            </div>

            <!-- Salary -->
            <div>
                <label for="salary" class="block text-sm font-medium text-gray-700">Salary</label>
                <input v-model="formData.salary" type="text" id="salary" class="w-full px-4 py-2 border rounded-md"
                    required />
            </div>
        </div>

        <!-- Skills -->
        <div class="mt-4">
            <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
            <div v-for="(skill, index) in formData.skills" :key="index" class="flex gap-2 mb-2">
                <input v-model="skill.name" type="text" class="w-full px-4 py-2 border rounded-md"
                    placeholder="Skill name" required />
                <button type="button" @click="removeSkill(index)" class="px-2 bg-red-600 text-white rounded-md">
                    Remove
                </button>
            </div>
            <button type="button" @click="addSkill" class="px-4 py-2 bg-orange-400 text-white rounded-md">
                + Add Skill
            </button>
        </div>

        <!-- Active Checkbox -->
        <div class="mt-4">
            <label class="flex items-center">
                <input v-model="formData.active" type="checkbox"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span class="ml-2 text-sm text-gray-700">Active</span>
            </label>
        </div>

        <button class="px-4 py-2 mt-3 bg-blue-600 text-white rounded-lg" type="submit" @click="handleSubmit"> Submit </button>
    
    </form>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        initialData: { type: Object, default: () => ({}) }, // Initial data for edit mode
    },
    data() {
        return {
            formData: { ...this.initialData, skills: this.initialData.skills || [] },
            companies: [], // List of companies
            sectors: [], // List of sectors
        };
    },
    methods: {
        async fetchCompaniesAndSectors() {
            try {
                const [companiesResponse, sectorsResponse] = await Promise.all([
                    axios.get("/api/companies/get_all_companies"), // Replace with your endpoint
                    axios.get("/api/job-sectors/get_all_job_sectors"), // Replace with your endpoint
                ]);
                this.companies = companiesResponse.data.data;
                this.sectors = sectorsResponse.data.data;
            } catch (error) {
                console.error("Error fetching companies or sectors:", error);
            }
        },
        addSkill() {
            this.formData.skills.push({ name: "" });
        },
        removeSkill(index) {
            this.formData.skills.splice(index, 1);
        },
        handleSubmit() {
    this.$emit("save", this.formData);
}

        
    },
    mounted() {
        this.fetchCompaniesAndSectors();
    },
};
</script>