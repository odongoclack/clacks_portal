const express = require('express');
const router = express.Router();

// Sample user profile data endpoint
router.get('/', (req, res) => {
  // Sample profile data; you may fetch from your database
  const userProfile = {
    firstName: 'clacks',
    lastName: 'ager',
    password: '12345',
    email: 'agerclackson44@GMAIL.COM',
    studentId: '123456789',
  };

  res.json(userProfile);
});

// Add more profile related endpoints as needed
module.exports = router;
