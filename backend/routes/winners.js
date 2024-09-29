const express = require('express');
const User = require('../models/user');  
const router = express.Router();

router.post('/winners', async (req, res) => {
  try {
    
    const topUsers = await User.find({})
      .sort({ points: -1 }) 
      .limit(5);

    const reversedUsers = topUsers.reverse();

    res.status(200).json(reversedUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving top users', error });
  }
});

module.exports = router;
