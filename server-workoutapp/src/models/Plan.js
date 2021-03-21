const mongoose = require('mongoose')


const PlanSchema = mongoose.Schema({
  Title: String,
  Exercises: [String]
})

module.exports = mongoose.model("Plan", PlanSchema)