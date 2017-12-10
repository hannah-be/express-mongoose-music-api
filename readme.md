## Using MongoDB with Express

### Setup (for Mac)
- Install MongoDB with home brew: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/index.html
- Start MongoDB: ``brew services start mongodb`` (run ``brew services list`` to check what's currently running)
- Run ``yarn init`` in the project directory
- Run ``yarn add express``
- Run ``yarn add nodemon --dev``
- Create server.js in a src folder and add boilplate code for express server 
```javascript
const express = require('express')
const server = express()

server.listen( 8000, () => {
  console.log('started at http://localhost:8000')
})
```
- Add scripts to ``package.json``
- Add .gitignore
- Run ``yarn add mongoose``. Mongoose sits on top of MongoDB, providing object modelling for node.js

### Structure
- Create routes and models folders within the src folder
- Within the models folder, create an ``init.js`` file to require in Mongoose:
```javascript
const mongoose = require('mongoose')

// Use localhost/test for our development but would be specified with env variables for production…
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// Use the built in promise library/functionality built into node.js
mongoose.Promise = global.Promise;

module.exports = mongoose
```
- Create an artist.js file in the model folder. Require in the init file - this will also connect the model to the database: the init file will have to run before the artist file. Add in a schema for the model using the Mongoose functionality.
- Create a seeds.js file in the model folder and add a seeds script to the package.json file.
- Create an artists.js file in the routes folder and establish an express server.

#### Differences between MongoDB and ActiveRecord: https://github.com/Coder-Academy-Patterns/mongoose-vs-activerecord

## Models

### Artist
- name
