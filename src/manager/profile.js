import { defineStore } from 'pinia';
import axios from '@/plugins/axios';

export const useProfileManager = defineStore('profile', {
  state: () => ({
    profile: null,
    appliedJobs: [],
    bookmarkedJobs: [], 
    loading: false,
    error: null,
  }),

  getters: {
    appliedJobsGetter: (state) => state.appliedJobs, // Renamed to avoid conflict
    getProfile: (state) => state.profile,
  },

  actions: {
    // Fetch the logged-in user's profile
    async fetchProfile() {
      try {
        this.loading = true;
        const response = await axios.get('/candidate/profile');
        this.profile = response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching profile';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Fetch applied jobs and store them in the state
    async getAppliedJobs() {
      try {
        this.loading = true;
        const response = await axios.get('/candidate/applied_jobs');
        this.appliedJobs = response.data; // Save fetched jobs into the state
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching applied jobs';
        throw error;
      } finally {
        this.loading = false;
      }
    },


    async getBookmarkedJobs() {
      try {
        this.loading = true;
        const response = await axios.get('/candidate/bookmarked_jobs');
        this.bookmarkedJobs = response.data; // Save fetched jobs into the state
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching bookmarked jobs';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    
    

    // Clear any errors
    clearError() {
      this.error = null;
    },

    // Reset the profile state
    resetStore() {
      this.profile = null;
      this.appliedJobs = []; // Reset applied jobs
      this.loading = false;
      this.error = null;
    },
  },
});
