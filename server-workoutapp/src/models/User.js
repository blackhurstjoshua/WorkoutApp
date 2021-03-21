const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: String,
  userInfo: {
    fname: String,
    lname: String,
    height: Number,
    weight: Number
  },
  WorkoutPlans: [],
  CompletedWorkouts: []
})

module.exports = mongoose.model('User', UserSchema)