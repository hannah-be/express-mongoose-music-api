const Artist = require('./artist')

// List all existing artists
Artist.find()
  .then((artists) => { // Once it has loaded, this function will be called
    console.log('Artists:', artists)
  })
  .catch((error) => {
    console.error(error)
  })

Artist.create([
  { name: 'Gang of Youths' },
  { name: 'St Vincent' },
  { name: 'Future Islands' },
  { name: 'Local Natives' },
  { name: 'Of Monsters and Men' },
])
// When this has completed, this function will be called
  .then((artist) => {
    console.log('Created artist ', artist)
  })
