const express = require('express')
const ServiceFactory = require('../services')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const { page, size } = req.query

  const recordService = ServiceFactory.getRecordService()
  const options = { where: { user_id: req.userId }, offset: page * size, limit: size }
  const records = await recordService.findAll(options)
  res.send(records)
})

module.exports = router
