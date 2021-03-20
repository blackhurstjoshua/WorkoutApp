const router = require('express').Router()
const TestModel = require('../models/TestModel')
const Log = require('../models/ActivitLog')

router.get('/', (req, res, next) => {
  try {
    return res.status(200).send("hello workout app")
  } catch(err) {
    return res.status(500).send('error')
  }
})

router.post('/', async (req, res, next) => {
  const test = new TestModel({
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    happy: req.body.happy
  })

  try {
    const newTest = await test.save()
    const log = new Log({
      user: newTest._id,
      activity: "New user created",
      time: new Date()
    })
    const newLog = await log.save()
    return res.status(201).json(newTest)
  } catch(err) {
    return res.status(500).send(err)
  }
})

module.exports = router