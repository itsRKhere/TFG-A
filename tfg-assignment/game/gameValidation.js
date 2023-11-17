// Import required modules
const { body } = require('express-validator');

exports.add= [
    body('playerName').notEmpty().withMessage('playerName is required and cannot be empty'),
    body('points').notEmpty().withMessage('points is required and cannot be empty'),
    body('gameType').notEmpty().withMessage('gameType is required and cannot be empty'),
    body('result]').notEmpty().withMessage('result is required and cannot be empty')
];

exports.updatePoints= [
    body('points').notEmpty().withMessage('points is required and cannot be empty')
];
