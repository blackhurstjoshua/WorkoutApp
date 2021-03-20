// express
const express = require('express')
const app = express()

// packages
require('dotenv').config()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

// routes
const helloWorld = require('./routes/helloWorld')

// middleware
app.use(bodyparser.json())

app.use('/', helloWorld)


app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.DB_CONNECTION_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('Connected to DB'))
    .catch(err => console.log(err))
  console.log('Listening on port ', process.env.PORT)
})
