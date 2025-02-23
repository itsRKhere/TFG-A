// Import required modules
const { validationResult } = require('express-validator');

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array({ onlyFirstError: true }).map((error) => error.msg);
        return res.status(400).json({ errors: errorMessages });
    }
    next();
};

exports.checkValidations = (validationsArray) => {
    return [...validationsArray, validationMiddleware];
};
