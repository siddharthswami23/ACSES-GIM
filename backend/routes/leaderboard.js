const express = require('express');
const User = require('../models/user');  
const router = express.Router();

router.post('/top', async (req, res) => {
  try {
    const topUsers = await User.find({})
      .sort({ points: -1 }) 
      .limit(15);
    res.status(200).json(topUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving top users', error });
  }
});

module.exports = router;
