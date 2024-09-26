
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


const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
