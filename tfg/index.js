// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Middleware setup
app.use(express.json());  // Parse incoming JSON data in requests
app.use(bodyParser.urlencoded({ extended: false }));  // Parse URL-encoded data in requests
app.use(cors());  // Enable CORS for handling cross-origin requests

// Import routes
const userRoutes = require('./user/routes/userRoutes'); 
const gameRoutes = require('./game/routes/gameRoutes');

app.use(`/user`, userRoutes); 
app.use(`/game`, gameRoutes); 

// Export the Express application instance
module.exports = { app };
