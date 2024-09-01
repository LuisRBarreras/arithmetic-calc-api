class OperationService {
  constructor (model) {
    this.model = model
  }

  async find (where, attributes = {}) {
    console.log('Operation find')
    const recordFound = await this.model.findOne({
      attributes, where
    })

    return recordFound
  }
}

module.exports = OperationService
