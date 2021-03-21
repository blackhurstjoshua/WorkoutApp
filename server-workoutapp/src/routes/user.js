const router = require('express').Router()
const User = require('../models/User')

router.get('/', (req, res, next) => {
  res.status(404).send('Nothing to see here')
})

router.post('/', async (req, res, next) => {

  let user = new User(req.body)

  try {
    let savedUser = await user.save()
    res.json(savedUser)
  } catch(err) {
    console.log(err)
    res.status(400).json(err.message)
  }
})


module.exports = router