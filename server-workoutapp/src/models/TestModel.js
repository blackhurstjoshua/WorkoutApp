const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
  fname: String,
  lname: String,
  age: Number,
  happy: Boolean
})

module.exports = mongoose.model('TestModel', TestSchema)