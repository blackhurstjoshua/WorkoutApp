// express
const express = require('express')
const app = express()
const morgan = require('morgan')

// packages
require('dotenv').config()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

// routes
const helloWorld = require('./routes/helloWorld')
const user = require('./routes/user')

// middleware
app.use(bodyparser.json())
app.use(morgan('tiny'))

app.use('/', helloWorld)
app.use('/user', user)


app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.DB_CONNECTION_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log('Connected to DB'))
    .catch(err => console.log(err))
  const url = `http://localhost:${process.env.PORT}`
  console.log(url)
})




/*

* The Log model will save a log of what happened.
Todo Create classes for Logs
Todo Create error class handling
Todo Create model for users and workouts
Todo Create routes for REST api

*/
