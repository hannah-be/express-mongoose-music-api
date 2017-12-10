// Ensure we have established a connection to the database
const mongoose = require('./init')

// Define model using mongoose
var Artist = mongoose.model('Artist', { 
  // List each attribute as a set of key-value pairs
  name: { type: String, required: [true, 'You need a name!'] }
});

// Export the model
module.exports = Artist