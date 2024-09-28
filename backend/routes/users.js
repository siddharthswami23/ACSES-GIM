const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// User Model
const User = mongoose.model('User', userSchema);

router.post('/check-username', async (req, res) => {
    const { username } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user)
            res.json({ userExists: true });
        else
            res.json({ userExists: false });
    } catch (error) {
        console.log('Reached');
        res.status(500).json({ error: 'Error checking username' });
    }
});

router.post('/save-user', async (req, res) => {
    const { username } = req.body;

    try {
        const user = new User({ username });
        await user.save();
        res.json({ registered: true, user });
    } catch (error) {
        res.status(500).json({ error: 'Error saving user' });
    }
});

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
