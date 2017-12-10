const mongoose = require('mongoose')

// Connect to our local database - will create the database if it doesn't already exist at the specified address. 
// Localhost/test for our development but would be specified with env variables for production…
mongoose.connect('mongodb://localhost/music-api', { useMongoClient: true })
// Use the built-in Promise functionality from Node.js
mongoose.Promise = global.Promise

module.exports = mongoose