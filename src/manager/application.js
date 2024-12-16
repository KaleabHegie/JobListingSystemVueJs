import { defineStore } from 'pinia';
import axios from '@/plugins/axios';

export const useApplicationManager = defineStore('applications', {
  state: () => ({
    applications: [],
    loading: false,
    error: null,
  }),

  getters: {
    // Get application by ID
    getApplicationById: (state) => (id) => {
      if (!Array.isArray(state.applications)) {
        console.error('Applications are not an array!');
        return undefined;
      }
      const application = state.applications.find((app) => app._id === id);
      if (!application) {
        console.error('Application not found for id:', id);
      }
      return application;
    },
  },

  actions: {
    // Fetch all Applications
    async fetchApplications() {
      try {
        this.loading = true;
        const response = await axios.get('/application/all_applications');
        this.applications = response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching applications';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Add a new application
    async addApplication(jobId) {
      try {
        this.loading = true;
        const response = await axios.post(`/application/apply/${jobId}`, {});
        this.applications.push(response.data);  // Add to the store
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error adding application';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async addBookmark(jobId) {
      try {
        this.loading = true;
        const response = await axios.post(`/application/bookmark/${jobId}`, {});
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error adding application';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Update an existing application
    async updateApplication(applicationId, updatedData) {
      alert('here')
      try {
        await axios.patch(`/application/update-stat/${applicationId}`, updatedData);
      } catch (error) {
        console.error("Error updating application:", error);
        throw error;
      }
    },

    // Delete an application
    async deleteApplication(applicationId) {
      try {
        this.loading = true;
        await axios.delete(`/application/delete_application/${applicationId}`);
        this.applications = this.applications.filter((app) => app._id !== applicationId);  // Remove from the store
      } catch (error) {
        this.error = error.response?.data?.message || 'Error deleting application';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Clear error
    clearError() {
      this.error = null;
    },

    // Reset the store
    resetStore() {
      this.applications = [];
      this.loading = false;
      this.error = null;
    },
  },
});
