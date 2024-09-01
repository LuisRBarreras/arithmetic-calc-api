const models = require('../../models')
const OperationService = require('./operations')
const RecordService = require('./records.js')
const UserService = require('./users')

class ServiceFactory {
  static getUserService () {
    const service = new UserService(models.Users)
    return service
  }

  static getOperationService () {
    const service = new OperationService(models.Operations)
    return service
  }

  static getRecordService () {
    const service = new RecordService(models.Records)
    return service
  }
}

module.exports = ServiceFactory
