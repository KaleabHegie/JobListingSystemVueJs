import { defineStore } from 'pinia';
import axios from '@/plugins/axios';

export const useCompanyManager = defineStore('companies', {
  state: () => ({
    companies: [],
    loading: false,
    error: null,
  }),

  getters: {
    getCompanyById: (state) => (id) => state.companies.find((company) => company._id === id),
  },

  actions: {
    // Fetch all Companies
    async fetchCompanies() {
      try {
        this.loading = true;
        const response = await axios.get('/companies/get_all_companies');
        this.companies = response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching companies';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Add a new Company
    async addCompany(companyData) {
      try {
        this.loading = true;
        const response = await axios.post('/companies/create_company', companyData);
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error adding company';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Update an existing Company
    async updateCompany(companyId, companyData) {
      try {
        this.loading = true;
        const response = await axios.patch(`/companies/update_company/${companyId}`, companyData);
        const index = this.companies.findIndex((company) => company._id === companyId);
        if (index !== -1) {
          this.companies[index] = response.data;
        }
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error updating company';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Delete a Company
    async deleteCompany(companyId) {
      try {
        this.loading = true;
        await axios.delete(`/companies/delete_company/${companyId}`);
      } catch (error) {
        this.error = error.response?.data?.message || 'Error deleting company';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Clear errors
    clearError() {
      this.error = null;
    },

    // Reset the store
    resetStore() {
      this.companies = [];
      this.loading = false;
      this.error = null;
    },
  },
});
