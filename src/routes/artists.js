const express = require('express')
const Artist = require('../models/artist')

const router = express.Router()

// Read all artists
router.get('/artists', (req, res) => {
  Artist.find()
    .then((artists) => {
      res.json(artists)
    })
})

// Read an individual artist
router.get('/artists/:id', (req, res) => {
  // Get teh ID from the URL
  const id = req.params.id
  // Ask the model for the document with this id
  Artist.findById(id)
  // Once it has loaded then render the artist
    .then((artist) => {
      if (artist) {
        res.json(artist)
      } else {
        res.status(404).json({ error: `Artist not found with id: ${id}`})
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

module.exports = router