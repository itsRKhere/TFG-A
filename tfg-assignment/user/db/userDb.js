// Import required modules
const pool = require('../../connections/db/mysql');

exports.addUserData = (username, email, password) => {
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    return pool.query(query, [username, email, password]);
};

exports.getUserData = (username) => {
    const query = `SELECT id, password FROM users WHERE username = ?`;
    return pool.query(query, [username]);
};
