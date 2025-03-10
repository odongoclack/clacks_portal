// src/services/dashboardService.js
import api from './api';

const dashboardService = {
  // Get dashboard summary data
  getDashboardSummary: async () => {
    try {
      const response = await api.get('/dashboard/summary');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch dashboard data' };
    }
  },

  // Get upcoming assignments
  getUpcomingAssignments: async () => {
    try {
      const response = await api.get('/dashboard/assignments');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch assignments' };
    }
  },

  // Get recent grades
  getRecentGrades: async () => {
    try {
      const response = await api.get('/dashboard/grades');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch grades' };
    }
  },

  // Get announcements
  getAnnouncements: async () => {
    try {
      const response = await api.get('/dashboard/announcements');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch announcements' };
    }
  },

  // Get academic calendar events
  getCalendarEvents: async () => {
    try {
      const response = await api.get('/dashboard/calendar');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch calendar events' };
    }
  },
};

export default dashboardService;