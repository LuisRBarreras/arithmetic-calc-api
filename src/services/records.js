class RecordService {
  constructor (model) {
    this.model = model
  }

  async find (where, attributes = {}) {
    const recordFound = await this.model.findOne({
      attributes, where
    })

    return recordFound
  }

  async create (values) {
    const result = this.model.create(values)
    return result
  }
}

module.exports = RecordService
