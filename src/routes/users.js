const express = require('express')
const router = express.Router()

const models = require('../../models')

router.get('/', async (req, res, next) => {
  console.log(JSON.stringify(models.Users))
  const users = await models.Users.findAll({})
  console.log(`Users: ${JSON.stringify(users)}`)
  res.send(users)
})

module.exports = router
