// Import the required module 'express' to create the router.
const express = require('express');
const auth = require('../../auth/auth');
const { checkValidations } = require('../../utils/validationMiddleware');
const validations = require('../userValidation');

// Create a new router instance.
const router = express.Router();

// Import the controller module.
const userController = require('../controllers/userController');

// routes to request 
router.post(
    '/register',
    checkValidations(validations.register),
    userController.register
);

router.post(
    '/login', 
    checkValidations(validations.login),
    userController.login
);

// Export the router instance to be used in other parts of the application.
module.exports = router;