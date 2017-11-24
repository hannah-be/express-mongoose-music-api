const mongoose = require('mongoose')

// Connect to our local database
mongoose.connect('mongodb://localhost/music-api', { useMongoClient: true }, (error) => {
  console.error('Error connecting to MongoDB database', error)
})
// Use the built-in Promise functionality from Node.js
mongoose.Promise = global.Promise

module.exports = mongoose