const Artist = require('./artist')

Artist.deleteMany()
  .then(() => {
    console.log('Deleted artists')
    process.exit()
  })