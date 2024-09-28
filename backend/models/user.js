
const mongoose = require('mongoose');


const leaderboardSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  points: {
    type: Number,
    default: 0 
  }
}, { collection: 'leaderboard' }); 


const User = mongoose.model('User', userSchema);

app.post('/api/user/check-username', async (req, res) => {
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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  points: {
    type: Number,
    default: 0 
  }
}, { collection: 'leaderboard' }); 


const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
