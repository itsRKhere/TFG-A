// Import required modules and libraries
const db = require('../db/userDb');
const { jwtSecret } = require('../../config.json');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// controller fucntions
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.addUserData(username, email, hashedPassword);

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

exports.login = async (req,res) => {
    try {
        const { username, password } = req.body;
  
        // Retrieve user from the database
        const [user] = await db.getUserData(username);

        if(!user.length){
            throw new Error('No user Found');
        }

        // verify password
        const passwordMatch = await bcrypt.compare(password, user[0].password);

        if(!passwordMatch){
            throw new Error('Invalid credentials');
        }

        // generate token
        const token = jwt.sign({ userId: user[0].id }, jwtSecret, { expiresIn: '1h' });
        return res.json({
            message: 'success',
            code: 200,
            token
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
