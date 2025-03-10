const express = require('express');
const router = express.Router();

// Sample courses data endpoint
router.get('/', (req, res) => {
  // Sample courses data; you may fetch from your database
  const coursesData = [
    { id: 1, name: 'Math 101', code: 'M101', instructor: 'odongo clacks' },
    { id: 2, name: 'Science 101', code: 'S101', instructor: 'clacks ager' },
  ];

  res.json(coursesData);
});

// Add more course related endpoints as needed
module.exports = router;
