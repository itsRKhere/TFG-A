// Import required modules
const Game = require('../schemas/gameSchema');

// addData
exports.addUserGameData = (userId, points, playerName, gameType, result) => {
    return Game.create({ userId, points, playerName, gameType, result });
};

// fetch data
exports.getUserGameData = (userId) => {
    return Game.find({ userId });
};

// update points
exports.updateUserGamePoints = (userId, points) => {
    return Game.findOneAndUpdate({ userId }, { points }, { new: true });
};

// delete data
exports.deleteUserGameData = (userId) => {
    return Game.deleteOne({ userId });
};
