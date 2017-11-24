// Ensure we have established a connect to the databse
const mongoose = require('./init')

// define model
var Artist = mongoose.model('Artist', { 
  name: String 
});

module.exports = Artist