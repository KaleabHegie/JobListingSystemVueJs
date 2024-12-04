<template>
    <form @submit.prevent="handleSubmit">
        <!-- Title -->
        <!-- Job Title -->
        <div>
            <label for="title" class="p-2 pl-0 block text-sm font-medium text-gray-700">
                Title
            </label>
            <input v-model="formData.title" type="text" id="title" class="w-full px-4 py-2 border rounded-md"
                required />
        </div>

        <div>
            <label for="description" class="p-2 pl-0 block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="formData.description" id="description" class="w-full px-4 py-2 border rounded-md"
                rows="5" required></textarea>
        </div>



        <button @click="handleSubmit"> Submit </button>

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
            console.log("Form submitted:", this.formData);
            this.$emit("save", this.formData);
        }


    },
    mounted() {
        this.fetchCompaniesAndSectors();
    },
};
</script>