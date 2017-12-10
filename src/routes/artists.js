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
  // Get the ID from the URL
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

// Create
router.post('/artists', (req, res) => {
  const attributes = req.body
  Artist.create(attributes)
    .then((artist) => {
      res.status(201).json(artist)
    })  
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

// Update
router.patch('/artists/:id', (req, res) => {
  // Get the id of the artis from the params (URL)
  const id = req.params.id
  // 
  const attributes = req.body
  // 
  Artist.findByIdAndUpdate(id, attributes, { new: true, runValidators: true })
      .then((artist) => {
        if(artist) {
          res.status(200).json({ message: `You've updated the record for ${artist.id}` })
        } else {
          res.status(404).json({ error: error })
        }
      })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

// Destroy
router.delete('/artists/:id', (req, res) => {
  const id = req.params.id
  Artist.findByIdAndRemove(id)
    .then((artist) => {
      if (artist) {
        res.json(artist)
      } else {
        res.status(404).json({ error: error.message })
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message })
    })
})

module.exports = router