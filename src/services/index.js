const rdo = require('@randomorg/core')
const models = require('../../models')
const OperationService = require('./operations')
const RecordService = require('./records.js')
const UserService = require('./users')
const { RANDOM_ORG_API_KEY } = require('../constants.js')

class ServiceFactory {
  static getUserService () {
    const service = new UserService(models.Users)
    return service
  }

  static getOperationService () {
    const rdoInstance = new rdo.RandomOrgClient(RANDOM_ORG_API_KEY)
    const service = new OperationService(models.Operations, rdoInstance)
    return service
  }

  static getRecordService () {
    const service = new RecordService(models.Records, models)
    return service
  }
}

module.exports = ServiceFactory
