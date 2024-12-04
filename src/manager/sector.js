import { defineStore } from 'pinia';
import axios from '@/plugins/axios';

export const useJobSectorManager = defineStore('sectors', {
  state: () => ({
    sectors: [],
    loading: false,
    error: null,
  }),

  getters: {
    getSectorById: (state) => (id) => state.sectors.find((sector) => sector._id === id),

   
  },

  actions: {
    // Fetch all Sectors
    async fetchSectors() {
      try {
        this.loading = true;
        const response = await axios.get('/job-sectors/get_all_job_sectors');
        this.sectors = response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching sectors';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Add a new item
    async addSector(sectorData) {
      try {
        this.loading = true;
        const response = await axios.post('/job-sectors/create_job_sector', sectorData);
        this.sectors.push(response.data);
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error adding sector';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateSector(sectorId, sectorData) {
      try {
        this.loading = true;
        const response = await axios.patch(`/job-sectors/update_job_sector/${sectorId}`, sectorData);
        const index = this.sectors.findIndex((sector) => sector._id === sectorId);
        if (index !== -1) {
          this.sectors[index] = response.data;
        }
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error updating sector';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    // Delete an sector
    async deleteSector(sectorId) {
      try {
        this.loading = true;
        await axios.delete(`/job-sectors/delete_job_sector/${sectorId}`);
        this.sectors = this.sectors.filter((sector) => sector._id !== sectorId);
        // this.updateStats();
      } catch (error) {
        this.error = error.response?.data?.message || 'Error deleting sector';
        throw error;
      } finally {
        this.loading = false;
      }
    },

 
   
    clearError() {
      this.error = null;
    },

    // Reset the store
    resetStore() {
      this.items = [];
      this.loading = false;
      this.error = null;
    },
  },
});