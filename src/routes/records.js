const express = require('express')
const ServiceFactory = require('../services')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const { page, size, search } = req.query

  const recordService = ServiceFactory.getRecordService()
  const records = await recordService.getRecords(req.userId, page, size, search)
  res.send(records)
})

router.delete('/:id', async (req, res, next) => {
  const recordId = req.params.id

  const recordService = ServiceFactory.getRecordService()
  await recordService.delete(recordId, req.userId)
  res.sendStatus(200)
})

module.exports = router
