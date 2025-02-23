// Import required modules
const { body } = require('express-validator');

exports.register= [
    body('username').notEmpty().withMessage('username is required and cannot be empty'),
    body('email').notEmpty().withMessage('email is required and cannot be empty').isEmail().withMessage('Invalid email address'),
    body('password]').notEmpty().withMessage('password is required and cannot be empty').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

exports.login= [
    body('username').notEmpty().withMessage('username is required and cannot be empty'),
    body('password]').notEmpty().withMessage('password is required and cannot be empty').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
