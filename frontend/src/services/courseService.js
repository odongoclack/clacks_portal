// src/services/courseService.js
import api from './api';

const courseService = {
  // Get all available courses
  getAllCourses: async () => {
    try {
      const response = await api.get('/courses');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch courses' };
    }
  },

  // Get enrolled courses for current user
  getEnrolledCourses: async () => {
    try {
      const response = await api.get('/courses/enrolled');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch enrolled courses' };
    }
  },

  // Get course details by ID
  getCourseById: async (courseId) => {
    try {
      const response = await api.get(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch course details' };
    }
  },

  // Enroll in a course
  enrollCourse: async (courseId) => {
    try {
      const response = await api.post(`/courses/enroll/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to enroll in course' };
    }
  },

  // Drop a course
  dropCourse: async (courseId) => {
    try {
      const response = await api.delete(`/courses/enrolled/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to drop course' };
    }
  },

  // Search courses
  searchCourses: async (query) => {
    try {
      const response = await api.get(`/courses/search?q=${query}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to search courses' };
    }
  },
};

export default courseService;