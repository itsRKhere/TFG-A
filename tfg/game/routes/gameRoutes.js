// Import the required module 'express' to create the router.
const express = require('express');
const auth = require('../../auth/auth');
const { checkValidations } = require('../../utils/validationMiddleware');
const validations = require('../gameValidation');

// Create a new router instance.
const router = express.Router();

// Import the controller module.
const gameController = require('../controllers/gameController');

// routes to request 
router.post(
    '/add-user-stats', 
    auth.authenticate,
    checkValidations(validations.add),
    gameController.addUserGameData
);

router.get(
    '/get-user-stats', 
    auth.authenticate,
    gameController.getUserGameData
);

router.put(
    '/update-user-stats', 
    auth.authenticate,
    checkValidations(validations.updatePoints),
    gameController.updateUserGamePoints
);

router.delete(
    '/delete-user-stats', 
    auth.authenticate,
    gameController.deleteUserGameData
);

// Export the router instance to be used in other parts of the application.
module.exports = router;