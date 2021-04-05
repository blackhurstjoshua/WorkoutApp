const router = require('express').Router()
const User = require('../models/User')

router.get('/', (req, res, next) => {
  res.status(404).send('Nothing to see here')
})

router.get('/:id', async (req, res, next) => {
  try {
    let foundUser = await User.find({_id: req.params.id})
    res.json(foundUser)
  } catch(err) {
    console.log(err)
    res.status(400).json(err.message)
  }
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

router.put('/:id', async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id)

    user.userInfo = req.body.userInfo
    
    let savedUser = await user.save()
    res.json(savedUser)
  } catch(err) {
    console.log(err)
    res.status(400).json(err.message)
  }
})

// ! DELETE NOT WORKING. DON'T KNOW WHY
router.delete('/:id', async (req, res, next) => {
  try {
    let response = User.deleteOne({ _id: req.params.id })

    res.send('deleted')
  } catch(err) {
    console.log(err)
    res.status(400).json(err.message)
  }
})


module.exports = router