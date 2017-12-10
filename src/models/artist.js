// Ensure we have established a connection to the databse
const mongoose = require('./init')

// define model
var Artist = mongoose.model('Artist', { 
  name: { type: String, required: [true, 'You need a name!'] }
});

module.exports = Artist