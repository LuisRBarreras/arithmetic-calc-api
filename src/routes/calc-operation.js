const express = require('express')
const ServiceFactory = require('../services')

const router = express.Router()

router.post('/', async (req, res, next) => {
  const { operation, credit, number1, number2 } = req.body || {}
  const operationService = ServiceFactory.getOperationService()
  const recordService = ServiceFactory.getRecordService()
  try {
    const where = { type: operation }

    const operationFound = await operationService.find(where)
    if (!operationFound) {
      next(new Error('Operation not found'))
      return
    }

    if (credit < operationFound.cost) {
      next(new Error('Not enough credit to perform operation'))
      return
    }

    const newRecord = await recordService.create({
      operation_id: operationFound.id,
      user_id: req.userId,
      amount: operationFound.cost,
      user_balance: credit - operationFound.cost,
      operation_response: await operationService.performCalculation(operationFound.type, number1, number2)
    })

    return res.send({ operation: 'Operation success', newRecord })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
