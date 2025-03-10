const express = require('express');
const router = express.Router();

// Sample dashboard data endpoint
router.get('/', (req, res) => {
  // Sample data; you would fetch this from your database
  const dashboardData = {
    announcements: [
      { id: 1, title: 'New Semester Starts', content: 'Classes start on September 1!', date: '2023-08-15' },
      { id: 2, title: 'Holiday Notice', content: 'School will be closed on October 10.', date: '2023-09-15' },
    ],
    upcomingAssignments: [
      { id: 1, title: 'Assignment 1', course: 'Math 101', dueDate: '2023-09-05' },
      { id: 2, title: 'Assignment 2', course: 'Science 101', dueDate: '2023-09-12' },
    ],
    enrolledCourses: [
      { id: 1, name: 'Math 101', code: 'M101', instructor: 'John Doe' },
      { id: 2, name: 'Science 101', code: 'S101', instructor: 'Jane Smith' },
    ],
  };

  res.json(dashboardData);
});

module.exports = router;
