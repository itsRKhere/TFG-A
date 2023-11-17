// Import required modules
const mongoose = require('mongoose');
const { mongoDb } = require('../../config.json')

mongoose.connect(mongoDb.uri);
module.exports = mongoose.connection;
