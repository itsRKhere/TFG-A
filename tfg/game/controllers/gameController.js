// Import required modules and libraries
const db = require('../db/gameDb');

// controller fucntions
exports.addUserGameData = async (req, res) => {
    try {
        const { userId } = req.user;
        const { points, playerName, gameType, result } = req.body;
        
        await db.addUserGameData(userId, points, playerName, gameType, result);
        return res.json({
            message: 'success',
            code: 200
        });
    } catch (error) {
        // Handle errors and return appropriate response
        return res.json({
            message: 'failure',
            code: error.statusCode || 500,
            errorMessage: error.message || "Something went wrong."
        });
    }
};

exports.getUserGameData = async (req,res) => {
    try {
        const { userId } = req.user;

        const data = await db.getUserGameData(userId);
        return res.json({
            message: 'success',
            code: 200,
            data
        });
    } catch (error) {
        // Handle errors and return appropriate response
        return res.json({
            message: 'failure',
            code: error.statusCode || 500,
            errorMessage: error.message || "Something went wrong."
        });
    }
};

exports.updateUserGamePoints = async (req, res) => {
    try {
        const { userId } = req.user;
        const { points } = req.body;
        
        await db.updateUserGamePoints(userId, points);
        return res.json({
            message: 'success',
            code: 200
        });
    } catch (error) {
        // Handle errors and return appropriate response
        return res.json({
            message: 'failure',
            code: error.statusCode || 500,
            errorMessage: error.message || "Something went wrong."
        });
    }
};

exports.deleteUserGameData = async (req, res) => {
    try {
        const { userId } = req.user;
        
        await db.deleteUserGameData(userId);
        return res.json({
            message: 'success',
            code: 200
        });
    } catch (error) {
        // Handle errors and return appropriate response
        return res.json({
            message: 'failure',
            code: error.statusCode || 500,
            errorMessage: error.message || "Something went wrong."
        });
    }
};
