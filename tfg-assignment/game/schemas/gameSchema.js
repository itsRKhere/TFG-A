// Import required modules
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    userId: Number,
    playerName: String,
    points: Number,
    gameType: String,
    result: String
});

module.exports = mongoose.model('Game', gameSchema);
