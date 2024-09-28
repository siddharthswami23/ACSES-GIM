const express = require('express');
const User = require('../models/user');  
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const { username, points = 0 } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser && points === 0) {
      return res.status(400).json({ text: 'User with this username already exists' ,isUserExist:true});
    }
    const updatedUser = await User.findOneAndUpdate(
      { username },                     
      { $set: { points } },            
      { new: true, upsert: true }      
    );

    res.status(200).json({ message: 'User added/updated successfully', user: updatedUser,isUserExist:false });
  } catch (error) {
    res.status(400).json({ message: 'Error adding/updating user', error });
  }
});

module.exports = router;
