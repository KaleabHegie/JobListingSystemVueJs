import { defineStore } from 'pinia';
import axios from '@/plugins/axios';

export const useCandidateManager = defineStore('candidates', {
  state: () => ({
    candidates: [],
    loading: false,
    error: null,
  }),

  getters: {
    getCandidateById: (state) => (id) => state.candidates.find((candidate) => candidate._id === id),
  },

  actions: {
    
    async fetchCandidates() {
      try {
        this.loading = true;
        const response = await axios.get('/admin/all_candidates');
        this.candidates = response.data;
        console.log('Fetched candidates:', this.candidates);
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching candidates';
        throw error;
      } finally {
        this.loading = false;
      }
    },

 

    
    async deactivateCandidate(candidateId) {
      try {
        this.loading = true;
        await axios.patch(`/admin/deactivate_user/${candidateId}/deactivate`);
      } catch (error) {
        this.error = error.response?.data?.message || 'Error deleting company';
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async activateCandidate(candidateId) {
        try {
          this.loading = true;
          await axios.patch(`/admin/activate_user/${candidateId}/activate`);
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
