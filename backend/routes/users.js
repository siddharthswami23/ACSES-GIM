const express = require('express');
const User = require('../models/user');  
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const { username, points } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists', userExists: true });
    }

    // Create a new user
    const newUser = new User({ username, points });
    await newUser.save();

    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Error adding user', error });
  }
});

router.post('/check-username', async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user) {
      res.json({ userExists: true });
    } else {
      res.json({ userExists: false });
    }
  } catch (error) {
    console.log('Error checking username:', error);
    res.status(500).json({ error: 'Error checking username' });
  }
});

module.exports = router;