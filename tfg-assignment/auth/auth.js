// Import required modules
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config.json');

const Auth = function () {
    this.authenticate = (req, res, next) => {
        const token = (req.headers.authorization || '').split(' ')[1] || '';

        return jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    code: 401,
                    message: 'Unauthorized',
                });
            } else {
                req.user = decoded;
                return next();
            }
        });
    };
};

module.exports = new Auth();