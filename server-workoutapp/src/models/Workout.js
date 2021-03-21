const mongoose = require('mongoose')

const WorkoutSchema = mongoose.Schema({
  Date: Date,
  Plan: String,
  Exercises: []
})

module.exports = mongoose.model("Workout", WorkoutSchema)