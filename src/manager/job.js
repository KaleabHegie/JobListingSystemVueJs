import { defineStore } from 'pinia';
import axios from '@/plugins/axios';

export const useJobManager = defineStore('jobs', {
  state: () => ({
    jobs: [],
    loading: false,
    error: null,
  }),

  getters: {
    getJobById: (state) => (id) => {
      if (!Array.isArray(state.jobs.data)) {
        console.error('Jobs are not an array!');
        return undefined;
      }
      const job = state.jobs.data.find((job) => job._id === id);
      if (!job) {
        console.error('Job not found for id:', id);
      }
      return job;
    },
  },
  
  

  actions: {
    // Fetch all Jobs
    async fetchJobs() {
      try {
        this.loading = true;
        const response = await axios.get('/job/all_jobs');
        this.jobs = response.data;
        // this.updateStats();
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching jobs';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Add a new item
    async addJob(jobData) {
      try {
        this.loading = true;
        const response = await axios.post('/job/create_job', jobData);
        // this.jobs.push(response.data);
        // this.updateStats();
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error adding item';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Update an existing job
    async updateJob(jobId, jobData) {
      try {
        this.loading = true;
        const response = await axios.patch(`/job/update_job/${jobId}`, jobData);
        const index = this.jobs.data.findIndex((job) => job._id === jobId);
        if (index !== -1) {
          this.jobs[index] = response.data;
        }
        // this.updateStats();
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error updating job';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Delete an job
    async deleteJob(jobId) {
      try {
        this.loading = true;
        await axios.delete(`/job/delete_job/${jobId}`);
        this.jobs = this.jobs.data.filter((job) => job._id !== jobId);
        // this.updateStats();
      } catch (error) {
        this.error = error.response?.data?.message || 'Error deleting job';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // async getJobById(jobId) {
    //   try {
    //     this.loading = true;
    //     const response = await axios.delete(`/job/get_job/${jobId}`);
    //     this.jobs = response.data;
    //     // this.updateStats();
    //   } catch (error) {
    //     this.error = error.response?.data?.message || 'Error fetching jobs';
    //     throw error;
    //   } finally {
    //     this.loading = false;
    //   }
    // },

 
    // updateStats() {
    //   const stats = {
    //     totalJobs: this.items.length,
    //     lowStockItems: this.items.filter(
    //       (item) => item.stock / item.maxLimit < 0.2
    //     ).length,
    //     totalCategories: new Set(this.items.map((item) => item.category)).size,
    //     totalValue: this.items.reduce(
    //       (total, item) => total + item.price * item.stock,
    //       0
    //     ),
    //   };

    //   this.stats = {
    //     ...stats,
    //     trends: this.stats.trends, // Retain previous trends
    //   };
    // },

    // Clear error
    clearError() {
      this.error = null;
    },

    // Reset the store
    resetStore() {
      this.items = [];
      this.loading = false;
      this.error = null;
      //this.updateStats();
    },
  },
});