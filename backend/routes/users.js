const express = require('express');
const User = require('../models/user');  
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const { username, points } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { username },                     
      { $set: { points } },            
      { new: true, upsert: true }      
    );

    res.status(200).json({ message: 'User added/updated successfully', user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: 'Error adding/updating user', error });
  }
});

module.exports = router;
