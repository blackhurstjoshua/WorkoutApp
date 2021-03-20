const mongoose = require('mongoose')

const LogSchema = mongoose.Schema({
  user: String,
  activity: String,
  time: Date
})

module.exports = mongoose.model('Log', LogSchema)