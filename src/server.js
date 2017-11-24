const express = require('express')

const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())

server.get('/', (req, res) => {
  res.json({ message: 'This is home' })
})

server.get('/about', (req, res) => {
  res.json({ message: 'This is about' })
})


// server.use('/', [
//   require('./routes/animals'),
//   require('./routes/tickets'),
//   require('./routes/seacritters')
// ])

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})