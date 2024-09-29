const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const leaderboardRoutes = require('./routes/leaderboard');
const userRoutes = require('./routes/users'); 
const leaderboardRoutesWinner = require('./routes/winners');
require('dotenv').config();

const app = express();
app.use(cors());
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

app.use(express.urlencoded({ extended: true }));

db.on("error", () => console.log("error"));
db.once("open", () => console.log("successful"));

app.use(express.json());

app.use('/api/leaderboard', leaderboardRoutesWinner);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/users', userRoutes); 

app.get('/',(req,res)=>{
  res.send("working on");
})
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
