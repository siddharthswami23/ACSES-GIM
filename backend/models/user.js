const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema);



// Remove duplicate schema definition
// const leaderboardSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true 
//   },
//   points: {
//     type: Number,
//     default: 0 
//   }
// }, { collection: 'leaderboard' }); 

// const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = User;
